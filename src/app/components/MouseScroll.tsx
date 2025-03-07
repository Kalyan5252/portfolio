'use client';
import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

const MouseScroll = () => {
  const mouseRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  const [initial, setInitial] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setInitial(false);
    if (mouseRef.current) {
      gsap.to(mouseRef.current, {
        opacity: visible ? 1 : 0,
        y: visible ? 0 : 20, // Moves down when hiding
        duration: 0.6,
        delay: initial ? 8 : 0,
        ease: 'power2.out',
      });
    }
  }, [visible]);

  return (
    <div
      ref={mouseRef}
      className="absolute opacity-0 bottom-10 left-1/2 transform -translate-x-1/2 z-50 h-14 w-8 border border-white rounded-full flex justify-center items-center transition-opacity"
    >
      <span className="absolute heromouse top-2 h-2 w-2 rounded-full bg-white animate-bounce"></span>
    </div>
  );
};

export default MouseScroll;
