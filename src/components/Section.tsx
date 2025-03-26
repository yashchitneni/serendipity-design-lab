
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  noPadding?: boolean;
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  className, 
  children, 
  noPadding = false 
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const section = sectionRef.current;
    if (section) {
      const elements = section.querySelectorAll('.reveal-on-scroll');
      elements.forEach(el => observer.observe(el));
    }
    
    return () => {
      if (section) {
        const elements = section.querySelectorAll('.reveal-on-scroll');
        elements.forEach(el => observer.unobserve(el));
      }
    };
  }, []);
  
  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={cn(
        noPadding ? '' : 'section-padding',
        className
      )}
    >
      <div className="container-custom">
        {children}
      </div>
    </section>
  );
};

export default Section;
