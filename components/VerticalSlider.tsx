import React from 'react';
import { Star } from 'lucide-react';
import { useSettings } from '../contexts/SettingsContext';

export const VerticalSlider: React.FC = () => {
  const { t } = useSettings();
  
  const reviews = [
    { name: "Azizbek K.", text: "Pizza Academy helped me get IELTS 7.5!", role: "Student" },
    { name: "Malika S.", text: "The minimalist approach is perfect.", role: "Student" },
    { name: "John D.", text: "Best place for kids to learn naturally.", role: "Parent" },
    { name: "Sardor M.", text: "Thinking mode in class is amazing.", role: "Applicant" },
    { name: "Diana R.", text: "I love the atmosphere here.", role: "Student" },
    { name: "Timur A.", text: "Teachers are very supportive.", role: "Student" },
  ];

  // Duplicate reviews for infinite loop illusion
  const allReviews = [...reviews, ...reviews, ...reviews];

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-800 overflow-hidden border-t border-slate-200 dark:border-slate-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">{t.slider_title}</h2>
          <div className="flex gap-1 justify-center md:justify-start text-orange-500 mb-4">
            {[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" size={24} />)}
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
            See what our community is saying about their learning journey.
          </p>
        </div>

        <div className="w-full md:w-96 h-80 relative overflow-hidden rounded-2xl bg-white dark:bg-slate-900 shadow-inner border border-slate-200 dark:border-slate-700">
          {/* Gradient Overlays for smooth fade effect */}
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white dark:from-slate-900 to-transparent z-10"></div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-slate-900 to-transparent z-10"></div>
          
          <div className="absolute w-full animate-scroll-vertical hover:pause-animation cursor-default">
             <div className="flex flex-col gap-4 p-6">
               {allReviews.map((review, idx) => (
                 <div key={idx} className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                   <p className="text-slate-700 dark:text-slate-300 font-medium text-sm mb-2">"{review.text}"</p>
                   <div className="flex justify-between items-center">
                     <span className="text-xs font-bold text-slate-900 dark:text-white">{review.name}</span>
                     <span className="text-[10px] uppercase tracking-wider text-slate-400">{review.role}</span>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};