
import React from 'react';
import { Pizza } from 'lucide-react';

export const Marquee: React.FC = () => {
  // --------------------------------------------------------------------------
  // 🔡 БЕГУЩАЯ СТРОКА
  // Измените слова в кавычках, чтобы поменять текст в бегущей строке.
  // --------------------------------------------------------------------------
  const items = [
    "PIZZA ACADEMY", "FUTURE", "SUCCESS", "EDUCATION", 
    "IELTS", "SPEAKING", "GRAMMAR", "FUN", 
    "NATIVE SPEAKERS", "GLOBAL"
  ];

  // Для плавности (дублируем список)
  const displayItems = [...items, ...items, ...items];

  return (
    <div className="relative bg-blue-600 text-white py-6 overflow-hidden z-20 border-y border-blue-500/50">
      {/* Wrapper with hardware acceleration */}
      <div className="flex animate-scroll-left w-max will-change-transform">
        {displayItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-8 mx-8">
            <span className="text-4xl font-black tracking-tighter italic uppercase whitespace-nowrap opacity-95">
              {item}
            </span>
            <Pizza className="text-white/40" size={24} />
          </div>
        ))}
      </div>
    </div>
  );
};
