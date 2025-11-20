import React, { useState } from 'react';
import { MessageCircle, Phone, Send, X } from 'lucide-react';

export const FloatingContact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
      
      {/* Floating Options */}
      <div className={`flex flex-col gap-3 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        
        <a 
          href="https://t.me/pizza_academy" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-[#229ED9] hover:bg-[#1e8bbf] text-white pl-4 pr-3 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all"
        >
          <span className="font-bold text-sm">Telegram</span>
          <div className="bg-white/20 p-1.5 rounded-full">
            <Send size={18} />
          </div>
        </a>

        <a 
          href="tel:+998901234567" 
          className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white pl-4 pr-3 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all"
        >
          <span className="font-bold text-sm">Call Now</span>
          <div className="bg-white/20 p-1.5 rounded-full">
            <Phone size={18} />
          </div>
        </a>

      </div>

      {/* Main Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 ${isOpen ? 'bg-slate-800 rotate-90' : 'bg-blue-600 rotate-0'}`}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={32} />}
        
        {/* Pulse effect */}
        {!isOpen && (
          <span className="absolute -inset-1 rounded-full bg-blue-500 opacity-30 animate-ping pointer-events-none"></span>
        )}
      </button>

    </div>
  );
};