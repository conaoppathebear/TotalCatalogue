import { TradeIdentity, TradeContent, Blueprint } from "@shared/schema";
import { ViewportMode } from "@/pages/Preview";

interface CustomPageProps {
  content: TradeContent;
  blueprint: Blueprint;
  tradeIdentity?: TradeIdentity;
  viewport: ViewportMode;
}

export function ElectricianA({ content, tradeIdentity, viewport }: CustomPageProps) {
  return (
    <div className="min-h-screen bg-white font-['Space_Grotesk'] text-zinc-900">
      {/* High-Tech Navbar */}
      <nav className="bg-zinc-900 text-white px-8 py-6 flex justify-between items-center sticky top-0 z-50">
        <div className="font-bold text-2xl tracking-tighter flex items-center gap-3">
          <div className="w-10 h-1 h-px bg-yellow-400" />
          LUMIÈRE<span className="text-yellow-400 font-black">ELECTRICAL</span>
        </div>
        <div className="hidden md:flex gap-12 text-xs font-bold uppercase tracking-[0.2em]">
          <a href="#services" className="hover:text-yellow-400 transition-colors">Commercial</a>
          <a href="#about" className="hover:text-yellow-400 transition-colors">Residential</a>
          <a href="#how-it-works" className="hover:text-yellow-400 transition-colors">Innovation</a>
        </div>
        <button className="bg-yellow-400 text-zinc-900 px-8 py-3 font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors">
          Book Survey
        </button>
      </nav>

      {/* Kinetic Hero */}
      <section className="relative h-[90vh] bg-zinc-100 overflow-hidden flex items-center border-b-8 border-yellow-400">
        <div className="absolute top-0 right-0 w-1/2 h-full skew-x-[-15deg] translate-x-32 bg-zinc-900" />
        <div className="container mx-auto px-12 grid grid-cols-1 lg:grid-cols-2 relative z-10 gap-24 items-center">
          <div>
            <div className="w-20 h-2 bg-yellow-400 mb-8" />
            <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.85] uppercase mb-12">
              Powering<br/><span className="text-yellow-400 underline decoration-4 underline-offset-4">Innovation.</span>
            </h1>
            <p className="text-lg text-zinc-500 max-w-sm font-medium mb-12 leading-relaxed">
              {content.hero.subheadline}
            </p>
            <button className="group relative px-12 py-6 bg-zinc-900 text-white font-bold uppercase tracking-widest text-sm overflow-hidden">
              <span className="relative z-10">{content.hero.cta_primary}</span>
              <div className="absolute inset-0 bg-yellow-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] bg-zinc-300 relative overflow-hidden shadow-[40px_40px_0_rgba(250,204,21,1)]">
              <img 
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&fit=crop" 
                className="w-full h-full object-cover"
                alt="Electrician at work"
              />
            </div>
            <div className="absolute -bottom-12 -left-12 bg-zinc-900 p-10 text-white max-w-xs shadow-2xl">
              <p className="text-4xl font-bold tracking-tighter mb-2">5,000+</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Certified Installations Completed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar (Logo Grid) */}
      <section className="py-16 border-b border-zinc-100">
        <div className="container mx-auto px-12 flex flex-wrap justify-between items-center gap-12 opacity-30 grayscale grayscale-100">
          <div className="text-2xl font-black italic tracking-tighter">NICEIC APPROVED</div>
          <div className="text-2xl font-black italic tracking-tighter">TRUSTMARK CERTIFIED</div>
          <div className="text-2xl font-black italic tracking-tighter">RENEWABLES HUB</div>
          <div className="text-2xl font-black italic tracking-tighter">PART P REGISTERED</div>
        </div>
      </section>

      {/* Technical Block Grid (Services) */}
      <section id="services" className="py-32 bg-white">
        <div className="container mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {content.services.map((s, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-square bg-zinc-100 p-12 mb-8 relative group-hover:bg-yellow-400 transition-colors duration-500">
                  <div className="w-12 h-12 border-2 border-zinc-900 mb-6 flex items-center justify-center font-bold">0{i+1}</div>
                  <h3 className="text-3xl font-bold uppercase tracking-tighter mb-4 group-hover:text-zinc-900 transition-colors">{s.name}</h3>
                  <p className="text-zinc-500 group-hover:text-zinc-800 transition-colors leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us (Technical Advantage) */}
      <section id="about" className="py-32 bg-zinc-900 text-white overflow-hidden">
        <div className="container mx-auto px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none uppercase mb-12">The<br/><span className="text-yellow-400">Advantage.</span></h2>
              <div className="space-y-12">
                {[
                  { title: "Precision Testing", desc: "Every circuit is mapped and stress-tested using ultra-high precision diagnostic equipment." },
                  { title: "Zero Downtime", desc: "Our industrial deployment strategy ensures minimal disruption to your business or home life." },
                  { title: "Future Ready", desc: "We design electrical architectures that are ready for next-gen smart integration and EV charging." }
                ].map((item, i) => (
                  <div key={i} className="border-l-4 border-yellow-400 pl-8">
                    <h3 className="text-xl font-bold uppercase tracking-widest mb-4">{item.title}</h3>
                    <p className="text-zinc-400 leading-relaxed max-w-md">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&fit=crop" 
                className="w-full h-[600px] object-cover grayscale brightness-75"
                alt="Complex Wiring"
              />
              <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-400 flex items-center justify-center text-zinc-900 font-bold text-4xl italic">!</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works (Industrial Roadmap) */}
      <section id="how-it-works" className="py-32 bg-zinc-50">
        <div className="container mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-zinc-200 border border-zinc-200">
            {[
              { title: "Site Audit", desc: "Comprehensive technical review of your existing electrical infrastructure." },
              { title: "System Design", desc: "Custom-engineered electrical layout tailored to your specific loads." },
              { title: "Deployment", desc: "Fast, surgical installation by our certified field engineering teams." },
              { title: "Certification", desc: "Rigorous safety verification and digital compliance reporting." }
            ].map((step, i) => (
              <div key={i} className="bg-white p-12 hover:bg-zinc-900 hover:text-white transition-all">
                <p className="text-yellow-400 font-bold mb-8">PHASE_0{i+1}</p>
                <h4 className="text-2xl font-bold uppercase tracking-tighter mb-4">{step.title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof (Verification Grid) */}
      <section className="py-32 border-b border-zinc-100">
        <div className="container mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {content.testimonials.map((t, i) => (
              <div key={i} className="bg-zinc-100 p-12 border-t-8 border-zinc-900">
                <p className="text-2xl font-bold tracking-tighter mb-12">"{t.content}"</p>
                <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em]">
                  <span>{t.author}</span>
                  <span className="text-zinc-400">CLIENT_ID_{2026 + i}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Section / Featured Tech */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-12">
          <div className="bg-zinc-900 p-16 md:p-32 flex flex-col md:flex-row gap-24 items-center">
            <div className="flex-1">
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-none mb-12 uppercase">Industrial<br/><span className="text-yellow-400 italic">Integration.</span></h2>
              <p className="text-zinc-400 text-xl font-medium mb-12 leading-relaxed">
                Explore our latest work in high-load commercial electrical deployments.
              </p>
              <button className="text-yellow-400 font-bold uppercase tracking-widest text-xs flex items-center gap-6">
                VIEW CASE STUDY <div className="w-12 h-1 bg-yellow-400" />
              </button>
            </div>
            <div className="flex-1">
              <img 
                src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=800&fit=crop" 
                className="w-full h-full object-cover grayscale"
                alt="Case Study"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ (Tech Support Style) */}
      <section id="faq" className="py-32 bg-zinc-100">
        <div className="container mx-auto px-12 max-w-4xl">
          <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-center mb-24">Technical FAQ</h2>
          <div className="space-y-8">
            {content.faqs.map((faq, i) => (
              <div key={i} className="bg-white p-10 shadow-sm">
                <h3 className="text-xl font-bold uppercase tracking-tight mb-4 flex items-center gap-4">
                  <span className="text-yellow-400 text-3xl">Q</span> {faq.q}
                </h3>
                <p className="text-zinc-500 leading-relaxed pl-10 border-l border-zinc-200">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-12">
          <div className="flex flex-wrap justify-center gap-16 text-xs font-bold uppercase tracking-[0.4em] text-zinc-300">
            <span>LONDON_CITY</span>
            <span className="text-zinc-900">WEST_END</span>
            <span>DOCKLANDS</span>
            <span className="text-zinc-900">TECH_CITY</span>
            <span>SOHO</span>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-yellow-400 text-zinc-900 py-32 text-center overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none select-none text-[30vw] font-black italic tracking-tighter">VOLT</div>
        <div className="container mx-auto px-12 relative z-10">
          <h2 className="text-5xl md:text-9xl font-bold italic tracking-tighter leading-none mb-12 uppercase">
            POWER ON.<br/>CALL NOW.
          </h2>
          <button className="bg-zinc-900 text-white px-16 py-8 rounded-none font-bold text-2xl tracking-tighter hover:bg-black transition-all shadow-[20px_20px_0_rgba(0,0,0,0.1)]">
            REQUEST SURVEY
          </button>
        </div>
      </section>

      {/* Footer (Tech Minimalism) */}
      <footer className="bg-zinc-900 text-white py-24">
        <div className="container mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-24 mb-32">
            <div className="col-span-1 md:col-span-2">
              <div className="font-bold text-3xl mb-12">LUMIÈRE ELECTRICAL</div>
              <p className="text-zinc-500 text-sm tracking-wide leading-relaxed uppercase max-w-sm">
                Next-generation electrical engineering for industrial, commercial, and luxury residential environments.
              </p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-700 mb-8">Base</p>
              <p className="text-sm font-medium mb-4">{content.contact.address}</p>
              <p className="text-sm font-medium mb-4">{content.contact.phone}</p>
              <p className="text-sm font-medium">{content.contact.email}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-700 mb-8">Hub</p>
              <div className="flex flex-col gap-4 text-sm font-medium text-zinc-400">
                <a href="#" className="hover:text-yellow-400 transition-colors">Instagram</a>
                <a href="#" className="hover:text-yellow-400 transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="pt-12 border-t border-zinc-800 flex flex-col md:flex-row justify-between gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-700">
            <p>© 2026 LUMIÈRE ELECTRICAL SOLUTIONS. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-12">
              <a href="#">Compliance</a>
              <a href="#">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
