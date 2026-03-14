import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export interface RoadmapItem {
  quarter: string;
  title: string;
  description: string;
  status?: 'done' | 'in-progress' | 'upcoming';
}

export interface RoadmapCardProps {
  title?: string;
  description?: string;
  items: RoadmapItem[];
}

export function RoadmapCard({ items }: RoadmapCardProps) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const [lineProgress, setLineProgress] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const startTime = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        setLineProgress(progress * 100);

        const stepIndex = Math.floor(progress * items.length);
        if (stepIndex < items.length && !visibleSteps.includes(stepIndex)) {
          setVisibleSteps((prev) => [...prev, stepIndex]);
        }

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      animate();
    }
  }, [isInView, items.length, visibleSteps]);

  return (
    <Card className='w-full max-w-5xl bg-transparent border-none shadow-none'>
      <CardContent className='pt-6'>
        <div className='relative' ref={containerRef}>
          <div className='absolute left-[5%] right-[5%] top-8 h-0.5 bg-slate-800'>
            <motion.div
              className='h-full bg-white'
              style={{ width: `${lineProgress}%` }}
              transition={{ duration: 0.1, ease: 'linear' }}
            />
          </div>

          <div className='flex justify-between px-[5%]'>
            {items.map((item, index) => {
              const isCompleted = item.status === 'done' || item.status === 'in-progress';
              const shouldShow = visibleSteps.includes(index);

              return (
                <motion.div
                  key={index}
                  className='relative pt-16 text-center flex-1 px-4'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: shouldShow ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className={`absolute left-1/2 top-6 -translate-x-1/2 h-6 w-6 rounded-full border-4 ${
                      isCompleted
                        ? 'bg-white border-white shadow-lg shadow-white/50'
                        : 'bg-background-dark border-slate-600'
                    }`}
                    initial={{ scale: 0 }}
                    animate={{ scale: shouldShow ? 1 : 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    {isCompleted && (
                      <motion.div
                        className='absolute inset-0 rounded-full bg-white'
                        initial={{ scale: 1 }}
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [1, 0, 0],
                        }}
                        transition={{
                          duration: 1,
                          repeat: shouldShow ? 1 : 0,
                          repeatDelay: 0.5,
                        }}
                      />
                    )}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: shouldShow ? 1 : 0, y: shouldShow ? 0 : 10 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <Badge
                      variant={isCompleted ? 'default' : 'outline'}
                      className='mb-3 text-xs font-bold uppercase tracking-wide'
                    >
                      {item.quarter}
                    </Badge>

                    <h4 className='text-base font-black text-slate-100 uppercase mb-3 tracking-tight'>
                      {item.title}
                    </h4>
                    <p className='text-sm text-slate-400 leading-relaxed'>{item.description}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
