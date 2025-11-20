import { GoogleGenAI } from "@google/genai";
import { AIModel, ChatMessage } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const sendChatMessage = async (
  history: ChatMessage[],
  newMessage: string,
  useThinking: boolean
): Promise<string> => {
  try {
    // Prepare prompt
    const systemInstruction = "You are an expert English tutor at 'Pizza Academy'. You are helpful, encouraging, and use pizza-related metaphors occasionally to explain English concepts. If 'Thinking Mode' is on, you dive very deep into grammatical nuances.";
    
    // Convert history for the prompt (simplified for this context, usually we manage a chat session)
    // For simplicity in this stateless service wrapper, we'll just send the new message with context if needed, 
    // but here we will just send the current prompt with system instruction context.
    
    let config: any = {
      systemInstruction,
    };

    if (useThinking) {
      config.thinkingConfig = { thinkingBudget: 32768 };
    }

    // Using gemini-3-pro-preview as requested for both normal and thinking
    const modelId = AIModel.GEMINI_3_PRO;

    // Construct a chat-like history for the prompt if we were maintaining stateful chat object, 
    // but to keep it simple and robust for this demo:
    const chat = ai.chats.create({
      model: modelId,
      config: config,
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const response = await chat.sendMessage({ message: newMessage });
    return response.text || "Sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Error in chat:", error);
    return "An error occurred while contacting the Pizza Academy AI Tutor.";
  }
};

export const analyzeImage = async (base64Image: string, prompt: string): Promise<string> => {
  try {
    // Clean base64 string if needed
    const cleanBase64 = base64Image.split(',')[1] || base64Image;

    const response = await ai.models.generateContent({
      model: AIModel.GEMINI_3_PRO,
      contents: {
        parts: [
          {
            inlineData: {
              mimeType: 'image/jpeg', 
              data: cleanBase64
            }
          },
          {
            text: prompt || "Analyze this image and help me learn English from it."
          }
        ]
      }
    });

    return response.text || "I couldn't analyze the image.";
  } catch (error) {
    console.error("Error analyzing image:", error);
    return "Failed to process the image. Please try again.";
  }
};
