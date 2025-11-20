import React from 'react';
import { Activity, CheckCircle2 } from 'lucide-react';
import { useSettings } from '../contexts/SettingsContext';

export const Monitoring: React.FC = () => {
  const { t } = useSettings();

  return (
    <section id="monitoring" className="py-20 bg-slate-50 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 text-orange-600 dark:text-orange-400 font-semibold mb-4">
              <Activity size={20} />
              <span>{t.monitoring_badge}</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              {t.monitoring_title}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 leading-relaxed">
              {t.monitoring_desc}
            </p>
            
            <div className="space-y-4">
              {t.monitoring_list.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500 shrink-0" size={20} />
                  <span className="text-slate-700 dark:text-slate-200 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual representation of monitoring */}
          <div className="flex-1 w-full max-w-md">
             <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700">
                <div className="flex justify-between items-center mb-6">
                   <span className="font-bold text-slate-900 dark:text-white">Student Progress</span>
                   <span className="text-xs bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 px-2 py-1 rounded-full">Active</span>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
                      <span>Speaking</span>
                      <span>85%</span>
                    </div>
                    <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-orange-500 w-[85%] rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
                      <span>Grammar</span>
                      <span>92%</span>
                    </div>
                    <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 w-[92%] rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
                      <span>Writing</span>
                      <span>78%</span>
                    </div>
                    <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500 w-[78%] rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-50 dark:border-slate-800 text-center">
                   <p className="text-xs text-slate-400">System updated: Just now</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};