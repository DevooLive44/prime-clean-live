import React, { useState } from "react";
import { GoogleGenAI } from "@google/genai";

const AIAssistant = () => {

  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const generateEstimate = async () => {

  if (!userInput.trim()) return;

  setLoading(true);

  try {

    const res = await fetch("/api/ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        prompt: `Erstelle eine kurze Planungsschätzung für folgende Reinigungsanfrage: ${userInput}`
      })
    });

    const data = await res.json();

    setResult(data.text);

  } catch (e) {

    setResult("Fehler bei KI Anfrage");

  }

  setLoading(false);

};

    if (!userInput.trim()) return;

    setLoading(true);

    try {

      

      
        
        contents: `Erstelle eine kurze Planungsschätzung für folgende Reinigungsanfrage: ${userInput}`
      });

      setResult(response.text);

    } catch (e) {
      setResult("Fehler bei KI Anfrage");
    }

    setLoading(false);
  };

  return (
    <section className="py-24 bg-[#0f172a] text-white border-t border-slate-800/50">
      <div className="max-w-4xl mx-auto px-6">

        <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10">

          <h2 className="text-4xl font-black mb-6">
            KI Planungsschätzung
          </h2>

          <textarea
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="w-full h-40 bg-slate-800 border border-white/10 rounded-2xl p-6"
            placeholder="z.B Büro 400qm Glasflächen"
          />

          <button
            onClick={generateEstimate}
            className="mt-6 bg-blue-600 px-8 py-4 rounded-2xl font-bold"
          >
            Planungsschätzung
          </button>

          {loading && <p className="mt-6 text-blue-400">KI denkt...</p>}

          {result && (
            <div className="mt-8 bg-slate-800 p-6 rounded-2xl">
              {result}
            </div>
          )}

        </div>

      </div>
    </section>
  );

};

export default AIAssistant;
