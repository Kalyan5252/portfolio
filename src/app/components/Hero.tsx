'use client';
import React from 'react';
import HeroScene from './HeroScene';
import Intro from './Intro';
import MouseScroll from './MouseScroll';

const Hero = () => {
  return (
    <div className="relative top-0 max-w-8xl grid h-screen w-screen lg:grid-cols-2 bg-gradient-to-bl from-[#192e35] to-[#04080a]">
      <div className="relative z-10">
        <Intro />
      </div>
      <div className="absolute inset-x-0 bottom-0 top-0 z-0 lg:relative lg:inset-auto">
        <HeroScene />
      </div>
      <MouseScroll />
      <div className="absolute bottom-0 h-10 w-full herodispersion blur-3xl"></div>
    </div>
  );
};

export default Hero;

// as React.RefObject<HTMLSpanElement>
