import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {

    const { input } = req.body;

    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(
      `Analysiere diese Reinigungsanfrage für PrimeClean Berlin: ${input}.
      Antworte in JSON mit estimation und advice.`
    );

    const text = result.response.text();

    res.status(200).json(JSON.parse(text));

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "AI failed" });
  }

}
