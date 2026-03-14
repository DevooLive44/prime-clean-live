export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { text } = JSON.parse(req.body);

  const aiResponse = await fetch(process.env.GOOGLE_AI_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.GOOGLE_API_KEY}`
    },
    body: JSON.stringify({
      prompt: text
    })
  }).then(r => r.json());

  res.status(200).json({ ai: aiResponse });
}
