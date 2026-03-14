import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { FadeInSection } from '../ui/fade-in-section';

const About: React.FC = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className='py-32 bg-background-dark' id='about'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center'>
        <FadeInSection>
          <h2 className='section-title'>{t.about.badge}</h2>
          <h3 className='text-4xl md:text-6xl font-black text-slate-100 tracking-tighter uppercase mb-12'>
            {t.about.title}{' '}
            <span className='text-gradient italic font-light'>{t.about.subtitle}</span>
          </h3>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div className='max-w-3xl mx-auto mb-12'>
            <p className='text-lg md:text-xl text-slate-400 font-light leading-relaxed'>
              {t.about.description}
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.4}>
          <div className='flex justify-center'>
            <button onClick={() => scrollToSection('contact')} className='btn-primary'>
              {t.about.cta}
            </button>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default About;