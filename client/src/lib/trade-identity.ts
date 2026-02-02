import type { TradeIdentity } from "@shared/schema";

export interface TradeStyles {
  "--t-primary": string;
  "--t-primary-hsl": string;
  "--t-secondary": string;
  "--t-accent": string;
  "--t-bg": string;
  "--t-fg": string;
}

function hexToHsl(hex: string): string {
  hex = hex.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }

  return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
}

const DEFAULT_PALETTE = {
  primary: "#3b82f6",
  secondary: "#f1f5f9",
  accent: "#ef4444",
  background: "#ffffff",
  text: "#0f172a",
};

export function getTradeStyles(tradeIdentity?: TradeIdentity): React.CSSProperties {
  const palette = tradeIdentity?.color_palette || DEFAULT_PALETTE;

  return {
    "--t-primary": hexToHsl(palette.primary),
    "--t-secondary": hexToHsl(palette.secondary),
    "--t-accent": hexToHsl(palette.accent),
    "--t-bg": hexToHsl(palette.background),
    "--t-fg": hexToHsl(palette.text),
  } as React.CSSProperties;
}

export function getTradeCta(tradeIdentity?: TradeIdentity, type: "primary" | "secondary" | "emergency" = "primary"): string {
  if (!tradeIdentity?.cta_options) {
    return type === "primary" ? "Get Started" : type === "secondary" ? "Learn More" : "Call Now";
  }
  return tradeIdentity.cta_options[type];
}

export function getTradeTone(tradeIdentity?: TradeIdentity): string {
  return tradeIdentity?.tone || "professional, reliable, trustworthy";
}

export function getTradeTagline(tradeIdentity?: TradeIdentity): string {
  return tradeIdentity?.tagline || "Quality Service You Can Trust";
}
