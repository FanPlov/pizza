
import React, { useState } from 'react';
import { Check, Sparkles, SendHorizontal } from 'lucide-react';
import { useSettings } from '../contexts/SettingsContext';

export const EnrollmentForm: React.FC = () => {
  const { t } = useSettings();
  // В state храним только 9 цифр номера (без +998)
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // ---------------------------------------------------------
  // ⚙️ НАСТРОЙКА GOOGLE SHEETS
  // ---------------------------------------------------------
  // 1. Вставьте ссылку Web App URL ниже внутри кавычек.
  // 2. Убедитесь, что в Apps Script права доступа стоят "Anyone" (Все).
  const GOOGLE_SCRIPT_URL = ""; // <-- ВСТАВЬТЕ ССЫЛКУ СЮДА

  // ---------------------------------------------------------
  // 📞 ЛОГИКА ВВОДА ТЕЛЕФОНА (Упрощенная для удобства)
  // ---------------------------------------------------------
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Разрешаем вводить ТОЛЬКО цифры
    const val = e.target.value.replace(/\D/g, '');
    
    // Ограничиваем длину до 9 цифр (так как код 998 уже есть визуально)
    if (val.length <= 9) {
      setFormData({ ...formData, phone: val });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Собираем полный номер для отправки
    const fullPhone = `+998${formData.phone}`;
    
    // Проверка: должно быть ровно 9 цифр в поле (итого 13 символов с +)
    if (formData.phone.length < 9) {
        alert("Пожалуйста, введите корректный номер телефона (код оператора и номер, 9 цифр).");
        setIsLoading(false);
        return;
    }
    
    if (!GOOGLE_SCRIPT_URL) {
        console.warn("⚠️ Ссылка на Google Script не установлена!");
        // Имитация успеха для теста (если скрипт не настроен)
        setTimeout(() => {
            setIsSubmitted(true);
            setIsLoading(false);
        }, 1000);
        return;
    }

    try {
        // ИСПОЛЬЗУЕМ FORMDATA (Самый надежный способ)
        const data = new FormData();
        data.append('name', formData.name);
        data.append('phone', fullPhone); // Отправляем полный номер

        await fetch(GOOGLE_SCRIPT_URL, {
            method: "POST",
            body: data,
            mode: "no-cors" // Это важно для Google Scripts
        });

        setIsSubmitted(true);
        setFormData({ name: '', phone: '' });
    } catch (error) {
        console.error("Ошибка отправки:", error);
        alert("Ошибка сети. Проверьте подключение.");
    } finally {
        setIsLoading(false);
    }
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
      
      {/* ФОНОВЫЕ ЭФФЕКТЫ */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10">
        
        {/* ЗАГОЛОВОК ФОРМЫ */}
        <div className="mb-8 flex items-center gap-2">
           <div className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded-lg text-blue-600 dark:text-blue-400">
             <Sparkles size={24} />
           </div>
           <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
             Start Your Journey
           </h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* ПОЛЕ: ИМЯ */}
          <div className="space-y-2 group/input">
            <label className={`block text-sm font-bold ml-4 transition-colors ${focusedField === 'name' ? 'text-blue-600' : 'text-slate-500 dark:text-slate-400'}`}>
              {t.form_name_label}
            </label>
            <div className="relative">
              <input
                type="text"
                name="name" 
                required
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border-2 border-slate-100 dark:border-slate-700 focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-300 dark:placeholder-slate-600 outline-none transition-all duration-300 text-lg font-semibold shadow-sm group-hover/input:border-blue-200 dark:group-hover/input:border-blue-900"
                placeholder={t.form_name_placeholder}
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                disabled={isLoading}
              />
            </div>
          </div>

          {/* ПОЛЕ: ТЕЛЕФОН */}
          <div className="space-y-2 group/input">
            <label className={`block text-sm font-bold ml-4 transition-colors ${focusedField === 'phone' ? 'text-blue-600' : 'text-slate-500 dark:text-slate-400'}`}>
              {t.form_phone_label}
            </label>
            <div className="relative">
              {/* ВИЗУАЛЬНЫЙ ПРЕФИКС +998 */}
              <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400 font-bold text-lg pointer-events-none select-none border-r border-slate-300 dark:border-slate-600 pr-3">
                +998
              </div>

              <input
                type="tel"
                name="phone"
                required
                onChange={handlePhoneChange}
                onFocus={() => setFocusedField('phone')}
                onBlur={() => setFocusedField(null)}
                // pl-24 (padding-left) создает отступ для префикса +998
                className="w-full pl-24 pr-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border-2 border-slate-100 dark:border-slate-700 focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-300 dark:placeholder-slate-600 outline-none transition-all duration-300 text-lg font-semibold shadow-sm group-hover/input:border-blue-200 dark:group-hover/input:border-blue-900"
                placeholder="90 123 45 67"
                value={formData.phone}
                disabled={isLoading}
              />
            </div>
          </div>

          {/* КНОПКА ОТПРАВКИ */}
          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full py-5 mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black text-xl rounded-2xl shadow-xl shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl relative overflow-hidden group/btn disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? (
               <span className="flex items-center justify-center gap-2">
                 <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                 Loading...
               </span>
            ) : (
                <>
                    <span className="relative z-10 flex items-center justify-center gap-3">
                    {t.form_button} <SendHorizontal size={24} className="group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                </>
            )}
          </button>

          {/* ТЕКСТ ОФЕРТЫ */}
          <p className="text-center text-xs text-slate-400 dark:text-slate-500 font-medium px-4 leading-relaxed opacity-80">
            {t.form_disclaimer}
          </p>
        </form>
      </div>
    </div>
  );
};
