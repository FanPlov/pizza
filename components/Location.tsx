import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { useSettings } from '../contexts/SettingsContext';

export const Location: React.FC = () => {
  const { t } = useSettings();

  return (
    <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-blue-600 bg-blue-50 dark:bg-blue-900/30 px-4 py-2 rounded-full font-bold text-sm mb-4">
            <MapPin size={16} />
            <span>Our Location</span>
          </div>
          <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Где мы находимся?
          </h2>
          <p className="mt-4 text-lg text-slate-500 dark:text-slate-400">
            Приходите к нам в гости! Мы всегда рады видеть новых студентов.
          </p>
        </div>

        <div className="bg-slate-100 dark:bg-slate-800 rounded-[2.5rem] p-4 shadow-2xl border border-slate-200 dark:border-slate-700 relative group">
          
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-400 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-500 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>

          <div className="relative w-full h-[450px] rounded-[2rem] overflow-hidden bg-slate-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.033870079527!2d69.2400889766086!3d41.32893407130775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b449c7480!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1709663682645!5m2!1sen!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="filter grayscale hover:grayscale-0 transition-all duration-700"
              title="Pizza Academy Location"
            ></iframe>

            {/* Overlay Card */}
            <div className="absolute bottom-6 left-6 right-6 md:right-auto bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20 max-w-sm">
               <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1">Pizza Academy HQ</h3>
               <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">
                 123 Education Street, Tashkent, Uzbekistan
               </p>
               <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-colors">
                 <Navigation size={16} />
                 Проложить маршрут
               </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};