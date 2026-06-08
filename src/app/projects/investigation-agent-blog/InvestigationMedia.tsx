'use client';

import Image from 'next/image';
import { useState } from 'react';

type InvestigationMediaProps = {
  poster: string;
  src: string;
  title: string;
  className?: string;
};

const InvestigationMedia = ({
  poster,
  src,
  title,
  className = '',
}: InvestigationMediaProps) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`investigation-video-shell relative overflow-hidden rounded-[18px] border border-[#dfe4ea]/35 bg-[#e8edf4] ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.16),rgba(255,255,255,0)_52%)]" />

      {hasError ? (
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={poster}
            alt={`${title} preview poster`}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_24%,rgba(9,15,18,0.08)_100%)]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-black/10 bg-white/88 shadow-[0_14px_30px_rgba(10,16,18,0.18)]">
              <div className="ml-1 h-0 w-0 border-b-[10px] border-l-[16px] border-t-[10px] border-b-transparent border-l-[#161d22] border-t-transparent" />
            </div>
          </div>
        </div>
      ) : (
        <div className="relative">
          <video
            className="relative z-[1] block aspect-[16/9] w-full object-cover"
            controls
            preload="metadata"
            loop={true}
            poster={poster}
            src={src}
            onError={() => setHasError(true)}
          />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-black/10 bg-white/90 shadow-[0_14px_30px_rgba(10,16,18,0.18)]">
              <div className="ml-1 h-0 w-0 border-b-[10px] border-l-[16px] border-t-[10px] border-b-transparent border-l-[#161d22] border-t-transparent" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InvestigationMedia;
