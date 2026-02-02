
import { pgTable, text, serial, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// === TABLE DEFINITIONS ===

export const trades = pgTable("trades", {
  slug: text("slug").primaryKey(),
  name: text("name").notNull(),
  icon: text("icon").notNull(),
  description: text("description").notNull(),
});

export const tradeContent = pgTable("trade_content", {
  id: serial("id").primaryKey(),
  tradeSlug: text("trade_slug").notNull().references(() => trades.slug),
  
  hero: jsonb("hero").notNull().$type<{
    headline: string;
    subheadline: string;
    cta_primary: string;
    cta_secondary: string;
  }>(),
  
  about: jsonb("about").notNull().$type<{
    summary: string;
    mission: string;
    why_choose_us: string[];
  }>(),
  
  services: jsonb("services").notNull().$type<Array<{
    name: string;
    description: string;
    icon?: string;
  }>>(),
  
  testimonials: jsonb("testimonials").notNull().$type<Array<{
    author: string;
    role: string;
    content: string;
    rating: number;
  }>>(),
  
  faqs: jsonb("faqs").notNull().$type<Array<{
    q: string;
    a: string;
  }>>(),

  contact: jsonb("contact").notNull().$type<{
    phone: string;
    email: string;
    address: string;
  }>(),

  seo: jsonb("seo").notNull().$type<{
    title: string;
    description: string;
    keywords: string[];
  }>(),
});

// === BLUEPRINT SCHEMAS ===

export const blueprintSchema = z.object({
  id: z.string(),
  name: z.string(),
  strategy: z.string(),
  hero_type: z.string(),
  cta_strategy: z.string(),
  service_layout: z.string().optional(),
  testimonial_style: z.string().optional(),
  faq_style: z.string().optional(),
  pages: z.record(z.array(z.string())),
  content_rules: z.object({
    tone: z.string(),
    cta_text: z.string(),
    hero_headline: z.string().optional(),
    hero_subheadline: z.string().optional(),
    urgency_level: z.string().optional()
  }),
  media_style: z.object({
    hero_images: z.string(),
    gallery: z.string(),
    icons: z.string()
  }).optional()
});

export type Blueprint = z.infer<typeof blueprintSchema>;

export const tradeIdentitySchema = z.object({
  trade: z.string(),
  slug: z.string(),
  tone: z.string(),
  tagline: z.string(),
  hero_patterns: z.array(z.string()),
  pain_points: z.array(z.string()),
  services: z.array(z.object({
    name: z.string(),
    description: z.string(),
    icon: z.string()
  })),
  cta_style: z.string(),
  cta_options: z.object({
    primary: z.string(),
    secondary: z.string(),
    emergency: z.string()
  }),
  image_tags: z.array(z.string()),
  color_palette: z.object({
    primary: z.string(),
    secondary: z.string(),
    accent: z.string(),
    background: z.string(),
    text: z.string()
  }),
  trust_symbols: z.array(z.string()),
  guarantees: z.array(z.string()),
  testimonials: z.array(z.object({
    quote: z.string(),
    author: z.string(),
    location: z.string(),
    rating: z.number()
  })),
  faqs: z.array(z.object({
    question: z.string(),
    answer: z.string()
  }))
});

export type TradeIdentity = z.infer<typeof tradeIdentitySchema>;

// === SCHEMAS ===

export const insertTradeSchema = createInsertSchema(trades);
export const insertTradeContentSchema = createInsertSchema(tradeContent);

// === EXPLICIT API TYPES ===

export type Trade = typeof trades.$inferSelect;
export type TradeContent = typeof tradeContent.$inferSelect;

export type CreateTradeRequest = z.infer<typeof insertTradeSchema>;
export type CreateContentRequest = z.infer<typeof insertTradeContentSchema>;

export type TradeWithContent = Trade & { content?: TradeContent };
