import { useEffect, useState } from 'react';

export const useParallax = (speed: number = 0.5) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset * speed);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return offset;
};

export const useScrollOpacity = (startY: number = 0, endY: number = 500) => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      if (scrollY < startY) {
        setOpacity(1);
      } else if (scrollY > endY) {
        setOpacity(0);
      } else {
        const progress = (scrollY - startY) / (endY - startY);
        setOpacity(1 - progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [startY, endY]);

  return opacity;
};

export const useScrollScale = (startY: number = 0, endY: number = 500) => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      if (scrollY < startY) {
        setScale(1);
      } else if (scrollY > endY) {
        setScale(0.95);
      } else {
        const progress = (scrollY - startY) / (endY - startY);
        setScale(1 - progress * 0.05);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [startY, endY]);

  return scale;
};
