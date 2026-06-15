import {
  BadgeIndianRupee,
  Building2,
  FileSpreadsheet,
  MapPinned,
  ReceiptText,
  ShieldCheck,
} from 'lucide-react';
import type { LiveContextCard } from '../live-context/LiveContextSection';
import type { ComparisonRow } from '../projects/investigation-agent-blog/ComparisonTable';

export const automatedPayrollProject = {
  title: 'Automated Payroll',
  label: 'HR & Payout Engine',
  dateRange: '2024 - 2025',
  category: 'HRTech SaaS',
  heroImage: '/images/projects/project_5/image1.png',
  introImage: '/images/projects/project_5/image2.png',
  architectureImage: '/images/projects/project_5/image4.png',
  graphImage: '/images/projects/project_5/image3.png',
  tableImage: '/images/projects/project_5/image5.png',
  neo4jImage: '/images/projects/project_3/image1.png',
  summary:
    'Full-stack payroll platform covering employee records, attendance, leave, payroll calculation, and Razorpay salary payouts.',
  introduction:
    'Built a payroll operations system that connects HR records, attendance, leave requests, salary components, payslips, and payout execution inside one Next.js application with PostgreSQL-backed data models.',
  caseStudy:
    'Payroll operations become risky when attendance, leave, salary rules, and payouts all live in separate tools or spreadsheets. The hard part is not just calculating one salary number. It is maintaining reliable employee records, protecting role-based actions, capturing attendance correctly, accounting for leave, applying configurable deductions, and moving from approved payroll to actual disbursement without losing auditability. This project was built as a practical operations layer for that problem. Instead of treating payroll as a static admin table, it models the surrounding workflows too: employee onboarding data, department rules, manager/admin access, attendance requests, leave approval, payroll runs, fund accounts, and employee-facing views such as payslip and attendance history.',
  solutionBlocks: [
    {
      id: '1.',
      title: 'Structured HR Domain Model',
      body: 'The platform uses PostgreSQL with Drizzle ORM to model employees, departments, attendance, banks, payrolls, notifications, salary components, professional tax slabs, leave requests, config, and audit logs. That schema design matters because payroll accuracy depends on having clean relationships between identity, attendance, compensation rules, and payout targets.',
    },
    {
      id: '2.',
      title: 'Attendance and Leave Operations',
      body: 'Attendance is not treated as a loose checkbox. The app includes admin-triggered attendance request generation, employee attendance updates, leave request submission, and status approval flows. It also stores configuration such as attendance radius and related notifications, making the system closer to a real policy-driven HR workflow.',
    },
    {
      id: '3.',
      title: 'Payroll Calculation and Review',
      body: 'Salary handling supports configurable components such as basic, DA, HRA, allowances, PF, and professional tax. Payroll runs are then surfaced through admin review tables and employee-facing payslip views so the system covers both calculation and presentation instead of stopping at raw database writes.',
    },
    {
      id: '4.',
      title: 'Secure Payouts and Role Control',
      body: 'The final layer is operational safety: NextAuth-based protected routes, password hashing, Zod validation, manager/admin checks, and Razorpay payout APIs for fund accounts and disbursement. Together they move the project from a dashboard demo into a controlled payroll execution surface.',
    },
  ],
};

export const automatedPayrollCards: LiveContextCard[] = [
  {
    title: 'Employee records',
    body: 'Core HR identity, salary, bank, and department data are modeled in one relational system.',
    icon: Building2,
  },
  {
    title: 'Attendance control',
    body: 'Attendance requests, status updates, and radius-aware settings make daily time data operationally useful.',
    icon: MapPinned,
  },
  {
    title: 'Payroll runs',
    body: 'Salary components, deductions, and payroll tables create a repeatable pay-run workflow.',
    icon: FileSpreadsheet,
  },
  {
    title: 'Payslip views',
    body: 'Employee-facing screens turn computed salary data into understandable payout summaries.',
    icon: ReceiptText,
  },
  {
    title: 'Disbursements',
    body: 'Razorpay integration links approved payroll to fund-account setup and IMPS payout execution.',
    icon: BadgeIndianRupee,
  },
  {
    title: 'Protected actions',
    body: 'NextAuth sessions, role checks, hashing, and validation help keep sensitive operations controlled.',
    icon: ShieldCheck,
  },
];

export const automatedPayrollComparisonRows: ComparisonRow[] = [
  {
    legacy: 'Employee data, attendance, and salary rules live in different places',
    conversion: 'A shared relational model connects records, policies, payroll runs, and payouts',
  },
  {
    legacy: 'Attendance is tracked manually and reconciled later',
    conversion: 'Attendance requests and employee status updates feed the payroll process directly',
  },
  {
    legacy: 'Leave approvals are separate from salary impact',
    conversion: 'Leave workflow sits inside the same system that generates payroll decisions',
  },
  {
    legacy: 'Salary calculation is a spreadsheet exercise with hidden logic',
    conversion: 'Components like PF, HRA, allowances, and tax slabs are modeled explicitly in code',
  },
  {
    legacy: 'Payout execution happens outside the payroll application',
    conversion: 'Fund accounts and salary disbursement are integrated through Razorpay APIs',
  },
  {
    legacy: 'Sensitive HR actions are hard to gate consistently',
    conversion: 'Role-aware routes and protected APIs separate employee, manager, and admin actions',
  },
];
