import { TradeIdentity, TradeContent, Blueprint } from "@shared/schema";
import { ViewportMode } from "@/pages/Preview";

interface CustomPageProps {
  content: TradeContent;
  blueprint: Blueprint;
  tradeIdentity?: TradeIdentity;
  viewport: ViewportMode;
}

export function PlumberC({ content, tradeIdentity, viewport }: CustomPageProps) {
  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#1A1A1A] font-serif selection:bg-blue-100">
      {/* Refined Minimal Nav */}
      <nav className="px-12 py-10 flex justify-between items-center bg-white/80 backdrop-blur-md border-b border-[#E5E5E5] sticky top-0 z-50">
        <div className="flex items-center gap-12">
          <div className="text-2xl font-black tracking-[0.2em] uppercase font-sans">AQUA STUDIO</div>
          <div className="hidden lg:flex gap-8 text-[10px] font-bold uppercase tracking-[0.3em] font-sans">
            <a href="#portfolio" className="hover:text-blue-600 transition-colors">Portfolio</a>
            <a href="#about" className="hover:text-blue-600 transition-colors">Philosophy</a>
            <a href="#faq" className="hover:text-blue-600 transition-colors">Consult</a>
          </div>
        </div>
        <button className="font-sans border-b-2 border-black hover:border-blue-600 hover:text-blue-600 transition-all text-[10px] font-black uppercase tracking-[0.3em] pb-1">
          Start Project
        </button>
      </nav>

      {/* Centered Luxury Hero */}
      <section className="py-32 md:py-48 px-6 text-center overflow-hidden">
        <div className="container mx-auto max-w-4xl">
          <span className="inline-block text-[10px] font-black uppercase tracking-[0.5em] font-sans text-blue-600 mb-8">
            Exquisite Engineering. Timeless Design.
          </span>
          <h1 className="text-7xl md:text-[120px] leading-[0.9] tracking-tighter mb-12 font-serif">
            {content.hero.headline}
          </h1>
          <div className="w-24 h-px bg-black mx-auto mb-12" />
          <p className="text-2xl font-serif italic text-slate-500 mb-16 max-w-2xl mx-auto leading-relaxed">
            {content.hero.subheadline}
          </p>
          <div className="flex justify-center">
            <button className="font-sans bg-black text-white px-12 py-6 rounded-full text-xs font-black uppercase tracking-[0.3em] hover:bg-blue-600 transition-colors shadow-2xl">
              {content.hero.cta_primary}
            </button>
          </div>
        </div>
      </section>

      {/* Trust Bar (Elegant Logotype) */}
      <section className="py-20 border-y border-[#E5E5E5] bg-white">
        <div className="container mx-auto px-12 flex flex-wrap justify-center gap-16 md:gap-32 text-[10px] font-black uppercase tracking-[0.4em] text-slate-300">
          <span className="text-black">HERITAGE GRADE</span>
          <span>BESPOKE FITTING</span>
          <span className="text-black">CERTIFIED MASTERY</span>
          <span>LUXURY PARTNER</span>
        </div>
      </section>

      {/* Large Showcase Imagery (Portfolio) */}
      <section id="portfolio" className="px-12 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 h-auto md:h-[80vh] mb-32">
          <div className="relative group overflow-hidden h-full min-h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=1200&fit=crop" 
              className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
              alt="Luxury Bath"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="grid grid-rows-2 gap-12 h-full">
            <div className="relative overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&fit=crop" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1000ms]"
                alt="Expert Detail"
              />
            </div>
            <div className="bg-[#1A1A1A] text-white p-16 flex flex-col justify-center">
              <h3 className="text-4xl font-serif italic mb-6">"Plumbing is the veins of a home. We ensure they flow perfectly."</h3>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] font-sans text-slate-500">— Atelier Finesse</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us (Philosophy Section) */}
      <section id="about" className="py-32 bg-[#FAF8F5]">
        <div className="container mx-auto px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div>
              <h2 className="text-6xl font-serif mb-12">The Philosophy of<br/>Quiet Engineering</h2>
              <p className="text-xl text-slate-500 italic mb-12 leading-relaxed">
                We believe that the most sophisticated systems are the ones you never notice. Our approach combines traditional craftsmanship with invisible technology.
              </p>
              <div className="space-y-12">
                {[
                  { title: "Invisible Performance", desc: "Noiseless pipes, perfectly calibrated pressure, and hidden maintenance ports." },
                  { title: "Heritage Materials", desc: "We source only the finest brass, copper, and porcelain from European artisans." },
                  { title: "Lifelong Partnership", desc: "Our white-glove maintenance ensures your system performs for decades." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8">
                    <span className="font-sans text-[10px] font-black text-blue-600 mt-2">0{i+1}</span>
                    <div>
                      <h4 className="font-sans text-xs font-black uppercase tracking-widest mb-2">{item.title}</h4>
                      <p className="text-sm text-slate-400 font-sans tracking-wide leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&fit=crop" 
                className="w-full h-[700px] object-cover"
                alt="Craftsman"
              />
              <div className="absolute top-12 left-12 w-full h-full border border-black -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works (Atelier Process) */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-12">
          <div className="text-center mb-24">
            <h2 className="text-xs font-black uppercase tracking-[0.5em] font-sans text-slate-400 mb-8">The Journey</h2>
            <div className="w-1 h-24 bg-[#E5E5E5] mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24 italic">
            {[
              { title: "Creative Brief", desc: "We begin with a deep exploration of your property's architectural needs." },
              { title: "Technical Blueprint", desc: "Detailed CAD designs for every pipe, valve, and fixture in your home." },
              { title: "Artisan Execution", desc: "Our master craftsmen implement the system with surgical precision." }
            ].map((step, i) => (
              <div key={i} className="text-center">
                <h3 className="text-3xl mb-6">Phase 0{i+1}</h3>
                <h4 className="font-sans text-[10px] font-black uppercase tracking-[0.3em] mb-6">{step.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof (Featured Quote) */}
      <section className="py-32 border-y border-[#E5E5E5]">
        <div className="container mx-auto px-12 text-center max-w-4xl">
          <p className="text-4xl md:text-6xl font-serif italic mb-12">"Aqua Studio transformed our bathroom into a mechanical masterpiece that feels like a private spa."</p>
          <p className="font-sans text-[10px] font-black uppercase tracking-[0.4em]">— Lord & Lady Harrington, Mayfair</p>
        </div>
      </section>

      {/* Minimal Service List */}
      <section id="services" className="py-32 bg-white">
        <div className="container mx-auto px-12">
          <div className="max-w-xl mb-24">
            <h2 className="text-5xl font-serif mb-8">Bespoke Solutions</h2>
            <p className="text-slate-500 font-sans text-sm tracking-wide leading-relaxed uppercase">Our services are tailored for properties that demand excellence in both aesthetics and mechanical performance.</p>
          </div>
          <div className="divide-y divide-[#E5E5E5] border-t border-[#E5E5E5]">
            {content.services.slice(0, 4).map((s, i) => (
              <div key={i} className="py-12 flex flex-col md:flex-row justify-between items-start md:items-center group hover:bg-slate-50 transition-colors px-4">
                <span className="font-sans text-[10px] font-black text-slate-400">0{i+1}</span>
                <h3 className="text-3xl font-serif italic py-4 md:py-0">{s.name}</h3>
                <p className="text-slate-400 font-sans text-xs uppercase tracking-widest max-w-xs md:text-right">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ (Refined) */}
      <section id="faq" className="py-32 bg-[#FDFCFB]">
        <div className="container mx-auto px-12 max-w-3xl">
          <h2 className="text-xs font-black uppercase tracking-[0.5em] font-sans text-center mb-24">Inquiries</h2>
          <div className="space-y-16">
            {content.faqs.map((faq, i) => (
              <div key={i}>
                <h3 className="text-2xl font-serif italic mb-6">{faq.q}</h3>
                <p className="text-slate-500 font-sans text-sm tracking-wide leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-32 bg-white border-t border-[#E5E5E5]">
        <div className="container mx-auto px-12 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-300 mb-12">Current Engagements</p>
          <div className="flex flex-wrap justify-center gap-16 text-xs font-black uppercase tracking-[0.3em]">
            <span>MAYFAIR</span>
            <span>BELGRAVIA</span>
            <span className="text-blue-600">CHELSEA</span>
            <span>KENSINGTON</span>
            <span>KNIGHTSBRIDGE</span>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-48 px-6 text-center bg-[#1A1A1A] text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none select-none text-[30vw] font-black italic tracking-tighter whitespace-nowrap">AQUA</div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-6xl md:text-8xl font-serif italic mb-16">Experience Engineering Excellence.</h2>
          <button className="font-sans bg-white text-black px-16 py-8 rounded-full text-xs font-black uppercase tracking-[0.4em] hover:bg-blue-600 hover:text-white transition-all shadow-2xl">
            Request Consultation
          </button>
        </div>
      </section>

      {/* Footer (Luxury) */}
      <footer className="bg-white text-[#1A1A1A] py-32 border-t border-[#E5E5E5]">
        <div className="container mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-24 mb-32">
            <div className="col-span-1 md:col-span-2">
              <div className="text-3xl font-black tracking-[0.2em] uppercase font-sans mb-12">AQUA STUDIO</div>
              <p className="text-slate-400 font-sans text-sm tracking-wide leading-relaxed uppercase max-w-sm">
                Specialists in high-performance mechanical design and artisan plumbing for luxury residences.
              </p>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300 mb-8">Atelier</p>
              <p className="text-sm font-sans mb-4 tracking-wide uppercase">{content.contact.address}</p>
              <p className="text-sm font-sans mb-4 tracking-wide uppercase">{content.contact.phone}</p>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300 mb-8">Direct</p>
              <p className="text-sm font-sans tracking-wide uppercase">{content.contact.email}</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-12 pt-12 border-t border-[#E5E5E5] text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">
            <p>© 2026 AQUA STUDIO ARTISANS. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-12">
              <a href="#" className="hover:text-black transition-colors">Legal</a>
              <a href="#" className="hover:text-black transition-colors">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
