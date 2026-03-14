import React, { useEffect, useRef, useState } from 'react';
import { Video, Brain, FileText, Users, TrendingDown } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`bg-background-dark p-8 group relative border-2 border-slate-800 hover:border-white hover:scale-[1.02] transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className='text-white text-3xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300'>
        {icon}
      </div>
      <h4 className='text-xl font-bold text-slate-100 mb-3 uppercase tracking-tight'>{title}</h4>
      <div className='h-px w-0 bg-white group-hover:w-full transition-all duration-500 mb-4'></div>
      <p className='text-slate-400 font-light leading-relaxed text-sm group-hover:text-slate-300 transition-colors'>
        {description}
      </p>
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
    <section className='py-32 bg-background-dark' id='services'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mb-20'>
          <h2 className='section-title'>{t.services.badge}</h2>
          <h3 className='text-4xl md:text-6xl font-black text-slate-100 tracking-tighter uppercase'>
            {t.services.title}{' '}
            <span className='text-gradient italic font-light'>{t.services.subtitle}</span>
          </h3>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0'>
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