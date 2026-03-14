import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { BGPattern } from '../ui/bg-pattern';
import { RoadmapCard } from '../ui/roadmap-card';

const Process: React.FC = () => {
  const { t } = useLanguage();

  const roadmapItems = [
    {
      quarter: 'Step 1',
      title: t.process.step1.title,
      description: t.process.step1.description,
      status: 'done' as const,
    },
    {
      quarter: 'Step 2',
      title: t.process.step2.title,
      description: t.process.step2.description,
      status: 'in-progress' as const,
    },
    {
      quarter: 'Step 3',
      title: t.process.step3.title,
      description: t.process.step3.description,
      status: 'upcoming' as const,
    },
    {
      quarter: 'Step 4',
      title: t.process.step4.title,
      description: t.process.step4.description,
      status: 'upcoming' as const,
    },
  ];

  return (
    <section className='relative py-32 border-y border-primary/10' id='framework'>
      <div className='absolute inset-0 z-0 opacity-10 pointer-events-none'>
        <BGPattern variant='grid' mask='fade-edges' size={40} fill='rgba(255,255,255,0.2)' />
      </div>

      <div className='relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col items-center'>
          <h2 className='section-title mb-6'>{t.process.badge}</h2>
          <h3 className='text-4xl md:text-6xl font-black text-slate-100 uppercase tracking-tighter mb-20 text-center'>
            {t.process.title} <br />
            <span className='text-gradient italic font-light'>{t.process.subtitle}</span>
          </h3>

          <div className='w-full flex justify-center'>
            <RoadmapCard items={roadmapItems} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;