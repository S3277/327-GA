import { useEffect, useState, useRef } from 'react';

export const useZoomScroll = (elementRef: React.RefObject<HTMLElement>) => {
  const [zoomScale, setZoomScale] = useState(1);
  const [contentOpacity, setContentOpacity] = useState(1);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        if (!elementRef.current) return;

        const rect = elementRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const elementTop = rect.top;
        const elementHeight = rect.height;

        const scrollStart = viewportHeight * 0.5;
        const scrollEnd = -elementHeight * 0.5;

        if (elementTop > scrollStart) {
          setZoomScale(1);
          setContentOpacity(1);
        } else if (elementTop < scrollEnd) {
          setZoomScale(10);
          setContentOpacity(0);
        } else {
          const progress = (scrollStart - elementTop) / (scrollStart - scrollEnd);
          const easeProgress = progress * progress;

          setZoomScale(1 + easeProgress * 9);
          setContentOpacity(Math.max(0, 1 - easeProgress * 2));
        }
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [elementRef]);

  return { zoomScale, contentOpacity };
};
