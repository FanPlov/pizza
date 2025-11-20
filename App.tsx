import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Courses } from './components/Courses';
import { Footer } from './components/Footer';
import { Reviews } from './components/Reviews';
import { Marquee } from './components/Marquee';
import { Gallery } from './components/Gallery';
import { Location } from './components/Location';
import { FloatingContact } from './components/FloatingContact';
import { SettingsProvider } from './contexts/SettingsContext';

function App() {
  return (
    <SettingsProvider>
      <div className="min-h-screen flex flex-col bg-white dark:bg-slate-900 transition-colors duration-300 overflow-x-hidden">
        <Header />
        
        <main className="flex-grow">
          <Hero />
          <Marquee />
          <Courses />
          <Gallery />
          <Reviews />
          <Location />
        </main>

        <Footer />
        <FloatingContact />
      </div>
    </SettingsProvider>
  );
}

export default App;