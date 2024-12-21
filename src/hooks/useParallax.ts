import { useEffect, useState } from 'react';

interface ParallaxConfig {
  speed?: number;
  reverse?: boolean;
}

export function useParallax({ speed = 0.5, reverse = false }: ParallaxConfig = {}) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setOffset(scrolled * speed * (reverse ? -1 : 1));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, reverse]);

  return offset;
}