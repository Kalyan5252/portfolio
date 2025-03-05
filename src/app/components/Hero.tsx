'use client';
import React from 'react';
import HeroScene from './HeroScene';
import Intro from './Intro';
import MouseScroll from './MouseScroll';

const Hero = () => {
  return (
    <div className="relative top-0 w-screen grid grid-cols-2 h-screen bg-gradient-to-bl from-[#192e35] to-[#04080a]">
      <Intro />
      {/* <HeroScene /> */}
      <MouseScroll />
      <div className="absolute bottom-15 h-5 w-full bg-try blur-3xl opacity-70"></div>
      <div className="absolute bottom-0 h-10 w-full herodispersion blur-3xl"></div>
    </div>
  );
};

export default Hero;

// as React.RefObject<HTMLSpanElement>
