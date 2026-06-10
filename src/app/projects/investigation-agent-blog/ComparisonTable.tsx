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
      <Check className="h-5 w-5 shrink-0 text-[#2175a9]" strokeWidth={2.2} />
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
    <div
      className={`w-full overflow-hidden bg-gray-950/90 text-[#2a2a2a] shadow-[0_0_0_1px_rgba(255,255,255,0.25)_inset] ${className}`}
    >
      <div className="grid grid-cols-2 border-b border-white/12 bg-white/10">
        <div className="border-r border-white/12 px-8 py-7 sm:px-10 sm:py-7">
          <h3 className="font-mono text-[0.95rem] uppercase tracking-[0.18em] text-[#d6d6d6]">
            {leftHeader}
          </h3>
        </div>
        <div className="px-8 py-7 sm:px-10 sm:py-7">
          <h3 className="font-mono text-[0.95rem] uppercase tracking-[0.18em] text-[#d6d6d6]">
            {rightHeader}
          </h3>
        </div>
      </div>

      <div className="divide-y divide-white/12 text-[0.9rem]">
        {rows.map((row) => (
          <div
            key={`${row.legacy}-${row.conversion}`}
            className="grid grid-cols-2"
          >
            <div className="border-r border-white/12 px-8 py-6 sm:px-10 sm:py-6">
              <div className="flex items-center gap-4 leading-[1.7] text-[#d6d6d6]">
                <CellIcon variant="legacy" />
                <p className="font-sans">{row.legacy}</p>
              </div>
            </div>
            <div className="px-8 py-6 sm:px-10 sm:py-6">
              <div className="flex items-center gap-4 leading-[1.7] text-[#d6d6d6]">
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
