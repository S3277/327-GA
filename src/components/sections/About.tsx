import React from 'react';
import { BarChart, Brain, Sparkles } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className='space-y-4'>
    <div className='text-primary text-4xl'>{icon}</div>
    <h4 className='text-xl font-bold text-slate-100 uppercase'>{title}</h4>
    <p className='text-slate-400 font-light leading-relaxed'>{description}</p>
  </div>
);

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className='py-24 bg-background-dark' id='about'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center'>
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