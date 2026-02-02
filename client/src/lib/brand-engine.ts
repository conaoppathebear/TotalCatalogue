import type { CSSProperties } from "react";

export interface TradeBrand {
  trade: string;
  slug: string;
  typography: {
    font_family: string;
    heading_weight: number;
    body_weight: number;
    letter_spacing: string;
    heading_transform: string;
    line_height_heading: number;
    line_height_body: number;
  };
  layout: {
    section_spacing: string;
    container_width: string;
    border_radius: number;
    card_style: string;
    hero_layout: string;
    service_layout: string;
    testimonial_layout: string;
    content_alignment: string;
  };
  spacing: {
    section_padding_mobile: string;
    section_padding_desktop: string;
    card_padding: string;
    gap_small: string;
    gap_medium: string;
    gap_large: string;
  };
  color_palette: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    muted: string;
  };
  cta_style: {
    type: string;
    button_shape: string;
    button_size: string;
    primary_style: string;
    secondary_style: string;
    sticky_mobile: boolean;
    icon_position: string;
  };
  imagery: {
    style: string;
    hero_overlay: string;
    hero_position: string;
    aspect_ratio: string;
    border_radius: string;
    shadow: string;
  };
  icons: {
    style: string;
    size: string;
    container_style: string;
    container_bg: string;
  };
  motion: {
    hover_scale: number;
    hover_shadow: boolean;
    scroll_animation: string;
    animation_duration: number;
    stagger_delay: number;
  };
  components: {
    nav_style: string;
    card_border: boolean;
    card_shadow: string;
    badge_style: string;
    divider_style: string;
  };
}

const brandCache: Record<string, TradeBrand> = {};

const plumberBrand: TradeBrand = {
  trade: "Plumber",
  slug: "plumber",
  typography: {
    font_family: "Inter",
    heading_weight: 800,
    body_weight: 400,
    letter_spacing: "-0.02em",
    heading_transform: "none",
    line_height_heading: 1.1,
    line_height_body: 1.6
  },
  layout: {
    section_spacing: "compact",
    container_width: "1200px",
    border_radius: 12,
    card_style: "elevated",
    hero_layout: "split-right",
    service_layout: "grid-3",
    testimonial_layout: "cards",
    content_alignment: "left"
  },
  spacing: {
    section_padding_mobile: "2.5rem",
    section_padding_desktop: "5rem",
    card_padding: "1.5rem",
    gap_small: "0.75rem",
    gap_medium: "1.5rem",
    gap_large: "3rem"
  },
  color_palette: {
    primary: "#0066FF",
    secondary: "#E8F2FF",
    accent: "#FF3D00",
    background: "#FFFFFF",
    surface: "#F8FAFC",
    text: "#0F172A",
    muted: "#64748B"
  },
  cta_style: {
    type: "urgent",
    button_shape: "rounded-lg",
    button_size: "large",
    primary_style: "solid",
    secondary_style: "outline",
    sticky_mobile: true,
    icon_position: "left"
  },
  imagery: {
    style: "action_shots",
    hero_overlay: "gradient-dark",
    hero_position: "right",
    aspect_ratio: "16/10",
    border_radius: "1rem",
    shadow: "2xl"
  },
  icons: {
    style: "filled",
    size: "medium",
    container_style: "circle",
    container_bg: "primary-light"
  },
  motion: {
    hover_scale: 1.02,
    hover_shadow: true,
    scroll_animation: "fade-up",
    animation_duration: 0.4,
    stagger_delay: 0.1
  },
  components: {
    nav_style: "sticky-blur",
    card_border: false,
    card_shadow: "md",
    badge_style: "pill",
    divider_style: "none"
  }
};

const electricianBrand: TradeBrand = {
  trade: "Electrician",
  slug: "electrician",
  typography: {
    font_family: "Space Grotesk",
    heading_weight: 700,
    body_weight: 400,
    letter_spacing: "-0.01em",
    heading_transform: "uppercase",
    line_height_heading: 1.0,
    line_height_body: 1.7
  },
  layout: {
    section_spacing: "generous",
    container_width: "1400px",
    border_radius: 4,
    card_style: "bordered",
    hero_layout: "full-width-overlay",
    service_layout: "list-horizontal",
    testimonial_layout: "slider",
    content_alignment: "center"
  },
  spacing: {
    section_padding_mobile: "3rem",
    section_padding_desktop: "6rem",
    card_padding: "2rem",
    gap_small: "1rem",
    gap_medium: "2rem",
    gap_large: "4rem"
  },
  color_palette: {
    primary: "#FFB800",
    secondary: "#1A1A2E",
    accent: "#00D9FF",
    background: "#0F0F1A",
    surface: "#1A1A2E",
    text: "#FFFFFF",
    muted: "#9CA3AF"
  },
  cta_style: {
    type: "bold",
    button_shape: "sharp",
    button_size: "xlarge",
    primary_style: "solid",
    secondary_style: "ghost",
    sticky_mobile: false,
    icon_position: "right"
  },
  imagery: {
    style: "dramatic_lighting",
    hero_overlay: "dark-gradient",
    hero_position: "background",
    aspect_ratio: "21/9",
    border_radius: "0",
    shadow: "none"
  },
  icons: {
    style: "outline-bold",
    size: "large",
    container_style: "square",
    container_bg: "accent"
  },
  motion: {
    hover_scale: 1.0,
    hover_shadow: false,
    scroll_animation: "slide-in",
    animation_duration: 0.6,
    stagger_delay: 0.15
  },
  components: {
    nav_style: "transparent-dark",
    card_border: true,
    card_shadow: "none",
    badge_style: "angular",
    divider_style: "line"
  }
};

