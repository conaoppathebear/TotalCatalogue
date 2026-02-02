import { Link } from "wouter";
import { useTrades } from "@/hooks/use-trades";
import { DynamicIcon } from "@/components/DynamicIcon";
import { motion } from "framer-motion";
import { ArrowRight, Check, Zap, Shield, Clock } from "lucide-react";

export default function Home() {
  const { data: trades, isLoading, error } = useTrades();

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[100px]" />
      </div>

      <header className="relative z-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="FastCatalogue" className="h-8 brightness-0 invert" />
          </Link>
        </div>
      </header>

      <section className="relative z-10 pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-muted-foreground mb-8">
              <Zap size={14} className="text-purple-400" />
              Professional websites in minutes, not months
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
              <span className="text-white">Launch Your</span>
              <br />
              <span className="gradient-text">Premium Website</span>
              <br />
              <span className="text-white">Instantly</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
              Select your industry, choose from stunning themes, and get a high-converting 
              website generated instantly. No design skills required.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              {[
                "Professional templates",
                "Instant generation",
                "Mobile optimized"
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <Check size={12} className="text-purple-400" />
                  </div>
                  {feature}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Industry
            </h2>
            <p className="text-muted-foreground text-lg">
              Tailored templates designed for your specific business needs
            </p>
          </motion.div>

          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-64 bg-white/5 animate-pulse rounded-2xl" />
              ))}
            </div>
          ) : error ? (
            <div className="text-center p-12 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-400">
              Failed to load trades. Please try again.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trades?.map((trade, index) => (
                <motion.div
                  key={trade.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                >
                  <Link href={`/trade/${trade.slug}`} className="block h-full group">
                    <div className="h-full gradient-border rounded-2xl p-6 transition-all duration-500 hover:glow-sm">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-violet-600/20 border border-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <DynamicIcon name={trade.icon} size={26} className="text-purple-400" />
                      </div>

                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                        {trade.name}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                        {trade.description}
                      </p>

                      <div className="flex items-center text-sm font-medium text-purple-400 group-hover:text-purple-300 transition-colors">
                        Browse Templates
                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="relative z-10 pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="gradient-border rounded-3xl p-12 md:p-16"
          >
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  icon: Zap,
                  title: "Lightning Fast",
                  description: "Generate complete, professional websites in seconds, not weeks. Our AI handles everything."
                },
                {
                  icon: Shield,
                  title: "Industry Optimized",
                  description: "Templates crafted specifically for your industry with conversion-focused design patterns."
                },
                {
                  icon: Clock,
                  title: "Always Updated",
                  description: "Modern, responsive designs that follow the latest web standards and best practices."
                }
              ].map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-violet-600/20 border border-purple-500/20 flex items-center justify-center mx-auto mb-6">
                    <feature.icon size={28} className="text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="FastCatalogue" className="h-6 brightness-0 invert opacity-60" />
            </div>
            <p className="text-muted-foreground text-sm">
              Crafted for professionals who demand excellence.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
