import type { LucideIcon } from 'lucide-react';

export type LiveContextCard = {
  title: string;
  body: string;
  icon: LucideIcon;
};

type LiveContextSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  cards: LiveContextCard[];
  className?: string;
};

function Icon({ variant: IconComponent }: { variant: LucideIcon }) {
  return <IconComponent className="h-[2.05rem] w-[2.05rem]" strokeWidth={1.7} />;
}

export function LiveContextSection({
  eyebrow,
  title,
  description,
  cards,
  className = '',
}: LiveContextSectionProps) {
  const columnCount = Math.min(3, Math.max(cards.length, 1));
  const rowCount = Math.ceil(cards.length / columnCount);
  const shellMaxWidth =
    cards.length < 3 ? `${Math.max(cards.length, 1) * 24}rem` : '100%';

  return (
    <section
      className={`live-context-page relative w-full overflow-hidden text-white ${className} py-10`}
    >
      <div className="live-context-page__backdrop absolute inset-0" />
      <div className="live-context-page__grid absolute inset-0" />
      <div className="live-context-page__noise absolute inset-0" />

      <div className="relative mx-auto flex min-w-6xl max-w-6xl flex-col items-center px-4 py-5 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1200px] text-center">
          <p className="text-[0.98rem] text-white/60">{eyebrow}</p>
          <h1
            className="mt-2 text-[3rem] leading-[0.95] tracking-[-0.01em] text-[#f5f1eb]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            {title}
          </h1>
          <p className="mx-auto mt-5 max-w-[54rem] text-[0.9rem] leading-[1.65] text-white/62 sm:text-[0.9rem]">
            {description}
          </p>
        </div>

        <div className="my-10 flex w-full justify-center">
          <div className="live-context-shell w-full" style={{ maxWidth: shellMaxWidth }}>
            <div className="pointer-events-none absolute inset-0 z-20">
              <div className="corner corner-tl" />
              <div className="corner corner-tr" />
              <div className="corner corner-bl" />
              <div className="corner corner-br" />
            </div>
            <div
              className="grid grid-cols-1 overflow-hidden border border-white/9 bg-white/[0.015]"
              style={{
                gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))`,
              }}
            >
              {cards.map((card, index) => {
                const isLastColumn = (index + 1) % columnCount === 0;
                const isLastRow = index >= (rowCount - 1) * columnCount;

                return (
                  <article
                    key={card.title}
                    className={`live-context-card backdrop-blur-2xl relative px-8 py-8 sm:px-10 sm:py-10 ${
                      !isLastColumn ? 'md:border-r md:border-white/10' : ''
                    } ${!isLastRow ? 'md:border-b md:border-white/10' : ''}`}
                  >
                    <div className="absolute right-7 top-7 h-2 w-2 rounded-full bg-[#7fcab0] shadow-[0_0_12px_rgba(127,202,176,0.55)]" />
                    <div className="live-context-card__icon flex h-11 w-11 items-center justify-center text-white/92">
                      <Icon variant={card.icon} />
                    </div>

                    <h2 className="mt-2 text-[1.6rem] font-medium tracking-[-0.03em] text-white">
                      {card.title}
                    </h2>
                    <p className="mt-1 max-w-[18rem] text-[0.9rem] leading-6 text-white/58">
                      {card.body}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
