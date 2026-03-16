import { motion } from 'framer-motion';
import { Globe } from './ui/globe';
import { ArrowRight } from 'lucide-react';
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

      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center max-w-4xl">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
            Welcome to Growth Architect
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl">
            Building digital experiences that scale globally. Let's transform your vision into reality.
          </p>
        </motion.div>

        <motion.button
          onClick={onComplete}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold text-lg flex items-center gap-3 hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300"
        >
          Enter
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[60%] overflow-hidden">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative w-full h-full flex items-end justify-center"
        >
          <div className="relative w-full max-w-[1200px] h-[1200px] translate-y-[50%]">
            <Globe config={GLOBE_CONFIG} className="!max-w-none !w-full" />
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </motion.div>
  );
}
