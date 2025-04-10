import { 
  users, type User, type InsertUser,
  contactSubmissions, type ContactSubmission, type InsertContactSubmission,
  visitors, type Visitor, type InsertVisitor
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact form operations
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  
  // Visitor tracking operations
  trackVisitor(visitor: InsertVisitor): Promise<Visitor>;
  getVisitorStats(): Promise<{ totalVisits: number, uniqueVisitors: number }>;
}

export class DatabaseStorage implements IStorage {
  // User operations
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  // Contact form operations
  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const [result] = await db
      .insert(contactSubmissions)
      .values(submission)
      .returning();
    return result;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return await db
      .select()
      .from(contactSubmissions)
      .orderBy(contactSubmissions.createdAt);
  }

  // Visitor tracking operations
  async trackVisitor(visitor: InsertVisitor): Promise<Visitor> {
    const [result] = await db
      .insert(visitors)
      .values(visitor)
      .returning();
    return result;
  }

  async getVisitorStats(): Promise<{ totalVisits: number, uniqueVisitors: number }> {
    const allVisits = await db.select().from(visitors);
    const uniqueIPs = new Set(allVisits.map(v => v.ipAddress).filter(Boolean));
    
    return {
      totalVisits: allVisits.length,
      uniqueVisitors: uniqueIPs.size
    };
  }
}

export const storage = new DatabaseStorage();
