import { Bot, Check, Clock, FileText, User } from 'lucide-react';
import React from 'react';
import { Message } from '../../types/chat';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const { isBot, text, timestamp, attachments, status } = message;

  const StatusIcon = () => {
    if (!status || isBot) return null;
    switch (status) {
      case 'sending':
        return <Clock size={14} className="text-gray-400" />;
      case 'sent':
        return <Check size={14} className="text-green-500" />;
      case 'error':
        return <span className="text-red-500 text-xs">Failed</span>;
      default:
        return null;
    }
  };

  return (
    <div className={`flex items-start space-x-2 ${isBot ? '' : 'flex-row-reverse space-x-reverse'}`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
        isBot ? 'bg-blue-100' : 'bg-gray-100'
      }`}>
        {isBot ? (
          <Bot size={20} className="text-blue-600" />
        ) : (
          <User size={20} className="text-gray-600" />
        )}
      </div>
      <div className="flex flex-col gap-1 max-w-[75%]">
        <div className={`p-3 rounded-lg ${
          isBot ? 'bg-gray-100' : 'bg-blue-600 text-white'
        }`}>
          <p className="text-sm">{text}</p>
          {attachments && attachments.length > 0 && (
            <div className="mt-2 space-y-1">
              {attachments.map((attachment) => (
                <a
                  key={attachment.id}
                  href={attachment.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-1 text-xs ${
                    isBot ? 'text-blue-600' : 'text-white'
                  }`}
                >
                  <FileText size={14} />
                  {attachment.name}
                </a>
              ))}
            </div>
          )}
        </div>
        <div className="flex items-center gap-1 text-xs text-gray-500">
          <span>{timestamp}</span>
          <StatusIcon />
        </div>
      </div>
    </div>
  );
};
export default ChatMessage;