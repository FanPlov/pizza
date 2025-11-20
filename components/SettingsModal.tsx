import React from 'react';
import { X, Moon, Sun, Globe, Monitor } from 'lucide-react';
import { useSettings } from '../contexts/SettingsContext';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  const { language, setLanguage, theme, setTheme, t } = useSettings();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden transform transition-all">
        <div className="p-5 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center">
          <h3 className="font-bold text-xl text-slate-900 dark:text-white flex items-center gap-2">
            <Monitor size={24} className="text-blue-500" /> {t.settings_title}
          </h3>
          <button onClick={onClose} className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors">
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6 space-y-8">
          {/* Language Selection */}
          <div>
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-3 flex items-center gap-2 uppercase tracking-wider">
              <Globe size={16} /> {t.settings_lang}
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button 
                onClick={() => setLanguage('ru')}
                className={`px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                  language === 'ru' 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' 
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                }`}
              >
                Русский
              </button>
              <button 
                onClick={() => setLanguage('uz')}
                className={`px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                  language === 'uz' 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' 
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                }`}
              >
                O'zbek
              </button>
            </div>
          </div>

          {/* Theme Selection */}
          <div>
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-3 flex items-center gap-2 uppercase tracking-wider">
              {theme === 'light' ? <Sun size={16} /> : <Moon size={16} />} {t.settings_theme}
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button 
                onClick={() => setTheme('light')}
                className={`px-4 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                  theme === 'light' 
                    ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/30' 
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                }`}
              >
                <Sun size={18} /> {t.theme_light}
              </button>
              <button 
                onClick={() => setTheme('dark')}
                className={`px-4 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                  theme === 'dark' 
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30' 
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                }`}
              >
                <Moon size={18} /> {t.theme_dark}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};