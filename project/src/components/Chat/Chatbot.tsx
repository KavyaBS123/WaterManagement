import { MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Message, TypingStatus } from '../../types/chat';
import { formatTimestamp, loadHistory, saveHistory } from '../../utils/chatbot';
import ChatHeader from './ChatHeader';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';
import TypingIndicator from './TypingIndicator';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [typing, setTyping] = useState<TypingStatus>({ isTyping: false });

  // Load chat history on component mount
  useEffect(() => {
    const history = loadHistory();
    const currentSession = Object.values(history)[0] || [];
    setMessages(currentSession);
  }, []);

  // Save messages to local storage whenever they change
  useEffect(() => {
    if (messages.length > 0) {
      const sessionId = new Date().toISOString().split('T')[0];
      saveHistory({ [sessionId]: messages });
    }
  }, [messages]);

  const handleSend = async (text: string, attachments?: File[]) => {
    if (!text.trim() && (!attachments || attachments.length === 0)) return;

    // Add user message
    const userMessage: Message = {
      id: uuidv4(),
      text,
      isBot: false,
      timestamp: formatTimestamp(new Date()),
      status: 'sending',
      attachments: attachments?.map(file => ({
        id: uuidv4(),
        name: file.name,
        type: file.type,
        url: URL.createObjectURL(file),
        size: file.size
      }))
    };

    setMessages(prev => [...prev, userMessage]);

    // Update status to sent after a brief delay
    setTimeout(() => {
      setMessages(prev =>
        prev.map(msg =>
          msg.id === userMessage.id ? { ...msg, status: 'sent' } : msg
        )
      );
    }, 500);

    // Simulate bot typing
    setTyping({ isTyping: true });

    // Simulate bot response after a delay
    setTimeout(() => {
      const botMessage: Message = {
        id: uuidv4(),
        text: "Thank you for your message. Our team will get back to you soon.",
        isBot: true,
        timestamp: formatTimestamp(new Date())
      };

      setTyping({ isTyping: false });
      setMessages(prev => [...prev, botMessage]);
    }, 2000);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition z-50"
        aria-label="Open chat"
      >
        <MessageCircle size={24} />
      </button>
    );
  }

  return (
    <div
      className={`fixed bottom-6 right-6 w-96 bg-white rounded-lg shadow-xl z-50 transition-all duration-300 ${
        isMinimized ? 'h-16' : 'h-[600px]'
      }`}
    >
      <ChatHeader
        onClose={() => setIsOpen(false)}
        onMinimize={() => setIsMinimized(!isMinimized)}
      />

      {!isMinimized && (
        <>
          <div className="h-[calc(100%-8rem)] overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            {typing.isTyping && <TypingIndicator />}
          </div>

          <ChatInput
            onSend={handleSend}
            onTypingStart={() => setTyping({ isTyping: true })}
            onTypingEnd={() => setTyping({ isTyping: false })}
          />
        </>
      )}
    </div>
  );
};

export default Chatbot;