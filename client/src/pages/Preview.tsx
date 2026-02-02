import { useRoute, Link } from "wouter";
import { useTrade } from "@/hooks/use-trades";
import { ThemeClean } from "@/components/themes/ThemeClean";
import { ThemeBold } from "@/components/themes/ThemeBold";
import { ThemeLuxury } from "@/components/themes/ThemeLuxury";
import { ArrowLeft, Monitor, Smartphone, Tablet } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export type ViewportMode = 'desktop' | 'tablet' | 'mobile';

import { PlumberA } from "./custom-previews/plumber/PlumberA";
import { PlumberB } from "./custom-previews/plumber/PlumberB";
import { PlumberC } from "./custom-previews/plumber/PlumberC";
import { ElectricianA } from "./custom-previews/electrician/ElectricianA";
import { ElectricianB } from "./custom-previews/electrician/ElectricianB";
import { ElectricianC } from "./custom-previews/electrician/ElectricianC";

export default function Preview() {
  const [, params] = useRoute("/preview/:slug/:theme");
  const slug = params?.slug || "";
  const themeId = params?.theme || "clean";
  
  const { data: trade, isLoading } = useTrade(slug);
  const [viewport, setViewport] = useState<ViewportMode>('desktop');

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin" />
          <p className="text-gray-500 font-medium">Generating preview...</p>
        </div>
      </div>
    );
  }

  if (!trade || !trade.content) {
    return <div className="p-10">Trade content not found.</div>;
  }

  const blueprint = trade.blueprints?.[themeId];
  const tradeIdentity = trade.tradeIdentity;

  const renderTheme = () => {
    const props = { 
      content: trade.content,
      blueprint: blueprint,
      tradeIdentity: tradeIdentity,
      viewport: viewport
    };

    // CUSTOM PREVIEWS FOR PLUMBER & ELECTRICIAN
    if (slug === 'plumber') {
      if (themeId === 'clean') return <PlumberA {...props} />;
      if (themeId === 'bold') return <PlumberB {...props} />;
      if (themeId === 'luxury') return <PlumberC {...props} />;
    }

    if (slug === 'electrician') {
      if (themeId === 'clean') return <ElectricianA {...props} />;
      if (themeId === 'bold') return <ElectricianB {...props} />;
      if (themeId === 'luxury') return <ElectricianC {...props} />;
    }

    // FALLBACK TO THEME ENGINE
    if (themeId === 'clean') return <ThemeClean {...props} />;
    if (themeId === 'bold') return <ThemeBold {...props} />;
    if (themeId === 'luxury') return <ThemeLuxury {...props} />;
    return null;
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-gray-900">
      <header className="h-16 flex items-center justify-between px-6 bg-gray-900 text-white border-b border-gray-800 shrink-0">
        <div className="flex items-center gap-4">
          <Link href={`/trade/${slug}`} className="p-2 hover:bg-gray-800 rounded-lg transition-colors text-gray-400 hover:text-white">
            <ArrowLeft size={20} />
          </Link>
          <div>
            <span className="font-bold text-sm block">{trade.name}</span>
            <span className="text-xs text-gray-500 capitalize">{themeId} Theme {blueprint ? `(${blueprint.name})` : ''}</span>
          </div>
        </div>

        <div className="flex items-center bg-black/50 rounded-lg p-1 border border-gray-800">
          <button 
            onClick={() => setViewport('desktop')}
            className={cn("p-2 rounded transition-colors", viewport === 'desktop' ? 'bg-gray-700 text-white' : 'text-gray-500 hover:text-gray-300')}
          >
            <Monitor size={18} />
          </button>
          <button 
            onClick={() => setViewport('tablet')}
            className={cn("p-2 rounded transition-colors", viewport === 'tablet' ? 'bg-gray-700 text-white' : 'text-gray-500 hover:text-gray-300')}
          >
            <Tablet size={18} />
          </button>
          <button 
            onClick={() => setViewport('mobile')}
            className={cn("p-2 rounded transition-colors", viewport === 'mobile' ? 'bg-gray-700 text-white' : 'text-gray-500 hover:text-gray-300')}
          >
            <Smartphone size={18} />
          </button>
        </div>

        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
          Publish Site
        </button>
      </header>

      <div className="flex-1 bg-gray-900 overflow-hidden flex items-center justify-center p-4 md:p-8">
        <div 
          className={cn(
            "bg-white shadow-2xl overflow-y-auto transition-all duration-500 ease-in-out scrollbar-hide",
            viewport === 'desktop' && "w-full h-full rounded-lg",
            viewport === 'tablet' && "w-[768px] h-[90%] rounded-[2rem] border-[12px] border-gray-800",
            viewport === 'mobile' && "w-[375px] h-[85%] rounded-[2.5rem] border-[12px] border-gray-800"
          )}
        >
          {renderTheme()}
        </div>
      </div>
    </div>
  );
}
