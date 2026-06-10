import type { ReactNode } from 'react';

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
      className={`flex w-full justify-center border-b border-white/8 ${sectionClassName}`}
    >
      <div
        className={`w-full max-w-[1280px] border-x border-white/8 px-5 sm:px-6 md:px-8 lg:px-12 ${outerClassName}`}
      >
        <div className={innerClassName}>{children}</div>
      </div>
    </section>
  );
}
