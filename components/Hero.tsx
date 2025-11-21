
import React from 'react';
import { EnrollmentForm } from './EnrollmentForm';
import { useSettings } from '../contexts/SettingsContext';

export const Hero: React.FC = () => {
  const { t } = useSettings();

  return (
    <section className="relative pt-28 pb-24 bg-blue-500 dark:bg-slate-900 transition-colors duration-300 overflow-hidden">
      
      {/* Cool Animated Background Blobs - Blue Theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-exclusion filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-exclusion filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-300 dark:bg-indigo-900 rounded-full mix-blend-multiply dark:mix-blend-exclusion filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Left Side: Text Content */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9] drop-shadow-sm">
              {t.hero_title}
            </h1>
            
            {/* Removed Description Text as requested */}

            {/* "Cool" stats badge */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 text-white text-base font-bold mt-4 hover:bg-white/20 transition-colors cursor-pointer">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              {t.hero_joined}
            </div>
          </div>

          {/* Right Side: Enrollment Form */}
          <div className="w-full lg:w-[420px] shrink-0 relative z-10 mt-4 lg:-mt-8 transform transition-all hover:scale-[1.01] duration-500">
             <EnrollmentForm />
          </div>

        </div>
      </div>
      
      {/* Decorative wave at bottom */}
      <div className="w-full h-24 bg-white dark:bg-slate-900 mt-16 rounded-t-[100%] scale-x-150 relative z-20 shadow-[0_-20px_40px_rgba(0,0,0,0.1)] dark:shadow-none"></div>
    </section>
  );
};
