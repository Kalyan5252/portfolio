import { Check, X } from 'lucide-react';

export type ComparisonRow = {
  legacy: string;
  conversion: string;
};

type ComparisonTableProps = {
  leftHeader: string;
  rightHeader: string;
  rows: ComparisonRow[];
  className?: string;
};

function CellIcon({ variant }: { variant: 'legacy' | 'conversion' }) {
  if (variant === 'conversion') {
    return (
      <Check className="h-5 w-5 shrink-0 text-[#4d88ad]" strokeWidth={2.2} />
    );
  }

  return <X className="h-5 w-5 shrink-0 text-[#a8a8a8]" strokeWidth={2.2} />;
}

export function ComparisonTable({
  leftHeader,
  rightHeader,
  rows,
  className = '',
}: ComparisonTableProps) {
  return (
    <div className="overflow-hidden w-6xl border border-[#d9d9d9] bg-radial from- text-[#d7d7d7] shadow-[0_0_0_1px_rgba(255,255,255,0.45)_inset]">
      <div className="grid grid-cols-2 border-b border-[#d9d9d9]">
        <div className="border-r border-[#d9d9d9] px-8 py-7 sm:px-10 sm:py-8">
          <h3 className="font-mono text-[0.95rem] uppercase tracking-[0.18em] text-[#d7d7d7]">
            {leftHeader}
          </h3>
        </div>
        <div className="px-8 py-7 sm:px-10 sm:py-8">
          <h3 className="font-mono text-[0.95rem] uppercase tracking-[0.18em] text-[#d7d7d7]">
            {rightHeader}
          </h3>
        </div>
      </div>

      <div className="divide-y divide-[#d9d9d9]">
        {rows.map((row) => (
          <div
            key={`${row.legacy}-${row.conversion}`}
            className="grid grid-cols-2"
          >
            <div className="border-r border-[#d9d9d9] px-8 py-7 sm:px-10 sm:py-8">
              <div className="flex items-start gap-4 text-[1rem] leading-[1.7] text-[#d7d7d7] sm:text-[1.05rem]">
                <CellIcon variant="legacy" />
                <p className="font-sans">{row.legacy}</p>
              </div>
            </div>
            <div className="px-8 py-7 sm:px-10 sm:py-8">
              <div className="flex items-start gap-4 text-[1rem] leading-[1.7] text-[#d7d7d7] sm:text-[1.05rem]">
                <CellIcon variant="conversion" />
                <p className="font-sans">{row.conversion}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
