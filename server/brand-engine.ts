
import { chromium } from 'playwright-core';
import OpenAI from 'openai';
import fs from 'fs/promises';
import path from 'path';

const openai = new OpenAI({
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY,
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
});

const BROWSERLESS_TOKEN = "2TtJf9mD1UZwDfMeae592f53f00350b73f1f68e808b972731";
const BROWSERLESS_ENDPOINT = `wss://production-sfo.browserless.io/chromium/playwright?token=${BROWSERLESS_TOKEN}`;

export async function analyzeBrand(url: string) {
  let browser;
  try {
    browser = await chromium.connect(BROWSERLESS_ENDPOINT);
    const context = await browser.newContext({
      viewport: { width: 1280, height: 800 }
    });
    const page = await context.newPage();
    
    // Set a realistic user agent
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
    
    const response = await page.goto(url, { 
      waitUntil: 'networkidle',
      timeout: 30000 
    });

    if (!response || !response.ok()) {
      throw new Error('This website blocks automated analysis.');
    }

    const renderedHTML = await page.content();
    const screenshot = await page.screenshot({ encoding: 'base64', fullPage: false });
    
    const computedStyles = await page.evaluate(() => {
      const getStyles = (el: Element) => {
        const styles = window.getComputedStyle(el);
        return {
          color: styles.color,
          backgroundColor: styles.backgroundColor,
          fontFamily: styles.fontFamily,
          fontSize: styles.fontSize,
          fontWeight: styles.fontWeight,
          padding: styles.padding,
          margin: styles.margin,
          borderRadius: styles.borderRadius,
          border: styles.border,
          display: styles.display,
          flexDirection: styles.flexDirection,
          justifyContent: styles.justifyContent,
          alignItems: styles.alignItems
        };
      };

      const buttons = Array.from(document.querySelectorAll('button, a.btn, .button, [role="button"]'))
        .slice(0, 5)
        .map(el => ({
          text: el.textContent?.trim(),
          styles: getStyles(el)
        }));

      const headings = Array.from(document.querySelectorAll('h1, h2, h3'))
        .slice(0, 5)
        .map(el => ({
          tag: el.tagName,
          text: el.textContent?.trim(),
          styles: getStyles(el)
        }));

      const bodyStyles = getStyles(document.body);
      
      return {
        body: bodyStyles,
        headings,
        buttons,
      };
    });

    await browser.close();

    const aiResponse = await openai.chat.completions.create({
      model: "gpt-5.1",
      messages: [
        {
          role: "system",
          content: `You are a Senior Brand Strategist & Design Intelligence Engine.
Your task is to analyze a real business website and extract its brand DNA, design system, and conversion strategy.
You must return a machine-readable JSON profile that can be used to recreate the brand visually and structurally.
Do NOT describe the website. Do NOT write marketing copy. Only output structured data.

OUTPUT FORMAT (JSON ONLY):
{
  "trade": "",
  "brand_name_guess": "",
  "tone": "",
  "target_audience": "",
  "positioning": "",
  "typography": {
    "heading_style": "",
    "body_style": "",
    "letter_spacing": "",
    "weight_bias": ""
  },
  "layout": {
    "hero_layout": "",
    "content_density": "",
    "section_spacing": "",
    "alignment": ""
  },
  "color_palette": {
    "primary": "",
    "secondary": "",
    "accent": "",
    "background": ""
  },
  "cta": {
    "style": "",
    "primary_text_examples": [],
    "urgency_level": ""
  },
  "imagery": {
    "style": "",
    "emotion": "",
    "image_tags": []
  },
  "iconography": {
    "style": "",
    "weight": ""
  },
  "motion": {
    "hover": "",
    "scroll": "",
    "speed": ""
  }
}`
        },
        {
          role: "user",
          content: [
            { 
              type: "text", 
              text: `Analyze this website: ${url}
              
              RENDERED HTML (Truncated):
              ${renderedHTML.substring(0, 10000)}
              
              COMPUTED STYLES:
              ${JSON.stringify(computedStyles)}` 
            },
            { 
              type: "image_url", 
              image_url: { url: `data:image/png;base64,${screenshot}` } 
            }
          ]
        }
      ],
      response_format: { type: "json_object" }
    });

    const analysis = JSON.parse(aiResponse.choices[0].message.content || '{}');
    
    // Add backward compatibility fields for the current generateBrandFiles implementation
    return {
      ...analysis,
      // Mapping new format to old fields expected by generateBrandFiles
      color_palette: [
        analysis.color_palette?.primary,
        analysis.color_palette?.secondary,
        analysis.color_palette?.accent,
        analysis.color_palette?.background
      ].filter(Boolean),
      hero_style: analysis.layout?.hero_layout,
      cta_style: analysis.cta?.style,
      typography: analysis.typography?.heading_style,
      image_tags: analysis.imagery?.image_tags
    };
  } catch (error: any) {
    if (browser) await browser.close();
    if (error.message?.includes('Timeout') || error.message?.includes('denied') || error.message?.includes('blocked') || error.message?.includes('status 403')) {
      throw new Error('This website blocks automated analysis.');
    }
    throw error;
  }
}

