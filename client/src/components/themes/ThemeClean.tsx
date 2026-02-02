import type { TradeContent, Blueprint, TradeIdentity } from "@shared/schema";
import { Check, Star, Phone, MapPin, Mail, Shield, Award, ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { getTradeImages } from "@/lib/image-engine";
import { getTradeCta, getTradeTagline } from "@/lib/trade-identity";
import { getBrand, getBrandStyles, getMotionVariants, type TradeBrand } from "@/lib/brand-engine";
import type { ViewportMode } from "@/pages/Preview";
import { cn } from "@/lib/utils";

interface ThemeCleanProps {
  content: TradeContent;
  blueprint?: Blueprint;
  tradeIdentity?: TradeIdentity;
  viewport?: ViewportMode;
}

export function ThemeClean({ content, blueprint, tradeIdentity, viewport = 'desktop' }: ThemeCleanProps) {
  const { hero, about, services, testimonials, contact } = content;
  const trustSymbols = (content as any).trustSymbols || tradeIdentity?.trust_symbols || [];
  const guarantees = (content as any).guarantees || tradeIdentity?.guarantees || [];
  const images = getTradeImages(tradeIdentity);
  const tagline = getTradeTagline(tradeIdentity);
  
  const tradeSlug = tradeIdentity?.slug || "plumber";
  const brand = getBrand(tradeSlug);
  const brandStyles = getBrandStyles(brand);
  const motionVariants = getMotionVariants(brand);

  const isMobile = viewport === 'mobile';
  const isTablet = viewport === 'tablet';

  const sectionOrder = blueprint?.pages?.home || [
    "Hero", "TrustBadges", "Services", "WhyChooseUs", "Testimonials", "FAQ", "ContactCTA", "Footer"
  ];

  const heroHeadline = blueprint?.content_rules?.hero_headline || hero.headline;
  const heroSubheadline = blueprint?.content_rules?.hero_subheadline || hero.subheadline;
  const ctaText = blueprint?.content_rules?.cta_text || getTradeCta(tradeIdentity, "primary");
  const ctaSecondary = getTradeCta(tradeIdentity, "secondary");

  const renderHero = () => {
    switch (brand.layout.hero_layout) {
      case "split-right":
        return <HeroSplitRight brand={brand} isMobile={isMobile} isTablet={isTablet} heroHeadline={heroHeadline} heroSubheadline={heroSubheadline} ctaText={ctaText} ctaSecondary={ctaSecondary} tagline={tagline} images={images} tradeIdentity={tradeIdentity} motionVariants={motionVariants} />;
      case "full-width-overlay":
        return <HeroFullWidthOverlay brand={brand} isMobile={isMobile} isTablet={isTablet} heroHeadline={heroHeadline} heroSubheadline={heroSubheadline} ctaText={ctaText} ctaSecondary={ctaSecondary} tagline={tagline} images={images} tradeIdentity={tradeIdentity} motionVariants={motionVariants} />;
      case "stacked-centered":
        return <HeroStackedCentered brand={brand} isMobile={isMobile} isTablet={isTablet} heroHeadline={heroHeadline} heroSubheadline={heroSubheadline} ctaText={ctaText} ctaSecondary={ctaSecondary} tagline={tagline} images={images} tradeIdentity={tradeIdentity} motionVariants={motionVariants} />;
      case "asymmetric-left":
        return <HeroAsymmetricLeft brand={brand} isMobile={isMobile} isTablet={isTablet} heroHeadline={heroHeadline} heroSubheadline={heroSubheadline} ctaText={ctaText} ctaSecondary={ctaSecondary} tagline={tagline} images={images} tradeIdentity={tradeIdentity} motionVariants={motionVariants} />;
      default:
        return <HeroSplitRight brand={brand} isMobile={isMobile} isTablet={isTablet} heroHeadline={heroHeadline} heroSubheadline={heroSubheadline} ctaText={ctaText} ctaSecondary={ctaSecondary} tagline={tagline} images={images} tradeIdentity={tradeIdentity} motionVariants={motionVariants} />;
    }
  };

  const renderServices = () => {
    switch (brand.layout.service_layout) {
      case "grid-3":
        return <ServicesGrid3 brand={brand} services={services} isMobile={isMobile} isTablet={isTablet} />;
      case "list-horizontal":
        return <ServicesListHorizontal brand={brand} services={services} isMobile={isMobile} isTablet={isTablet} />;
      case "masonry-2":
        return <ServicesMasonry brand={brand} services={services} isMobile={isMobile} isTablet={isTablet} />;
      case "grid-2-large":
        return <ServicesGrid2Large brand={brand} services={services} isMobile={isMobile} isTablet={isTablet} />;
      default:
        return <ServicesGrid3 brand={brand} services={services} isMobile={isMobile} isTablet={isTablet} />;
    }
  };

  const renderTestimonials = () => {
    switch (brand.layout.testimonial_layout) {
      case "cards":
        return <TestimonialsCards brand={brand} testimonials={testimonials} isMobile={isMobile} isTablet={isTablet} />;
      case "slider":
        return <TestimonialsSlider brand={brand} testimonials={testimonials} isMobile={isMobile} isTablet={isTablet} />;
      case "quote-large":
        return <TestimonialsQuoteLarge brand={brand} testimonials={testimonials} isMobile={isMobile} isTablet={isTablet} />;
      case "minimal":
        return <TestimonialsMinimal brand={brand} testimonials={testimonials} isMobile={isMobile} isTablet={isTablet} />;
      default:
        return <TestimonialsCards brand={brand} testimonials={testimonials} isMobile={isMobile} isTablet={isTablet} />;
    }
  };

  const renderSection = (sectionName: string) => {
    switch (sectionName) {
      case "Hero":
        return <div key="Hero">{renderHero()}</div>;
      
      case "TrustBadges":
        return <TrustBadgesSection key="TrustBadges" brand={brand} trustSymbols={trustSymbols} isMobile={isMobile} />;

      case "Services":
      case "ServiceCategories":
        return <div key="Services" id="services">{renderServices()}</div>;

      case "WhyChooseUs":
        return <WhyChooseUsSection key="WhyChooseUs" brand={brand} about={about} images={images} isMobile={isMobile} isTablet={isTablet} />;

      case "Guarantees":
        return <GuaranteesSection key="Guarantees" brand={brand} guarantees={guarantees} isMobile={isMobile} isTablet={isTablet} />;

      case "Testimonials":
        return <div key="Testimonials" id="reviews">{renderTestimonials()}</div>;

      case "FAQ":
        return <FAQSection key="FAQ" brand={brand} faqs={content.faqs} isMobile={isMobile} isTablet={isTablet} />;

      case "ContactCTA":
        return <ContactCTASection key="ContactCTA" brand={brand} ctaText={ctaText} isMobile={isMobile} isTablet={isTablet} />;

      case "Footer":
        return <FooterSection key="Footer" brand={brand} about={about} contact={contact} tradeIdentity={tradeIdentity} isMobile={isMobile} isTablet={isTablet} />;

      default:
        return null;
    }
  };

  const getNavStyle = () => {
    switch (brand.components.nav_style) {
      case "sticky-blur":
        return "border-b sticky top-0 bg-[var(--brand-bg)]/95 backdrop-blur-md z-50";
      case "transparent-dark":
        return "sticky top-0 z-50";
      case "minimal":
        return "bg-transparent py-2";
      case "floating":
        return "sticky top-0 z-50 mx-4 mt-4 rounded-2xl shadow-lg";
      default:
        return "border-b sticky top-0 bg-[var(--brand-bg)]/95 backdrop-blur-md z-50";
    }
  };

  const isDarkBg = brand.color_palette.background.startsWith("#0") || brand.color_palette.background.startsWith("#1");

  return (
    <div 
      className={cn("min-h-screen", isDarkBg ? "text-white" : "text-[var(--brand-text)]")}
      style={{
        ...brandStyles,
        fontFamily: brand.typography.font_family,
        backgroundColor: brand.color_palette.background,
        letterSpacing: brand.typography.letter_spacing,
        lineHeight: brand.typography.line_height_body,
      } as React.CSSProperties}
    >
      <nav 
        className={getNavStyle()}
        style={{
          backgroundColor: brand.components.nav_style === "transparent-dark" 
            ? brand.color_palette.background 
            : brand.components.nav_style === "floating"
              ? brand.color_palette.background
              : undefined
        }}
      >
        <div className={cn("mx-auto px-4 flex items-center justify-between", isMobile ? "h-12" : "h-14 sm:h-16 lg:h-20")} style={{ maxWidth: brand.layout.container_width }}>
          <div className={cn("font-bold", isMobile ? "text-base" : "text-lg sm:text-xl lg:text-2xl")} style={{ fontWeight: brand.typography.heading_weight, color: brand.color_palette.primary, textTransform: brand.typography.heading_transform as any }}>
            {tradeIdentity?.trade || 'ServicePro'}
          </div>
          <div className={cn("gap-6 text-sm font-medium", isMobile || isTablet ? "hidden" : "hidden lg:flex")} style={{ color: isDarkBg ? brand.color_palette.muted : brand.color_palette.text }}>
            <a href="#services" className="hover:opacity-80 transition-opacity">Services</a>
            <a href="#about" className="hover:opacity-80 transition-opacity">About</a>
            <a href="#reviews" className="hover:opacity-80 transition-opacity">Reviews</a>
            <a href="#contact" style={{ color: brand.color_palette.primary }}>Contact</a>
          </div>
          <button 
            className={cn("font-medium hover:opacity-90 transition-all touch-manipulation", isMobile ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm")}
            style={{ 
              backgroundColor: brand.color_palette.primary, 
              color: "#fff",
              borderRadius: brand.cta_style.button_shape === "sharp" ? "0" : brand.cta_style.button_shape === "rounded-full" ? "9999px" : `${brand.layout.border_radius}px`
            }}
          >
            {isMobile ? "Quote" : ctaText.length > 15 ? "Get Quote" : ctaText}
          </button>
        </div>
      </nav>

      <div className={brand.components.nav_style === "floating" ? "pt-20" : ""}>
        {sectionOrder.map(section => renderSection(section))}
        {!sectionOrder.includes("Footer") && renderSection("Footer")}
      </div>
    </div>
  );
}

interface HeroProps {
  brand: TradeBrand;
  isMobile: boolean;
  isTablet: boolean;
  heroHeadline: string;
  heroSubheadline: string;
  ctaText: string;
  ctaSecondary: string;
  tagline: string;
  images: { hero: string; team: string; gallery: string[] };
  tradeIdentity?: TradeIdentity;
  motionVariants: any;
}

function HeroSplitRight({ brand, isMobile, isTablet, heroHeadline, heroSubheadline, ctaText, ctaSecondary, tagline, images, tradeIdentity, motionVariants }: HeroProps) {
  return (
    <section className={cn("relative px-4", isMobile ? "pt-8 pb-8" : isTablet ? "pt-12 pb-12" : "pt-16 pb-12 lg:pt-20 lg:pb-16")}>
      <div className="mx-auto" style={{ maxWidth: brand.layout.container_width }}>
        <div className={cn("items-center", isMobile ? "flex flex-col gap-6" : isTablet ? "grid grid-cols-2 gap-8" : "grid lg:grid-cols-2 gap-8 lg:gap-12")}>
          <motion.div {...motionVariants} className={cn(isMobile ? "text-center order-2" : isTablet ? "order-1" : "text-left order-2 lg:order-1")}>
            <span className={cn("inline-block px-3 py-1 font-semibold mb-4", isMobile ? "text-xs" : "text-xs sm:text-sm")} style={{ 
              backgroundColor: `${brand.color_palette.primary}15`, 
              color: brand.color_palette.primary,
              borderRadius: brand.components.badge_style === "pill" ? "9999px" : brand.components.badge_style === "angular" ? "0" : `${brand.layout.border_radius}px`
            }}>
              {tagline}
            </span>
            <h1 className={cn("tracking-tight mb-4 leading-tight", isMobile ? "text-2xl" : isTablet ? "text-3xl" : "text-3xl sm:text-4xl md:text-5xl lg:text-6xl")} style={{ fontWeight: brand.typography.heading_weight, lineHeight: brand.typography.line_height_heading, textTransform: brand.typography.heading_transform as any }}>
              {heroHeadline}
            </h1>
            <p className={cn("mb-6", isMobile ? "text-sm" : isTablet ? "text-base max-w-md" : "text-base max-w-xl sm:text-lg lg:text-xl")} style={{ color: brand.color_palette.muted }}>
              {heroSubheadline}
            </p>
            <div className={cn("flex gap-3", isMobile ? "flex-col" : isTablet ? "flex-row" : "flex-row")}>
              <button className={cn("font-semibold shadow-lg hover:opacity-90 transition-all active:scale-[0.98] touch-manipulation flex items-center justify-center gap-2", isMobile ? "w-full px-5 py-3 text-sm" : "px-6 py-3.5 text-base")} style={{ backgroundColor: brand.color_palette.primary, color: "#fff", borderRadius: brand.cta_style.button_shape === "sharp" ? "0" : `${brand.layout.border_radius}px` }}>
                {brand.cta_style.icon_position === "left" && <Phone className="w-4 h-4" />}
                {ctaText}
                {brand.cta_style.icon_position === "right" && <ArrowRight className="w-4 h-4" />}
              </button>
              <button className={cn("font-semibold hover:opacity-80 transition-colors touch-manipulation", isMobile ? "w-full px-5 py-3 text-sm" : "px-6 py-3.5 text-base")} style={{ backgroundColor: "transparent", color: brand.color_palette.text, border: `1px solid ${brand.color_palette.muted}30`, borderRadius: brand.cta_style.button_shape === "sharp" ? "0" : `${brand.layout.border_radius}px` }}>
                {ctaSecondary}
              </button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: brand.motion.animation_duration, delay: 0.2 }} className={cn(isMobile ? "order-1 w-full" : isTablet ? "order-2" : "order-1 lg:order-2")}>
            <div className={cn("relative overflow-hidden", isMobile ? "aspect-[16/10]" : "aspect-[4/3] lg:aspect-[3/2]")} style={{ borderRadius: brand.imagery.border_radius, boxShadow: brand.imagery.shadow === "2xl" ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)" : brand.imagery.shadow === "xl" ? "0 20px 25px -5px rgba(0, 0, 0, 0.1)" : "none" }}>
              <img src={images.hero} alt={`${tradeIdentity?.trade || 'Professional'} services`} className="w-full h-full object-cover" />
              {brand.imagery.hero_overlay !== "none" && <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HeroFullWidthOverlay({ brand, isMobile, isTablet, heroHeadline, heroSubheadline, ctaText, ctaSecondary, tagline, images, tradeIdentity, motionVariants }: HeroProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center">
      <div className="absolute inset-0">
        <img src={images.hero} alt={`${tradeIdentity?.trade || 'Professional'} services`} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
      </div>
      <div className="relative z-10 mx-auto px-4 py-20 text-center" style={{ maxWidth: brand.layout.container_width }}>
        <motion.div {...motionVariants}>
          <span className={cn("inline-block px-4 py-2 font-bold mb-6 border", isMobile ? "text-xs" : "text-sm")} style={{ borderColor: brand.color_palette.primary, color: brand.color_palette.primary }}>
            {tagline}
          </span>
          <h1 className={cn("text-white tracking-tight mb-6", isMobile ? "text-3xl" : isTablet ? "text-4xl" : "text-5xl md:text-6xl lg:text-7xl")} style={{ fontWeight: brand.typography.heading_weight, lineHeight: brand.typography.line_height_heading, textTransform: brand.typography.heading_transform as any }}>
            {heroHeadline}
          </h1>
          <p className={cn("text-white/80 max-w-2xl mx-auto mb-8", isMobile ? "text-sm" : "text-lg lg:text-xl")}>
            {heroSubheadline}
          </p>
          <div className={cn("flex gap-4 justify-center", isMobile ? "flex-col" : "flex-row")}>
            <button className={cn("font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2", isMobile ? "w-full px-6 py-4 text-base" : "px-8 py-4 text-lg")} style={{ backgroundColor: brand.color_palette.primary, color: "#000" }}>
              {ctaText}
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className={cn("font-bold hover:bg-white/10 transition-all border-2 border-white/30 text-white", isMobile ? "w-full px-6 py-4 text-base" : "px-8 py-4 text-lg")}>
              {ctaSecondary}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function HeroStackedCentered({ brand, isMobile, isTablet, heroHeadline, heroSubheadline, ctaText, ctaSecondary, tagline, images, tradeIdentity, motionVariants }: HeroProps) {
  return (
    <section className={cn("px-4", isMobile ? "py-12" : "py-20 lg:py-28")}>
      <div className="mx-auto text-center" style={{ maxWidth: brand.layout.container_width }}>
        <motion.div {...motionVariants}>
          <span className={cn("inline-block font-medium mb-6", isMobile ? "text-xs" : "text-sm")} style={{ color: brand.color_palette.accent }}>
            {tagline}
          </span>
          <h1 className={cn("tracking-tight mb-6 max-w-4xl mx-auto", isMobile ? "text-3xl" : isTablet ? "text-4xl" : "text-4xl md:text-5xl lg:text-6xl")} style={{ fontWeight: brand.typography.heading_weight, lineHeight: brand.typography.line_height_heading }}>
            {heroHeadline}
          </h1>
          <p className={cn("max-w-2xl mx-auto mb-10", isMobile ? "text-sm" : "text-lg lg:text-xl")} style={{ color: brand.color_palette.muted }}>
            {heroSubheadline}
          </p>
          <div className={cn("flex gap-4 justify-center mb-12", isMobile ? "flex-col" : "flex-row")}>
            <button className={cn("font-medium hover:opacity-90 transition-all rounded-full", isMobile ? "w-full px-6 py-3 text-sm" : "px-8 py-4 text-base")} style={{ backgroundColor: brand.color_palette.primary, color: "#fff" }}>
              {ctaText}
            </button>
            <button className={cn("font-medium hover:opacity-80 transition-all underline underline-offset-4", isMobile ? "px-6 py-3 text-sm" : "px-8 py-4 text-base")} style={{ color: brand.color_palette.primary }}>
              {ctaSecondary}
            </button>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: brand.motion.animation_duration, delay: 0.3 }}>
          <div className={cn("relative overflow-hidden mx-auto", isMobile ? "aspect-[16/9]" : "aspect-[16/9] max-w-4xl")} style={{ borderRadius: brand.imagery.border_radius, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}>
            <img src={images.hero} alt={`${tradeIdentity?.trade || 'Professional'} services`} className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function HeroAsymmetricLeft({ brand, isMobile, isTablet, heroHeadline, heroSubheadline, ctaText, ctaSecondary, tagline, images, tradeIdentity, motionVariants }: HeroProps) {
  return (
    <section className={cn("px-4", isMobile ? "py-10" : "py-16 lg:py-24")}>
      <div className="mx-auto" style={{ maxWidth: brand.layout.container_width }}>
        <div className={cn("items-center", isMobile ? "flex flex-col gap-8" : "grid grid-cols-5 gap-12")}>
          <motion.div {...motionVariants} className={cn(isMobile ? "order-2 text-center" : "col-span-3 order-1")}>
            <div className={cn("inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6", isMobile ? "text-xs" : "text-sm")} style={{ backgroundColor: brand.color_palette.surface }}>
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: brand.color_palette.accent }} />
              <span style={{ color: brand.color_palette.muted }}>{tagline}</span>
            </div>
            <h1 className={cn("tracking-tight mb-6", isMobile ? "text-3xl" : isTablet ? "text-4xl" : "text-4xl md:text-5xl lg:text-6xl")} style={{ fontWeight: brand.typography.heading_weight, lineHeight: brand.typography.line_height_heading }}>
              {heroHeadline}
            </h1>
            <p className={cn("mb-8", isMobile ? "text-sm" : "text-lg max-w-xl")} style={{ color: brand.color_palette.muted }}>
              {heroSubheadline}
            </p>
            <div className={cn("flex gap-4", isMobile ? "flex-col" : "flex-row")}>
              <button className={cn("font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2", isMobile ? "w-full px-6 py-3 text-sm" : "px-6 py-3.5 text-base")} style={{ background: `linear-gradient(135deg, ${brand.color_palette.primary}, ${brand.color_palette.accent})`, color: "#fff", borderRadius: `${brand.layout.border_radius}px` }}>
                {ctaText}
                <ChevronRight className="w-4 h-4" />
              </button>
              <button className={cn("font-semibold hover:opacity-80 transition-all", isMobile ? "w-full px-6 py-3 text-sm" : "px-6 py-3.5 text-base")} style={{ border: `2px solid ${brand.color_palette.muted}30`, color: brand.color_palette.text, borderRadius: `${brand.layout.border_radius}px` }}>
                {ctaSecondary}
              </button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: brand.motion.animation_duration, delay: 0.2 }} className={cn(isMobile ? "order-1 w-full" : "col-span-2 order-2")}>
            <div className="relative overflow-hidden aspect-[3/4]" style={{ borderRadius: brand.imagery.border_radius, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}>
              <img src={images.hero} alt={`${tradeIdentity?.trade || 'Professional'} services`} className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface TrustBadgesProps {
  brand: TradeBrand;
  trustSymbols: string[];
  isMobile: boolean;
}

function TrustBadgesSection({ brand, trustSymbols, isMobile }: TrustBadgesProps) {
  const isDarkBg = brand.color_palette.background.startsWith("#0") || brand.color_palette.background.startsWith("#1");
  return (
    <section className={cn(isMobile ? "py-3" : "py-4 sm:py-6")} style={{ backgroundColor: isDarkBg ? brand.color_palette.surface : brand.color_palette.surface, borderTop: `1px solid ${brand.color_palette.muted}20`, borderBottom: `1px solid ${brand.color_palette.muted}20` }}>
      <div className="mx-auto px-4" style={{ maxWidth: brand.layout.container_width }}>
        <div className={cn("flex flex-wrap justify-center", isMobile ? "gap-3" : "gap-4 sm:gap-8 lg:gap-12")}>
          {trustSymbols.slice(0, 4).map((symbol: string, i: number) => (
            <div key={i} className={cn("flex items-center", isMobile ? "gap-1.5" : "gap-2")}>
              <Shield className={cn(isMobile ? "w-3 h-3" : "w-4 h-4")} style={{ color: brand.color_palette.primary }} />
              <span className={cn("font-medium", isMobile ? "text-[10px]" : "text-xs sm:text-sm")} style={{ color: brand.color_palette.muted }}>{symbol}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface ServicesProps {
  brand: TradeBrand;
  services: Array<{ name: string; description: string; icon?: string }>;
  isMobile: boolean;
  isTablet: boolean;
}

function ServicesGrid3({ brand, services, isMobile, isTablet }: ServicesProps) {
  return (
    <section className={cn(isMobile ? "py-10" : isTablet ? "py-12" : "py-16 lg:py-20")} style={{ backgroundColor: brand.color_palette.surface }}>
      <div className="mx-auto px-4" style={{ maxWidth: brand.layout.container_width }}>
        <div className={cn("text-center", isMobile ? "mb-6" : "mb-10 sm:mb-14")}>
          <h2 className={cn("mb-3", isMobile ? "text-xl" : isTablet ? "text-2xl" : "text-2xl sm:text-3xl lg:text-4xl")} style={{ fontWeight: brand.typography.heading_weight, textTransform: brand.typography.heading_transform as any }}>Our Services</h2>
          <p className={cn("max-w-2xl mx-auto", isMobile ? "text-xs" : "text-sm sm:text-base")} style={{ color: brand.color_palette.muted }}>Professional solutions tailored to your needs.</p>
        </div>
        <div className={cn("grid gap-4", isMobile ? "grid-cols-1" : isTablet ? "grid-cols-2 gap-5" : "sm:grid-cols-2 lg:grid-cols-3 sm:gap-6")}>
          {services.map((service, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * brand.motion.stagger_delay }}>
              <div className={cn("hover:shadow-lg transition-all", isMobile ? "p-4" : "p-6 lg:p-8")} style={{ backgroundColor: brand.color_palette.background, borderRadius: `${brand.layout.border_radius}px`, boxShadow: brand.components.card_shadow === "md" ? "0 4px 6px -1px rgba(0, 0, 0, 0.1)" : "none" }}>
                <div className={cn("flex items-center justify-center mb-4", isMobile ? "w-10 h-10" : "w-12 h-12")} style={{ backgroundColor: `${brand.color_palette.primary}15`, borderRadius: brand.icons.container_style === "circle" ? "50%" : brand.icons.container_style === "square" ? "0" : `${brand.layout.border_radius / 2}px` }}>
                  <Check className={cn(isMobile ? "w-5 h-5" : "w-6 h-6")} style={{ color: brand.color_palette.primary }} />
                </div>
                <h3 className={cn("mb-2", isMobile ? "text-base" : "text-lg sm:text-xl")} style={{ fontWeight: brand.typography.heading_weight }}>{service.name}</h3>
                <p className={cn("leading-relaxed", isMobile ? "text-xs" : "text-sm sm:text-base")} style={{ color: brand.color_palette.muted }}>{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesListHorizontal({ brand, services, isMobile, isTablet }: ServicesProps) {
  return (
    <section className={cn(isMobile ? "py-12" : "py-20 lg:py-28")} style={{ backgroundColor: brand.color_palette.surface }}>
      <div className="mx-auto px-4" style={{ maxWidth: brand.layout.container_width }}>
        <div className={cn("text-center", isMobile ? "mb-8" : "mb-16")}>
          <h2 className={cn("mb-4", isMobile ? "text-2xl" : "text-3xl sm:text-4xl lg:text-5xl")} style={{ fontWeight: brand.typography.heading_weight, textTransform: brand.typography.heading_transform as any }}>WHAT WE DO</h2>
          <div className="w-20 h-1 mx-auto" style={{ backgroundColor: brand.color_palette.primary }} />
        </div>
        <div className={cn("space-y-0", isMobile ? "" : "divide-y")} style={{ borderColor: `${brand.color_palette.muted}30` }}>
          {services.map((service, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * brand.motion.stagger_delay }} className={cn("group cursor-pointer transition-all hover:pl-4", isMobile ? "py-4" : "py-8")} style={{ borderBottom: `1px solid ${brand.color_palette.muted}30` }}>
              <div className={cn("flex items-center justify-between", isMobile ? "flex-col gap-2 text-center" : "flex-row")}>
                <div className={cn("flex items-center", isMobile ? "flex-col gap-2" : "gap-6")}>
                  <span className={cn("font-mono", isMobile ? "text-xs" : "text-sm")} style={{ color: brand.color_palette.primary }}>0{i + 1}</span>
                  <h3 className={cn(isMobile ? "text-lg" : "text-xl sm:text-2xl")} style={{ fontWeight: brand.typography.heading_weight, textTransform: brand.typography.heading_transform as any }}>{service.name}</h3>
                </div>
                <p className={cn("max-w-md", isMobile ? "text-xs" : "text-sm")} style={{ color: brand.color_palette.muted }}>{service.description}</p>
                {!isMobile && <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: brand.color_palette.primary }} />}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesMasonry({ brand, services, isMobile, isTablet }: ServicesProps) {
  return (
    <section className={cn(isMobile ? "py-14" : "py-24 lg:py-32")} style={{ backgroundColor: brand.color_palette.background }}>
      <div className="mx-auto px-4" style={{ maxWidth: brand.layout.container_width }}>
        <div className={cn("text-center", isMobile ? "mb-10" : "mb-16 lg:mb-20")}>
          <h2 className={cn("mb-4", isMobile ? "text-2xl" : "text-3xl sm:text-4xl lg:text-5xl")} style={{ fontFamily: brand.typography.font_family, fontWeight: brand.typography.heading_weight }}>Our Services</h2>
          <p className={cn("max-w-lg mx-auto", isMobile ? "text-sm" : "text-base lg:text-lg")} style={{ color: brand.color_palette.muted }}>Transforming outdoor spaces with care and expertise.</p>
        </div>
        <div className={cn("grid gap-6", isMobile ? "grid-cols-1" : "grid-cols-2 lg:gap-8")}>
          {services.map((service, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * brand.motion.stagger_delay }} className={i % 3 === 0 && !isMobile ? "col-span-2" : ""}>
              <div className={cn("h-full", isMobile ? "p-6" : "p-8 lg:p-10")} style={{ backgroundColor: brand.color_palette.surface, borderRadius: `${brand.layout.border_radius}px`, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.08)" }}>
                <h3 className={cn("mb-3", isMobile ? "text-lg" : "text-xl lg:text-2xl")} style={{ fontFamily: brand.typography.font_family, fontWeight: brand.typography.heading_weight }}>{service.name}</h3>
                <p style={{ color: brand.color_palette.muted, lineHeight: brand.typography.line_height_body }}>{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesGrid2Large({ brand, services, isMobile, isTablet }: ServicesProps) {
  return (
    <section className={cn(isMobile ? "py-10" : "py-16 lg:py-24")} style={{ backgroundColor: brand.color_palette.surface }}>
      <div className="mx-auto px-4" style={{ maxWidth: brand.layout.container_width }}>
        <div className={cn(isMobile ? "mb-8" : "mb-12 lg:mb-16")}>
          <h2 className={cn("mb-3", isMobile ? "text-2xl" : "text-3xl lg:text-4xl")} style={{ fontWeight: brand.typography.heading_weight }}>What We Offer</h2>
          <p className="max-w-xl" style={{ color: brand.color_palette.muted }}>Expert painting services for every project.</p>
        </div>
        <div className={cn("grid gap-6", isMobile ? "grid-cols-1" : "grid-cols-2 lg:gap-8")}>
          {services.map((service, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * brand.motion.stagger_delay }}>
              <div className={cn("group hover:shadow-xl transition-all cursor-pointer", isMobile ? "p-5" : "p-6 lg:p-8")} style={{ backgroundColor: brand.color_palette.background, borderRadius: `${brand.layout.border_radius}px`, border: `1px solid ${brand.color_palette.muted}20` }}>
                <div className={cn("flex items-center justify-center mb-5", isMobile ? "w-12 h-12" : "w-14 h-14")} style={{ background: `linear-gradient(135deg, ${brand.color_palette.primary}, ${brand.color_palette.accent})`, borderRadius: `${brand.layout.border_radius}px` }}>
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className={cn("mb-3", isMobile ? "text-lg" : "text-xl lg:text-2xl")} style={{ fontWeight: brand.typography.heading_weight }}>{service.name}</h3>
                <p className={cn(isMobile ? "text-sm" : "text-base")} style={{ color: brand.color_palette.muted }}>{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface TestimonialsProps {
  brand: TradeBrand;
  testimonials: Array<{ author: string; role: string; content: string; rating: number }>;
  isMobile: boolean;
  isTablet: boolean;
}

function TestimonialsCards({ brand, testimonials, isMobile, isTablet }: TestimonialsProps) {
  return (
    <section className={cn(isMobile ? "py-10" : "py-16 lg:py-20")} style={{ backgroundColor: brand.color_palette.background }}>
      <div className="mx-auto px-4" style={{ maxWidth: brand.layout.container_width }}>
        <div className={cn("text-center", isMobile ? "mb-6" : "mb-10 sm:mb-14")}>
          <h2 className={cn("mb-2", isMobile ? "text-xl" : "text-2xl sm:text-3xl lg:text-4xl")} style={{ fontWeight: brand.typography.heading_weight, textTransform: brand.typography.heading_transform as any }}>What Our Clients Say</h2>
        </div>
        <div className={cn("grid gap-4", isMobile ? "grid-cols-1" : isTablet ? "grid-cols-2 gap-5" : "sm:grid-cols-2 lg:grid-cols-3 sm:gap-6")}>
          {testimonials.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * brand.motion.stagger_delay }}>
              <div className={cn(isMobile ? "p-4" : "p-6 lg:p-8")} style={{ backgroundColor: brand.color_palette.surface, borderRadius: `${brand.layout.border_radius}px` }}>
                <div className={cn("flex mb-3", isMobile ? "gap-0.5" : "gap-1")}>
                  {[...Array(t.rating)].map((_, j) => <Star key={j} className={cn("fill-yellow-400 text-yellow-400", isMobile ? "w-3 h-3" : "w-4 h-4")} />)}
                </div>
                <p className={cn("italic mb-4", isMobile ? "text-xs" : "text-sm sm:text-base")} style={{ color: brand.color_palette.text }}>"{t.content}"</p>
                <div>
                  <div className={cn("font-bold", isMobile ? "text-xs" : "text-sm sm:text-base")}>{t.author}</div>
                  <div className={cn(isMobile ? "text-[10px]" : "text-xs sm:text-sm")} style={{ color: brand.color_palette.muted }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSlider({ brand, testimonials, isMobile, isTablet }: TestimonialsProps) {
  return (
    <section className={cn(isMobile ? "py-16" : "py-24 lg:py-32")} style={{ backgroundColor: brand.color_palette.background }}>
      <div className="mx-auto px-4" style={{ maxWidth: brand.layout.container_width }}>
        <div className={cn("text-center", isMobile ? "mb-10" : "mb-16")}>
          <h2 className={cn("mb-4", isMobile ? "text-2xl" : "text-3xl sm:text-4xl lg:text-5xl")} style={{ fontWeight: brand.typography.heading_weight, textTransform: brand.typography.heading_transform as any }}>CLIENT REVIEWS</h2>
          <div className="w-20 h-1 mx-auto" style={{ backgroundColor: brand.color_palette.primary }} />
        </div>
        <div className={cn("grid gap-8", isMobile ? "grid-cols-1" : "grid-cols-3")}>
          {testimonials.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }}>
              <div className={cn("text-center", isMobile ? "p-6" : "p-8")} style={{ border: `1px solid ${brand.color_palette.muted}30`, backgroundColor: brand.color_palette.surface }}>
                <div className="flex justify-center mb-4 gap-1">
                  {[...Array(t.rating)].map((_, j) => <Star key={j} className="w-5 h-5" style={{ fill: brand.color_palette.primary, color: brand.color_palette.primary }} />)}
                </div>
                <p className={cn("mb-6", isMobile ? "text-sm" : "text-base")} style={{ color: brand.color_palette.text }}>"{t.content}"</p>
                <div className="font-bold" style={{ textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.author}</div>
                <div className="text-sm" style={{ color: brand.color_palette.muted }}>{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsQuoteLarge({ brand, testimonials, isMobile, isTablet }: TestimonialsProps) {
  const featured = testimonials[0];
  return (
    <section className={cn(isMobile ? "py-16" : "py-24 lg:py-32")} style={{ backgroundColor: brand.color_palette.surface }}>
      <div className="mx-auto px-4 text-center" style={{ maxWidth: "800px" }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <div className={cn("mb-8", isMobile ? "text-4xl" : "text-6xl lg:text-8xl")} style={{ color: brand.color_palette.accent, fontFamily: "serif" }}>"</div>
          <p className={cn("italic mb-8", isMobile ? "text-lg" : "text-2xl lg:text-3xl")} style={{ fontFamily: brand.typography.font_family, lineHeight: 1.6, color: brand.color_palette.text }}>
            {featured?.content}
          </p>
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(featured?.rating || 5)].map((_, i) => <Star key={i} className="w-5 h-5" style={{ fill: brand.color_palette.accent, color: brand.color_palette.accent }} />)}
          </div>
          <div className="font-medium" style={{ color: brand.color_palette.text }}>{featured?.author}</div>
          <div className="text-sm" style={{ color: brand.color_palette.muted }}>{featured?.role}</div>
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialsMinimal({ brand, testimonials, isMobile, isTablet }: TestimonialsProps) {
  return (
    <section className={cn(isMobile ? "py-12" : "py-20 lg:py-28")} style={{ backgroundColor: brand.color_palette.background }}>
      <div className="mx-auto px-4" style={{ maxWidth: brand.layout.container_width }}>
        <h2 className={cn("mb-10", isMobile ? "text-xl" : "text-2xl lg:text-3xl")} style={{ fontWeight: brand.typography.heading_weight }}>Happy Clients</h2>
        <div className={cn("grid gap-8", isMobile ? "grid-cols-1" : "grid-cols-2")}>
          {testimonials.slice(0, 2).map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
              <div className="flex gap-1 mb-3">
                {[...Array(t.rating)].map((_, j) => <Star key={j} className="w-4 h-4" style={{ fill: brand.color_palette.accent, color: brand.color_palette.accent }} />)}
              </div>
              <p className={cn("mb-4", isMobile ? "text-sm" : "text-base lg:text-lg")} style={{ color: brand.color_palette.text }}>"{t.content}"</p>
              <div className={cn("flex items-center gap-3 pt-4", isMobile ? "" : "")} style={{ borderTop: `1px solid ${brand.color_palette.muted}20` }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: brand.color_palette.primary }}>
                  {t.author.charAt(0)}
                </div>
                <div>
                  <div className="font-medium">{t.author}</div>
                  <div className="text-sm" style={{ color: brand.color_palette.muted }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface WhyChooseUsProps {
  brand: TradeBrand;
  about: { summary: string; mission: string; why_choose_us: string[] };
  images: { hero: string; team: string; gallery: string[] };
  isMobile: boolean;
  isTablet: boolean;
}

function WhyChooseUsSection({ brand, about, images, isMobile, isTablet }: WhyChooseUsProps) {
  return (
    <section id="about" className={cn("px-4", isMobile ? "py-10" : isTablet ? "py-12" : "py-16 lg:py-20")}>
      <div className="mx-auto" style={{ maxWidth: brand.layout.container_width }}>
        <div className={cn("items-center", isMobile ? "flex flex-col gap-8" : isTablet ? "grid grid-cols-2 gap-8" : "grid gap-12 lg:grid-cols-2 lg:gap-16")}>
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className={cn(isMobile ? "order-2 w-full" : isTablet ? "order-1" : "order-1")}>
            <div className={cn("relative overflow-hidden", isMobile ? "aspect-[16/10]" : "aspect-[4/3]")} style={{ borderRadius: brand.imagery.border_radius, boxShadow: brand.imagery.shadow === "xl" ? "0 20px 25px -5px rgba(0, 0, 0, 0.1)" : "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}>
              <img src={images.team} alt="Our professional team" className="w-full h-full object-cover" />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className={cn(isMobile ? "order-1" : isTablet ? "order-2" : "order-2")}>
            <h2 className={cn("mb-4", isMobile ? "text-xl" : isTablet ? "text-2xl" : "text-2xl sm:text-3xl lg:text-4xl")} style={{ fontWeight: brand.typography.heading_weight, textTransform: brand.typography.heading_transform as any }}>Why Choose Us?</h2>
            <p className={cn("mb-6 leading-relaxed", isMobile ? "text-sm" : "text-base sm:text-lg")} style={{ color: brand.color_palette.muted }}>
              {about.summary}
            </p>
            <ul className="space-y-3">
              {about.why_choose_us.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className={cn("rounded-full flex items-center justify-center flex-shrink-0 mt-0.5", isMobile ? "w-5 h-5" : "w-6 h-6")} style={{ backgroundColor: `${brand.color_palette.primary}20` }}>
                    <Check className={cn(isMobile ? "w-3 h-3" : "w-3.5 h-3.5")} style={{ color: brand.color_palette.primary }} />
                  </div>
                  <span className={cn(isMobile ? "text-xs" : "text-sm sm:text-base")}>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface GuaranteesProps {
  brand: TradeBrand;
  guarantees: string[];
  isMobile: boolean;
  isTablet: boolean;
}

function GuaranteesSection({ brand, guarantees, isMobile, isTablet }: GuaranteesProps) {
  return (
    <section className={cn("text-white", isMobile ? "py-8" : isTablet ? "py-10" : "py-12 lg:py-16")} style={{ backgroundColor: brand.color_palette.primary }}>
      <div className="mx-auto px-4" style={{ maxWidth: brand.layout.container_width }}>
        <h2 className={cn("text-center", isMobile ? "text-lg mb-4" : "text-xl sm:text-2xl mb-8")} style={{ fontWeight: brand.typography.heading_weight, textTransform: brand.typography.heading_transform as any }}>Our Guarantees</h2>
        <div className={cn("grid grid-cols-2 gap-4", !isMobile && !isTablet && "lg:grid-cols-4 sm:gap-6")}>
          {guarantees.map((guarantee: string, i: number) => (
            <div key={i} className={cn("text-center", isMobile ? "p-2" : "p-4")}>
              <Award className={cn("mx-auto text-white/80", isMobile ? "w-5 h-5 mb-1" : "w-8 h-8 mb-3")} />
              <p className={cn("font-medium", isMobile ? "text-[10px]" : "text-xs sm:text-sm")}>{guarantee}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface FAQProps {
  brand: TradeBrand;
  faqs: Array<{ q: string; a: string }>;
  isMobile: boolean;
  isTablet: boolean;
}

function FAQSection({ brand, faqs, isMobile, isTablet }: FAQProps) {
  return (
    <section className={cn(isMobile ? "py-10" : isTablet ? "py-12" : "py-16 lg:py-20")} style={{ backgroundColor: brand.color_palette.surface }}>
      <div className="mx-auto px-4" style={{ maxWidth: "800px" }}>
        <h2 className={cn("text-center", isMobile ? "text-xl mb-6" : isTablet ? "text-2xl mb-8" : "text-2xl sm:text-3xl mb-10 lg:mb-12")} style={{ fontWeight: brand.typography.heading_weight, textTransform: brand.typography.heading_transform as any }}>Frequently Asked Questions</h2>
        <div className={cn("space-y-3", !isMobile && "sm:space-y-4")}>
          {faqs.map((faq, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className={cn(isMobile ? "p-4" : "p-5 lg:p-6")} style={{ backgroundColor: brand.color_palette.background, borderRadius: `${brand.layout.border_radius}px`, boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)" }}>
                <h3 className={cn("mb-2", isMobile ? "text-sm" : "text-base sm:text-lg")} style={{ fontWeight: brand.typography.heading_weight }}>{faq.q}</h3>
                <p className={cn(isMobile ? "text-xs" : "text-sm sm:text-base")} style={{ color: brand.color_palette.muted }}>{faq.a}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface ContactCTAProps {
  brand: TradeBrand;
  ctaText: string;
  isMobile: boolean;
  isTablet: boolean;
}

function ContactCTASection({ brand, ctaText, isMobile, isTablet }: ContactCTAProps) {
  return (
    <section className={cn("px-4", isMobile ? "py-10" : isTablet ? "py-12" : "py-16 lg:py-20")}>
      <div className={cn("mx-auto text-center text-white relative overflow-hidden", isMobile ? "p-6" : isTablet ? "p-8" : "p-10 lg:p-14")} style={{ maxWidth: "900px", backgroundColor: brand.color_palette.primary, borderRadius: `${brand.layout.border_radius * 2}px` }}>
        <h2 className={cn("mb-3 relative z-10", isMobile ? "text-xl" : isTablet ? "text-2xl" : "text-2xl sm:text-3xl lg:text-4xl")} style={{ fontWeight: brand.typography.heading_weight, textTransform: brand.typography.heading_transform as any }}>Ready to get started?</h2>
        <p className={cn("text-white/80 mb-6 relative z-10", isMobile ? "text-xs" : isTablet ? "text-sm" : "text-base lg:text-lg")}>Contact us today for a free consultation and estimate.</p>
        <button className={cn("text-white font-bold hover:opacity-90 transition-colors relative z-10 touch-manipulation", isMobile ? "w-full px-5 py-3 text-sm" : "px-8 py-4 text-base sm:w-auto")} style={{ backgroundColor: brand.color_palette.background, color: brand.color_palette.primary, borderRadius: brand.cta_style.button_shape === "rounded-full" ? "9999px" : `${brand.layout.border_radius}px` }}>
          {ctaText}
        </button>
      </div>
    </section>
  );
}

interface FooterProps {
  brand: TradeBrand;
  about: { summary: string; mission: string; why_choose_us: string[] };
  contact: { phone: string; email: string; address: string };
  tradeIdentity?: TradeIdentity;
  isMobile: boolean;
  isTablet: boolean;
}

function FooterSection({ brand, about, contact, tradeIdentity, isMobile, isTablet }: FooterProps) {
  const isDarkBrand = brand.color_palette.background.startsWith("#0") || brand.color_palette.background.startsWith("#1");
  const footerBg = isDarkBrand ? brand.color_palette.surface : "#111827";
  return (
    <footer id="contact" className={cn("text-white", isMobile ? "pt-10 pb-5" : isTablet ? "pt-12 pb-6" : "pt-16 lg:pt-20 pb-8")} style={{ backgroundColor: footerBg }}>
      <div className="mx-auto px-4" style={{ maxWidth: brand.layout.container_width }}>
        <div className={cn("grid gap-8 mb-10", isMobile ? "grid-cols-1" : isTablet ? "grid-cols-2 gap-6" : "sm:grid-cols-2 lg:grid-cols-4 sm:mb-12 lg:mb-16")}>
          <div className={cn(!isMobile && !isTablet && "sm:col-span-2")}>
            <div className={cn("font-bold text-white mb-4", isMobile ? "text-lg" : "text-xl sm:text-2xl")} style={{ fontWeight: brand.typography.heading_weight }}>{tradeIdentity?.trade || 'ServicePro'}</div>
            <p className={cn("text-gray-400 max-w-sm mb-4", isMobile ? "text-xs" : "text-sm sm:text-base")}>{about.mission}</p>
          </div>
          <div>
            <h4 className={cn("font-bold mb-4", isMobile ? "text-sm" : "text-base sm:text-lg")}>Contact</h4>
            <ul className={cn("space-y-3 text-gray-400", isMobile ? "text-xs" : "text-sm sm:text-base")}>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href={`tel:${contact.phone}`} className="hover:text-white transition-colors">{contact.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="break-all">{contact.email}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>{contact.address}</span>
              </li>
            </ul>
          </div>
          <div className={cn(isMobile && "hidden")}>
            <h4 className={cn("font-bold mb-4", isMobile ? "text-sm" : "text-base sm:text-lg")}>Legal</h4>
            <ul className={cn("space-y-3 text-gray-400", isMobile ? "text-xs" : "text-sm sm:text-base")}>
              <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer transition-colors">Terms of Service</li>
            </ul>
          </div>
        </div>
        <div className={cn("border-t border-gray-800 pt-6 text-center text-gray-500", isMobile ? "text-[10px]" : "text-xs sm:text-sm")}>
          © {new Date().getFullYear()} {tradeIdentity?.trade || 'ServicePro'}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
