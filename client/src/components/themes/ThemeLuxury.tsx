import type { TradeContent, Blueprint, TradeIdentity } from "@shared/schema";
import { motion } from "framer-motion";
import { getTradeImages } from "@/lib/image-engine";
import { getBrand, getBrandStyles, getMotionVariants, type TradeBrand } from "@/lib/brand-engine";
import type { ViewportMode } from "@/pages/Preview";
import { cn } from "@/lib/utils";

interface ThemeLuxuryProps {
  content: TradeContent;
  blueprint?: Blueprint;
  tradeIdentity?: TradeIdentity;
  viewport?: ViewportMode;
}

const LUXURY_HERO_IMAGES: Record<string, string> = {
  plumber: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1920&h=1280&fit=crop&q=90",
  electrician: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1280&fit=crop&q=90",
  landscaper: "https://images.unsplash.com/photo-1598902108854-10e335adac99?w=1920&h=1280&fit=crop&q=90",
  painter: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&h=1280&fit=crop&q=90",
};

const LUXURY_STORY_IMAGES: Record<string, string> = {
  plumber: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop&q=90",
  electrician: "https://images.unsplash.com/photo-1600573472591-ee6c563abb59?w=1200&h=800&fit=crop&q=90",
  landscaper: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=1200&h=800&fit=crop&q=90",
  painter: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=800&fit=crop&q=90",
};

interface LuxuryBrandConfig {
  brandName: string;
  tagline: string;
  headingFont: string;
  bodyFont: string;
  navStyle: "solid" | "transparent" | "floating" | "bordered";
  heroLayout: "editorial" | "split" | "centered" | "dramatic";
  palette: {
    bg: string;
    surface: string;
    accent: string;
    gold: string;
    text: string;
    muted: string;
    navBg: string;
    navText: string;
  };
  typography: {
    headingSize: string;
    headingWeight: number;
    letterSpacing: string;
    textTransform: string;
  };
  buttonStyle: {
    shape: string;
    style: "outline" | "solid" | "gradient";
  };
  sectionStyle: {
    divider: "line" | "none" | "ornament" | "gradient";
    cardStyle: "minimal" | "bordered" | "elevated" | "glass";
  };
}

