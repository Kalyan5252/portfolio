'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const cards = [
  { title: 'Welcome to SuperApp' },
  { title: 'Sign in to SuperApp' },
  { title: 'Verify OTP' },
  { title: 'Set Password' },
  { title: 'Complete Profile' },
];

const getCardStyle = (index: number, active: number) => {
  const offset = index - active;

  return {
    x: offset * 200,
    scale: offset === 0 ? 1 : Math.abs(0.85 / offset),
    rotateY: offset * 10,
    zIndex: 10 - Math.abs(offset),
    opacity: Math.abs(offset) > 2 ? 0 : 1,
  };
};

export default function Auth3DSlider() {
  const [active, setActive] = useState(1);

  return (
    <div className="relative h-screen w-full flex items-center justify-center bg-[#050812] overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
        {/* Cone light */}
        <div
          className="
      absolute left-1/2 top-[10%]
      w-[600px] h-[400px]
      -translate-x-1/2



      blur-[40px]
      opacity-80
    "
          style={{
            background:
              'radial-gradient(ellipse at bottom, rgba(120,160,255,0.25), rgba(120,160,255,0.4) 30%, transparent 70%)',
            // maskImage:
            //   'linear-gradient(to bottom, white 0%, white 25%, transparent 70%)',
            // WebkitMaskImage:
            //   'linear-gradient(to bottom, white 0%, white 25%, transparent 70%)',
          }}
        />
      </div>

      {/* <div className="relative w-full h-full flex items-center justify-center perspective-[1200px]">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            animate={getCardStyle(i, active)}
            transition={{ type: 'spring', stiffness: 120, damping: 18 }}
            className="
              absolute w-[360px] h-[520px] p-6 rounded-xl
              bg-[rgba(9,24,22,0.05)]
              backdrop-blur-lg
              border border-white/10
              text-white
              shadow-[0_0_60px_rgba(80,180,3,0.05)]
              transform-style-preserve-3d
            "
          >
            <span className="absolute top-5 left-4 h-[2px] w-[2px] bg-white rounded-full"></span>
            <span className="absolute top-5 right-4 h-[2px] w-[2px] bg-white rounded-full"></span>
            <span className="absolute bottom-4 left-4 h-[2px] w-[2px] bg-white rounded-full"></span>
            <span className="absolute bottom-4 right-4 h-[2px] w-[2px] bg-white rounded-full"></span>

            <h2 className="text-lg font-medium text-center mb-4">
              {card.title}
            </h2>

            <input
              placeholder="Your email address"
              className="
                w-full mb-3 px-4 py-2 rounded-lg
                bg-white/5 border border-white/10
                placeholder-white/40
                focus:outline-none
              "
            />

            <button
              className="
                w-full py-2 rounded-lg
                bg-white/10 border border-white/10
                hover:bg-white/15 transition
              "
            >
              Continue
            </button>
          </motion.div>
        ))}
      </div>

      <div className="absolute bottom-8 flex gap-4">
        <button
          onClick={() => setActive((p) => Math.max(p - 1, 0))}
          className="px-4 py-2 rounded-lg bg-white/10 text-white text-sm hover:bg-white/20"
        >
          Prev
        </button>
        <button
          onClick={() => setActive((p) => Math.min(p + 1, cards.length - 1))}
          className="px-4 py-2 rounded-lg bg-white/10 text-white text-sm hover:bg-white/20"
        >
          Next
        </button>
      </div>

      <div className="absolute w-[520px] h-[520px] bg-green-500/10 blur-[160px] rounded-full" /> */}
    </div>
  );
}
