import React from 'react';
import { Video, Brain, FileText, Users, TrendingDown } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className='bg-background-dark p-8 group hover:bg-primary/[0.02] transition-colors'>
      <div className='text-primary text-3xl mb-6'>{icon}</div>
      <h4 className='text-xl font-bold text-slate-100 mb-3 uppercase'>{title}</h4>
      <p className='text-slate-400 font-light leading-relaxed text-sm'>{description}</p>
      <div className='h-px w-0 bg-primary group-hover:w-full transition-all duration-500 mt-6'></div>
    </div>
  );
};

const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Video />,
      title: t.services.funnel.title,
      description: t.services.funnel.description,
    },
    {
      icon: <Brain />,
      title: t.services.automation.title,
      description: t.services.automation.description,
    },
    {
      icon: <FileText />,
      title: t.services.analytics.title,
      description: t.services.analytics.description,
    },
    {
      icon: <Users />,
      title: t.services.community.title,
      description: t.services.community.description,
    },
    {
      icon: <TrendingDown />,
      title: t.services.bottleneck.title,
      description: t.services.bottleneck.description,
    },
  ];

  return (
    <section className='py-24 bg-background-dark' id='services'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mb-16'>
          <h2 className='section-title'>{t.services.badge}</h2>
          <h3 className='text-4xl md:text-6xl font-black text-slate-100 tracking-tighter uppercase'>
            {t.services.title}{' '}
            <span className='text-gradient italic font-light'>{t.services.subtitle}</span>
          </h3>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-800 border border-slate-800'>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              index={index}
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