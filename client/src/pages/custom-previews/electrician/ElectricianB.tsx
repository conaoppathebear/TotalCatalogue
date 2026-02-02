import { TradeIdentity, TradeContent, Blueprint } from "@shared/schema";
import { ViewportMode } from "@/pages/Preview";

interface CustomPageProps {
  content: TradeContent;
  blueprint: Blueprint;
  tradeIdentity?: TradeIdentity;
  viewport: ViewportMode;
}

export function ElectricianB({ content, tradeIdentity, viewport }: CustomPageProps) {
  return (
    <div className="min-h-screen bg-black text-white font-['Inter'] selection:bg-yellow-400 selection:text-black">
      {/* Glow Top Bar */}
      <div className="bg-yellow-400 text-black py-2 px-6 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] sticky top-0 z-[60]">
        <span>Emergency Electricians Available 24/7</span>
        <span className="hidden md:block">0800 999 8888</span>
      </div>

      {/* Futuristic Navbar */}
      <nav className="px-12 py-8 flex justify-between items-center border-b border-white/5 bg-black/80 backdrop-blur-3xl sticky top-[34px] z-50">
        <div className="text-3xl font-black italic tracking-tighter text-yellow-400">VOLT<span className="text-white">FORCE</span></div>
        <div className="flex items-center gap-4">
          <button className="px-8 py-3 rounded-none border border-white/20 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
            Services
          </button>
          <button className="px-8 py-3 rounded-none bg-yellow-400 text-black text-[10px] font-black uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_30px_rgba(250,204,21,0.3)]">
            Call Now
          </button>
        </div>
      </nav>

      {/* Dark Immersive Hero */}
      <section className="relative h-screen flex items-center">
        <img 
          src="https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?w=1600&fit=crop" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale"
          alt="Electrical Sparks"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="container mx-auto px-12 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-7xl md:text-[140px] font-black italic tracking-tighter leading-[0.8] uppercase mb-12">
              Electrical<br/><span className="text-yellow-400">Emergency?</span>
            </h1>
            <p className="text-2xl text-slate-400 max-w-2xl mb-16 font-medium leading-relaxed">
              {content.hero.subheadline}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="p-8 border-l-2 border-yellow-400 bg-white/5 backdrop-blur-md">
                <p className="text-yellow-400 font-black text-2xl mb-2">60 MINS</p>
                <p className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Rapid Response</p>
              </div>
              <div className="p-8 border-l-2 border-yellow-400 bg-white/5 backdrop-blur-md">
                <p className="text-yellow-400 font-black text-2xl mb-2">24/7</p>
                <p className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Live Availability</p>
              </div>
              <div className="p-8 border-l-2 border-yellow-400 bg-white/5 backdrop-blur-md">
                <p className="text-yellow-400 font-black text-2xl mb-2">FIXED</p>
                <p className="text-[10px] uppercase font-bold tracking-widest text-slate-500">No Hidden Costs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar (Neon) */}
      <section className="py-12 border-b border-white/5 overflow-hidden bg-black">
        <div className="flex whitespace-nowrap gap-16 animate-marquee opacity-30 text-yellow-400/50">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-3xl font-black uppercase italic tracking-[0.2em]">
              FULLY CERTIFIED // 24HR DISPATCH // INDUSTRIAL GRADE // NO CALLOUT FEE //
            </span>
          ))}
        </div>
      </section>

      {/* Service Strips */}
      <section id="services" className="py-32">
        <div className="container mx-auto px-12">
          {content.services.map((s, i) => (
            <div key={i} className="group border-b border-white/5 py-16 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 hover:bg-white/[0.02] transition-colors px-12">
              <div className="flex items-center gap-12">
                <span className="text-8xl font-black italic text-white/5 group-hover:text-yellow-400/20 transition-colors">0{i+1}</span>
                <h3 className="text-5xl font-black uppercase tracking-tighter italic group-hover:translate-x-4 transition-transform">{s.name}</h3>
              </div>
              <p className="text-slate-500 max-w-sm text-lg font-medium group-hover:text-slate-300 transition-colors">{s.description}</p>
              <button className="text-yellow-400 font-black uppercase tracking-[0.2em] text-[10px] flex items-center gap-4">
                View Service <div className="w-12 h-px bg-yellow-400" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Why Us (Force Profile) */}
      <section className="py-32 bg-white/[0.02] border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-yellow-400/5 blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div>
              <h2 className="text-6xl font-black uppercase italic tracking-tighter mb-12 leading-none">THE FORCE<br/><span className="text-yellow-400">PROTOCOL.</span></h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {[
                  { title: "Rapid Strike", desc: "Engineers are dispatched the second a critical failure is logged in our hub." },
                  { title: "Heavy Load", desc: "Specialized in high-voltage industrial circuits and commercial power arrays." },
                  { title: "Total Scan", desc: "We use infrared thermal imaging to find hidden faults before they burn." },
                  { title: "Vault Safe", desc: "Every fix is logged, photographed, and certified for 5 years." }
                ].map((item, i) => (
                  <div key={i}>
                    <h3 className="text-yellow-400 font-black text-xs uppercase tracking-widest mb-4">_{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=800&fit=crop" 
                className="w-full h-[600px] object-cover grayscale brightness-50 border border-white/10"
                alt="Electrician Tools"
              />
              <div className="absolute bottom-12 left-12 bg-yellow-400 p-8 text-black">
                <p className="text-5xl font-black italic tracking-tighter">045</p>
                <p className="text-[10px] font-black uppercase tracking-widest">Min response</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works (Digital Workflow) */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 italic">
            {[
              { title: "SIGNAL", desc: "Emergency alert received via 24/7 command line. Auto-diagnosis initiated." },
              { title: "VECTOR", desc: "Nearest field unit rerouted. ETA transmitted to client via real-time link." },
              { title: "SURGE_FIX", desc: "Fault isolated and repaired. Full system stress test performed." }
            ].map((step, i) => (
              <div key={i} className="p-12 border border-white/5 bg-gradient-to-br from-white/5 to-transparent">
                <span className="text-yellow-400 font-black text-xs block mb-8 tracking-widest">STEP_0{i+1}</span>
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof (Force Reviews) */}
      <section className="py-32 border-b border-white/5">
        <div className="container mx-auto px-12">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
            <div className="lg:w-1/3">
              <h2 className="text-5xl font-black italic uppercase tracking-tighter mb-8 leading-none">FIELD<br/>REPORT.</h2>
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => <div key={i} className="w-8 h-2 bg-yellow-400" />)}
              </div>
              <p className="text-slate-500 font-bold text-sm tracking-widest uppercase italic">5.0 / RATING BY 2k+ CLIENTS</p>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12 italic">
              {content.testimonials.slice(0, 2).map((t, i) => (
                <div key={i} className="p-12 bg-white/5 border border-white/5">
                  <p className="text-2xl font-black tracking-tighter mb-12 leading-tight">"{t.content}"</p>
                  <p className="text-xs font-black uppercase tracking-widest text-slate-500">— {t.author}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Areas Served (Neon Grid) */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 text-center text-[10px] font-black uppercase tracking-[0.4em] text-slate-700">
            <span className="text-yellow-400/50">ZONE_01</span>
            <span>ZONE_02</span>
            <span className="text-yellow-400/50">ZONE_03</span>
            <span>ZONE_04</span>
            <span className="text-yellow-400/50">ZONE_05</span>
          </div>
        </div>
      </section>

      {/* FAQ (Dark Mode) */}
      <section id="faq" className="py-32 bg-black">
        <div className="container mx-auto px-12 max-w-4xl">
          <h2 className="text-xs font-black uppercase tracking-[0.6em] text-yellow-400 text-center mb-24">SYSTEM_DATA (FAQ)</h2>
          <div className="space-y-12">
            {content.faqs.map((faq, i) => (
              <div key={i} className="group">
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-6 italic group-hover:text-yellow-400 transition-colors">{faq.q}</h3>
                <p className="text-slate-500 text-lg font-medium leading-relaxed pl-12 border-l border-white/10 group-hover:border-yellow-400 transition-colors">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-yellow-400 text-black py-48 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-5 transition-opacity pointer-events-none" />
        <div className="container mx-auto px-12 relative z-10">
          <h2 className="text-6xl md:text-[160px] font-black italic tracking-tighter mb-16 uppercase leading-[0.75]">VOLTFORCE<br/>ACTIVE.</h2>
          <button className="bg-black text-white px-24 py-10 rounded-none font-black text-3xl uppercase tracking-tighter hover:scale-105 transition-transform shadow-[30px_30px_0_rgba(0,0,0,0.1)]">
            CALL 0800 999 8888
          </button>
        </div>
      </section>

      {/* Footer (Dark) */}
      <footer className="bg-black text-white py-32 border-t border-white/5">
        <div className="container mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-24 mb-32">
            <div className="col-span-1 md:col-span-2">
              <div className="text-4xl font-black italic tracking-tighter text-yellow-400 mb-12">VOLTFORCE</div>
              <p className="text-slate-500 text-lg font-medium max-w-sm mb-12 leading-relaxed italic">
                Strategic electrical field operations. Rapid response units active across all urban sectors.
              </p>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-700 mb-8">Base</p>
              <p className="text-lg font-black italic mb-4">{content.contact.phone}</p>
              <p className="text-slate-400 font-medium">{content.contact.email}</p>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-700 mb-8">Social</p>
              <div className="flex flex-col gap-4 text-sm font-black italic uppercase tracking-widest text-slate-500">
                <a href="#" className="hover:text-yellow-400 transition-colors">Instagram</a>
                <a href="#" className="hover:text-yellow-400 transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center border-t border-white/5 pt-16 text-[10px] font-black uppercase tracking-[0.4em] text-slate-800">
            <p>© 2026 VOLTFORCE OPS. NO RIGHTS RESERVED.</p>
            <p>ENCRYPTED_CONNECTION_ACTIVE</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
