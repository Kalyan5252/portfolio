import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type InvestigationSectionProps = {
  children: ReactNode;
  innerClassName?: string;
  outerClassName?: string;
  sectionClassName?: string;
};

export function InvestigationSection({
  children,
  innerClassName = '',
  outerClassName = '',
  sectionClassName = '',
}: InvestigationSectionProps) {
  return (
    <section
      className={`flex w-full justify-center border-b border-white/12 ${sectionClassName}`}
    >
      <div
        className={cn(
          'w-full max-w-[1100px] border-x border-white/12 px-5 sm:px-6 md:px-8 lg:px-12',
          outerClassName,
        )}
      >
        <div className={innerClassName}>{children}</div>
      </div>
    </section>
  );
}
