import React, { useState } from 'react';
import { Check, Sparkles, SendHorizontal } from 'lucide-react';
import { useSettings } from '../contexts/SettingsContext';

export const EnrollmentForm: React.FC = () => {
  const { t } = useSettings();
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // ---------------------------------------------------------
  // ЛОГИКА ОТПРАВКИ ФОРМЫ / FORM SUBMISSION LOGIC
  // ---------------------------------------------------------
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь вы можете добавить код для отправки данных в Telegram бот или на сервер
    // You can add code here to send data to Telegram bot or server
    console.log("Form Data:", formData);
    
    setTimeout(() => setIsSubmitted(true), 800);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white/95 backdrop-blur-xl dark:bg-slate-900/95 p-12 rounded-[2.5rem] shadow-2xl border border-white/50 dark:border-slate-700 text-center py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10 animate-pulse"></div>
        <div className="relative z-10">
          <div className="w-24 h-24 bg-gradient-to-tr from-green-400 to-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-green-500/30 animate-bounce">
            <Check size={48} strokeWidth={3} />
          </div>
          <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">{t.form_sent_title}</h3>
          <p className="text-slate-500 dark:text-slate-400 text-lg mb-8 leading-relaxed">{t.form_sent_desc}</p>
          <button 
            onClick={() => setIsSubmitted(false)} 
            className="px-8 py-3 bg-slate-100 dark:bg-slate-800 rounded-xl font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            {t.form_new_req}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-none w-full border border-white/50 dark:border-slate-700 overflow-hidden transition-all hover:shadow-[0_30px_80px_-20px_rgba(37,99,235,0.2)]">
      
      {/* 
        УБРАНА ВЕРХНЯЯ ЛИНИЯ (GRADIENT BORDER REMOVED)
        Ранее здесь был div с градиентом.
      */}
      
      {/* ФОНОВЫЕ ЭФФЕКТЫ / BACKGROUND BLURS */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10">
        
        {/* ЗАГОЛОВОК ФОРМЫ / FORM HEADER */}
        <div className="mb-8 flex items-center gap-2">
           <div className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded-lg text-blue-600 dark:text-blue-400">
             <Sparkles size={24} />
           </div>
           <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
             Start Your Journey
             {/* Вы можете изменить текст здесь / Change text here */}
           </h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* ПОЛЕ: ИМЯ / INPUT: NAME */}
          <div className="space-y-2 group/input">
            <label className={`block text-sm font-bold ml-4 transition-colors ${focusedField === 'name' ? 'text-blue-600' : 'text-slate-500 dark:text-slate-400'}`}>
              {t.form_name_label}
            </label>
            <div className="relative">
              <input
                type="text"
                required
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border-2 border-slate-100 dark:border-slate-700 focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-300 dark:placeholder-slate-600 outline-none transition-all duration-300 text-lg font-semibold shadow-sm group-hover/input:border-blue-200 dark:group-hover/input:border-blue-900"
                placeholder={t.form_name_placeholder}
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
          </div>

          {/* ПОЛЕ: ТЕЛЕФОН / INPUT: PHONE */}
          <div className="space-y-2 group/input">
            <label className={`block text-sm font-bold ml-4 transition-colors ${focusedField === 'phone' ? 'text-blue-600' : 'text-slate-500 dark:text-slate-400'}`}>
              {t.form_phone_label}
            </label>
            <div className="relative">
              <input
                type="tel"
                required
                onFocus={() => setFocusedField('phone')}
                onBlur={() => setFocusedField(null)}
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border-2 border-slate-100 dark:border-slate-700 focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-300 dark:placeholder-slate-600 outline-none transition-all duration-300 text-lg font-semibold shadow-sm group-hover/input:border-blue-200 dark:group-hover/input:border-blue-900"
                placeholder={t.form_phone_placeholder}
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
          </div>

          {/* КНОПКА ОТПРАВКИ / SUBMIT BUTTON */}
          <button 
            type="submit" 
            className="w-full py-5 mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black text-xl rounded-2xl shadow-xl shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl relative overflow-hidden group/btn"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              {t.form_button} <SendHorizontal size={24} className="group-hover/btn:translate-x-1 transition-transform" />
            </span>
            {/* Эффект при наведении / Hover effect */}
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
          </button>

          {/* ТЕКСТ ОФЕРТЫ / DISCLAIMER TEXT */}
          <p className="text-center text-xs text-slate-400 dark:text-slate-500 font-medium px-4 leading-relaxed opacity-80">
            {t.form_disclaimer}
          </p>
        </form>
      </div>
    </div>
  );
};