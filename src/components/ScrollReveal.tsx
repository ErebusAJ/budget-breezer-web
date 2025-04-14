
import { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
  staggered?: boolean;
  staggerIndex?: number;
}

const ScrollReveal = ({ 
  children, 
  className = "", 
  threshold = 0.1,
  delay = 0,
  staggered = false,
  staggerIndex = 0
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('active');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, delay]);

  return (
    <div 
      ref={ref} 
      className={`${staggered ? 'staggered-reveal' : 'reveal'} ${className}`}
      style={staggered ? { '--reveal-index': staggerIndex } as React.CSSProperties : undefined}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
