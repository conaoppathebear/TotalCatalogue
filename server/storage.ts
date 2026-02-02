
import { db } from "./db";
import { trades, tradeContent, type Trade, type TradeContent, type CreateTradeRequest } from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  getTrades(): Promise<Trade[]>;
  getTradeBySlug(slug: string): Promise<Trade | undefined>;
  getTradeContent(slug: string): Promise<TradeContent | undefined>;
  createTrade(trade: CreateTradeRequest): Promise<Trade>;
  createTradeContent(content: any): Promise<TradeContent>;
}

export class DatabaseStorage implements IStorage {
  async getTrades(): Promise<Trade[]> {
    return await db.select().from(trades);
  }

  async getTradeBySlug(slug: string): Promise<Trade | undefined> {
    const [trade] = await db.select().from(trades).where(eq(trades.slug, slug));
    return trade;
  }

  async getTradeContent(slug: string): Promise<TradeContent | undefined> {
    const [content] = await db.select().from(tradeContent).where(eq(tradeContent.tradeSlug, slug));
    return content;
  }

  async createTrade(trade: CreateTradeRequest): Promise<Trade> {
    const [newTrade] = await db.insert(trades).values(trade).returning();
    return newTrade;
  }

  async createTradeContent(content: any): Promise<TradeContent> {
    const [newContent] = await db.insert(tradeContent).values(content).returning();
    return newContent;
  }
}

export const storage = new DatabaseStorage();
