import React from 'react';
import { ChevronDown, Building2 } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button05 } from '../ui/arrow-dots-button';
import { useParallax, useScrollOpacity } from '../../hooks/useParallax';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const parallaxOffset = useParallax(0.3);
  const opacity = useScrollOpacity(0, 400);

  return (
    <section className='relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-primary/5'>
      <div
        className='absolute inset-0 z-0 opacity-20 pointer-events-none grid-background'
        style={{
          transform: `translateY(${parallaxOffset}px)`,
          opacity: opacity * 0.2
        }}
        aria-hidden='true'
      ></div>

      <div
        className='relative z-10 mx-auto max-w-5xl px-4 text-center'
        style={{
          transform: `translateY(${parallaxOffset * 0.5}px)`,
          opacity: opacity
        }}
      >
        <div className='inline-flex items-center gap-2 mb-6 px-3 py-1 border border-primary/30 rounded-full bg-primary/5 animate-fade-in'>
          <Building2 className='text-primary' size={16} />
          <span className='text-[10px] uppercase font-bold tracking-[0.2em] text-primary'>
            {t.hero.badge}
          </span>
        </div>

        <h1 className='heading-hero mb-8 animate-slide-up'>
          {t.hero.title}{' '}
          <br />
          <span className='text-gradient italic'>{t.hero.subtitle}</span>
        </h1>

        <p className='max-w-2xl mx-auto text-lg md:text-xl text-slate-400 font-light mb-12 leading-relaxed animate-slide-up'>
          {t.hero.description}
        </p>

        <div className='flex flex-col sm:flex-row items-center justify-center gap-6 animate-scale-in'>
          <Button05 text={t.hero.primaryButton} href="#contact" />
          <button className='btn-secondary w-full sm:w-auto'>
            {t.hero.secondaryButton}
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className='absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce'
        style={{ opacity: opacity }}
      >
        <ChevronDown className='text-primary' size={24} />
      </div>
    </section>
  );
};

export default Hero;