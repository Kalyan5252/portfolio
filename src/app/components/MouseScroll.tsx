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
        duration: 0.5,
        delay: initial ? 8 : 2,
      });
    }
  }, [visible]);

  return (
    <div
      ref={mouseRef}
      className="absolute opacity-0 bottom-10 left-1/2 z-50 h-14 w-8 border-[1px] border-white rounded-full flex justify-center p-2 transition-opacity"
    >
      <span className="absolute heromouse top-2 h-2 w-2 rounded-full bg-white transition-all animate-bounce"></span>
    </div>
  );
};

export default MouseScroll;
