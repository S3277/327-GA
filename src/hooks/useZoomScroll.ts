import { useEffect, useState, useRef } from 'react';

export const useZoomScroll = (elementRef: React.RefObject<HTMLElement>) => {
  const [scale, setScale] = useState(1);
  const [opacity, setOpacity] = useState(0);
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

        const scrollProgress = Math.max(
          0,
          Math.min(1, (viewportHeight - elementTop) / (viewportHeight + elementHeight))
        );

        const zoomStart = 0.2;
        const zoomEnd = 0.8;

        if (scrollProgress < zoomStart) {
          setScale(0.5);
          setOpacity(0);
        } else if (scrollProgress > zoomEnd) {
          setScale(1);
          setOpacity(1);
        } else {
          const progress = (scrollProgress - zoomStart) / (zoomEnd - zoomStart);
          const easeProgress = 1 - Math.pow(1 - progress, 3);
          setScale(0.5 + easeProgress * 0.5);
          setOpacity(easeProgress);
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

  return { scale, opacity };
};
