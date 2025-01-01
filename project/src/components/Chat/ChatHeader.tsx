import { MessageCircle, Minimize2, X } from 'lucide-react';
import React from 'react';

interface ChatHeaderProps {
  onClose: () => void;
  onMinimize: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ onClose, onMinimize }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b bg-white rounded-t-lg">
      <div className="flex items-center space-x-2">
        <MessageCircle className="text-blue-600" size={20} />
        <h3 className="font-semibold">Chat Support</h3>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={onMinimize}
          className="text-gray-500 hover:text-gray-700 transition"
          aria-label="Minimize chat"
        >
          <Minimize2 size={18} />
        </button>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 transition"
          aria-label="Close chat"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
};
export default ChatHeader;