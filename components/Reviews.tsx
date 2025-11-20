
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useSettings } from '../contexts/SettingsContext';

export const Reviews: React.FC = () => {
  const { t } = useSettings();

  // --------------------------------------------------------------------------
  // 📝 РЕДАКТИРОВАНИЕ ОТЗЫВОВ / EDIT REVIEWS HERE
  // --------------------------------------------------------------------------
  // Чтобы добавить новый отзыв, скопируйте блок внутри {} и вставьте через запятую.
  
  const reviews = [
    {
      id: 1,
      name: "Malika Karimova", // Имя
      role: "IELTS 7.5", // Результат или курс
      text: "Pizza Academy полностью изменила мой подход к изучению языка. Уроки проходят невероятно интересно!", // Текст отзыва
      avatar: "MK", // Инициалы (если нет фото)
      // Если хотите фото: замените avatar на 'image' и вставьте ссылку на фото. (Потребуется небольшая правка в коде отображения ниже)
      // Для простоты сейчас используются цвета и буквы.
      color: "bg-blue-100 text-blue-600" // Цвет кружочка
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
    // 👇 Вставьте новый отзыв здесь (раскомментируйте и измените):
    // {
    //   id: 6,
    //   name: "Имя Фамилия",
    //   role: "Курс",
    //   text: "Текст вашего отзыва здесь...",
    //   avatar: "ИФ",
    //   color: "bg-indigo-100 text-indigo-600"
    // }
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-800 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ЗАГОЛОВОК СЕКЦИИ */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
            Что говорят студенты
          </h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-500 dark:text-slate-400">
            Листайте вправо, чтобы увидеть больше отзывов 👉
          </p>
        </div>

        {/* КОНТЕЙНЕР СЛАЙДЕРА */}
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
                {/* 
                   🖼️ КАК ДОБАВИТЬ ФОТО:
                   Если вы хотите использовать фото вместо букв, замените блок ниже на тег <img>.
                   Пример:
                   <img src="ссылка_на_фото.jpg" className="w-12 h-12 rounded-full object-cover" />
                */}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${review.color}`}>
                  {review.avatar}
                </div>
                
                {/* ИМЯ И РОЛЬ */}
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">{review.name}</h4>
                  <p className="text-sm text-blue-600 font-medium">{review.role}</p>
                </div>
                
                {/* ЗВЕЗДЫ */}
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

          {/* КАРТОЧКА "ДОБАВИТЬ ОТЗЫВ" */}
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
