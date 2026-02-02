import { TradeIdentity, TradeContent, Blueprint } from "@shared/schema";
import { ViewportMode } from "@/pages/Preview";

interface CustomPageProps {
  content: TradeContent;
  blueprint: Blueprint;
  tradeIdentity?: TradeIdentity;
  viewport: ViewportMode;
}

export function PlumberA({ content, tradeIdentity, viewport }: CustomPageProps) {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Unique Navbar */}
      <nav className="sticky top-0 z-50 bg-blue-700 text-white px-6 py-4 flex justify-between items-center shadow-lg">
        <div className="font-black text-2xl tracking-tighter">MAISON AQUA</div>
        <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#how-it-works">Process</a>
          <a href="#faq">FAQ</a>
        </div>
        <button className="bg-white text-blue-700 px-6 py-2 rounded-none font-bold text-xs uppercase tracking-tighter hover:bg-slate-100 transition-colors">
          Request Quote
        </button>
      </nav>

      {/* Unique Hero: Editorial Style */}
      <section className="relative h-[80vh] flex items-center overflow-hidden bg-slate-50">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 z-10">
            <div className="inline-block px-4 py-1 bg-blue-100 text-blue-800 text-[10px] font-black uppercase tracking-[0.3em] mb-6">
              Certified Master Plumbers
            </div>
            <h1 className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter text-slate-900 mb-8 italic">
              {content.hero.headline}
            </h1>
            <p className="text-xl text-slate-600 max-w-xl mb-10 leading-relaxed">
              {content.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-700 text-white px-10 py-5 font-black uppercase tracking-tighter hover:scale-105 transition-transform">
                {content.hero.cta_primary}
              </button>
            </div>
          </div>
          <div className="md:col-span-5 relative h-full min-h-[400px]">
            <div className="absolute inset-0 bg-blue-700/10 -rotate-3 rounded-3xl" />
            <img 
              src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&fit=crop" 
              className="relative w-full h-full object-cover rounded-3xl shadow-2xl rotate-2"
              alt="Plumbing"
            />
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 bg-slate-100 border-y border-slate-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-40 grayscale">
            <div className="font-black text-xl italic tracking-tighter">TRUSTED PARTNER</div>
            <div className="font-black text-xl italic tracking-tighter">CERTIFIED EXPERT</div>
            <div className="font-black text-xl italic tracking-tighter">INDUSTRIAL SAFETY</div>
            <div className="font-black text-xl italic tracking-tighter">GUILD MEMBER</div>
          </div>
        </div>
      </section>

      {/* Unique Service Grid */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter italic">Technical<br/>Expertise</h2>
            <div className="h-px flex-1 bg-slate-200 mx-12 hidden md:block" />
            <p className="max-w-xs text-slate-500 uppercase text-[10px] font-bold tracking-[0.2em] leading-loose">
              Every project executed with industrial-grade precision and long-term warranties.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-slate-200 border border-slate-200 overflow-hidden shadow-2xl">
            {content.services.map((s, i) => (
              <div key={i} className="bg-white p-12 hover:bg-slate-50 transition-colors group">
                <span className="text-slate-200 font-black text-6xl mb-8 block group-hover:text-blue-100 transition-colors italic">0{i+1}</span>
                <h3 className="text-2xl font-black tracking-tighter mb-4 italic uppercase">{s.name}</h3>
                <p className="text-slate-600 leading-relaxed mb-8">{s.description}</p>
                <div className="w-8 h-1 bg-blue-700 group-hover:w-24 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="about" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1 relative">
              <img 
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&fit=crop" 
                className="w-full h-[600px] object-cover rounded-none grayscale"
                alt="Workshop"
              />
              <div className="absolute -bottom-12 -right-12 bg-blue-700 text-white p-12 hidden md:block">
                <p className="text-7xl font-black italic tracking-tighter">15+</p>
                <p className="text-xs font-bold uppercase tracking-widest">Years of Excellence</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter italic mb-12">The Aqua Standard</h2>
              <div className="space-y-12">
                <div>
                  <h3 className="text-xl font-black uppercase tracking-tighter mb-4 italic">Precision Engineering</h3>
                  <p className="text-slate-600 leading-relaxed italic">We don't just fix leaks; we engineer long-term solutions using the highest-grade materials and latest diagnostic technologies.</p>
                </div>
                <div>
                  <h3 className="text-xl font-black uppercase tracking-tighter mb-4 italic">Certified Mastery</h3>
                  <p className="text-slate-600 leading-relaxed italic">Our team consists exclusively of master plumbers with a minimum of 10 years of industrial experience.</p>
                </div>
                <div>
                  <h3 className="text-xl font-black uppercase tracking-tighter mb-4 italic">Transparent Ethics</h3>
                  <p className="text-slate-600 leading-relaxed italic">Upfront pricing, detailed reports, and zero hidden fees. We build relationships, not just plumbing systems.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-9xl font-black tracking-tighter italic text-slate-100 leading-none mb-12">PROCESS</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { title: "Consult", desc: "Expert assessment of your system's current state and failure points." },
              { title: "Design", desc: "Creation of a bespoke repair or installation blueprint." },
              { title: "Execute", desc: "Meticulous implementation by our master plumbing team." },
              { title: "Verify", desc: "Rigorous pressure testing and 12-month quality certification." }
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="text-slate-900 font-black text-4xl italic mb-6">STEP {i+1}</div>
                <h3 className="text-xl font-black uppercase tracking-tighter mb-4 italic">{step.title}</h3>
                <p className="text-slate-500 italic leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 italic">
            {content.testimonials.map((t, i) => (
              <div key={i} className="p-12 border border-white/10 hover:border-blue-700 transition-colors">
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => <div key={i} className="w-4 h-4 bg-blue-700" />)}
                </div>
                <p className="text-2xl font-black tracking-tighter mb-12 leading-tight">"{t.content}"</p>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  <span className="text-white">{t.author}</span> — {t.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter italic text-center mb-24">Common Queries</h2>
          <div className="space-y-12">
            {content.faqs.map((faq, i) => (
              <div key={i} className="group">
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-6 italic group-hover:text-blue-700 transition-colors">{faq.q}</h3>
                <p className="text-slate-600 italic leading-relaxed pl-8 border-l-4 border-slate-100 group-hover:border-blue-700 transition-colors">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-xs font-black uppercase tracking-[0.5em] text-blue-700 mb-12">Strategic Coverage</h2>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-2xl font-black italic tracking-tighter text-slate-300">
            <span>MANCHESTER</span>
            <span className="text-slate-900">LONDON</span>
            <span>BIRMINGHAM</span>
            <span className="text-slate-900">LEEDS</span>
            <span>LIVERPOOL</span>
            <span className="text-slate-900">BRISTOL</span>
          </div>
        </div>
      </section>

      {/* Unique CTA Section */}
      <section className="bg-slate-900 text-white py-32 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none select-none text-[20vw] font-black italic whitespace-nowrap leading-none tracking-tighter">
          EMERGENCY 24/7 CALL NOW
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-5xl md:text-9xl font-black italic tracking-tighter leading-none mb-12">
            LEAKING NOW?<br/><span className="text-blue-500 underline decoration-8 underline-offset-8">WE'RE ON IT.</span>
          </h2>
          <button className="bg-white text-slate-900 px-16 py-8 rounded-full font-black text-2xl tracking-tighter hover:scale-110 transition-transform shadow-[0_0_50px_rgba(59,130,246,0.3)]">
            CALL 0800-PLUMBER
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-24 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
            <div className="col-span-1 md:col-span-2">
              <div className="font-black text-4xl tracking-tighter mb-8">MAISON AQUA</div>
              <p className="text-slate-500 italic max-w-sm mb-12 leading-relaxed">
                Elite industrial-grade plumbing services for properties that demand perfection. Established 2011.
              </p>
            </div>
            <div>
              <h4 className="font-black uppercase tracking-tighter mb-8 italic">Contact</h4>
              <p className="text-slate-500 italic mb-4 leading-relaxed">{content.contact.address}</p>
              <p className="text-slate-500 italic mb-4 leading-relaxed">{content.contact.phone}</p>
              <p className="text-slate-500 italic leading-relaxed">{content.contact.email}</p>
            </div>
            <div>
              <h4 className="font-black uppercase tracking-tighter mb-8 italic">Social</h4>
              <div className="flex flex-col gap-4 text-slate-500 italic uppercase text-xs font-black tracking-widest">
                <a href="#" className="hover:text-blue-700 transition-colors">Instagram</a>
                <a href="#" className="hover:text-blue-700 transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between gap-8 text-[10px] font-black uppercase tracking-widest text-slate-500">
            <p>© 2026 MAISON AQUA INDUSTRIAL. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
