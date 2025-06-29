import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import { users, contacts, type User, type InsertUser, type Contact, type InsertContact } from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContact(contact: InsertContact): Promise<Contact>;
  getAllContacts(): Promise<Contact[]>;
}

class SQLiteStorage implements IStorage {
  private db: ReturnType<typeof drizzle>;

  constructor() {
    const sqlite = new Database("portfolio.db");
    this.db = drizzle(sqlite);
    this.initTables();
  }

  private initTables() {
    // Create tables if they don't exist
    try {
      this.db.run(`
        CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          username TEXT UNIQUE NOT NULL,
          password TEXT NOT NULL
        )
      `);
      
      this.db.run(`
        CREATE TABLE IF NOT EXISTS contacts (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          email TEXT NOT NULL,
          subject TEXT NOT NULL,
          message TEXT NOT NULL,
          created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
        )
      `);
    } catch (error) {
      console.error("Error creating tables:", error);
    }
  }

  async getUser(id: number): Promise<User | undefined> {
    try {
      const result = this.db.select().from(users).where(eq(users.id, id)).get();
      return result || undefined;
    } catch (error) {
      console.error("Error getting user:", error);
      return undefined;
    }
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    try {
      const result = this.db.select().from(users).where(eq(users.username, username)).get();
      return result || undefined;
    } catch (error) {
      console.error("Error getting user by username:", error);
      return undefined;
    }
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    try {
      const result = this.db.insert(users).values(insertUser).returning().get();
      return result;
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    try {
      const contactWithTimestamp = {
        ...insertContact,
        createdAt: new Date().toISOString(),
      };
      const result = this.db.insert(contacts).values(contactWithTimestamp).returning().get();
      return result;
    } catch (error) {
      console.error("Error creating contact:", error);
      throw error;
    }
  }

  async getAllContacts(): Promise<Contact[]> {
    try {
      return this.db.select().from(contacts).all();
    } catch (error) {
      console.error("Error getting contacts:", error);
      return [];
    }
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

export const storage = new SQLiteStorage();
