import React from 'react';
import { FileText, Download } from 'lucide-react';

interface DownloadButtonProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  title,
  description,
  icon,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
    >
      {icon}
      <div className="flex-1 text-left">
        <p className="font-medium">{title}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <Download className="text-gray-400" />
    </button>
  );
};

export default DownloadButton;