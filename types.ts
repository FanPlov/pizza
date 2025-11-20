export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}

export interface EnrollmentData {
  name: string;
  phone: string;
}

export enum AIModel {
  GEMINI_3_PRO = 'gemini-3-pro-preview',
}
