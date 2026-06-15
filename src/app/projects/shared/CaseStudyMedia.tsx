import Image from 'next/image';
import InvestigationMedia from '../investigation-agent-blog/InvestigationMedia';

type VideoMedia = {
  kind: 'video';
  poster: string;
  src: string;
  title: string;
  className?: string;
};

type ImageMedia = {
  kind: 'image';
  src: string;
  alt: string;
  className?: string;
};

export type CaseStudyMediaProps = VideoMedia | ImageMedia;

export function CaseStudyMedia(props: CaseStudyMediaProps) {
  if (props.kind === 'video') {
    return (
      <InvestigationMedia
        poster={props.poster}
        src={props.src}
        title={props.title}
        className={props.className}
      />
    );
  }

  return (
    <div
      className={`investigation-video-shell relative overflow-hidden rounded-[18px] border border-[#dfe4ea]/35 bg-[#e8edf4] ${props.className ?? ''}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.16),rgba(255,255,255,0)_52%)]" />
      <div className="relative aspect-[16/9] w-full">
        <Image
          src={props.src}
          alt={props.alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_24%,rgba(9,15,18,0.08)_100%)]" />
      </div>
    </div>
  );
}
