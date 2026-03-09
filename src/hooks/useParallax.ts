import { useEffect, useState, useRef } from 'react';

export const useParallax = (speed: number = 0.5) => {
  const [offset, setOffset] = useState(0);
  const rafRef = useRef<number | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        const scrollY = window.pageYOffset;
        if (Math.abs(scrollY - lastScrollY.current) > 0) {
          setOffset(scrollY * speed);
          lastScrollY.current = scrollY;
        }
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [speed]);

  return offset;
};

export const useScrollOpacity = (startY: number = 0, endY: number = 500) => {
  const [opacity, setOpacity] = useState(1);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        const scrollY = window.pageYOffset;
        if (scrollY < startY) {
          setOpacity(1);
        } else if (scrollY > endY) {
          setOpacity(0);
        } else {
          const progress = (scrollY - startY) / (endY - startY);
          setOpacity(1 - progress);
        }
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [startY, endY]);

  return opacity;
};

export const useScrollScale = (startY: number = 0, endY: number = 500) => {
  const [scale, setScale] = useState(1);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        const scrollY = window.pageYOffset;
        if (scrollY < startY) {
          setScale(1);
        } else if (scrollY > endY) {
          setScale(0.95);
        } else {
          const progress = (scrollY - startY) / (endY - startY);
          setScale(1 - progress * 0.05);
        }
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [startY, endY]);

  return scale;
};
