import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowUpRight,
  GitBranch,
  Mail,
  MapPin,
  Sparkles,
  Workflow,
} from 'lucide-react';

const contactPills = [
  {
    label: 'Kalyan Pendem',
    icon: 'avatar' as const,
    href: 'https://www.linkedin.com/in/kalyanpendem/',
  },
  {
    label: 'kalyanpendem007@gmail.com',
    icon: Mail,
    href: 'mailto:kalyanpendem007@gmail.com?subject=Project%20Inquiry',
  },
  {
    label: 'GitHub / Kalyan5252',
    icon: GitBranch,
    href: 'https://github.com/Kalyan5252',
  },
  {
    label: 'Backend + AI Systems',
    icon: Workflow,
    href: '/#projects',
  },
];

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#04080a] px-6 pt-12 text-white md:px-10 lg:px-14"
    >
      <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#04080a_0%,#061018_38%,#04080a_100%)]" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_0%,rgba(123,235,197,0.14),transparent_26%),radial-gradient(circle_at_15%_24%,rgba(131,191,255,0.12),transparent_24%),radial-gradient(circle_at_86%_18%,rgba(217,246,255,0.09),transparent_22%),radial-gradient(circle_at_50%_100%,rgba(71,133,170,0.14),transparent_28%)]" />
      <div className="absolute inset-0 -z-10 opacity-30 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[length:110px_110px] [mask-image:radial-gradient(circle_at_center,white_18%,transparent_78%)]" />

      <div className="contact-aurora-shell relative mx-auto max-w-[1280px] rounded-[2rem] border border-white/8 border-b-0 px-5 py-6 shadow-[0_32px_90px_rgba(0,0,0,0.45)] sm:px-7 sm:py-7 lg:px-10 lg:py-10">
        <div className="contact-aurora-panel relative overflow-hidden rounded-[1.7rem] border border-white/10 border-b-0 px-6 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
          <div className="contact-mist contact-mist--top-left" />
          <div className="contact-mist contact-mist--top-right" />
          <div className="contact-mist contact-mist--bottom-left" />
          <div className="contact-mist contact-mist--bottom-right" />
          <div className="contact-mist contact-mist--center" />

          <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-[0.72rem] font-medium tracking-[0.08em] text-white/84 shadow-[0_10px_30px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:text-[0.78rem]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#7bf0bc] shadow-[0_0_16px_rgba(123,240,188,0.95)]" />
              Available for your next build
            </div>

            <h2 className="mt-8 max-w-4xl text-[2.45rem] font-black uppercase leading-[0.95] tracking-[-0.045em] text-white sm:text-[3.2rem] lg:text-[4.7rem]">
              Have a project in mind?
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/68 sm:text-[1.02rem] sm:leading-8">
              Let&apos;s shape it into a clean, high-impact product with strong
              backend architecture, thoughtful UX, and execution that actually
              ships.
            </p>

            <div className="mt-9">
              <Link
                href="mailto:kalyanpendem007@gmail.com?subject=Project%20Inquiry"
                className="group inline-flex items-center gap-3 rounded-full border border-white/14 bg-[#0b0f13] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(0,0,0,0.45)] transition duration-300 hover:-translate-y-1 hover:border-[#7bf0bc]/40 hover:bg-[#10171c] sm:px-7 sm:text-[0.96rem]"
              >
                Contact Me
                <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-3 sm:mt-16 sm:gap-4">
              {contactPills.map((pill) => {
                const icon =
                  pill.icon === 'avatar' ? (
                    <span className="relative h-7 w-7 overflow-hidden rounded-full border border-white/12 bg-white/10">
                      <Image
                        src="/people/dp.png"
                        alt="Kalyan portrait"
                        fill
                        sizes="28px"
                        className="object-cover"
                      />
                    </span>
                  ) : (
                    <pill.icon className="h-4 w-4 text-white/70" />
                  );

                return (
                  <Link
                    key={pill.label}
                    href={pill.href}
                    target={pill.href.startsWith('http') ? '_blank' : undefined}
                    rel={
                      pill.href.startsWith('http')
                        ? 'noreferrer noopener'
                        : undefined
                    }
                    className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/7 px-4 py-3 text-sm text-white/86 shadow-[0_12px_28px_rgba(0,0,0,0.18)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
                  >
                    {icon}
                    <span>{pill.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
