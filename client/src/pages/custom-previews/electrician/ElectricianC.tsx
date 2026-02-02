import { TradeIdentity, TradeContent, Blueprint } from "@shared/schema";
import { ViewportMode } from "@/pages/Preview";

interface CustomPageProps {
  content: TradeContent;
  blueprint: Blueprint;
  tradeIdentity?: TradeIdentity;
  viewport: ViewportMode;
}

export function ElectricianC({ content, tradeIdentity, viewport }: CustomPageProps) {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-['Space_Grotesk'] selection:bg-cyan-400 selection:text-black">
      {/* Luxury Border Navbar */}
      <nav className="border-b border-white/10 px-16 py-10 flex justify-between items-center bg-black/90 backdrop-blur-xl sticky top-0 z-50">
        <div className="font-black text-2xl tracking-[0.2em] flex items-center gap-4">
          ATELIER<span className="text-cyan-400">LUX</span>
        </div>
        <div className="hidden lg:flex gap-16 text-[10px] font-bold uppercase tracking-[0.4em]">
          <a href="#portfolio" className="hover:text-cyan-400 transition-colors">Portfolio</a>
          <a href="#about" className="hover:text-cyan-400 transition-colors">Philosophy</a>
          <a href="#faq" className="hover:text-cyan-400 transition-colors">Consultancy</a>
        </div>
        <div className="flex items-center gap-8">
          <div className="h-10 w-px bg-white/10 hidden lg:block" />
          <button className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-400 hover:text-white transition-colors">
            Contact
          </button>
        </div>
      </nav>

      {/* Cinematic Split Hero */}
      <section className="h-[90vh] flex items-center overflow-hidden border-b border-white/10">
        <div className="w-full lg:w-1/2 p-16 lg:p-32">
          <div className="max-w-xl">
            <span className="inline-block text-[10px] font-black uppercase tracking-[0.5em] text-slate-500 mb-12">
              Electrical Architecture. Reimagined.
            </span>
            <h1 className="text-6xl md:text-9xl font-black italic tracking-tighter leading-[0.8] mb-12 uppercase">
              Light Is<br/><span className="text-cyan-400">Emotion.</span>
            </h1>
            <p className="text-xl text-slate-400 mb-16 font-medium leading-relaxed max-w-md">
              {content.hero.subheadline}
            </p>
            <button className="px-16 py-8 bg-white text-black font-black uppercase tracking-[0.3em] text-[10px] hover:bg-cyan-400 transition-all shadow-[0_30px_60px_-15px_rgba(255,255,255,0.1)]">
              {content.hero.cta_primary}
            </button>
          </div>
        </div>
        <div className="hidden lg:block w-1/2 h-full relative border-l border-white/10">
          <img 
            src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=1200&fit=crop" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[3000ms]"
            alt="Luxury Lighting"
          />
          <div className="absolute inset-0 bg-cyan-400/10 pointer-events-none" />
        </div>
      </section>

      {/* Trust Bar (Curated Partners) */}
      <section className="py-24 border-b border-white/10 bg-black">
        <div className="container mx-auto px-16 flex flex-wrap justify-between items-center gap-16 opacity-20 text-[10px] font-black uppercase tracking-[0.5em]">
          <span>BESPOKE_ENGINEERING</span>
          <span className="text-cyan-400">LUTRON_SILVER_PARTNER</span>
          <span>KNX_CERTIFIED</span>
          <span className="text-cyan-400">ARCHITECTURAL_GUILD</span>
        </div>
      </section>

      {/* Grid of Curated Services */}
      <section id="services" className="py-48 bg-[#0D0D0D]">
        <div className="container mx-auto px-16">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
            <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter leading-none">Curated<br/>Services</h2>
            <div className="max-w-sm">
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em] leading-loose mb-8">We don't just wire buildings. We design the electrical experience of your environment.</p>
              <div className="w-full h-px bg-white/10" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 shadow-2xl">
            {content.services.slice(0, 4).map((s, i) => (
              <div key={i} className="bg-[#0A0A0A] p-24 hover:bg-[#111111] transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/5 translate-x-16 -translate-y-16 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-700" />
                <span className="text-[10px] font-black text-slate-700 block mb-12 tracking-widest">0{i+1} / SERVICES</span>
                <h3 className="text-4xl font-black italic uppercase tracking-tighter mb-8 group-hover:text-cyan-400 transition-colors">{s.name}</h3>
                <p className="text-slate-500 font-medium leading-relaxed mb-12">{s.description}</p>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-px bg-white/20 group-hover:w-24 group-hover:bg-cyan-400 transition-all" />
                  <span className="text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">Details</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us (The Atelier Philosophy) */}
      <section id="about" className="py-48 border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.05),transparent)] pointer-events-none" />
        <div className="container mx-auto px-16 grid grid-cols-1 lg:grid-cols-2 gap-48 items-center">
          <div className="relative aspect-square border border-white/10 p-12">
            <img 
              src="https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?w=800&fit=crop" 
              className="w-full h-full object-cover grayscale brightness-50"
              alt="Electrical Detail"
            />
            <div className="absolute -bottom-16 -right-16 bg-white text-black p-16 hidden lg:block">
              <p className="text-8xl font-black italic tracking-tighter leading-none mb-4">120</p>
              <p className="text-[10px] font-black uppercase tracking-[0.4em]">Estates powered</p>
            </div>
          </div>
          <div>
            <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter mb-12 leading-none">The<br/>Atelier<br/><span className="text-cyan-400">Standard.</span></h2>
            <div className="space-y-16">
              {[
                { title: "Surgical Precision", desc: "Our installations are executed with the same level of care as the architecture they inhabit." },
                { title: "Invisible Automation", desc: "Smart systems that anticipate your needs without cluttering your walls with interfaces." },
                { title: "Lifelong Engineering", desc: "We design for the next 50 years, not just the next 5. Robust, redundant, and refined." }
              ].map((item, i) => (
                <div key={i} className="group">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-cyan-400 mb-6 group-hover:translate-x-4 transition-transform italic">// {item.title}</h3>
                  <p className="text-xl text-slate-400 leading-relaxed max-w-md">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works (Curated Roadmap) */}
      <section className="py-48 bg-black">
        <div className="container mx-auto px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-32">
            {[
              { title: "Vision Query", desc: "We explore the emotional intent of the space and its electrical requirements." },
              { title: "Architectural Mapping", desc: "A comprehensive CAD blueprint of the entire electrical nervous system." },
              { title: "Master Deployment", desc: "White-glove implementation by our elite field engineering team." }
            ].map((step, i) => (
              <div key={i} className="group">
                <div className="w-16 h-px bg-white/20 mb-12 group-hover:w-32 group-hover:bg-cyan-400 transition-all" />
                <h3 className="text-4xl font-black italic uppercase tracking-tighter mb-8 group-hover:text-cyan-400 transition-colors">{step.title}</h3>
                <p className="text-slate-500 text-lg font-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof (Featured Engagement) */}
      <section className="py-48 border-y border-white/10 bg-[#0D0D0D]">
        <div className="container mx-auto px-16 text-center max-w-5xl">
          <p className="text-5xl md:text-8xl font-black italic tracking-tighter leading-tight mb-16">"Atelier Lux doesn't just provide power; they provide atmosphere. A truly remarkable partner."</p>
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-cyan-400">— Principal Architect, London Studio</p>
        </div>
      </section>

      {/* Case/Feature Section */}
      <section id="portfolio" className="py-48">
        <div className="container mx-auto px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-32 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter leading-none mb-12 uppercase">Private<br/>Engagements.</h2>
              <p className="text-xl text-slate-500 font-medium mb-16 leading-relaxed max-w-md">
                Explore our portfolio of high-end residential and commercial electrical transformations.
              </p>
              <button className="text-cyan-400 font-black uppercase tracking-[0.4em] text-[10px] flex items-center gap-8">
                EXPLORE PORTFOLIO <div className="w-24 h-px bg-cyan-400" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <img src="https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?w=600&fit=crop" className="w-full aspect-[4/5] object-cover grayscale" alt="Proj 1" />
              <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&fit=crop" className="w-full aspect-[4/5] object-cover mt-16" alt="Proj 2" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ (Luxury Detail) */}
      <section id="faq" className="py-48 bg-black">
        <div className="container mx-auto px-16 max-w-4xl">
          <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-center mb-32">INQUIRIES_FAQ</h2>
          <div className="space-y-24">
            {content.faqs.map((faq, i) => (
              <div key={i} className="group border-b border-white/5 pb-16">
                <h3 className="text-3xl font-black italic tracking-tighter mb-8 group-hover:text-cyan-400 transition-colors uppercase">{faq.q}</h3>
                <p className="text-xl text-slate-500 leading-relaxed font-medium">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Served (Luxury Mapping) */}
      <section className="py-24 border-t border-white/10">
        <div className="container mx-auto px-16 text-center">
          <div className="flex flex-wrap justify-center gap-16 text-[10px] font-black uppercase tracking-[0.5em] text-slate-700">
            <span>KNIGHTSBRIDGE</span>
            <span className="text-white">MAYFAIR</span>
            <span>BELGRAVIA</span>
            <span className="text-white">CHELSEA</span>
            <span>KENSINGTON</span>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-64 px-16 text-center bg-white text-black overflow-hidden relative">
        <div className="absolute inset-0 bg-cyan-400/5 pointer-events-none" />
        <div className="container mx-auto max-w-5xl relative z-10">
          <h2 className="text-6xl md:text-[140px] font-black italic tracking-tighter mb-24 uppercase leading-[0.8]">Begin Your<br/>Atmosphere.</h2>
          <button className="bg-black text-white px-24 py-10 rounded-none font-black text-[12px] uppercase tracking-[0.5em] hover:bg-cyan-400 hover:text-black transition-all shadow-2xl">
            Request Consultation
          </button>
        </div>
      </section>

      {/* Footer (Luxury) */}
      <footer className="bg-black text-white py-48">
        <div className="container mx-auto px-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-32 mb-48">
            <div className="col-span-1 md:col-span-2">
              <div className="font-black text-3xl tracking-[0.2em] mb-12">ATELIER LUX</div>
              <p className="text-slate-500 text-lg font-medium max-w-sm leading-relaxed italic">
                Architectural electrical design and deployment for properties of distinction.
              </p>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-700 mb-12">Atelier</p>
              <p className="text-xl font-black italic mb-6">{content.contact.phone}</p>
              <p className="text-slate-400 font-medium">{content.contact.email}</p>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-700 mb-12">Direct</p>
              <div className="flex flex-col gap-8 text-[10px] font-black uppercase tracking-[0.5em] text-slate-500">
                <a href="#" className="hover:text-cyan-400 transition-colors">Instagram</a>
                <a href="#" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-24 text-[10px] font-black uppercase tracking-[0.5em] text-slate-900">
            <p>© 2026 ATELIER LUX ELECTRICAL DESIGN. ALL RIGHTS RESERVED.</p>
            <p>DESIGNED_BY_FASTCATALOGUE</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
