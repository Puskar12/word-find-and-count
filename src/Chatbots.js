import { GoogleGenAI } from "@google/genai";

export async function openRouterResponse(msg) {
  const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: 'Bearer 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',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'deepseek/deepseek-r1-0528:free',
      messages: [
        {
          role: 'user',
          content: msg,
        },
      ],
    }),
  });
  const resbody = await res.json()
  const data = await resbody.choices[0].message.content
  // console.log(data)
  return data
}


 
export const googleAiResponse = async(msg) => {
const ai = new GoogleGenAI({ apiKey: "AIzaSyAKNqoyUekAG7f0jbrj-QLdcU8imJzpW-4" });
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: msg,
  });
  console.log(response.text);
 }