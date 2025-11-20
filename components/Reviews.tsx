import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useSettings } from '../contexts/SettingsContext';

export const Reviews: React.FC = () => {
  const { t } = useSettings();

  // --------------------------------------------------------------------------
  // ИЗМЕНИТЕ ОТЗЫВЫ ЗДЕСЬ / EDIT REVIEWS HERE
  // --------------------------------------------------------------------------
  // Чтобы добавить новый отзыв, скопируйте объект внутри скобок {} и вставьте его через запятую.
  // To add a new review, copy an object inside {} and paste it with a comma.
  const reviews = [
    {
      id: 1,
      name: "Malika Karimova", // Имя студента / Student Name
      role: "IELTS 7.5", // Роль или результат / Role or Result
      text: "Pizza Academy полностью изменила мой подход к изучению языка. Уроки проходят невероятно интересно!", // Текст отзыва / Review Text
      avatar: "MK", // Инициалы для аватарки / Initials
      color: "bg-blue-100 text-blue-600" // Цвет аватарки (Tailwind classes)
    },
    {
      id: 2,
      name: "Azizbek Tursunov",
      role: "Student",
      text: "Никакой скучной зубрежки. Только практика, общение и реальный результат. Рекомендую всем!",
      avatar: "AT",
      color: "bg-orange-100 text-orange-600"
    },
    {
      id: 3,
      name: "Diana Kim",
      role: "Advanced Level",
      text: "Атмосфера в школе просто супер. Чувствуешь себя как дома, а преподаватели — настоящие профессионалы.",
      avatar: "DK",
      color: "bg-purple-100 text-purple-600"
    },
    {
      id: 4,
      name: "Jasur Aliyev",
      role: "Kids Course",
      text: "Моему сыну очень нравится! Он бежит на уроки с удовольствием. Спасибо учителям за терпение.",
      avatar: "JA",
      color: "bg-green-100 text-green-600"
    },
    {
      id: 5,
      name: "Sitora Ahmedova",
      role: "General English",
      text: "Начала с нуля и уже могу говорить. Методика очень эффективная и современная.",
      avatar: "SA",
      color: "bg-rose-100 text-rose-600"
    }
    // ДОБАВЬТЕ СЮДА НОВЫЙ ОТЗЫВ / ADD NEW REVIEW HERE
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-800 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ЗАГОЛОВОК СЕКЦИИ / SECTION HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
            Что говорят студенты
          </h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-500 dark:text-slate-400">
            Листайте вправо, чтобы увидеть больше отзывов 👉
          </p>
        </div>

        {/* 
            КОНТЕЙНЕР СЛАЙДЕРА / SLIDER CONTAINER 
            overflow-x-auto позволяет скроллить по горизонтали
        */}
        <div className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory no-scrollbar px-4 md:px-0">
          
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="flex-shrink-0 w-[300px] md:w-[350px] bg-white dark:bg-slate-900 p-8 rounded-[2rem] shadow-xl border border-slate-100 dark:border-slate-700 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 snap-center group"
            >
              <div className="mb-6">
                 <Quote size={40} className="text-slate-200 dark:text-slate-700 group-hover:text-blue-100 transition-colors fill-current" />
              </div>
              
              <p className="text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed mb-8 min-h-[120px]">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4 border-t border-slate-100 dark:border-slate-800 pt-6">
                {/* АВАТАРКА / AVATAR */}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${review.color}`}>
                  {review.avatar}
                </div>
                
                {/* ИМЯ И РОЛЬ / NAME AND ROLE */}
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">{review.name}</h4>
                  <p className="text-sm text-blue-600 font-medium">{review.role}</p>
                </div>
                
                {/* ЗВЕЗДЫ / STARS */}
                <div className="ml-auto flex text-orange-400">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
              </div>
            </div>
          ))}

          {/* КАРТОЧКА "ДОБАВИТЬ ОТЗЫВ" (Опционально) / CALL TO ACTION CARD */}
          <div className="flex-shrink-0 w-[300px] md:w-[350px] bg-blue-600 p-8 rounded-[2rem] shadow-xl flex flex-col items-center justify-center text-center text-white snap-center cursor-pointer hover:bg-blue-700 transition-colors">
             <h3 className="text-2xl font-black mb-2">Ваш отзыв?</h3>
             <p className="opacity-90 mb-6">Мы будем рады узнать ваше мнение о Pizza Academy!</p>
             <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform">
               Оставить отзыв
             </button>
          </div>

        </div>

      </div>
    </section>
  );
};