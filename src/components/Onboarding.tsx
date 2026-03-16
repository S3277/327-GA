import { motion } from 'framer-motion';
import { Globe } from './ui/globe';
import { COBEOptions } from 'cobe';

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 6,
  baseColor: [0.3, 0.3, 0.3],
  markerColor: [1, 0.5, 0],
  glowColor: [0.3, 0.3, 0.3],
  markers: [
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [51.5074, -0.1278], size: 0.08 },
    { location: [48.8566, 2.3522], size: 0.07 },
    { location: [35.6762, 139.6503], size: 0.09 },
    { location: [-33.8688, 151.2093], size: 0.06 },
    { location: [37.7749, -122.4194], size: 0.09 },
    { location: [55.7558, 37.6173], size: 0.07 },
    { location: [28.6139, 77.2090], size: 0.08 },
    { location: [-23.5505, -46.6333], size: 0.07 },
    { location: [1.3521, 103.8198], size: 0.06 },
    { location: [39.9042, 116.4074], size: 0.09 },
    { location: [52.5200, 13.4050], size: 0.07 },
    { location: [19.4326, -99.1332], size: 0.08 },
    { location: [-26.2041, 28.0473], size: 0.06 },
    { location: [25.2048, 55.2708], size: 0.07 },
  ],
};

interface OnboardingProps {
  onComplete: () => void;
}

export function Onboarding({ onComplete }: OnboardingProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
    >

      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 text-center max-w-5xl w-full">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-8 sm:mb-10 md:mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-2 sm:mb-3 md:mb-4 uppercase tracking-tight leading-tight px-2">
            YOUR FUNNEL IS <span className="italic">BLEEDING</span> MONEY
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-400 mb-4 sm:mb-5 md:mb-6 italic px-2">
            And you didn't even notice.
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 font-light leading-relaxed max-w-3xl mx-auto px-2">
            Most info coaches are sitting on a goldmine and converting like amateurs. I come in, tear apart your funnel, and rebuild it into something that actually closes — VSL, copy, automation, community. All of it.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          onClick={onComplete}
          className="mb-16 sm:mb-20 md:mb-0"
        >
          <button className="group relative px-8 sm:px-10 md:px-12 py-4 sm:py-5 bg-white text-black font-bold text-sm sm:text-base uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300 overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              SEE HOW 327 DOES IT
              <span className="text-lg sm:text-xl">→</span>
            </span>
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[45%] sm:h-[50%] md:h-[55%] lg:h-[60%] overflow-hidden pointer-events-none">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative w-full h-full flex items-end justify-center"
        >
          <div className="relative w-full max-w-[600px] sm:max-w-[800px] md:max-w-[1000px] lg:max-w-[1200px] h-[600px] sm:h-[800px] md:h-[1000px] lg:h-[1200px] translate-y-[48%] sm:translate-y-[50%] md:translate-y-[53%] lg:translate-y-[55%]">
            <Globe config={GLOBE_CONFIG} className="!max-w-none !w-full" />
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-28 md:h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </motion.div>
  );
}