function getLuxuryBrandConfig(slug: string): LuxuryBrandConfig {
  switch (slug) {
    case "plumber":
      return {
        brandName: "Maison Aqua",
        tagline: "Artisanal Water Systems",
        headingFont: "'Cormorant Garamond', Georgia, serif",
        bodyFont: "'Inter', -apple-system, sans-serif",
        navStyle: "solid",
        heroLayout: "editorial",
        palette: {
          bg: "#FDFCFA",
          surface: "#F7F5F2",
          accent: "#1A4D8C",
          gold: "#8B7355",
          text: "#1A1A1A",
          muted: "#6B6560",
          navBg: "#1A4D8C",
          navText: "#FFFFFF",
        },
        typography: {
          headingSize: "clamp(2.5rem, 6vw, 5rem)",
          headingWeight: 300,
          letterSpacing: "0.04em",
          textTransform: "none",
        },
        buttonStyle: {
          shape: "rounded-none",
          style: "outline",
        },
        sectionStyle: {
          divider: "line",
          cardStyle: "minimal",
        },
      };
    case "electrician":
      return {
        brandName: "Lumière Studio",
        tagline: "Illuminating Excellence",
        headingFont: "'Space Grotesk', -apple-system, sans-serif",
        bodyFont: "'Inter', -apple-system, sans-serif",
        navStyle: "transparent",
        heroLayout: "dramatic",
        palette: {
          bg: "#0A0A0F",
          surface: "#141419",
          accent: "#FFD700",
          gold: "#C9A227",
          text: "#FFFFFF",
          muted: "#9CA3AF",
          navBg: "transparent",
          navText: "#FFFFFF",
        },
        typography: {
          headingSize: "clamp(2.5rem, 7vw, 6rem)",
          headingWeight: 700,
          letterSpacing: "-0.02em",
          textTransform: "uppercase",
        },
        buttonStyle: {
          shape: "rounded-none",
          style: "solid",
        },
        sectionStyle: {
          divider: "gradient",
          cardStyle: "bordered",
        },
      };
    case "landscaper":
      return {
        brandName: "Jardin & Co",
        tagline: "Curated Garden Design",
        headingFont: "'Playfair Display', Georgia, serif",
        bodyFont: "'Lora', Georgia, serif",
        navStyle: "floating",
        heroLayout: "centered",
        palette: {
          bg: "#FFFBF5",
          surface: "#F5EFE6",
          accent: "#2D5A27",
          gold: "#C5A572",
          text: "#2C3E2D",
          muted: "#6B7C6B",
          navBg: "#FFFFFF",
          navText: "#2C3E2D",
        },
        typography: {
          headingSize: "clamp(2rem, 5vw, 4rem)",
          headingWeight: 500,
          letterSpacing: "0",
          textTransform: "none",
        },
        buttonStyle: {
          shape: "rounded-full",
          style: "solid",
        },
        sectionStyle: {
          divider: "ornament",
          cardStyle: "elevated",
        },
      };
    case "painter":
      return {
        brandName: "Atelier Finesse",
        tagline: "Artistry in Every Stroke",
        headingFont: "'DM Serif Display', Georgia, serif",
        bodyFont: "'DM Sans', -apple-system, sans-serif",
        navStyle: "bordered",
        heroLayout: "split",
        palette: {
          bg: "#FAF8F5",
          surface: "#F3EDE4",
          accent: "#7C3AED",
          gold: "#A78BFA",
          text: "#1C1917",
          muted: "#78716C",
          navBg: "#FFFFFF",
          navText: "#1C1917",
        },
        typography: {
          headingSize: "clamp(2.5rem, 5.5vw, 4.5rem)",
          headingWeight: 400,
          letterSpacing: "0.01em",
          textTransform: "none",
        },
        buttonStyle: {
          shape: "rounded-xl",
          style: "gradient",
        },
        sectionStyle: {
          divider: "gradient",
          cardStyle: "glass",
        },
      };
    default:
      return getLuxuryBrandConfig("plumber");
  }
}

