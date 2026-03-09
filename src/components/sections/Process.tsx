import React, { useRef } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useZoomScroll } from '../../hooks/useZoomScroll';
import { BGPattern } from '../ui/bg-pattern';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description }) => {
  return (
    <div className='flex gap-6'>
      <span className='text-primary font-bold text-xl tabular-nums'>{number}</span>
      <div>
        <h5 className='text-xl font-bold text-slate-100 uppercase mb-2'>{title}</h5>
        <p className='text-slate-400 font-light'>{description}</p>
      </div>
    </div>
  );
};

const Process: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const { zoomScale, contentOpacity } = useZoomScroll(sectionRef);

  const steps = [
    {
      number: '01',
      title: t.process.step1.title,
      description: t.process.step1.description,
    },
    {
      number: '02',
      title: t.process.step2.title,
      description: t.process.step2.description,
    },
    {
      number: '03',
      title: t.process.step3.title,
      description: t.process.step3.description,
    },
    {
      number: '04',
      title: t.process.step4.title,
      description: t.process.step4.description,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className='relative h-[300vh] border-y border-primary/10'
      id='framework'
    >
      <div className='sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-background-dark'>
        <div
          className='absolute inset-0 flex items-center justify-center'
          style={{
            transform: `scale(${zoomScale})`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <div className='relative w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='flex flex-col lg:flex-row gap-16 items-center'>
              <div className='w-full lg:w-1/2'>
                <div className='relative aspect-square bg-slate-800 rounded-lg overflow-hidden border border-slate-700'>
                  <img
                    alt='Modern architectural workspace'
                    className='w-full h-full object-cover grayscale contrast-125 opacity-60'
                    src='https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&h=800'
                    loading='lazy'
                  />
                  <div className='absolute inset-0 bg-gradient-to-tr from-background-dark via-transparent to-transparent'></div>
                  <div className='absolute bottom-8 left-8 border-l-2 border-primary pl-4'>
                    <p className='text-primary text-4xl font-black italic'>01-04</p>
                    <p className='text-slate-400 uppercase text-xs tracking-widest font-bold'>
                      {t.process.badge}
                    </p>
                  </div>
                </div>
              </div>

              <div
                className='w-full lg:w-1/2'
                style={{
                  opacity: contentOpacity,
                  transition: 'opacity 0.1s ease-out',
                }}
              >
                <h2 className='text-4xl md:text-5xl font-black text-slate-100 uppercase tracking-tighter mb-12'>
                  {t.process.title} <br />
                  <span className='text-primary italic'>{t.process.subtitle}</span>
                </h2>

                <div className='space-y-12'>
                  {steps.map((step, index) => (
                    <ProcessStep
                      key={index}
                      number={step.number}
                      title={step.title}
                      description={step.description}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className='absolute inset-0 pointer-events-none'
          style={{
            opacity: Math.max(0, 1 - contentOpacity),
            transition: 'opacity 0.3s ease-out',
          }}
        >
          <div className='absolute inset-0 z-0 opacity-20'>
            <BGPattern variant='grid' mask='fade-edges' size={40} fill='rgba(255,255,255,0.2)' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;