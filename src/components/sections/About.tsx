import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useParallax } from '../../hooks/useParallax';

const About: React.FC = () => {
  const { t } = useLanguage();
  const parallaxOffset = useParallax(0.12);

  return (
    <section className='py-24 bg-background-dark' id='about'>
      <div
        className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center'
        style={{
          transform: `translateY(${parallaxOffset}px)`
        }}
      >
        <h2 className='section-title'>{t.about.badge}</h2>
        <h3 className='text-4xl md:text-5xl font-black text-slate-100 tracking-tighter uppercase mb-8'>
          {t.about.title}{' '}
          <span className='text-gradient italic font-light'>{t.about.subtitle}</span>
        </h3>

        <div className='max-w-3xl mx-auto mb-12'>
          <p className='text-lg md:text-xl text-slate-400 font-light leading-relaxed'>
            {t.about.description}
          </p>
        </div>

        <div className='flex justify-center'>
          <button className='btn-primary'>
            {t.about.cta}
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;