
import React, { useState } from 'react';
import { MessageCircle, Phone, Send, X } from 'lucide-react';

export const FloatingContact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
      
      {/* Выпадающие кнопки */}
      <div className={`flex flex-col gap-3 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        
        {/* 
           🔵 TELEGRAM КНОПКА 
           Вставьте ссылку на ваш Telegram (например, https://t.me/ваш_юзернейм) в атрибут href
        */}
        <a 
          href="https://t.me/pizza_academy" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-[#229ED9] hover:bg-[#1e8bbf] text-white px-5 py-3 rounded-full shadow-lg transition-transform hover:scale-105 font-bold"
        >
          <Send size={20} />
          Telegram
        </a>

        {/* 
           🟢 ТЕЛЕФОН КНОПКА 
           Вставьте ваш номер телефона после 'tel:' (например, tel:+998901234567)
        */}
        <a 
          href="tel:+998901234567" 
          className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg transition-transform hover:scale-105 font-bold"
        >
          <Phone size={20} />
          Позвонить
        </a>

      </div>

      {/* Главная круглая кнопка (FAB) */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 ${
           isOpen ? 'bg-slate-800 text-white rotate-90' : 'bg-blue-600 text-white'
        }`}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>
    </div>
  );
};
