import React from 'react';
import { Pizza, Instagram, Send } from 'lucide-react';
import { useSettings } from '../contexts/SettingsContext';

export const Footer: React.FC = () => {
  const { t } = useSettings();
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 pt-16 pb-8 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg text-white">
                <Pizza size={24} />
              </div>
              <span className="font-black text-2xl text-slate-900 dark:text-white tracking-tight">Pizza Academy</span>
            </div>
            <p className="text-sm text-slate-500 max-w-xs">
              Лучшее место для изучения английского языка с современным подходом и крутой атмосферой.
            </p>
          </div>

          <div className="flex flex-col md:items-end gap-4">
            <div className="text-left md:text-right text-base font-medium space-y-1 text-slate-500 dark:text-slate-400">
              <p>123 Education Street, Tashkent</p>
              <p className="font-bold text-slate-900 dark:text-white text-lg">+998 90 123 45 67</p>
              <p className="text-blue-600">info@pizza-academy.uz</p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-slate-100 dark:bg-slate-800 p-3 rounded-full text-pink-600 hover:bg-pink-50 dark:hover:bg-slate-700 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="bg-slate-100 dark:bg-slate-800 p-3 rounded-full text-sky-500 hover:bg-sky-50 dark:hover:bg-slate-700 transition-colors">
                <Send size={24} />
              </a>
            </div>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 text-center text-sm text-slate-400 font-medium flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {currentYear} Pizza Academy. {t.footer_rights}</p>
          <p className="text-xs opacity-50">Designed with ❤️ in Tashkent</p>
        </div>
      </div>
    </footer>
  );
};