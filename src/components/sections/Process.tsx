import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { BGPattern } from '../ui/bg-pattern';
import { RoadmapCard } from '../ui/roadmap-card';

const Process: React.FC = () => {
  const { t } = useLanguage();

  const roadmapItems = [
    {
      quarter: t.process.step1.title,
      title: '5-10k/mo',
      description: t.process.step1.description,
      status: 'done' as const,
    },
    {
      quarter: t.process.step2.title,
      title: '10-30k/mo',
      description: t.process.step2.description,
      status: 'in-progress' as const,
    },
    {
      quarter: t.process.step3.title,
      title: '30-70k/mo',
      description: t.process.step3.description,
      status: 'upcoming' as const,
    },
    {
      quarter: t.process.step4.title,
      title: '70k-100k+/mo',
      description: t.process.step4.description,
      status: 'upcoming' as const,
    },
  ];

  return (
    <section className='relative py-48 border-y border-primary/10' id='framework'>
      <div className='absolute inset-0 z-0 opacity-10 pointer-events-none'>
        <BGPattern variant='grid' mask='fade-edges' size={40} fill='rgba(255,255,255,0.2)' />
      </div>

      <div className='relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col items-center'>
          <h2 className='text-4xl md:text-5xl font-black text-slate-100 uppercase tracking-tighter mb-16 text-center'>
            {t.process.title} <br />
            <span className='text-primary italic'>{t.process.subtitle}</span>
          </h2>

          <div className='w-full flex justify-center'>
            <RoadmapCard
              title={t.process.badge}
              description={`${t.process.title} ${t.process.subtitle}`}
              items={roadmapItems}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;