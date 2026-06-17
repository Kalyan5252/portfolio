import type { Metadata } from 'next';
import { ProjectCaseStudyPage } from '../shared/ProjectCaseStudyPage';
import {
  automatedPayrollCards,
  automatedPayrollComparisonRows,
  automatedPayrollProject,
} from '@/app/constants/automated_payroll';
import {
  buildPageMetadata,
  buildProjectStructuredData,
  toJsonLd,
} from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Automated Payroll Case Study',
  description: automatedPayrollProject.summary,
  path: '/projects/automated-payroll',
  image: automatedPayrollProject.heroImage,
  type: 'article',
  keywords: [
    'payroll software case study',
    'HRTech portfolio project',
    'Next.js payroll platform',
  ],
});

export default function AutomatedPayrollPage() {
  const structuredData = buildProjectStructuredData({
    name: automatedPayrollProject.title,
    description: automatedPayrollProject.summary,
    path: '/projects/automated-payroll',
    image: automatedPayrollProject.heroImage,
    category: automatedPayrollProject.category,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(structuredData) }}
      />
      <ProjectCaseStudyPage
        project={automatedPayrollProject}
        introHeading="Operational Payroll"
        caseStudyHeading="Turning HR Data into Pay Runs"
        media={{
          kind: 'image',
          src: automatedPayrollProject.heroImage,
          alt: 'Automated Payroll landing and system overview',
        }}
        comparison={{
          leftHeader: 'Manual Ops',
          rightHeader: 'Automated Payroll',
          rows: automatedPayrollComparisonRows,
        }}
        context={{
          eyebrow: 'Platform View',
          title: 'Built for payroll as a workflow',
          description:
            'The platform brings together employee records, attendance signals, leave approvals, salary components, payslip visibility, and payout execution so payroll behaves like an end-to-end product workflow instead of a monthly spreadsheet ritual.',
          cards: automatedPayrollCards,
        }}
        imageAlts={{
          architecture: 'Attendance and HR workflow screen',
          graph: 'Payroll run table and status management',
          table: 'Employee record and employment overview',
          final: 'Employee payroll dashboard',
        }}
      />
    </>
  );
}
