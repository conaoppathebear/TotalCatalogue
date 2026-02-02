
import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import fs from "fs/promises";
import path from "path";

// Generate content from trade identity profile
function generateContentFromIdentity(identity: any) {
  return {
    tradeSlug: identity.slug,
    hero: {
      headline: identity.hero_patterns[0]?.replace("{city}", "Your City") || `Professional ${identity.trade} Services`,
      subheadline: identity.tagline,
      cta_primary: identity.cta_options?.primary || "Get a Quote",
      cta_secondary: identity.cta_options?.secondary || "Our Services"
    },
    about: {
      summary: `We are a dedicated team of expert ${identity.trade}s serving your local area with ${identity.tone} service.`,
      mission: `${identity.tagline} - Your trusted local ${identity.trade.toLowerCase()} for all your needs.`,
      why_choose_us: identity.guarantees || ["Licensed & Insured", "24/7 Service", "Satisfaction Guaranteed"]
    },
    services: identity.services.map((s: any) => ({
      name: s.name,
      description: s.description,
      icon: s.icon
    })),
    testimonials: identity.testimonials.map((t: any) => ({
      author: t.author,
      role: t.location,
      content: t.quote,
      rating: t.rating
    })),
    faqs: identity.faqs.map((f: any) => ({
      q: f.question,
      a: f.answer
    })),
    contact: {
      phone: "(555) 123-4567",
      email: `contact@${identity.slug}pros.com`,
      address: "123 Main St, Your City, ST"
    },
    seo: {
      title: `Best ${identity.trade} in Town - ${identity.tagline}`,
      description: `Top-rated ${identity.trade.toLowerCase()} providing ${identity.services[0]?.name || 'professional services'}. Call now!`,
      keywords: [identity.trade.toLowerCase(), ...identity.pain_points.slice(0, 3)]
    },
    trustSymbols: identity.trust_symbols,
    guarantees: identity.guarantees,
    painPoints: identity.pain_points,
    colorPalette: identity.color_palette
  };
}

// Helper to generate default content based on trade name
function generateDefaultContent(tradeSlug: string, tradeName: string) {
  return {
    tradeSlug,
    hero: {
      headline: `Professional ${tradeName} Services`,
      subheadline: "Reliable, efficient, and affordable solutions for your home and business.",
      cta_primary: "Get a Quote",
      cta_secondary: "Our Services"
    },
    about: {
      summary: `We are a dedicated team of expert ${tradeName}s with years of experience.`,
      mission: "To provide top-quality service with integrity and transparency.",
      why_choose_us: ["Licensed & Insured", "24/7 Emergency Service", "Satisfaction Guaranteed"]
    },
    services: [
      {
        name: "Emergency Repairs",
        description: "Available 24/7 for urgent issues.",
        icon: "alert-circle"
      },
      {
        name: "Installation",
        description: "Professional installation of all equipment.",
        icon: "wrench"
      },
      {
        name: "Maintenance",
        description: "Regular check-ups to keep things running smoothly.",
        icon: "clipboard-check"
      }
    ],
    testimonials: [
      {
        author: "John Doe",
        role: "Homeowner",
        content: "Excellent service! They arrived on time and fixed the issue quickly.",
        rating: 5
      },
      {
        author: "Jane Smith",
        role: "Business Owner",
        content: "Very professional team. Highly recommended.",
        rating: 5
      }
    ],
    faqs: [
      {
        q: "Do you offer free estimates?",
        a: "Yes, we provide free, no-obligation estimates for all jobs."
      },
      {
        q: "Are you licensed and insured?",
        a: "Absolutely. We are fully licensed and carry comprehensive liability insurance."
      }
    ],
    contact: {
      phone: "(555) 123-4567",
      email: `contact@${tradeSlug}pros.com`,
      address: "123 Main St, Your City, ST"
    },
    seo: {
      title: `Best ${tradeName} in Town - Professional Services`,
      description: `Top-rated ${tradeName} providing emergency repairs, installation, and maintenance. Call now!`,
      keywords: [tradeName, "repair", "installation", "emergency"]
    }
  };
}

