import React, { useState, useEffect } from 'react';
import { ChevronDown, Building2 } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button05 } from '../ui/arrow-dots-button';
import { Globe } from '../ui/globe';

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
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden bg-black'>
      <div className='absolute inset-0 flex items-center justify-center'>
        <Globe className='scale-150 md:scale-125' />
      </div>

      <div
        className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black pointer-events-none z-[5]'
        aria-hidden='true'
      />

      <div
        className='relative z-10 mx-auto max-w-6xl px-4 text-center pt-32'
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <div className='inline-flex items-center gap-2 mb-8 px-3 py-1 border border-primary/30 rounded-full bg-black/40 backdrop-blur-sm animate-fade-in'>
          <Building2 className='text-primary' size={16} />
          <span className='text-[10px] uppercase font-bold tracking-[0.2em] text-primary'>
            {t.hero.badge}
          </span>
        </div>

        <h1 className='heading-hero mb-8 animate-slide-up drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]'>
          {t.hero.title}{' '}
          <br />
          <span className='text-gradient italic font-light'>{t.hero.subtitle}</span>
        </h1>

        <p className='max-w-2xl mx-auto text-lg md:text-xl text-slate-300 font-light mb-12 leading-relaxed animate-slide-up drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]'>
          {t.hero.description}
        </p>

        <div className='flex flex-col sm:flex-row items-center justify-center gap-6 animate-scale-in'>
          <Button05 text={t.hero.primaryButton} href='#contact' />
          <button
            onClick={() => scrollToSection('framework')}
            className='btn-secondary w-full sm:w-auto'
          >
            {t.hero.secondaryButton}
          </button>
        </div>
      </div>

      <div className='absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10'>
        <ChevronDown className='text-primary' size={24} />
      </div>
    </section>
  );
};

export default Hero;