const landscaperBrand: TradeBrand = {
  trade: "Landscaper",
  slug: "landscaper",
  typography: {
    font_family: "Playfair Display",
    heading_weight: 600,
    body_weight: 400,
    letter_spacing: "0",
    heading_transform: "none",
    line_height_heading: 1.2,
    line_height_body: 1.8
  },
  layout: {
    section_spacing: "airy",
    container_width: "1100px",
    border_radius: 24,
    card_style: "soft",
    hero_layout: "stacked-centered",
    service_layout: "masonry-2",
    testimonial_layout: "quote-large",
    content_alignment: "center"
  },
  spacing: {
    section_padding_mobile: "3.5rem",
    section_padding_desktop: "7rem",
    card_padding: "2.5rem",
    gap_small: "1.25rem",
    gap_medium: "2.5rem",
    gap_large: "5rem"
  },
  color_palette: {
    primary: "#2D5A27",
    secondary: "#F5EFE6",
    accent: "#C5A572",
    background: "#FFFBF5",
    surface: "#F5EFE6",
    text: "#2C3E2D",
    muted: "#6B7C6B"
  },
  cta_style: {
    type: "elegant",
    button_shape: "rounded-full",
    button_size: "medium",
    primary_style: "solid",
    secondary_style: "text-underline",
    sticky_mobile: false,
    icon_position: "none"
  },
  imagery: {
    style: "natural_beauty",
    hero_overlay: "light-vignette",
    hero_position: "top",
    aspect_ratio: "4/3",
    border_radius: "1.5rem",
    shadow: "lg"
  },
  icons: {
    style: "thin",
    size: "small",
    container_style: "none",
    container_bg: "none"
  },
  motion: {
    hover_scale: 1.01,
    hover_shadow: true,
    scroll_animation: "fade",
    animation_duration: 0.8,
    stagger_delay: 0.2
  },
  components: {
    nav_style: "minimal",
    card_border: false,
    card_shadow: "lg",
    badge_style: "rounded",
    divider_style: "botanical"
  }
};

const painterBrand: TradeBrand = {
  trade: "Painter",
  slug: "painter",
  typography: {
    font_family: "DM Sans",
    heading_weight: 500,
    body_weight: 400,
    letter_spacing: "0.01em",
    heading_transform: "none",
    line_height_heading: 1.15,
    line_height_body: 1.65
  },
  layout: {
    section_spacing: "balanced",
    container_width: "1280px",
    border_radius: 16,
    card_style: "flat",
    hero_layout: "asymmetric-left",
    service_layout: "grid-2-large",
    testimonial_layout: "minimal",
    content_alignment: "left"
  },
  spacing: {
    section_padding_mobile: "2rem",
    section_padding_desktop: "5.5rem",
    card_padding: "1.75rem",
    gap_small: "0.875rem",
    gap_medium: "1.75rem",
    gap_large: "3.5rem"
  },
  color_palette: {
    primary: "#7C3AED",
    secondary: "#FEF3E2",
    accent: "#F97316",
    background: "#FEFEFE",
    surface: "#FAF8F5",
    text: "#1C1917",
    muted: "#78716C"
  },
  cta_style: {
    type: "creative",
    button_shape: "rounded-xl",
    button_size: "medium",
    primary_style: "gradient",
    secondary_style: "outline-soft",
    sticky_mobile: true,
    icon_position: "right"
  },
  imagery: {
    style: "lifestyle",
    hero_overlay: "none",
    hero_position: "left",
    aspect_ratio: "3/4",
    border_radius: "1.25rem",
    shadow: "xl"
  },
  icons: {
    style: "duotone",
    size: "medium",
    container_style: "rounded",
    container_bg: "gradient"
  },
  motion: {
    hover_scale: 1.03,
    hover_shadow: true,
    scroll_animation: "scale-fade",
    animation_duration: 0.5,
    stagger_delay: 0.12
  },
  components: {
    nav_style: "floating",
    card_border: true,
    card_shadow: "sm",
    badge_style: "soft",
    divider_style: "gradient"
  }
};

