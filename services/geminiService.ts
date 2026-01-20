
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const analyzeLyrics = async (prompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `Eres un experto historiador y fanático de la banda Twenty One Pilots. 
        Conoces a fondo el lore de Dema, Blurryface, Clancy y los Banditos. 
        Tu objetivo es explicar significados de letras, teorías y conceptos de la banda a los fans de forma profesional y apasionada. 
        Responde siempre en español. Sé conciso pero profundo.`,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Lo siento, Clancy no puede responder en este momento. Inténtalo de nuevo más tarde.";
  }
};
