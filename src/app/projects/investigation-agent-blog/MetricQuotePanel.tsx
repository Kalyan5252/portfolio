import { Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

export type MetricQuoteMetric = {
  value: string;
  label: string;
};

type MetricQuotePanelProps = {
  quote: string;
  author: string;
  title: string;
  metrics: MetricQuoteMetric[];
  reverse?: boolean;
  className?: string;
};

function QuoteSide({
  quote,
  author,
  title,
}: Pick<MetricQuotePanelProps, 'quote' | 'author' | 'title'>) {
  return (
    <div className="flex h-full flex-col justify-center bg-gray-950/90 px-7 py-10 text-[#222] sm:px-10 sm:py-12 lg:px-12 lg:py-16">
      <div className="max-w-[42rem]">
        <Quote
          className="h-10 w-10 text-[#a9a9a9] lg:h-12 lg:w-12"
          strokeWidth={1.75}
        />
        <p
          className="mt-8 text-[2.4rem] leading-[1.7] tracking-[-0.05em] text-[#f8f8f8] sm:text-[3rem] md:text-[1.8rem]"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          {quote}
        </p>
      </div>

      <div className="mt-10">
        <p className="text-[1.05rem] font-medium text-[#e0e0e0] sm:text-[1.15rem]">
          {author}
        </p>
        <p className="mt-1 text-[0.95rem] text-[#707070] sm:text-[1rem]">
          {title}
        </p>
      </div>
    </div>
  );
}

function MetricsSide({ metrics }: Pick<MetricQuotePanelProps, 'metrics'>) {
  return (
    <div className="grid h-full grid-rows-3 bg-gray-950/90">
      {metrics.map((metric, index) => {
        const isLast = index === metrics.length - 1;

        return (
          <div
            key={`${metric.value}-${metric.label}`}
            className={cn(
              'flex min-h-[9.5rem] flex-col justify-center px-7 py-8 sm:px-10 sm:py-10 lg:min-h-[11rem] lg:px-12',
              !isLast && 'border-b border-white/12',
            )}
          >
            <div className="flex h-[4.35rem] items-start sm:h-[4.8rem] lg:h-[5.5rem]">
              <p
                className="font-serif whitespace-nowrap text-[3.6rem] leading-[0.82] tracking-[-0.075em] text-[#f8f8f8] sm:text-[4.2rem] lg:text-[5rem]"
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontVariantNumeric: 'lining-nums tabular-nums',
                }}
              >
                {metric.value}
              </p>
            </div>
            <p className="mt-4 font-medium max-w-[18rem] text-[1rem] leading-[1.55] text-[#d3d3d3] sm:text-[1.05rem] lg:text-[1.1rem]">
              {metric.label}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export function MetricQuotePanel({
  quote,
  author,
  title,
  metrics,
  reverse = false,
  className = '',
}: MetricQuotePanelProps) {
  return (
    <div
      className={cn(
        'w-full overflow-hidden text-[#2a2a2a] relative',
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(129,255,190,0.18),rgba(38,101,73,0.22)_42%,rgba(8,20,18,0.32)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(2,8,10,0.45),rgba(255,255,255,0)_40%,rgba(255,255,255,0)_100%)]" />
      <div
        className={`grid min-h-[42rem] grid-cols-1 ${!reverse ? 'lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)]' : 'lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]'}`}
      >
        {reverse ? (
          <>
            <div>
              <MetricsSide metrics={metrics} />
            </div>
            <div className="border-t border-white/12 lg:border-t-0 lg:border-l">
              <QuoteSide quote={quote} author={author} title={title} />
            </div>
          </>
        ) : (
          <>
            <div>
              <QuoteSide quote={quote} author={author} title={title} />
            </div>
            <div className="border-t border-white/12 lg:border-t-0 lg:border-l">
              <MetricsSide metrics={metrics} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
