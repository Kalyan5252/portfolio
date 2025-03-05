'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.2, // Smooth follow effect
          ease: 'power2.out',
        });
      }
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-10 h-10 pointer-events-none flex items-center justify-center z-[9999]"
    >
      <div className="w-8 h-8 border delay-1000 duration-1000 transition-all border-[#007297] rounded-full absolute" />
      <div className="w-1 h-1 bg-[#00b7f4] rounded-full absolute" />
    </div>
  );
};

export default CustomCursor;
