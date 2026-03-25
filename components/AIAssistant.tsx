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
    <div className="bg-slate-900 p-8 rounded-2xl">
      <textarea
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        className="w-full p-4 rounded-xl text-black"
        placeholder="Beschreibe deine Reinigungsanfrage..."
      />

      <button
        onClick={generateEstimate}
        className="mt-4 bg-blue-600 px-6 py-3 rounded-xl"
      >
        Planungsschätzung
      </button>

      {loading && <p className="mt-4">KI denkt...</p>}

      {result && (
        <div className="mt-6 bg-slate-800 p-4 rounded-xl">
          {result}
        </div>
      )}

    </div>
  );
}
