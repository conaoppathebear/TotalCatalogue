import { useRoute, Link } from "wouter";
import { useTrade } from "@/hooks/use-trades";
import { ThemeSelector } from "@/components/ThemeSelector";
import { DynamicIcon } from "@/components/DynamicIcon";
import { ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function TradeDetail() {
  const [, params] = useRoute("/trade/:slug");
  const slug = params?.slug || "";
  const { data: trade, isLoading, error } = useTrade(slug);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-10 h-10 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (error || !trade) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center flex-col gap-6">
        <h1 className="text-2xl font-semibold text-white">Trade Not Found</h1>
        <Link href="/" className="text-purple-400 hover:text-purple-300 transition-colors">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]" />
      </div>

      <header className="relative z-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="FastCatalogue" className="h-8 brightness-0 invert" />
          </Link>
        </div>
      </header>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-white transition-colors mb-8 group"
            >
              <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              Back to Industries
            </Link>

            <div className="flex items-center gap-6 mb-12">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500/20 to-violet-600/20 border border-purple-500/20 flex items-center justify-center">
                <DynamicIcon name={trade.icon} size={36} className="text-purple-400" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-white mb-2">{trade.name} Templates</h1>
                <p className="text-muted-foreground text-lg">{trade.description}</p>
              </div>
            </div>
          </motion.div>
        </div>

        <main className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-3">Select a Theme</h2>
              <p className="text-muted-foreground">Choose a design style that matches your brand vision.</p>
            </div>

            <ThemeSelector slug={trade.slug} />
          </motion.div>
        </main>
      </div>
    </div>
  );
}
