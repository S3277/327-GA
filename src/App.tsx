import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { LanguageProvider } from './contexts/LanguageContext';
import { Onboarding } from './components/Onboarding';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Process from './components/sections/Process';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

const App: React.FC = () => {
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);

  useEffect(() => {
    const completed = localStorage.getItem('onboardingCompleted');
    if (completed === 'true') {
      setShowOnboarding(false);
      setHasCompletedOnboarding(true);
    }
  }, []);

  const handleOnboardingComplete = () => {
    localStorage.setItem('onboardingCompleted', 'true');
    setShowOnboarding(false);
    setTimeout(() => setHasCompletedOnboarding(true), 300);
  };

  return (
    <LanguageProvider>
      <div className='dark'>
        <AnimatePresence mode='wait'>
          {showOnboarding && !hasCompletedOnboarding && (
            <Onboarding onComplete={handleOnboardingComplete} />
          )}
        </AnimatePresence>

        {!showOnboarding && (
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
        )}
      </div>
    </LanguageProvider>
  );
};

export default App;