import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Globe } from './ui/globe';

interface OnboardingProps {
  onComplete: () => void;
}

export function Onboarding({ onComplete }: OnboardingProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950'
    >
      <div className='relative flex size-full max-w-4xl flex-col items-center justify-center px-8'>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className='relative flex size-full max-w-3xl items-center justify-center'
        >
          <div className='relative w-full h-[700px] flex items-center justify-center overflow-hidden'>
            <motion.span
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className='pointer-events-none absolute whitespace-pre-wrap bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-center text-6xl md:text-8xl font-black leading-none text-transparent z-20'
            >
              Global Growth
            </motion.span>
            <div className='relative w-full h-full flex items-center justify-center'>
              <Globe className='top-0' />
            </div>
            <div className='pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.5)_100%)]' />
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className='text-center mb-12 z-10'
        >
          <p className='text-slate-400 text-lg mb-8 max-w-2xl mx-auto'>
            Transform your business with strategic growth solutions that reach across the globe
          </p>
          <motion.button
            onClick={onComplete}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='group relative inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-bold text-lg rounded-full overflow-hidden transition-all hover:shadow-2xl hover:shadow-white/20'
          >
            <span className='relative z-10'>Enter Dashboard</span>
            <ArrowRight className='relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1' />
            <motion.div
              className='absolute inset-0 bg-gradient-to-r from-slate-100 to-white'
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}
