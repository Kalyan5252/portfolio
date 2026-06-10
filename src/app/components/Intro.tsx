import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

const AnimatedText = () => {
  const heyRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const imRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const kalyanRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const heyChars = heyRef.current?.querySelectorAll('.char');
    const imChars = imRef.current?.querySelectorAll('.char');
    const letters = nameRef.current?.querySelectorAll('.char');
    const titleChars = titleRef.current?.querySelectorAll('.char');
    const screenWidth = window.innerWidth;

    let xValue;
    if (screenWidth < 1024) {
      xValue = 0;
    } else {
      xValue = -220;
    }

    if (heyChars && imChars) {
      gsap.to(heyChars, {
        x: (index) => -5 * index,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
      });

      gsap.to(heyRef.current, {
        y: -30,
        delay: 1,
        duration: 0.5,
        ease: 'power2.out',
      });

      gsap.to(heyRef.current, {
        opacity: 0,
        delay: 1.2,
        duration: 0.5,
        ease: 'power2.out',
      });

      gsap.to(lineRef.current, {
        // width: '100%',
        opacity: 1,
        delay: 1.2,
        duration: 0.5,
        ease: 'power2.out',
      });

      gsap.to(imChars, {
        x: (index) => -5 * index,
        opacity: 1,
        duration: 0.2,
        stagger: 0.1,
        ease: 'power2.out',
        delay: 2,
      });

      gsap.to(imRef.current, {
        y: -50,
        scale: 1.5,
        delay: 2,
        duration: 0.5,
        ease: 'power2.out',
      });

      gsap.to(imRef.current, {
        x: xValue,
        y: -150,
        scale: 1.5,
        delay: 3,
        duration: 0.5,
        ease: 'power2.out',
      });
    }
    if (letters) {
      gsap.fromTo(
        letters,
        { opacity: 0, scale: 0.5, y: -90 },
        {
          opacity: 1,
          scale: 1,
          y: -120,
          stagger: 0.1, // Delay between letters
          duration: 0.5,
          delay: 3,
          ease: 'power2.out',
        },
      );
    }
    if (titleChars) {
      gsap.fromTo(
        titleChars,
        { opacity: 0.4, scale: 0.5, x: -80, y: -105, rotateY: 90 },
        {
          opacity: 1,
          scale: 1,
          y: -110,
          x: -80,
          rotateY: 0,
          stagger: 0.1, // Delay between letters
          duration: 0.5,
          delay: 6,
          ease: 'power2.out',
        },
      );
    }
    // if (kalyanRef.current) {
    //   gsap.to(kalyanRef.current, {
    //     opacity: 1,
    //     delay: 8,
    //     duration: 1,
    //     y: -80,
    //   });
    // }
  }, []);

  return (
    <div className="h-full flex justify-center items-center flex-col font-bold text-xl md:text-2xl lg:text-4xl">
      <div ref={heyRef} className="relative flex space-x-1">
        {'hey'.split('').map((char, index) => (
          <span key={index} className="char opacity-0 inline-block">
            {char}
          </span>
        ))}
      </div>

      <div
        ref={lineRef}
        className="w-0 h-0 mt-2 opacity-0 transition-all"
      ></div>

      <div ref={imRef} className="relative flex space-x-1 mt-2">
        {"i'm".split('').map((char, index) => (
          <span key={index} className="char opacity-0 inline-block">
            {char}
          </span>
        ))}
      </div>

      <h1 ref={nameRef} className="text-4xl md:text-4xl lg:text-6xl">
        {'KALYAN PENDEM'.split('').map((char, index) => (
          <span key={index} className="char inline-block opacity-0">
            {char === ' ' ? '\u00A0' : char} {/* Handle space properly */}
          </span>
        ))}
      </h1>

      <h1 ref={titleRef} className="text-lg md:text-xl lg:text-2xl">
        {'Full Stack & Applied AI Engineer'.split('').map((char, index) => (
          <span key={index} className="char font-light inline-block opacity-0">
            {char === ' ' ? '\u00A0' : char} {/* Handle space properly */}
          </span>
        ))}
      </h1>
      {/* <Image
        src={'/people/dp.png'}
        alt="img"
        height={300}
        width={300}
        className="absolute top-[100px] translate-x-20"
        ref={kalyanRef}
      /> */}
    </div>
  );
};

export default AnimatedText;
