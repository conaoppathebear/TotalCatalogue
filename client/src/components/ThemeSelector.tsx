import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ThemeOption {
  id: 'clean' | 'bold' | 'luxury';
  name: string;
  description: string;
  previewBg: string;
  previewAccent: string;
}

const THEMES: ThemeOption[] = [
  {
    id: 'clean',
    name: 'Clean & Trust',
    description: 'Minimalist, trustworthy palette ideal for service professionals who value clarity.',
    previewBg: 'bg-gradient-to-br from-blue-50 to-slate-50',
    previewAccent: 'bg-blue-500'
  },
  {
    id: 'bold',
    name: 'Bold & Conversion',
    description: 'High contrast, aggressive typography designed to maximize lead capture.',
    previewBg: 'bg-gradient-to-br from-stone-100 to-red-50',
    previewAccent: 'bg-red-500'
  },
  {
    id: 'luxury',
    name: 'Premium & Luxury',
    description: 'Elegant dark aesthetic with gold accents for high-end service providers.',
    previewBg: 'bg-gradient-to-br from-slate-900 to-slate-800',
    previewAccent: 'bg-amber-500'
  }
];

export function ThemeSelector({ slug }: { slug: string }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {THEMES.map((theme, index) => (
        <motion.div
          key={theme.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15, duration: 0.5 }}
          className="group"
        >
          <div className="h-full gradient-border rounded-2xl overflow-hidden transition-all duration-500 hover:glow-sm">
            <div className={cn("h-52 w-full relative overflow-hidden", theme.previewBg)}>
              <div className="absolute inset-4 flex flex-col">
                <div className="flex items-center gap-1.5 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                </div>
                
                <div className={cn(
                  "flex-1 rounded-lg p-4 transition-transform duration-500 origin-top group-hover:scale-[1.02]",
                  theme.id === 'luxury' ? 'bg-slate-800/80' : 'bg-white/90 shadow-lg'
                )}>
                  <div className={cn(
                    "h-1.5 w-16 rounded mb-3",
                    theme.id === 'luxury' ? 'bg-amber-500/60' : 'bg-slate-300/60'
                  )} />
                  <div className={cn(
                    "h-2 w-28 rounded mb-2",
                    theme.id === 'luxury' ? 'bg-white/20' : 'bg-slate-200/80'
                  )} />
                  <div className={cn(
                    "h-2 w-20 rounded mb-4",
                    theme.id === 'luxury' ? 'bg-white/10' : 'bg-slate-100/80'
                  )} />
                  <div className={cn("h-6 w-20 rounded", theme.previewAccent, 'opacity-80')} />
                </div>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                {theme.name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {theme.description}
              </p>
              
              <Link 
                href={`/preview/${slug}/${theme.id}`} 
                className="w-full inline-flex justify-center items-center gap-2 py-3 px-5 rounded-xl bg-gradient-to-r from-purple-500 to-violet-600 text-white font-medium shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                Preview Theme
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
