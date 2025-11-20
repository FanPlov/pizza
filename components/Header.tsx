import React, { useState } from 'react';
import { Pizza, Menu, X, Settings } from 'lucide-react';
import { useSettings } from '../contexts/SettingsContext';
import { SettingsModal } from './SettingsModal';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const { t } = useSettings();

  const links = [
    { name: t.nav_courses, href: '#courses' },
    { name: t.nav_contact, href: '#footer' },
  ];

  return (
    <>
      <header className="fixed w-full bg-white dark:bg-slate-900 z-50 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300 shadow-lg shadow-slate-200/50 dark:shadow-none h-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            {/* Logo Section */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
              <div className="text-blue-600 filter drop-shadow-sm transform hover:scale-110 transition-transform">
                <Pizza size={32} />
              </div>
              <span className="font-black text-2xl text-slate-900 dark:text-white tracking-tighter">Pizza Academy</span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {links.map(link => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="text-base font-bold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              
              <button 
                onClick={() => setShowSettings(true)}
                className="p-3 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
              >
                <Settings size={24} />
              </button>

              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-bold text-sm shadow-lg shadow-blue-500/30 transition-all hover:scale-105 active:scale-95">
                Student App
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-3">
              <button 
                onClick={() => setShowSettings(true)}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"
              >
                <Settings size={24} />
              </button>
              <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 dark:text-white p-2">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 absolute w-full shadow-xl">
            <div className="px-6 py-6 space-y-4">
              {links.map(link => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="block text-lg font-bold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400" 
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-4 rounded-xl font-bold shadow-lg shadow-blue-500/30">
                Student App
              </button>
            </div>
          </div>
        )}
      </header>
      
      <SettingsModal isOpen={showSettings} onClose={() => setShowSettings(false)} />
    </>
  );
};