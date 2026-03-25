
import React, { useState } from 'react';


const AIAssistant: React.FC = () => {
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ estimation: string; advice: string } | null>(null);

  
const generateEstimate = async () => {

  if (!userInput.trim()) return;

  setLoading(true);

  try {
const res = await fetch("/api/api/ai", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    input: userInput
  })
});
    const data = await res.json();

    setResult(data);

  } catch (err) {
    console.log(err);
  }

  setLoading(false);
};
  return (
    <section id="ai-assistant" className="py-24 bg-[#0f172a] text-white overflow-hidden relative">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 italic tracking-tight">KI-Analyse für Objekte</h2>
          <p className="text-slate-400 text-lg">
            Kurze Projektbeschreibung genügt – unsere KI hilft bei der Planung für Ihr Objekt in Berlin.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-2xl text-slate-900 border border-slate-800/10">
          <textarea
            className="w-full h-40 p-5 bg-slate-50 border border-slate-200 rounded-2xl mb-6 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none text-lg"
            placeholder="z.B. Treppenhaus mit 5 Etagen, wöchentliche Reinigung gewünscht..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          ></textarea>
          
          <button
            onClick={generateEstimate}
            disabled={loading || !userInput}
            className={`w-full py-5 rounded-2xl font-bold text-white text-lg transition-all shadow-lg ${loading ? 'bg-slate-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 hover:shadow-blue-500/20'}`}
          >
            {loading ? 'Berechne Planung...' : 'Planungsschätzung erhalten'}
          </button>

          {result && (
            <div className="mt-10 p-8 bg-blue-50 border border-blue-100 rounded-2xl animate-fade-in">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#1e3a8a] rounded-xl flex items-center justify-center text-white text-xl shadow-lg">✨</div>
                <div>
                  <h4 className="font-bold text-[#1e3a8a] text-xl">Empfohlener Turnus: {result.estimation}</h4>
                  <p className="text-sm text-blue-800 font-medium tracking-wide uppercase">Berlin Facility Insight</p>
                </div>
              </div>
              <div className="bg-white p-5 rounded-xl border border-blue-100 shadow-sm">
                <p className="text-slate-700 italic leading-relaxed text-lg">"{result.advice}"</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-900 rounded-full opacity-10 blur-[120px] -translate-y-1/2"></div>
      </div>
    </section>
  );
};

export default AIAssistant;
