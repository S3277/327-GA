import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Process from './components/sections/Process';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className='dark'>
        <div className='bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased overflow-x-hidden'>
          <Header />
          <main>
            <Hero />
            <Services />
            <Process />
            <About />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
};

export default App;