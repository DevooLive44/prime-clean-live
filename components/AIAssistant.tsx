import React, { useState } from "react";
import { GoogleGenAI } from "@google/genai";

export default function AIAssistant() {

  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateEstimate = async () => {

    if (!userInput.trim()) return;

    setLoading(true);

    try {

      const ai = new GoogleGenAI({
        apiKey: import.meta.env.VITE_GOOGLE_API_KEY
      });

      const response = await ai.models.generateContent({
        model: "gemini-1.5-flash",
        contents: `Analysiere diese Reinigungsanfrage für ein Gebäude: ${userInput}. Gib eine kurze Planungsschätzung.`
      });

      setResult(response.text);

    } catch (err) {
      console.log(err);
    }

    setLoading(false);

  };
    return (
  <section className="py-24 bg-[#0f172a] text-white border-t border-slate-800/50">
    <div className="max-w-4xl mx-auto px-6">

      <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 shadow-[0_30px_60px_rgba(0,0,0,0.6)]">

        <h2 className="text-4xl font-black mb-6 tracking-tighter">
          KI Planungsschätzung
        </h2>

        <textarea
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Beschreibe dein Objekt z.B. Büro 500qm Glasflächen tägliche Reinigung..."
          className="w-full h-40 bg-slate-800 border border-white/10 rounded-2xl p-6 outline-none focus:border-blue-500 transition"
        />

        <button
          onClick={generateEstimate}
          className="mt-6 bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-2xl font-bold"
        >
          Planungsschätzung
        </button>

        {loading && (
          <p className="mt-6 text-blue-400 font-bold">
            KI analysiert Anfrage...
          </p>
        )}

        {result && (
          <div className="mt-8 bg-slate-800/60 border border-white/10 p-6 rounded-2xl">
            {result}
          </div>
        )}

      </div>

    </div>
  </section>
);
