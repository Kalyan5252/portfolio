import { ProjectCaseStudyPage } from '../shared/ProjectCaseStudyPage';
import {
  automatedPayrollCards,
  automatedPayrollComparisonRows,
  automatedPayrollProject,
} from '@/app/constants/automated_payroll';

export default function AutomatedPayrollPage() {
  return (
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
  );
}
