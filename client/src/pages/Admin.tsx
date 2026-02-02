import { useState } from "react";
import { api } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";
import { Link } from "wouter";
import { ArrowLeft, Search, Loader2, CheckCircle, Globe } from "lucide-react";

export default function Admin() {
  const { toast } = useToast();
  const [url, setUrl] = useState("");
  const [analyzing, setAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<any>(null);
  const [generating, setGenerating] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleAnalyze = async () => {
    setAnalyzing(true);
    try {
      const res = await fetch(api.trades.analyze.path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url })
      });
      if (!res.ok) throw new Error("Analysis failed");
      const data = await res.json();
      setAnalysis(data);
    } catch (error) {
      toast({ title: "Error", description: "Could not analyze website", variant: "destructive" });
    } finally {
      setAnalyzing(false);
    }
  };

  const handleGenerate = async () => {
    setGenerating(true);
    try {
      const res = await fetch("/api/trades/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(analysis)
      });
      if (!res.ok) throw new Error("Generation failed");
      const data = await res.json();
      setResult(data);
      toast({ title: "Success", description: "Brand generated successfully" });
    } catch (error) {
      toast({ title: "Error", description: "Could not generate brand", variant: "destructive" });
    } finally {
      setGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white p-6 md:p-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">
              Brand Import Console
            </h1>
            <p className="text-muted-foreground mt-2">Analyze any website to clone its design DNA</p>
          </div>
          <Link href="/" className="p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-all">
            <ArrowLeft size={20} />
          </Link>
        </header>

        <div className="gradient-border rounded-2xl bg-white/5 p-8 space-y-6">
          <div className="space-y-4">
            <label className="text-sm font-medium uppercase tracking-wider text-purple-400">Website URL</label>
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <input
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://example-trade.com"
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-black/40 border border-white/10 focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                />
              </div>
              <button
                onClick={handleAnalyze}
                disabled={analyzing || !url}
                className="px-8 rounded-xl font-bold bg-purple-600 hover:bg-purple-500 disabled:opacity-50 flex items-center gap-2 transition-all"
              >
                {analyzing ? <Loader2 className="animate-spin" /> : <Search size={20} />}
                Analyze Brand
              </button>
            </div>
          </div>

          {analysis && !result && (
            <div className="animate-in fade-in slide-in-from-top-4 duration-500 space-y-8 pt-8 border-t border-white/10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: "Business", value: analysis.trade },
                  { label: "Tone", value: analysis.tone },
                  { label: "Typography", value: analysis.typography },
                  { label: "Hero Type", value: analysis.hero_style }
                ].map((stat) => (
                  <div key={stat.label} className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <p className="text-xs text-muted-foreground uppercase">{stat.label}</p>
                    <p className="font-semibold mt-1">{stat.value}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <p className="text-sm font-medium uppercase text-purple-400">Detected Palette</p>
                <div className="flex gap-3">
                  {analysis.color_palette?.map((color: string) => (
                    <div key={color} className="group relative">
                      <div className="w-12 h-12 rounded-lg border border-white/20" style={{ backgroundColor: color }} />
                      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">{color}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleGenerate}
                  disabled={generating}
                  className="flex-1 py-4 rounded-xl font-bold bg-white text-black hover:bg-gray-200 disabled:opacity-50 flex items-center justify-center gap-2 transition-all"
                >
                  {generating ? <Loader2 className="animate-spin" /> : <CheckCircle size={20} />}
                  Generate Trade & Samples
                </button>
                <button className="px-8 py-4 rounded-xl font-bold border border-white/20 hover:bg-white/5 transition-all">
                  Edit Before Save
                </button>
              </div>
            </div>
          )}

          {result && (
            <div className="animate-in zoom-in-95 duration-500 bg-purple-600/20 border border-purple-500/50 rounded-xl p-8 text-center space-y-6">
              <CheckCircle size={48} className="mx-auto text-purple-400" />
              <div>
                <h3 className="text-2xl font-bold">Brand Ready!</h3>
                <p className="text-purple-200/70 mt-2">{analysis.trade} category and 3 blueprints generated</p>
              </div>
              <div className="flex justify-center gap-4">
                <Link href="/" className="px-6 py-2 bg-white text-black rounded-lg font-semibold hover:bg-gray-200">
                  View Catalog
                </Link>
                <Link href={`/trade/${result.slug}`} className="px-6 py-2 border border-white/20 rounded-lg font-semibold hover:bg-white/5">
                  View Samples
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
