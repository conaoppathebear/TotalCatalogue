import { TradeIdentity, TradeContent, Blueprint } from "@shared/schema";
import { ViewportMode } from "@/pages/Preview";

interface CustomPageProps {
  content: TradeContent;
  blueprint: Blueprint;
  tradeIdentity?: TradeIdentity;
  viewport: ViewportMode;
}

export function PlumberB({ content, tradeIdentity, viewport }: CustomPageProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-mono">
      {/* High Urgency Top Bar */}
      <div className="bg-red-600 text-white py-3 text-center text-xs font-black uppercase tracking-[0.2em] animate-pulse sticky top-0 z-[60]">
        Emergency Plumbing? Average Response Time: 45 Minutes
      </div>

      {/* Industrial Navbar */}
      <nav className="border-b border-white/10 px-6 py-6 flex justify-between items-center bg-black/50 backdrop-blur-xl sticky top-[36px] z-50">
        <div className="font-black text-3xl flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600" />
          PIPEFIX<span className="text-blue-600">PRO</span>
        </div>
        <div className="flex items-center gap-8">
          <div className="hidden lg:block text-right">
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Available 24/7</p>
            <p className="text-lg font-black text-blue-500 italic">0800 123 4567</p>
          </div>
          <button className="bg-blue-600 px-8 py-3 font-black uppercase tracking-tighter skew-x-[-10deg] hover:bg-blue-500 transition-colors shadow-[8px_8px_0_rgba(37,99,235,0.2)]">
            CALL NOW
          </button>
        </div>
      </nav>

      {/* Grid-Based Emergency Hero */}
      <section className="relative border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-12 lg:p-24 border-r border-white/10 flex flex-col justify-center">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.8] mb-8 uppercase italic">
              {content.hero.headline.split(' ').map((word, i) => (
                <span key={i} className={i % 2 === 1 ? "text-blue-600 block" : "block"}>{word} </span>
              ))}
            </h1>
            <p className="text-xl text-slate-400 max-w-md mb-12 font-medium">
              {content.hero.subheadline}
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 text-sm font-black uppercase tracking-widest text-blue-500">
                <div className="w-12 h-px bg-blue-600" />
                No Callout Fees Ever
              </div>
              <div className="flex items-center gap-4 text-sm font-black uppercase tracking-widest text-blue-500">
                <div className="w-12 h-px bg-blue-600" />
                Licensed & Insured
              </div>
            </div>
          </div>
          <div className="relative aspect-square lg:aspect-auto">
            <img 
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&fit=crop" 
              className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              alt="Plumber Working"
            />
            <div className="absolute bottom-12 left-12 bg-black/90 p-8 border-l-8 border-blue-600 backdrop-blur-md max-w-sm">
              <p className="text-3xl font-black italic tracking-tighter mb-2">"Absolute lifesavers at 3am."</p>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">— Sarah, Manchester</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar (Brutalist) */}
      <section className="py-12 border-b border-white/10 overflow-hidden">
        <div className="flex whitespace-nowrap gap-12 animate-marquee-slower opacity-20">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-4xl font-black uppercase italic tracking-tighter">
              GAS SAFE REGISTERED // FULLY INSURED // 12-MONTH WARRANTY // 24/7 EMERGENCY //
            </span>
          ))}
        </div>
      </section>

      {/* Brutalist Services */}
      <section id="services" className="bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {content.services.map((s, i) => (
            <div key={i} className="p-16 border-b border-r border-white/5 hover:bg-white/5 transition-colors group">
              <div className="w-16 h-16 border-2 border-white/20 flex items-center justify-center mb-8 group-hover:border-blue-600 group-hover:bg-blue-600 transition-all">
                <span className="font-black text-xl">{i+1}</span>
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 italic group-hover:text-blue-600 transition-colors">{s.name}</h3>
              <p className="text-slate-500 leading-relaxed font-medium">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Us (Military Precision) */}
      <section className="py-24 border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">THE MISSION</h2>
              <div className="w-24 h-4 bg-blue-600 mb-12" />
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                { label: "01", title: "ZERO FRICTION", desc: "One call, one dispatch, one fix. We don't waste your time with complex quoting loops." },
                { label: "02", title: "RAPID DEPLOY", desc: "Our fleet is GPS-tracked and strategically positioned to ensure 45-min arrival times." },
                { label: "03", title: "ELITE TOOLS", desc: "We use industrial thermal imaging and high-pressure jetting as standard." },
                { label: "04", title: "IRONCLAD", desc: "Every bolt, pipe, and seal we touch is covered by our unconditional 1-yr guarantee." }
              ].map((item, i) => (
                <div key={i} className="p-8 border border-white/5 bg-white/[0.02]">
                  <p className="text-blue-600 font-black mb-4">{item.label}</p>
                  <h3 className="text-xl font-black uppercase mb-4 italic">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works (Step-by-Step) */}
      <section className="py-24 border-b border-white/10 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {[
              { step: "A", title: "URGENT CALL", desc: "Contact our 24/7 command center. We'll diagnose the issue in 2 minutes." },
              { step: "B", title: "UNIT DISPATCH", desc: "Nearest engineer is routed to your location instantly. Track them via SMS." },
              { step: "C", title: "FIELD FIX", desc: "On-site repair completed immediately using van-stocked industrial parts." }
            ].map((step, i) => (
              <div key={i} className="bg-slate-950 p-12 hover:bg-blue-950 transition-colors">
                <div className="text-8xl font-black text-white/5 mb-8">{step.step}</div>
                <h3 className="text-2xl font-black uppercase mb-4 italic tracking-tighter">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Section / Social Proof (Star Grid) */}
      <section className="py-24 border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2 flex flex-col justify-center">
              <h2 className="text-5xl font-black italic uppercase tracking-tighter mb-4">VERIFIED REVIEWS</h2>
              <p className="text-slate-500 font-medium">1,200+ Emergency calls completed this month.</p>
            </div>
            {content.testimonials.slice(0, 2).map((t, i) => (
              <div key={i} className="p-8 bg-white/5 border border-white/10">
                <div className="flex gap-1 mb-6 text-blue-500">
                  {[...Array(5)].map((_, i) => <div key={i} className="w-3 h-3 bg-blue-600" />)}
                </div>
                <p className="text-sm font-bold italic leading-relaxed mb-6">"{t.content}"</p>
                <p className="text-[10px] uppercase font-black tracking-widest text-slate-500">— {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Served (Brutalist Grid) */}
      <section className="py-12 bg-blue-600">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-between gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-black">
            <span>LONDON_ZONE_1-6</span>
            <span>MANCHESTER_CENTRAL</span>
            <span>BIRMINGHAM_METRO</span>
            <span>LEEDS_CORE</span>
            <span>BRISTOL_HUB</span>
          </div>
        </div>
      </section>

      {/* FAQ (Tough Style) */}
      <section id="faq" className="py-24 bg-black">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-6xl font-black uppercase italic tracking-tighter text-center mb-16">FIELD INTEL (FAQ)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {content.faqs.map((faq, i) => (
              <div key={i} className="bg-slate-950 p-12 hover:bg-white/5 transition-colors">
                <h3 className="text-lg font-black uppercase mb-4 italic text-blue-500">{faq.q}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-red-600 text-white py-32 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black opacity-10 pointer-events-none italic tracking-tighter">FIXNOW</div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-6xl md:text-9xl font-black italic tracking-tighter mb-12 uppercase leading-none">STOP THE DAMAGE.<br/>CALL 0800 123 4567</h2>
          <button className="bg-black text-white px-16 py-8 font-black text-2xl uppercase tracking-tighter hover:bg-slate-900 transition-colors skew-x-[-10deg]">
            REQUEST DISPATCH
          </button>
        </div>
      </section>

      {/* Footer (Monochrome) */}
      <footer className="bg-black text-white py-24 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
            <div>
              <div className="font-black text-3xl mb-8 flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-600" /> PIPEFIXPRO
              </div>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                Emergency-only field operations for residential and commercial plumbing failures. Available 24/7/365.
              </p>
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-6">Contact</p>
              <p className="text-lg font-black italic mb-4">{content.contact.phone}</p>
              <p className="text-sm text-slate-400">{content.contact.email}</p>
            </div>
            <div className="col-span-1 md:col-span-2">
              <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-6">Legal</p>
              <div className="flex gap-12 text-sm font-bold italic underline">
                <a href="#">Terms_of_Service</a>
                <a href="#">Privacy_Policy</a>
                <a href="#">Insurance_Cert</a>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center border-t border-white/5 pt-12 text-[10px] font-black text-slate-700">
            <p>© 2026 PIPEFIXPRO FIELD OPERATIONS</p>
            <p>LAT: 51.5074° N, LONG: 0.1278° W</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
