import type { TradeContent, Blueprint, TradeIdentity } from "@shared/schema";
import { Phone, Star, ShieldCheck, ArrowRight, Clock, Zap, MapPin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { getTradeImages } from "@/lib/image-engine";
import { getTradeCta } from "@/lib/trade-identity";
import { getBrand, getBrandStyles, type TradeBrand } from "@/lib/brand-engine";
import type { ViewportMode } from "@/pages/Preview";
import { cn } from "@/lib/utils";

interface ThemeBoldProps {
  content: TradeContent;
  blueprint?: Blueprint;
  tradeIdentity?: TradeIdentity;
  viewport?: ViewportMode;
}

export function ThemeBold({ content, blueprint, tradeIdentity, viewport = 'desktop' }: ThemeBoldProps) {
  const { hero, about, services, testimonials, contact } = content;
  const trustSymbols = (content as any).trustSymbols || tradeIdentity?.trust_symbols || [];
  const painPoints = (content as any).painPoints || tradeIdentity?.pain_points || [];
  const images = getTradeImages(tradeIdentity);

  const tradeSlug = tradeIdentity?.slug || "plumber";
  const brand = getBrand(tradeSlug);
  const brandStyles = getBrandStyles(brand);

  const isMobile = viewport === 'mobile';
  const isTablet = viewport === 'tablet';

  const heroHeadline = blueprint?.content_rules?.hero_headline || hero.headline;
  const heroSubheadline = blueprint?.content_rules?.hero_subheadline || hero.subheadline;
  const ctaText = blueprint?.content_rules?.cta_text || getTradeCta(tradeIdentity, "primary");
  const emergencyCta = getTradeCta(tradeIdentity, "emergency");
  const isUrgent = blueprint?.content_rules?.urgency_level === "high";

  const getBoldAccentColor = () => {
    switch (tradeSlug) {
      case "plumber": return "#FF3D00";
      case "electrician": return "#FFB800";
      case "landscaper": return "#00C853";
      case "painter": return "#E040FB";
      default: return brand.color_palette.accent;
    }
  };

  const getBoldSecondaryColor = () => {
    switch (tradeSlug) {
      case "plumber": return "#0066FF";
      case "electrician": return "#1A1A2E";
      case "landscaper": return "#1B4332";
      case "painter": return "#4A148C";
      default: return brand.color_palette.primary;
    }
  };

  const accentColor = getBoldAccentColor();
  const secondaryColor = getBoldSecondaryColor();

  const getHeroStyle = () => {
    switch (tradeSlug) {
      case "plumber":
        return { bg: "#F5F5F5", accent: accentColor, skew: "-12deg" };
      case "electrician":
        return { bg: "#0F0F1A", accent: accentColor, skew: "0deg" };
      case "landscaper":
        return { bg: "#F1F8E9", accent: accentColor, skew: "8deg" };
      case "painter":
        return { bg: "#FFF8E1", accent: accentColor, skew: "-6deg" };
      default:
        return { bg: "#F5F5F5", accent: accentColor, skew: "-12deg" };
    }
  };

  const heroStyle = getHeroStyle();
  const isDarkBg = tradeSlug === "electrician";

  return (
    <div 
      className="theme-bold min-h-screen"
      style={{
        ...brandStyles,
        fontFamily: brand.typography.font_family,
        backgroundColor: brand.color_palette.background,
        color: isDarkBg ? "#FFFFFF" : brand.color_palette.text,
      } as React.CSSProperties}
    >
      <div className={cn("text-white px-4", isMobile ? "py-1.5" : "py-2 sm:py-2.5")} style={{ backgroundColor: secondaryColor }}>
        <div className={cn("max-w-7xl mx-auto flex items-center font-bold uppercase tracking-wide", isMobile ? "flex-col gap-0.5 text-[10px]" : "flex-col gap-1 text-xs sm:flex-row sm:justify-between sm:text-sm")}>
          <span className="flex items-center gap-1.5">
            <Clock className={cn(isMobile ? "w-2.5 h-2.5" : "w-3 h-3 sm:w-4 sm:h-4")} />
            {isUrgent ? "24/7 Emergency Service" : `Serving ${contact.address} Area`}
          </span>
          <a href={`tel:${contact.phone}`} className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
            <Phone className={cn(isMobile ? "w-2.5 h-2.5" : "w-3 h-3 sm:w-4 sm:h-4")} />
            Call Now: {contact.phone}
          </a>
        </div>
      </div>

      <header className={cn(isMobile ? "py-2" : "py-3 sm:py-4 lg:py-6")} style={{ borderBottom: `4px solid ${accentColor}`, backgroundColor: isDarkBg ? "#1A1A2E" : "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className={cn("font-black uppercase tracking-tighter", isMobile ? "text-lg" : "text-xl sm:text-2xl lg:text-4xl")} style={{ fontFamily: brand.typography.font_family, fontStyle: tradeSlug === "plumber" ? "italic" : "normal" }}>
            {tradeSlug === "plumber" && <>PRO<span style={{ color: accentColor }}>PLUMB</span></>}
            {tradeSlug === "electrician" && <><span style={{ color: accentColor }}>VOLT</span>MASTERS</>}
            {tradeSlug === "landscaper" && <>GREEN<span style={{ color: accentColor }}>FORCE</span></>}
            {tradeSlug === "painter" && <><span style={{ color: accentColor }}>BRUSH</span>PRO</>}
          </div>
          <button className={cn("text-white font-bold uppercase tracking-wider hover:opacity-90 transition-colors touch-manipulation", isMobile ? "hidden" : "px-4 py-2 text-xs lg:px-8 lg:py-3 lg:text-sm")} style={{ backgroundColor: accentColor }}>
            {ctaText}
          </button>
        </div>
      </header>

      <section className={cn("px-4 relative overflow-hidden", isMobile ? "py-8" : isTablet ? "py-12" : "py-10 sm:py-16 lg:py-24")} style={{ backgroundColor: heroStyle.bg }}>
        {heroStyle.skew !== "0deg" && (
          <div className={cn("absolute top-0 right-0 w-1/2 h-full translate-x-20", isMobile ? "opacity-10" : "opacity-10 lg:opacity-100")} style={{ backgroundColor: accentColor, transform: `skewX(${heroStyle.skew})` }} />
        )}
        
        <div className={cn("max-w-7xl mx-auto relative z-10", isMobile ? "flex flex-col gap-6" : isTablet ? "grid grid-cols-2 gap-8 items-center" : "grid gap-8 items-center lg:grid-cols-2 lg:gap-12")}>
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            {isUrgent && (
              <div className={cn("flex items-center gap-2", isMobile ? "mb-3" : "mb-4 sm:mb-6")}>
                <span className={cn("text-white px-3 py-1 rounded-full font-bold uppercase animate-pulse", isMobile ? "text-[10px]" : "text-xs sm:text-sm")} style={{ backgroundColor: "#DC2626" }}>
                  Emergency Response
                </span>
              </div>
            )}
            <h1 className={cn("font-black uppercase leading-[0.95] mb-4", isMobile ? "text-2xl" : isTablet ? "text-4xl mb-5" : "text-3xl sm:text-5xl lg:text-6xl xl:text-7xl sm:mb-6")} style={{ fontFamily: brand.typography.font_family, color: isDarkBg ? "#FFFFFF" : brand.color_palette.text, textTransform: brand.typography.heading_transform as any }}>
              {heroHeadline}
            </h1>
            <p className={cn("font-medium pl-4", isMobile ? "text-sm mb-5" : isTablet ? "text-base mb-6" : "text-base mb-6 sm:text-lg lg:text-2xl sm:pl-6 sm:mb-8")} style={{ borderLeft: `4px solid ${accentColor}`, color: isDarkBg ? "#9CA3AF" : brand.color_palette.muted }}>
              {heroSubheadline}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href={`tel:${contact.phone}`} className={cn("text-white font-bold uppercase tracking-wide hover:opacity-90 transition-colors shadow-xl text-center touch-manipulation flex items-center justify-center gap-2", isMobile ? "w-full px-5 py-3 text-sm" : "px-6 py-3.5 text-base sm:px-8 lg:px-10 lg:py-5 lg:text-xl")} style={{ backgroundColor: accentColor }}>
                <Phone className="w-5 h-5" />
                {isUrgent ? emergencyCta : ctaText}
              </a>
            </div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className={cn(isMobile ? "block" : isTablet ? "block" : "hidden lg:block")}>
            <div className={cn("overflow-hidden", isMobile ? "aspect-[16/10] rounded-lg shadow-xl" : isTablet ? "aspect-[4/3]" : "aspect-[4/3]")} style={{ border: tradeSlug === "electrician" ? "none" : `4px solid ${secondaryColor}`, boxShadow: tradeSlug === "electrician" ? `0 0 30px ${accentColor}40` : `12px 12px 0px 0px ${secondaryColor}`, borderRadius: tradeSlug === "landscaper" ? "24px" : tradeSlug === "painter" ? "16px" : "0" }}>
              <img src={images.hero} alt={`${tradeIdentity?.trade || 'Professional'} in action`} className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      <div className={cn("text-white px-4", isMobile ? "py-5" : "py-6 sm:py-8 lg:py-12")} style={{ backgroundColor: secondaryColor }}>
        <div className={cn("max-w-7xl mx-auto grid text-center", isMobile ? "gap-3" : isTablet ? "grid-cols-3 gap-4" : "gap-4 sm:grid-cols-3 sm:gap-6 lg:gap-8")}>
          {about.why_choose_us.slice(0, 3).map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={cn("flex items-center justify-center font-bold uppercase tracking-wider", isMobile ? "gap-2 text-xs" : "gap-2 text-sm sm:gap-3 lg:text-xl lg:gap-4")}>
              <ShieldCheck className={cn("flex-shrink-0", isMobile ? "w-4 h-4" : "w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8")} style={{ color: accentColor }} />
              <span>{item}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {isUrgent && painPoints.length > 0 && (
        <section className={cn("px-4", isMobile ? "py-8" : "py-10 sm:py-12 lg:py-16")} style={{ backgroundColor: isDarkBg ? "#1A1A2E" : brand.color_palette.surface }}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={cn("font-bold", isMobile ? "text-lg mb-4" : "text-xl mb-4 sm:text-2xl lg:text-3xl sm:mb-6 lg:mb-8")} style={{ fontFamily: brand.typography.font_family, textTransform: "uppercase" }}>Having These Problems?</h2>
            <div className={cn("grid grid-cols-2 gap-2", !isMobile && "sm:gap-3 lg:grid-cols-3 lg:gap-4")}>
              {painPoints.slice(0, 6).map((point: string, i: number) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className={cn("rounded-lg transition-colors", isMobile ? "p-3" : "p-3 sm:p-4 lg:p-6")} style={{ backgroundColor: isDarkBg ? "#0F0F1A" : brand.color_palette.background, border: `2px solid ${brand.color_palette.muted}30` }}>
                  <Zap className={cn("mx-auto", isMobile ? "w-4 h-4 mb-1" : "w-4 h-4 mb-1.5 sm:w-5 sm:h-5 lg:w-6 lg:h-6 sm:mb-2")} style={{ color: accentColor }} />
                  <p className={cn("font-medium", isMobile ? "text-[10px]" : "text-xs sm:text-sm")}>{point}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className={cn("px-4 max-w-5xl mx-auto", isMobile ? "py-10" : "py-12 sm:py-16 lg:py-24")}>
        <h2 className={cn("font-black uppercase text-center", isMobile ? "text-xl mb-6" : "text-2xl mb-8 sm:text-3xl lg:text-5xl sm:mb-12 lg:mb-16")} style={{ fontFamily: brand.typography.font_family }}>
          Our Services
        </h2>
        <div className={cn("space-y-4", !isMobile && "sm:space-y-6")}>
          {services.map((service, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={cn("group cursor-pointer transition-all", isMobile ? "pb-3" : "pb-4 sm:pb-6")} style={{ borderBottom: `2px solid ${brand.color_palette.muted}30` }}>
              <div className={cn("flex gap-2", isMobile ? "flex-col" : "flex-col sm:flex-row sm:items-center sm:justify-between sm:gap-4")}>
                <div className={cn("flex items-baseline", isMobile ? "gap-2" : "gap-3 sm:gap-4 lg:gap-6")}>
                  <span className={cn("font-black", isMobile ? "text-base" : "text-lg sm:text-xl lg:text-2xl")} style={{ color: accentColor }}>0{i+1}</span>
                  <div>
                    <h3 className={cn("font-bold uppercase group-hover:translate-x-2 transition-transform", isMobile ? "text-base" : "text-lg sm:text-xl lg:text-3xl")} style={{ fontFamily: brand.typography.font_family }}>
                      {service.name}
                    </h3>
                    <p className={cn("mt-1", isMobile ? "text-xs" : "text-sm sm:text-base")} style={{ color: brand.color_palette.muted }}>{service.description}</p>
                  </div>
                </div>
                <ArrowRight className={cn("hidden opacity-0 group-hover:opacity-100 transition-opacity", !isMobile && "sm:block w-5 h-5 lg:w-8 lg:h-8")} style={{ color: accentColor }} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className={cn("px-4", isMobile ? "py-8" : "py-10 sm:py-12 lg:py-16")} style={{ backgroundColor: isDarkBg ? "#1A1A2E" : brand.color_palette.surface }}>
        <div className="max-w-5xl mx-auto">
          <h2 className={cn("font-black uppercase text-center", isMobile ? "text-lg mb-6" : "text-xl mb-8 sm:text-2xl lg:text-4xl sm:mb-12")} style={{ fontFamily: brand.typography.font_family }}>Customer Reviews</h2>
          <div className={cn("grid gap-4", isMobile ? "grid-cols-1" : "sm:grid-cols-2 lg:grid-cols-3 sm:gap-6")}>
            {testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={cn("relative", isMobile ? "p-4" : "p-5 sm:p-6 lg:p-8")} style={{ backgroundColor: isDarkBg ? "#0F0F1A" : brand.color_palette.background, border: `3px solid ${accentColor}`, borderRadius: `${brand.layout.border_radius}px` }}>
                <div className={cn("flex mb-3", isMobile ? "gap-0.5" : "gap-1")}>
                  {[...Array(t.rating)].map((_, j) => <Star key={j} className={cn("fill-current", isMobile ? "w-3 h-3" : "w-4 h-4")} style={{ color: accentColor }} />)}
                </div>
                <p className={cn("font-medium mb-4", isMobile ? "text-xs" : "text-sm sm:text-base")}>"{t.content}"</p>
                <div className={cn("font-bold uppercase", isMobile ? "text-xs" : "text-sm")}>— {t.author}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={cn("px-4", isMobile ? "py-10" : "py-12 sm:py-16 lg:py-20")} style={{ backgroundColor: accentColor }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className={cn("font-black uppercase", isMobile ? "text-xl mb-3" : "text-2xl mb-4 sm:text-3xl lg:text-5xl sm:mb-6")} style={{ fontFamily: brand.typography.font_family }}>
            Ready to Get Started?
          </h2>
          <p className={cn("mb-6 opacity-90", isMobile ? "text-sm" : "text-base sm:text-lg lg:text-xl sm:mb-8")}>
            Call now for fast, reliable service.
          </p>
          <a href={`tel:${contact.phone}`} className={cn("inline-flex items-center justify-center gap-2 font-bold uppercase tracking-wide transition-colors touch-manipulation", isMobile ? "w-full px-6 py-4 text-base" : "px-8 py-4 text-lg lg:px-12 lg:py-5 lg:text-xl")} style={{ backgroundColor: secondaryColor, color: "#FFFFFF" }}>
            <Phone className="w-5 h-5 lg:w-6 lg:h-6" />
            {contact.phone}
          </a>
        </div>
      </section>

      <footer id="contact" className={cn("text-white", isMobile ? "pt-10 pb-5" : "pt-12 pb-6 sm:pt-16 lg:pt-20 sm:pb-8")} style={{ backgroundColor: secondaryColor }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className={cn("grid gap-8 mb-10", isMobile ? "grid-cols-1" : isTablet ? "grid-cols-2 gap-6" : "sm:grid-cols-2 lg:grid-cols-4 sm:mb-12 lg:mb-16")}>
            <div className={cn(!isMobile && !isTablet && "sm:col-span-2")}>
              <div className={cn("font-black uppercase mb-4", isMobile ? "text-lg" : "text-xl sm:text-2xl")} style={{ fontFamily: brand.typography.font_family }}>{tradeIdentity?.trade || 'ServicePro'}</div>
              <p className={cn("text-gray-400 max-w-sm mb-4", isMobile ? "text-xs" : "text-sm sm:text-base")}>{about.mission}</p>
            </div>
            <div>
              <h4 className={cn("font-bold uppercase mb-4", isMobile ? "text-sm" : "text-base sm:text-lg")}>Contact</h4>
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
              <h4 className={cn("font-bold uppercase mb-4", isMobile ? "text-sm" : "text-base sm:text-lg")}>Trust</h4>
              <ul className={cn("space-y-2", isMobile ? "text-xs" : "text-sm")}>
                {trustSymbols.slice(0, 4).map((symbol: string, i: number) => (
                  <li key={i} className="flex items-center gap-2 text-gray-400">
                    <ShieldCheck className="w-4 h-4" style={{ color: accentColor }} />
                    {symbol}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={cn("border-t border-gray-700 pt-6 text-center text-gray-500", isMobile ? "text-[10px]" : "text-xs sm:text-sm")}>
            © {new Date().getFullYear()} {tradeIdentity?.trade || 'ServicePro'}. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