import { analyzeBrand, generateBrandFiles } from "./brand-engine";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.post(api.trades.analyze.path, async (req, res) => {
    try {
      const { url } = req.body;
      if (!url) return res.status(400).json({ message: "URL is required" });
      
      const analysis = await analyzeBrand(url);
      res.json(analysis);
    } catch (err: any) {
      console.error("Analysis failed:", err);
      const message = err.message === 'This website blocks automated analysis.' 
        ? err.message 
        : "Brand analysis failed";
      res.status(500).json({ message });
    }
  });

  app.post("/api/trades/generate", async (req, res) => {
    try {
      const result = await generateBrandFiles(req.body);
      const trade = await storage.createTrade({
        slug: result.slug,
        name: req.body.trade,
        description: `Premium ${req.body.trade} brand generated from analysis.`,
        icon: "Star"
      });
      res.json({ trade, ...result });
    } catch (err) {
      console.error("Generation failed:", err);
      res.status(500).json({ message: "Brand generation failed" });
    }
  });

  app.get(api.trades.list.path, async (req, res) => {
    const trades = await storage.getTrades();
    res.json(trades);
  });

  app.get(api.trades.get.path, async (req, res) => {
    const slug = req.params.slug;
    const trade = await storage.getTradeBySlug(slug);
    
    if (!trade) {
      return res.status(404).json({ message: "Trade not found" });
    }

    // Load trade identity profile
    let tradeIdentity = null;
    try {
      const identityPath = path.join(process.cwd(), "data", "trades", `${slug}.json`);
      const identityData = await fs.readFile(identityPath, "utf-8");
      tradeIdentity = JSON.parse(identityData);
    } catch (e) {
      console.log(`No trade identity found for ${slug}`);
    }

    const content = await storage.getTradeContent(slug);
    
    // Generate content from trade identity if available, otherwise use defaults
    let finalContent;
    if (tradeIdentity) {
      finalContent = generateContentFromIdentity(tradeIdentity);
    } else {
      finalContent = content || generateDefaultContent(trade.slug, trade.name);
    }

    // Load blueprints for this trade
    let blueprints: Record<string, any> = {};
    try {
      const blueprintFiles = ["clean", "bold", "luxury"];
      for (const theme of blueprintFiles) {
        const themeLetter = theme === 'clean' ? 'A' : theme === 'bold' ? 'B' : 'C';
        const filePath = path.join(process.cwd(), "blueprints", `${trade.slug}_${themeLetter}.json`);
        try {
          const data = await fs.readFile(filePath, "utf-8");
          blueprints[theme] = JSON.parse(data);
        } catch (e) {
          // If trade-specific blueprint doesn't exist, try global fallback (optional, but requested trade-specific)
          console.log(`Blueprint not found: ${filePath}`);
        }
      }
      
      // Fallback: If no blueprints found for this trade, try plumber as global default
      if (Object.keys(blueprints).length === 0) {
        for (const theme of blueprintFiles) {
          const themeLetter = theme === 'clean' ? 'A' : theme === 'bold' ? 'B' : 'C';
          const fallbackPath = path.join(process.cwd(), "blueprints", `plumber_${themeLetter}.json`);
          try {
            const data = await fs.readFile(fallbackPath, "utf-8");
            blueprints[theme] = JSON.parse(data);
          } catch (e) {
            console.log(`Fallback blueprint not found: ${fallbackPath}`);
          }
        }
      }
    } catch (err) {
      console.error("Error loading blueprints:", err);
    }

    res.json({ ...trade, content: finalContent, blueprints, tradeIdentity });
  });

  app.post(api.trades.create.path, async (req, res) => {
    try {
      const input = api.trades.create.input.parse(req.body);
      
      // Check if exists
      const existing = await storage.getTradeBySlug(input.slug);
      if (existing) {
        return res.status(409).json({ message: "Trade already exists" });
      }

      const trade = await storage.createTrade(input);
      
      // Auto-generate content
      const content = generateDefaultContent(trade.slug, trade.name);
      await storage.createTradeContent(content);

      res.status(201).json(trade);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({ message: err.errors });
      }
      throw err;
    }
  });

  // Seed initial data if empty
  const trades = await storage.getTrades();
  if (trades.length === 0) {
    console.log("Seeding initial trades...");
    const seedTrades = [
      {
        slug: "plumber",
        name: "Plumber",
        description: "Professional plumbing services for residential and commercial needs.",
        icon: "wrench"
      },
      {
        slug: "electrician",
        name: "Electrician",
        description: "Licensed electricians for repairs, wiring, and installations.",
        icon: "zap"
      },
      {
        slug: "landscaper",
        name: "Landscaper",
        description: "Lawn care, garden design, and outdoor maintenance.",
        icon: "leaf"
      },
      {
        slug: "painter",
        name: "Painter",
        description: "Interior and exterior painting services.",
        icon: "paint-bucket"
      },
      {
        slug: "roofer",
        name: "Roofer",
        description: "Expert roofing repairs, installations, and inspections.",
        icon: "home"
      },
      {
        slug: "locksmith",
        name: "Locksmith",
        description: "Emergency lockout services and security installations.",
        icon: "lock"
      },
      {
        slug: "gardener",
        name: "Gardener",
        description: "Professional gardening and lawn maintenance services.",
        icon: "flower-2"
      },
      {
        slug: "cleaner",
        name: "Cleaner",
        description: "Residential and commercial cleaning services.",
        icon: "sparkles"
      },
      {
        slug: "builder",
        name: "Builder",
        description: "Professional construction and renovation services.",
        icon: "hammer"
      },
      {
        slug: "carpenter",
        name: "Carpenter",
        description: "Bespoke woodwork and joinery services.",
        icon: "ruler"
      },
      {
        slug: "plasterer",
        name: "Plasterer",
        description: "High-quality plastering and rendering services.",
        icon: "layers"
      },
      {
        slug: "tiler",
        name: "Tiler",
        description: "Professional wall and floor tiling services.",
        icon: "grid-3x3"
      },
      {
        slug: "kitchen-fitter",
        name: "Kitchen Fitter",
        description: "Bespoke kitchen design and installation.",
        icon: "chef-hat"
      },
      {
        slug: "bathroom-fitter",
        name: "Bathroom Fitter",
        description: "Complete bathroom design and fitting services.",
        icon: "bath"
      },
      {
        slug: "gas-engineer",
        name: "Gas Engineer",
        description: "Certified gas heating and appliance services.",
        icon: "flame"
      },
      {
        slug: "window-cleaner",
        name: "Window Cleaner",
        description: "Professional window and gutter cleaning services.",
        icon: "glass-water"
      }
    ];

    for (const t of seedTrades) {
      await storage.createTrade(t);
      await storage.createTradeContent(generateDefaultContent(t.slug, t.name));
    }
  }

  return httpServer;
}
