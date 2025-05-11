import React from 'react';
import { Mail } from 'lucide-react';

interface EnvelopeProps {
  isOpened: boolean;
  onClick: () => void;
}

const Envelope: React.FC<EnvelopeProps> = ({ isOpened, onClick }) => {
  return (
    <div 
      className={`
        cursor-pointer 
        bg-white 
        color-white
        rounded-lg 
        p-8 
        shadow-lg 
        transition-all 
        duration-500 
        transform 
        hover:scale-105
        ${isOpened ? 'rotate-6' : ''}
      `}
      onClick={onClick}
    >
      <div className="flex flex-col items-center justify-center">
        <Mail 
          size={64} 
          className={`text-red-500 mb-4 transition-transform duration-500 ${isOpened ? 'rotate-45' : ''}`} 
        />
        <p className="text-center text-gray-800 font-serif">
          {isOpened ? "Opening..." : "Click to open"}
        </p>
      </div>
    </div>
  );
};

export default Envelope;