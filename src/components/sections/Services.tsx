import React from 'react';
import { ChartBar as BarChart3, Zap, TrendingUp } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className='bg-background-dark p-12 group hover:bg-primary/[0.02] transition-colors'>
    <div className='text-primary text-4xl mb-8'>{icon}</div>
    <h4 className='text-2xl font-bold text-slate-100 mb-4 uppercase'>{title}</h4>
    <p className='text-slate-400 font-light leading-relaxed mb-8'>{description}</p>
    <div className='h-1 w-0 bg-primary group-hover:w-full transition-all duration-500'></div>
  </div>
);

const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <BarChart3 />,
      title: t.services.funnel.title,
      description: t.services.funnel.description,
    },
    {
      icon: <Zap />,
      title: t.services.automation.title,
      description: t.services.automation.description,
    },
    {
      icon: <TrendingUp />,
      title: t.services.analytics.title,
      description: t.services.analytics.description,
    },
  ];

  return (
    <section className='py-24 bg-background-dark' id='services'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mb-20'>
          <h2 className='section-title'>{t.services.badge}</h2>
          <h3 className='text-4xl md:text-6xl font-black text-slate-100 tracking-tighter uppercase'>
            {t.services.title}{' '}
            <span className='text-gradient italic font-light'>{t.services.subtitle}</span>
          </h3>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-800 border border-slate-800'>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;