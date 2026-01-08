
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
          parts: [{ text: `You are RepsApparel's virtual style assistant. RepsApparel is a high-energy lifestyle and streetwear brand for people with an active, high-intensity lifestyle. Your tone is energetic, motivating, and knowledgeable, like a trusted workout partner who's also a style expert. You help customers with sizing for an athletic fit, creating outfits for the gym and the street, and choosing the best gear for performance. Our collection includes: Essential Boxy Tees, Tech Fleece Hoodies, Minimalist Windbreakers, and performance-focused accessories.
          
          User message: ${lastUserMessage}` }]
        }
      ],
      config: {
        systemInstruction: "You are the RepsApparel virtual coach and style expert. Provide energetic, practical, and motivational style advice.",
        temperature: 0.7,
        topP: 0.8,
      }
    });

    return response.text || "I'm sorry, I'm having trouble processing that right now. How can I help you get geared up with RepsApparel today?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, my systems are currently taking a quick water break. Please try again in a moment.";
  }
};