brandCache["plumber"] = plumberBrand;
brandCache["electrician"] = electricianBrand;
brandCache["landscaper"] = landscaperBrand;
brandCache["painter"] = painterBrand;

const rooferBrand: TradeBrand = {
  ...plumberBrand,
  trade: "Roofer",
  slug: "roofer",
  color_palette: { ...plumberBrand.color_palette, primary: "#1e293b", accent: "#ef4444" }
};
const locksmithBrand: TradeBrand = {
  ...electricianBrand,
  trade: "Locksmith",
  slug: "locksmith",
  color_palette: { ...electricianBrand.color_palette, primary: "#3b82f6", accent: "#fbbf24" }
};
const gardenerBrand: TradeBrand = {
  ...landscaperBrand,
  trade: "Gardener",
  slug: "gardener",
  color_palette: { ...landscaperBrand.color_palette, primary: "#15803d", accent: "#fbbf24" }
};
const cleanerBrand: TradeBrand = {
  ...plumberBrand,
  trade: "Cleaner",
  slug: "cleaner",
  color_palette: { ...plumberBrand.color_palette, primary: "#06b6d4", accent: "#ec4899" }
};
const builderBrand: TradeBrand = {
  ...electricianBrand,
  trade: "Builder",
  slug: "builder",
  color_palette: { ...electricianBrand.color_palette, primary: "#b45309", accent: "#ef4444" }
};
const carpenterBrand: TradeBrand = {
  ...landscaperBrand,
  trade: "Carpenter",
  slug: "carpenter",
  color_palette: { ...landscaperBrand.color_palette, primary: "#78350f", accent: "#fbbf24" }
};
const plastererBrand: TradeBrand = {
  ...painterBrand,
  trade: "Plasterer",
  slug: "plasterer",
  color_palette: { ...painterBrand.color_palette, primary: "#a8a29e", accent: "#3b82f6" }
};
const tilerBrand: TradeBrand = {
  ...painterBrand,
  trade: "Tiler",
  slug: "tiler",
  color_palette: { ...painterBrand.color_palette, primary: "#0f172a", accent: "#06b6d4" }
};
const kitchenFitterBrand: TradeBrand = {
  ...painterBrand,
  trade: "Kitchen Fitter",
  slug: "kitchen-fitter",
  color_palette: { ...painterBrand.color_palette, primary: "#1e1b4b", accent: "#f97316" }
};
const bathroomFitterBrand: TradeBrand = {
  ...plumberBrand,
  trade: "Bathroom Fitter",
  slug: "bathroom-fitter",
  color_palette: { ...plumberBrand.color_palette, primary: "#0369a1", accent: "#f59e0b" }
};
const gasEngineerBrand: TradeBrand = {
  ...electricianBrand,
  trade: "Gas Engineer",
  slug: "gas-engineer",
  color_palette: { ...electricianBrand.color_palette, primary: "#1d4ed8", accent: "#ea580c" }
};
const windowCleanerBrand: TradeBrand = {
  ...plumberBrand,
  trade: "Window Cleaner",
  slug: "window-cleaner",
  color_palette: { ...plumberBrand.color_palette, primary: "#0ea5e9", accent: "#f472b6" }
};

brandCache["roofer"] = rooferBrand;
brandCache["locksmith"] = locksmithBrand;
brandCache["gardener"] = gardenerBrand;
brandCache["cleaner"] = cleanerBrand;
brandCache["builder"] = builderBrand;
brandCache["carpenter"] = carpenterBrand;
brandCache["plasterer"] = plastererBrand;
brandCache["tiler"] = tilerBrand;
brandCache["kitchen-fitter"] = kitchenFitterBrand;
brandCache["bathroom-fitter"] = bathroomFitterBrand;
brandCache["gas-engineer"] = gasEngineerBrand;
brandCache["window-cleaner"] = windowCleanerBrand;

export function getBrand(slug: string): TradeBrand {
  return brandCache[slug] || plumberBrand;
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
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
}

