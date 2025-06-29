import { z } from "zod";

// User types and schemas
export interface User {
  id: number;
  username: string;
  password: string;
}

export interface InsertUser {
  username: string;
  password: string;
}

export const insertUserSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

// Contact types and schemas
export interface Contact {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
}

export interface InsertContact {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const insertContactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

export type InsertUserType = z.infer<typeof insertUserSchema>;
export type InsertContactType = z.infer<typeof insertContactSchema>;