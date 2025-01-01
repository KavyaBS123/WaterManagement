export interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: string;
  attachments?: Attachment[];
  status?: 'sending' | 'sent' | 'error';
}

export interface Attachment {
  id: string;
  name: string;
  type: string;
  url: string;
  size: number;
}

export interface ChatHistory {
  [sessionId: string]: Message[];
}

export type TypingStatus = {
  isTyping: boolean;
  username?: string;
};