export function getBrandStyles(brand: TradeBrand): CSSProperties {
  const { color_palette, typography, spacing, layout } = brand;
  
  return {
    "--brand-primary": color_palette.primary,
    "--brand-primary-hsl": hexToHsl(color_palette.primary),
    "--brand-secondary": color_palette.secondary,
    "--brand-secondary-hsl": hexToHsl(color_palette.secondary),
    "--brand-accent": color_palette.accent,
    "--brand-accent-hsl": hexToHsl(color_palette.accent),
    "--brand-bg": color_palette.background,
    "--brand-surface": color_palette.surface,
    "--brand-text": color_palette.text,
    "--brand-muted": color_palette.muted,
    "--brand-font": typography.font_family,
    "--brand-heading-weight": typography.heading_weight,
    "--brand-body-weight": typography.body_weight,
    "--brand-letter-spacing": typography.letter_spacing,
    "--brand-heading-transform": typography.heading_transform,
    "--brand-lh-heading": typography.line_height_heading,
    "--brand-lh-body": typography.line_height_body,
    "--brand-radius": `${layout.border_radius}px`,
    "--brand-container": layout.container_width,
    "--brand-section-py-mobile": spacing.section_padding_mobile,
    "--brand-section-py": spacing.section_padding_desktop,
    "--brand-card-p": spacing.card_padding,
    "--brand-gap-sm": spacing.gap_small,
    "--brand-gap-md": spacing.gap_medium,
    "--brand-gap-lg": spacing.gap_large,
  } as CSSProperties;
}

export function getBrandClasses(brand: TradeBrand, theme: "clean" | "bold" | "luxury"): string {
  const baseClasses = `brand-${brand.slug} theme-${theme}`;
  return baseClasses;
}

export function getButtonStyles(brand: TradeBrand, variant: "primary" | "secondary"): string {
  const { cta_style } = brand;
  
  const shapeMap: Record<string, string> = {
    "rounded-lg": "rounded-lg",
    "rounded-xl": "rounded-xl",
    "rounded-full": "rounded-full",
    "sharp": "rounded-none",
  };
  
  const sizeMap: Record<string, string> = {
    "small": "px-4 py-2 text-sm",
    "medium": "px-6 py-3 text-base",
    "large": "px-8 py-4 text-lg",
    "xlarge": "px-10 py-5 text-xl",
  };
  
  const shape = shapeMap[cta_style.button_shape] || "rounded-lg";
  const size = sizeMap[cta_style.button_size] || "px-6 py-3 text-base";
  
  if (variant === "primary") {
    if (cta_style.primary_style === "gradient") {
      return `${shape} ${size} bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-accent)] text-white font-semibold`;
    }
    return `${shape} ${size} bg-[var(--brand-primary)] text-white font-semibold`;
  }
  
  if (cta_style.secondary_style === "ghost") {
    return `${shape} ${size} bg-transparent text-[var(--brand-text)] hover:bg-[var(--brand-surface)] font-medium`;
  }
  if (cta_style.secondary_style === "text-underline") {
    return `${size} text-[var(--brand-primary)] underline underline-offset-4 font-medium`;
  }
  if (cta_style.secondary_style === "outline-soft") {
    return `${shape} ${size} border-2 border-[var(--brand-muted)]/30 text-[var(--brand-text)] font-medium`;
  }
  return `${shape} ${size} border border-[var(--brand-text)]/20 text-[var(--brand-text)] font-medium`;
}

export function getCardStyles(brand: TradeBrand): string {
  const { layout, components } = brand;
  
  const radiusMap: Record<number, string> = {
    0: "rounded-none",
    4: "rounded",
    8: "rounded-lg",
    12: "rounded-xl",
    16: "rounded-2xl",
    24: "rounded-3xl",
  };
  
  const shadowMap: Record<string, string> = {
    "none": "",
    "sm": "shadow-sm",
    "md": "shadow-md",
    "lg": "shadow-lg",
    "xl": "shadow-xl",
    "2xl": "shadow-2xl",
  };
  
  const radius = radiusMap[layout.border_radius] || "rounded-xl";
  const shadow = shadowMap[components.card_shadow] || "";
  const border = components.card_border ? "border border-[var(--brand-text)]/10" : "";
  
  return `${radius} ${shadow} ${border} bg-[var(--brand-surface)]`.trim();
}

export function getMotionVariants(brand: TradeBrand) {
  const { motion } = brand;
  
  const animations: Record<string, { initial: object; animate: object }> = {
    "fade-up": {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
    },
    "fade": {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
    "slide-in": {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
    },
    "scale-fade": {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
    },
  };
  
  return {
    ...(animations[motion.scroll_animation] || animations["fade-up"]),
    transition: { duration: motion.animation_duration },
  };
}

export function getHoverStyles(brand: TradeBrand): string {
  const { motion } = brand;
  const scale = motion.hover_scale !== 1 ? `hover:scale-[${motion.hover_scale}]` : "";
  const shadow = motion.hover_shadow ? "hover:shadow-lg" : "";
  return `transition-all duration-300 ${scale} ${shadow}`.trim();
}