export async function generateBrandFiles(analysis: any) {
  const slug = (analysis.trade || 'new-trade').toLowerCase().replace(/\s+/g, '-');
  
  const brandData = {
    trade: analysis.trade,
    slug,
    tone: analysis.tone,
    color_palette: analysis.color_palette,
    typography: analysis.typography,
    hero_style: analysis.hero_style,
    cta_style: analysis.cta_style,
    image_tags: analysis.image_tags
  };

  const tradeData = {
    ...brandData,
    tagline: analysis.positioning || `Professional ${analysis.trade} Services`,
    hero_patterns: analysis.hero_patterns || ["Expert {trade} in {city}"],
    pain_points: analysis.pain_points || ["Emergency repairs", "Professional service"],
    services: analysis.services || [],
    cta_options: { 
      primary: analysis.cta?.primary_text_examples?.[0] || "Get Quote", 
      secondary: "Learn More", 
      emergency: analysis.cta?.urgency_level === 'high' ? "Call Now" : "Contact Us" 
    },
    trust_symbols: ["Licensed", "Insured"],
    guarantees: ["100% Satisfaction"],
    testimonials: [],
    faqs: []
  };

  const baseDir = process.cwd();
  await fs.mkdir(path.join(baseDir, 'data', 'brands'), { recursive: true });
  await fs.mkdir(path.join(baseDir, 'data', 'trades'), { recursive: true });
  await fs.mkdir(path.join(baseDir, 'blueprints'), { recursive: true });

  await fs.writeFile(path.join(baseDir, 'data', 'brands', `${slug}.json`), JSON.stringify(brandData, null, 2));
  await fs.writeFile(path.join(baseDir, 'data', 'trades', `${slug}.json`), JSON.stringify(tradeData, null, 2));

  // Generate Blueprints A, B, C
  const blueprints = ['A', 'B', 'C'].map(letter => ({
    id: `${slug}_${letter}`,
    name: `${analysis.trade} Blueprint ${letter}`,
    strategy: letter === 'A' ? 'Trust' : letter === 'B' ? 'Fast Lead' : 'Premium',
    hero_type: analysis.hero_style,
    cta_strategy: analysis.cta_style,
    content_rules: { 
      tone: analysis.tone, 
      cta_text: analysis.cta?.primary_text_examples?.[0] || "Contact Us" 
    },
    pages: { home: ["hero", "services", "testimonials"] }
  }));

  for (let i = 0; i < blueprints.length; i++) {
    const letter = ['A', 'B', 'C'][i];
    await fs.writeFile(path.join(baseDir, 'blueprints', `${slug}_${letter}.json`), JSON.stringify(blueprints[i], null, 2));
  }

  return { slug, blueprints };
}
