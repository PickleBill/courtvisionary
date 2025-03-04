
import React from "react";
import { Share, X } from "lucide-react";

interface ModalHeaderProps {
  onClose: () => void;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({ onClose }) => {
  return (
    <div className="p-4 bg-navy-light/40 text-white flex justify-between items-center border-b border-white/10">
      <h2 className="text-xl font-bold flex items-center gap-2">
        <Share className="w-5 h-5" />
        Share Match Update
      </h2>
      <button 
        onClick={onClose}
        className="text-white/70 hover:text-white transition-colors"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ModalHeader;
