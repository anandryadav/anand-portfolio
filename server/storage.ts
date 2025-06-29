import { type User, type InsertUser, type Contact, type InsertContact } from "@shared/schema";
import fs from "fs/promises";
import path from "path";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContact(contact: InsertContact): Promise<Contact>;
  getAllContacts(): Promise<Contact[]>;
}

class JsonStorage implements IStorage {
  private contactsFile = path.join(process.cwd(), "data", "contacts.json");
  private usersFile = path.join(process.cwd(), "data", "users.json");

  constructor() {
    this.initFiles();
  }

  private async initFiles() {
    const dataDir = path.join(process.cwd(), "data");
    try {
      await fs.mkdir(dataDir, { recursive: true });
      
      // Initialize contacts.json if it doesn't exist
      try {
        await fs.access(this.contactsFile);
      } catch {
        await fs.writeFile(this.contactsFile, JSON.stringify([]));
      }

      // Initialize users.json if it doesn't exist
      try {
        await fs.access(this.usersFile);
      } catch {
        await fs.writeFile(this.usersFile, JSON.stringify([]));
      }
    } catch (error) {
      console.error("Error initializing data files:", error);
    }
  }

  private async readContacts(): Promise<Contact[]> {
    try {
      const data = await fs.readFile(this.contactsFile, "utf-8");
      return JSON.parse(data);
    } catch {
      return [];
    }
  }

  private async writeContacts(contacts: Contact[]): Promise<void> {
    await fs.writeFile(this.contactsFile, JSON.stringify(contacts, null, 2));
  }

  private async readUsers(): Promise<User[]> {
    try {
      const data = await fs.readFile(this.usersFile, "utf-8");
      return JSON.parse(data);
    } catch {
      return [];
    }
  }

  private async writeUsers(users: User[]): Promise<void> {
    await fs.writeFile(this.usersFile, JSON.stringify(users, null, 2));
  }

  async getUser(id: number): Promise<User | undefined> {
    const users = await this.readUsers();
    return users.find(user => user.id === id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const users = await this.readUsers();
    return users.find(user => user.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const users = await this.readUsers();
    const newId = Math.max(0, ...users.map(u => u.id)) + 1;
    const user: User = { ...insertUser, id: newId };
    users.push(user);
    await this.writeUsers(users);
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const contacts = await this.readContacts();
    const newId = Math.max(0, ...contacts.map(c => c.id)) + 1;
    const contact: Contact = { 
      ...insertContact, 
      id: newId,
      createdAt: new Date().toISOString()
    };
    contacts.push(contact);
    await this.writeContacts(contacts);
    return contact;
  }

  async getAllContacts(): Promise<Contact[]> {
    return await this.readContacts();
  }
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contacts: Map<number, Contact>;
  currentId: number;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.currentId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentId++;
    const contact: Contact = { 
      ...insertContact, 
      id, 
      createdAt: new Date().toISOString() 
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getAllContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }
}

export const storage = new JsonStorage();