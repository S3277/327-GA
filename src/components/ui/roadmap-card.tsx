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
      const duration = 2500;
      const startTime = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        setLineProgress(progress * 100);

        items.forEach((_, index) => {
          const stepThreshold = ((index + 1) / items.length) * 100;
          if (lineProgress >= stepThreshold && !visibleSteps.includes(index)) {
            setVisibleSteps((prev) => [...prev, index]);
          }
        });

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      animate();
    }
  }, [isInView, items.length, visibleSteps, lineProgress]);

  return (
    <Card className='w-full max-w-5xl bg-transparent border-none shadow-none'>
      <CardContent className='pt-6'>
        <div className='relative' ref={containerRef}>
          <div className='absolute left-[5%] right-[5%] top-8 h-1 bg-slate-800 rounded-full'>
            <motion.div
              className='h-full bg-gradient-to-r from-white to-slate-400 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]'
              style={{ width: `${lineProgress}%` }}
              transition={{ duration: 0.1, ease: 'linear' }}
            />
          </div>

          <div className='flex justify-between px-[5%]'>
            {items.map((item, index) => {
              const isCompleted = item.status === 'done' || item.status === 'in-progress';
              const shouldShow = visibleSteps.includes(index);
              const stepPosition = ((index + 0.5) / items.length) * 100;
              const hasLinePassed = lineProgress >= stepPosition;

              return (
                <motion.div
                  key={index}
                  className='relative pt-16 text-center flex-1 px-4'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: shouldShow ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className={`absolute left-1/2 top-6 -translate-x-1/2 h-6 w-6 rounded-full border-4 transition-all duration-500 ${
                      hasLinePassed && isCompleted
                        ? 'bg-white border-white shadow-lg shadow-white/50'
                        : 'bg-background-dark border-slate-600'
                    }`}
                    initial={{ scale: 0 }}
                    animate={{ scale: hasLinePassed ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {hasLinePassed && isCompleted && (
                      <motion.div
                        className='absolute inset-0 rounded-full bg-white'
                        initial={{ scale: 1, opacity: 1 }}
                        animate={{
                          scale: [1, 1.8, 1],
                          opacity: [1, 0, 0],
                        }}
                        transition={{
                          duration: 0.8,
                          times: [0, 0.6, 1],
                        }}
                      />
                    )}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: hasLinePassed ? 1 : 0, y: hasLinePassed ? 0 : 10 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
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
