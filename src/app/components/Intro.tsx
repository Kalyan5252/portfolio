import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

const AnimatedText = () => {
  const heyRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const imRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const kalyanRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const heyChars = heyRef.current?.querySelectorAll('.char');
    const imChars = imRef.current?.querySelectorAll('.char');
    const letters = nameRef.current?.querySelectorAll('.char');
    const titleChars = titleRef.current?.querySelectorAll('.char');
    const screenWidth = window.innerWidth;
    const isCompactScreen = screenWidth < 1024;

    const xValue = isCompactScreen ? 0 : 145;
    const imFinalY = isCompactScreen ? -92 : -150;
    const nameFromY = isCompactScreen ? -56 : -90;
    const nameFinalY = isCompactScreen ? -76 : -120;
    const titleFromX = isCompactScreen ? 0 : 0;
    const titleFromY = isCompactScreen ? -60 : -105;
    const titleFinalX = isCompactScreen ? 0 : 5;
    const titleFinalY = isCompactScreen ? -70 : -110;

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
        delay: 2,
        duration: 0.5,
        ease: 'power2.out',
      });

      gsap.to(imRef.current, {
        y: imFinalY,
        delay: 3,
        duration: 0.5,
        ease: 'power2.out',
      });
    }
    if (letters) {
      gsap.fromTo(
        letters,
        { opacity: 0, scale: 0.5, y: nameFromY },
        {
          opacity: 1,
          scale: 1,
          y: nameFinalY,
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
        {
          opacity: 0.4,
          scale: 0.5,
          x: titleFromX,
          y: titleFromY,
          rotateY: 90,
        },
        {
          opacity: 1,
          scale: 1,
          y: titleFinalY,
          x: titleFinalX,
          rotateY: 0,
          stagger: 0.1, // Delay between letters
          duration: 0.5,
          delay: 6,
          ease: 'power2.out',
        },
      );
    }
    if (kalyanRef.current) {
      gsap.to(kalyanRef.current, {
        opacity: 1,
        delay: 8,
        duration: 1,
        y: -80,
      });
    }
  }, []);

  return (
    <div className="flex h-full items-start justify-start px-6 pt-20 sm:px-8 sm:pt-24 md:pt-28 lg:items-center lg:justify-center lg:px-0 lg:pt-0">
      <div className="w-full max-w-xl text-left font-bold text-xl md:text-2xl lg:text-4xl h-full justify-center lg:justify-normal lg:h-auto flex flex-col items-center">
        <div ref={heyRef} className="relative flex space-x-1">
          {'hey'.split('').map((char, index) => (
            <span key={index} className="char opacity-0 inline-block">
              {char}
            </span>
          ))}
        </div>

        <div
          ref={lineRef}
          className="mt-2 h-0 w-0 opacity-0 transition-all"
        ></div>

        <div ref={imRef} className="relative mt-2 flex space-x-1">
          {"I'm".split('').map((char, index) => (
            <span key={index} className="char opacity-0 inline-block">
              {char}
            </span>
          ))}
        </div>

        <h1
          ref={nameRef}
          className="text-4xl leading-none md:text-5xl lg:text-6xl"
        >
          {'KALYAN PENDEM'.split('').map((char, index) => (
            <span key={index} className="char inline-block opacity-0">
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>

        <p
          ref={titleRef}
          className="text-lg md:text-xl lg:text-2xl pb-40 lg:pb-0"
        >
          {'Full Stack & Applied AI Engineer'.split('').map((char, index) => (
            <span
              key={index}
              className="char inline-block font-light opacity-0"
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </p>
      </div>
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
