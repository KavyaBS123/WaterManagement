// Utility functions for chatbot
import { Message, ChatHistory } from '../types/chat';

const STORAGE_KEY = 'chat_history';

export const saveHistory = (history: ChatHistory) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
};

export const loadHistory = (): ChatHistory => {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : {};
};

export const formatTimestamp = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
};