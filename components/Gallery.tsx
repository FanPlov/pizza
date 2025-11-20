
import React from 'react';
import { useSettings } from '../contexts/SettingsContext';

export const Gallery: React.FC = () => {
  const { t } = useSettings();

  // --------------------------------------------------------------------------
  // 🖼️ НАСТРОЙКА ГАЛЕРЕИ
  // --------------------------------------------------------------------------
  // Сейчас здесь используются цвета и иконки.
  // Чтобы вставить свои ФОТОГРАФИИ, вам нужно будет изменить код отображения ниже.
  
  const slides = [
    { color: 'bg-rose-300', icon: '🎓', title: 'Graduation' },
    { color: 'bg-blue-300', icon: '📚', title: 'Library' },
    { color: 'bg-green-300', icon: '🏞️', title: 'Campus' },
    { color: 'bg-yellow-300', icon: '💡', title: 'Idea Lab' },
    { color: 'bg-purple-300', icon: '🗣️', title: 'Speaking Club' },
    { color: 'bg-orange-300', icon: '🍕', title: 'Pizza Party' },
  ];

  const allSlides = [...slides, ...slides, ...slides];

  return (
    <section className="py-24 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-10">
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          {t.gallery_title}
        </h2>
      </div>

      <div className="relative w-full">
        <div className="flex animate-scroll-right w-max gap-6 px-4">
          {allSlides.map((slide, idx) => (
            <div 
              key={idx} 
              className={`w-72 h-96 ${slide.color} rounded-3xl flex flex-col items-center justify-center p-8 shadow-xl transform hover:-translate-y-4 transition-transform duration-300 overflow-hidden relative`}
            >
              {/* 
                 📷 ЗАМЕНА НА ФОТО:
                 Раскомментируйте строку ниже и вставьте ссылку на ваше фото в src.
                 <img src="ваша_ссылка.jpg" className="absolute inset-0 w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
              */}
              
              <div className="text-6xl mb-4 filter drop-shadow-lg relative z-10">{slide.icon}</div>
              <h3 className="text-2xl font-bold text-slate-800 relative z-10">{slide.title}</h3>
              <div className="mt-4 w-12 h-1 bg-slate-800/20 rounded-full relative z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
