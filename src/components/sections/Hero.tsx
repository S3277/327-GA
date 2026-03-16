import React, { useState, useEffect } from 'react';
import { ChevronDown, Building2 } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { BGPattern } from '../ui/bg-pattern';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.5;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className='relative min-h-[90vh] flex items-start justify-center overflow-hidden border-b border-primary/5 pt-24'>
      <div
        className='absolute inset-0 z-0 opacity-20 pointer-events-none'
        aria-hidden='true'
      >
        <BGPattern variant='dots' mask='fade-edges' size={32} fill='rgba(255,255,255,0.3)' />
      </div>

      <div
        className='relative z-10 mx-auto max-w-5xl px-4 text-center'
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <div className='inline-flex items-center gap-2 mb-6 px-3 py-1 border border-primary/30 rounded-full bg-primary/5 animate-fade-in'>
          <Building2 className='text-primary' size={16} />
          <span className='text-[10px] uppercase font-bold tracking-[0.2em] text-primary'>
            {t.hero.badge}
          </span>
        </div>

        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 animate-slide-up uppercase tracking-tight leading-tight text-white'>
          {t.hero.title}
        </h1>

        <p className='max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-300 font-light mb-12 leading-relaxed animate-slide-up'>
          {t.hero.description}
        </p>

        <div className='flex flex-col sm:flex-row items-center justify-center gap-6 animate-scale-in'>
          <button
            onClick={() => scrollToSection('contact')}
            className='group px-8 sm:px-10 md:px-12 py-4 sm:py-5 bg-white text-black font-bold text-sm sm:text-base uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300'
          >
            {t.hero.primaryButton}
          </button>
          <button
            onClick={() => scrollToSection('framework')}
            className='btn-secondary w-full sm:w-auto'
          >
            {t.hero.secondaryButton}
          </button>
        </div>
      </div>

      <div className='absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce'>
        <ChevronDown className='text-primary' size={24} />
      </div>
    </section>
  );
};

export default Hero;