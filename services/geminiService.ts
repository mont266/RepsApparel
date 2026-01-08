
import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getStyleAdvice = async (history: Message[]): Promise<string> => {
  try {
    const chatHistory = history.map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }]
    }));

    // We'll use the last user message as the prompt, and the rest as context/history
    const lastUserMessage = history[history.length - 1].content;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        {
          role: 'user',
          parts: [{ text: `You are AURA's virtual style assistant. AURA is a minimalist, high-end clothing brand. Your tone is sophisticated, helpful, and concise. You help customers with sizing, outfit pairing, and general fashion trends related to minimalist aesthetic. Our collection includes: Essential Tees, Tech Outerwear, Italian Wool Coats, Raw Denim, and Merino Knits.
          
          User message: ${lastUserMessage}` }]
        }
      ],
      config: {
        systemInstruction: "You are the AURA brand ambassador and style assistant. Provide elegant, concise fashion advice.",
        temperature: 0.7,
        topP: 0.8,
      }
    });

    return response.text || "I'm sorry, I'm having trouble processing that right now. How can I help you with your AURA wardrobe today?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, my systems are currently taking a fashion break. Please try again in a moment.";
  }
};