export function ThemeLuxury({ content, blueprint, tradeIdentity, viewport = 'desktop' }: ThemeLuxuryProps) {
  const { hero, about, services, testimonials, contact } = content;
  
  const tradeSlug = tradeIdentity?.slug || "plumber";
  const brand = getBrand(tradeSlug);
  const brandStyles = getBrandStyles(brand);
  const motionVariants = getMotionVariants(brand);
  const luxuryConfig = getLuxuryBrandConfig(tradeSlug);

  const isMobile = viewport === 'mobile';
  const isTablet = viewport === 'tablet';

  const heroHeadline = blueprint?.content_rules?.hero_headline || hero.headline;
  const heroSubheadline = blueprint?.content_rules?.hero_subheadline || hero.subheadline;
  const heroImage = LUXURY_HERO_IMAGES[tradeSlug] || LUXURY_HERO_IMAGES.plumber;
  const storyImage = LUXURY_STORY_IMAGES[tradeSlug] || LUXURY_STORY_IMAGES.plumber;
  const images = getTradeImages(tradeIdentity);

  const { palette, typography, buttonStyle, sectionStyle, brandName, tagline, headingFont, bodyFont, navStyle, heroLayout } = luxuryConfig;

  const fadeInSlow = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }
  };

  const fadeUpSlow = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] }
  };

  const getButtonClasses = () => {
    const base = "font-medium tracking-wider uppercase text-xs transition-all duration-500";
    const shape = buttonStyle.shape === "rounded-full" ? "rounded-full" : 
                  buttonStyle.shape === "rounded-xl" ? "rounded-xl" : "";
    const size = isMobile ? "px-5 py-3" : "px-8 py-4";
    return cn(base, shape, size);
  };

  const getButtonStyles = (variant: "primary" | "secondary" = "primary") => {
    if (buttonStyle.style === "gradient") {
      return {
        background: `linear-gradient(135deg, ${palette.accent}, ${palette.gold})`,
        color: "#FFFFFF",
        border: "none",
      };
    }
    if (buttonStyle.style === "solid") {
      return {
        backgroundColor: variant === "primary" ? palette.accent : "transparent",
        color: variant === "primary" ? "#FFFFFF" : palette.text,
        border: variant === "primary" ? "none" : `1px solid ${palette.text}`,
      };
    }
    return {
      backgroundColor: "transparent",
      color: palette.text,
      border: `1px solid ${palette.text}`,
    };
  };

  const renderNav = () => {
    const navClasses = cn(
      "sticky top-0 z-50",
      isMobile ? "px-4 py-4" : "px-6 py-5 lg:px-12 lg:py-6"
    );

    const navBgStyle = () => {
      switch (navStyle) {
        case "solid":
          return { backgroundColor: palette.navBg };
        case "transparent":
          return { backgroundColor: "transparent" };
        case "floating":
          return { 
            backgroundColor: palette.navBg, 
            margin: isMobile ? "0.5rem" : "1rem",
            borderRadius: "1rem",
            boxShadow: "0 4px 30px rgba(0,0,0,0.1)",
          };
        case "bordered":
          return { 
            backgroundColor: palette.navBg, 
            borderBottom: `2px solid ${palette.accent}20`,
          };
        default:
          return { backgroundColor: palette.navBg };
      }
    };

    return (
      <nav className={navClasses} style={navBgStyle()}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col"
          >
            <span 
              className={cn(
                "tracking-widest",
                isMobile ? "text-lg" : "text-xl lg:text-2xl"
              )}
              style={{ 
                fontFamily: headingFont, 
                color: palette.navText,
                fontWeight: typography.headingWeight,
                letterSpacing: typography.letterSpacing,
              }}
            >
              {brandName}
            </span>
            {!isMobile && (
              <span 
                className="text-[10px] tracking-[0.2em] uppercase mt-0.5"
                style={{ color: navStyle === "transparent" ? `${palette.navText}80` : palette.muted }}
              >
                {tagline}
              </span>
            )}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center gap-6"
          >
            {!isMobile && !isTablet && (
              <div className="flex items-center gap-8 text-xs tracking-[0.15em] uppercase" style={{ fontFamily: bodyFont }}>
                <a href="#about" className="hover:opacity-70 transition-opacity" style={{ color: palette.navText }}>About</a>
                <a href="#services" className="hover:opacity-70 transition-opacity" style={{ color: palette.navText }}>Services</a>
                <a href="#contact" className="hover:opacity-70 transition-opacity" style={{ color: palette.navText }}>Contact</a>
              </div>
            )}
            <button 
              className={getButtonClasses()}
              style={navStyle === "transparent" ? { 
                backgroundColor: palette.accent,
                color: "#FFFFFF",
                border: "none",
              } : getButtonStyles()}
            >
              {isMobile ? "Inquire" : "Request Consultation"}
            </button>
          </motion.div>
        </div>
      </nav>
    );
  };

  const renderHero = () => {
    switch (heroLayout) {
      case "dramatic":
        return (
          <section className="relative w-full overflow-hidden" style={{ height: isMobile ? '100vh' : '100vh' }}>
            <motion.div 
              className="absolute inset-0"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${heroImage})` }}
              />
              <div 
                className="absolute inset-0"
                style={{ background: `linear-gradient(to bottom, ${palette.bg}90 0%, ${palette.bg}40 40%, ${palette.bg}80 100%)` }}
              />
            </motion.div>
            <div className={cn(
              "relative z-10 h-full flex flex-col justify-center items-center text-center",
              isMobile ? "px-6" : "px-8 lg:px-16"
            )}>
              <motion.div 
                className="max-w-5xl"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.5 }}
              >
                <div 
                  className="mb-6 text-xs tracking-[0.3em] uppercase"
                  style={{ color: palette.gold }}
                >
                  {tagline}
                </div>
                <h1 
                  className={cn("leading-[0.95] mb-8", isMobile ? "text-4xl" : "text-6xl lg:text-8xl")}
                  style={{ 
                    fontFamily: headingFont, 
                    color: palette.text,
                    fontWeight: typography.headingWeight,
                    letterSpacing: typography.letterSpacing,
                    textTransform: typography.textTransform as any,
                  }}
                >
                  {heroHeadline}
                </h1>
                <p 
                  className={cn("leading-relaxed max-w-2xl mx-auto mb-10", isMobile ? "text-sm" : "text-lg")}
                  style={{ fontFamily: bodyFont, color: palette.muted, fontWeight: 300 }}
                >
                  {heroSubheadline}
                </p>
                <button 
                  className={getButtonClasses()}
                  style={getButtonStyles()}
                >
                  Begin Your Journey
                </button>
              </motion.div>
            </div>
          </section>
        );

      case "split":
        return (
          <section 
            className={cn(
              "relative w-full grid items-center",
              isMobile ? "grid-cols-1 py-12 px-6" : "grid-cols-2 min-h-[90vh]"
            )}
            style={{ backgroundColor: palette.bg }}
          >
            <motion.div 
              className={cn(isMobile ? "order-2 mt-8" : "pl-12 lg:pl-24 pr-8")}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div 
                className="mb-4 text-xs tracking-[0.25em] uppercase"
                style={{ color: palette.accent }}
              >
                {tagline}
              </div>
              <h1 
                className={cn("leading-[1.1] mb-6", isMobile ? "text-3xl" : "text-5xl lg:text-6xl")}
                style={{ 
                  fontFamily: headingFont, 
                  color: palette.text,
                  fontWeight: typography.headingWeight,
                }}
              >
                {heroHeadline}
              </h1>
              <p 
                className={cn("leading-relaxed mb-8", isMobile ? "text-sm" : "text-base lg:text-lg")}
                style={{ fontFamily: bodyFont, color: palette.muted }}
              >
                {heroSubheadline}
              </p>
              <button 
                className={getButtonClasses()}
                style={getButtonStyles()}
              >
                Schedule Consultation
              </button>
            </motion.div>
            <motion.div 
              className={cn(isMobile ? "order-1" : "h-full")}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              <div 
                className="w-full h-full min-h-[50vh] bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${heroImage})`,
                  clipPath: isMobile ? "none" : "polygon(15% 0, 100% 0, 100% 100%, 0 100%)",
                }}
              />
            </motion.div>
          </section>
        );

      case "centered":
        return (
          <section 
            className={cn(
              "relative w-full flex flex-col items-center justify-center text-center",
              isMobile ? "py-16 px-6" : "min-h-[90vh] px-8 lg:px-16"
            )}
            style={{ backgroundColor: palette.bg }}
          >
            <motion.div 
              className="max-w-4xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div 
                className="mb-8 flex items-center justify-center gap-4"
              >
                <div className="h-px w-12" style={{ backgroundColor: palette.gold }} />
                <span 
                  className="text-xs tracking-[0.3em] uppercase"
                  style={{ color: palette.gold }}
                >
                  {tagline}
                </span>
                <div className="h-px w-12" style={{ backgroundColor: palette.gold }} />
              </div>
              <h1 
                className={cn("leading-[1.15] mb-8", isMobile ? "text-3xl" : "text-5xl lg:text-7xl")}
                style={{ 
                  fontFamily: headingFont, 
                  color: palette.text,
                  fontWeight: typography.headingWeight,
                }}
              >
                {heroHeadline}
              </h1>
              <p 
                className={cn("leading-relaxed max-w-2xl mx-auto mb-10", isMobile ? "text-sm" : "text-lg")}
                style={{ fontFamily: bodyFont, color: palette.muted }}
              >
                {heroSubheadline}
              </p>
              <button 
                className={getButtonClasses()}
                style={getButtonStyles()}
              >
                Explore Our Work
              </button>
            </motion.div>
            <motion.div 
              className={cn("w-full max-w-5xl", isMobile ? "mt-12" : "mt-20")}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <div 
                className="w-full rounded-3xl overflow-hidden"
                style={{ aspectRatio: "21/9" }}
              >
                <img 
                  src={heroImage} 
                  alt="Featured work" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </section>
        );

      default:
        return (
          <section 
            className="relative w-full overflow-hidden"
            style={{ height: isMobile ? '85vh' : '100vh' }}
          >
            <motion.div 
              className="absolute inset-0"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${heroImage})` }}
              />
              <div 
                className="absolute inset-0"
                style={{ 
                  background: `linear-gradient(to bottom, 
                    ${palette.bg}60 0%, 
                    ${palette.bg}30 20%,
                    ${palette.bg}40 50%,
                    ${palette.bg}D0 85%,
                    ${palette.bg} 100%)`
                }}
              />
            </motion.div>
            <div className={cn(
              "relative z-10 h-full flex flex-col justify-end",
              isMobile ? "px-6 pb-16" : "px-8 pb-24 lg:px-16 lg:pb-32"
            )}>
              <motion.div 
                className="max-w-4xl"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.5 }}
              >
                <h1 
                  className={cn("leading-[1.1] mb-6", isMobile ? "text-4xl" : "text-6xl lg:text-8xl")}
                  style={{ 
                    fontFamily: headingFont, 
                    color: palette.text,
                    fontWeight: typography.headingWeight,
                    letterSpacing: typography.letterSpacing,
                  }}
                >
                  {heroHeadline}
                </h1>
                <p 
                  className={cn("leading-relaxed max-w-xl", isMobile ? "text-sm" : "text-lg")}
                  style={{ fontFamily: bodyFont, color: palette.muted }}
                >
                  {heroSubheadline}
                </p>
              </motion.div>
            </div>
          </section>
        );
    }
  };

  const renderSectionDivider = () => {
    switch (sectionStyle.divider) {
      case "ornament":
        return (
          <div className="flex items-center justify-center gap-4 py-8">
            <div className="w-8 h-px" style={{ backgroundColor: palette.gold }} />
            <div className="w-2 h-2 rotate-45" style={{ backgroundColor: palette.gold }} />
            <div className="w-8 h-px" style={{ backgroundColor: palette.gold }} />
          </div>
        );
      case "gradient":
        return (
          <div className="py-8 flex justify-center">
            <div 
              className="w-32 h-1 rounded-full"
              style={{ background: `linear-gradient(90deg, transparent, ${palette.accent}, transparent)` }}
            />
          </div>
        );
      case "line":
        return (
          <div className="py-8 max-w-md mx-auto">
            <div className="h-px" style={{ backgroundColor: `${palette.text}20` }} />
          </div>
        );
      default:
        return null;
    }
  };

  const getCardStyles = () => {
    switch (sectionStyle.cardStyle) {
      case "bordered":
        return {
          backgroundColor: palette.surface,
          border: `1px solid ${palette.accent}30`,
        };
      case "elevated":
        return {
          backgroundColor: palette.bg,
          boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
        };
      case "glass":
        return {
          backgroundColor: `${palette.surface}80`,
          backdropFilter: "blur(10px)",
          border: `1px solid ${palette.text}10`,
        };
      default:
        return {
          backgroundColor: "transparent",
        };
    }
  };

  return (
    <div 
      className="theme-luxury min-h-screen"
      style={{
        fontFamily: bodyFont,
        backgroundColor: palette.bg,
        color: palette.text,
        ...brandStyles,
      } as React.CSSProperties}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:wght@300;400;500&family=DM+Serif+Display&family=Inter:wght@300;400;500&family=Lora:wght@400;500&family=Playfair+Display:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap');
      `}</style>

      {renderNav()}
      {renderHero()}

      {renderSectionDivider()}

      <section 
        id="about"
        className={cn(isMobile ? "py-16 px-6" : "py-24 px-8 lg:py-32 lg:px-16")}
        style={{ backgroundColor: palette.bg }}
      >
        <div className="max-w-7xl mx-auto">
          <div className={cn(
            "grid items-center gap-12",
            isMobile ? "grid-cols-1" : "lg:grid-cols-2 lg:gap-20"
          )}>
            <motion.div 
              {...fadeUpSlow}
              className={cn(isMobile ? "order-2" : "lg:order-1")}
            >
              <p 
                className="text-xs tracking-[0.2em] uppercase mb-6"
                style={{ color: palette.gold }}
              >
                Our Philosophy
              </p>
              <h2 
                className={cn("leading-[1.15] mb-6", isMobile ? "text-2xl" : "text-4xl lg:text-5xl")}
                style={{ 
                  fontFamily: headingFont, 
                  color: palette.text,
                  fontWeight: typography.headingWeight,
                }}
              >
                Craftsmanship defined by excellence and precision.
              </h2>
              <p 
                className={cn("leading-[1.9]", isMobile ? "text-sm" : "text-base lg:text-lg")}
                style={{ color: palette.muted }}
              >
                {about.mission}
              </p>
            </motion.div>
            
            <motion.div 
              {...fadeInSlow}
              className={cn(isMobile ? "order-1" : "lg:order-2")}
            >
              <div 
                className="relative overflow-hidden"
                style={{ 
                  aspectRatio: '4/5',
                  borderRadius: brand.layout.border_radius,
                }}
              >
                <img 
                  src={storyImage}
                  alt="Our craft"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section 
        className="relative overflow-hidden" 
        style={{ height: isMobile ? '50vh' : '60vh' }}
      >
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${images.team})` }}
          />
          <div 
            className="absolute inset-0"
            style={{ backgroundColor: `${palette.text}60` }}
          />
        </motion.div>
        
        <motion.div 
          {...fadeInSlow}
          className="relative z-10 h-full flex items-center justify-center text-center px-6"
        >
          <blockquote 
            className={cn("italic max-w-3xl", isMobile ? "text-xl" : "text-3xl lg:text-4xl")}
            style={{ 
              fontFamily: headingFont, 
              color: '#FFFFFF',
              fontWeight: 300,
            }}
          >
            "Excellence is not a destination, but a standard we uphold in every detail."
          </blockquote>
        </motion.div>
      </section>

      <section 
        id="services"
        className={cn(isMobile ? "py-16 px-6" : "py-24 px-8 lg:py-32 lg:px-16")}
        style={{ backgroundColor: palette.surface }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUpSlow} className="text-center mb-12 lg:mb-20">
            <p 
              className="text-xs tracking-[0.2em] uppercase mb-4"
              style={{ color: palette.gold }}
            >
              Services
            </p>
            <h2 
              className={cn(isMobile ? "text-2xl" : "text-4xl lg:text-5xl")}
              style={{ 
                fontFamily: headingFont, 
                color: palette.text,
                fontWeight: typography.headingWeight,
              }}
            >
              Our Expertise
            </h2>
          </motion.div>

          <div className={cn(
            "grid gap-6",
            isMobile ? "grid-cols-1" : "lg:grid-cols-2 lg:gap-8"
          )}>
            {services.slice(0, 4).map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={cn("p-8 lg:p-10 transition-all duration-300", 
                  buttonStyle.shape === "rounded-xl" ? "rounded-xl" : 
                  buttonStyle.shape === "rounded-full" ? "rounded-2xl" : ""
                )}
                style={getCardStyles()}
              >
                <div 
                  className="text-xs tracking-[0.15em] uppercase mb-4"
                  style={{ color: palette.gold }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 
                  className={cn("mb-4", isMobile ? "text-xl" : "text-2xl lg:text-3xl")}
                  style={{ 
                    fontFamily: headingFont, 
                    color: palette.text,
                    fontWeight: typography.headingWeight,
                  }}
                >
                  {service.name}
                </h3>
                <p 
                  className={cn("leading-[1.8]", isMobile ? "text-sm" : "text-base")}
                  style={{ color: palette.muted }}
                >
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {renderSectionDivider()}

      <section 
        className={cn(isMobile ? "py-20 px-6" : "py-32 px-8 lg:py-40 lg:px-16")}
        style={{ backgroundColor: palette.bg }}
      >
        <motion.div 
          {...fadeUpSlow}
          className="max-w-4xl mx-auto text-center"
        >
          <div 
            className="text-xs tracking-[0.2em] uppercase mb-8"
            style={{ color: palette.gold }}
          >
            Client Reflections
          </div>
          <blockquote 
            className={cn("italic leading-[1.4] mb-10", isMobile ? "text-xl" : "text-3xl lg:text-4xl")}
            style={{ 
              fontFamily: headingFont, 
              color: palette.text,
              fontWeight: 300,
            }}
          >
            "{testimonials[0]?.content || "An experience defined by thoughtfulness, precision, and an unwavering commitment to excellence."}"
          </blockquote>
          <div style={{ color: palette.muted }}>
            <span style={{ color: palette.text, fontWeight: 500 }}>
              {testimonials[0]?.author || "A Valued Client"}
            </span>
            {testimonials[0]?.role && (
              <span className="ml-2">— {testimonials[0].role}</span>
            )}
          </div>
        </motion.div>
      </section>

      <section 
        id="contact"
        className={cn("text-center", isMobile ? "py-20 px-6" : "py-32 px-8 lg:py-40 lg:px-16")}
        style={{ backgroundColor: palette.surface }}
      >
        <motion.div 
          {...fadeUpSlow}
          className="max-w-2xl mx-auto"
        >
          <h2 
            className={cn("mb-6", isMobile ? "text-2xl" : "text-4xl lg:text-5xl")}
            style={{ 
              fontFamily: headingFont, 
              color: palette.text,
              fontWeight: typography.headingWeight,
            }}
          >
            Begin Your Journey
          </h2>
          <p 
            className={cn("leading-[1.9] mb-10", isMobile ? "text-sm" : "text-base lg:text-lg")}
            style={{ color: palette.muted }}
          >
            We invite you to experience the difference that meticulous craftsmanship and dedicated service can make. Every project begins with a conversation.
          </p>
          <button 
            className={cn(getButtonClasses(), isMobile && "w-full")}
            style={getButtonStyles()}
          >
            Request a Consultation
          </button>
        </motion.div>
      </section>

      <footer 
        className={cn("text-center", isMobile ? "py-12 px-6" : "py-20 px-8 lg:py-24")}
        style={{ 
          backgroundColor: palette.bg,
          borderTop: `1px solid ${palette.text}10`
        }}
      >
        <div className="max-w-4xl mx-auto">
          <div 
            className={cn("tracking-widest mb-6", isMobile ? "text-lg" : "text-2xl lg:text-3xl")}
            style={{ 
              fontFamily: headingFont, 
              color: palette.text,
              fontWeight: typography.headingWeight,
            }}
          >
            {brandName}
          </div>
          
          <div 
            className={cn("mb-4", isMobile ? "text-sm" : "text-base")}
            style={{ color: palette.muted }}
          >
            {contact.address}
          </div>
          
          <div className={cn(
            "flex justify-center gap-6 mb-8",
            isMobile ? "flex-col" : "flex-row"
          )}>
            <a 
              href={`tel:${contact.phone}`}
              className="transition-opacity duration-300 hover:opacity-60"
              style={{ color: palette.text }}
            >
              {contact.phone}
            </a>
            <a 
              href={`mailto:${contact.email}`}
              className="transition-opacity duration-300 hover:opacity-60"
              style={{ color: palette.text }}
            >
              {contact.email}
            </a>
          </div>
          
          <div 
            className="text-xs tracking-[0.15em] uppercase"
            style={{ color: palette.muted }}
          >
            © {new Date().getFullYear()} {brandName}
          </div>
        </div>
      </footer>
    </div>
  );
}
