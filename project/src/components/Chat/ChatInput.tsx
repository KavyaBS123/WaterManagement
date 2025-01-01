import { Paperclip, Send } from 'lucide-react';
import React, { useRef, useState } from 'react';

interface ChatInputProps {
  onSend: (text: string, attachments?: File[]) => void;
  onTypingStart: () => void;
  onTypingEnd: () => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSend, onTypingStart, onTypingEnd }) => {
  const [input, setInput] = useState("");
  const [attachments, setAttachments] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  let typingTimeout: NodeJS.Timeout;

  const handleTyping = () => {
    onTypingStart();
    clearTimeout(typingTimeout);
    typingTimeout = setTimeout(onTypingEnd, 1000);
  };

  const handleSend = () => {
    if (!input.trim() && attachments.length === 0) return;
    onSend(input, attachments);
    setInput("");
    setAttachments([]);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setAttachments(prev => [...prev, ...files]);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="p-4 border-t">
      {attachments.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-2">
          {attachments.map((file, index) => (
            <div key={index} className="bg-gray-100 px-2 py-1 rounded-md text-sm">
              {file.name}
            </div>
          ))}
        </div>
      )}
      <div className="flex space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            handleTyping();
          }}
          onKeyDown={handleKeyPress}
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileSelect}
          className="hidden"
          multiple
        />
        <button
          onClick={() => fileInputRef.current?.click()}
          className="p-2 text-gray-500 hover:text-gray-700 transition"
          aria-label="Attach file"
        >
          <Paperclip size={20} />
        </button>
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          aria-label="Send message"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};
export default ChatInput;