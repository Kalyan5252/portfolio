import Link from 'next/link';
import navLinks from '../constants/NavLinks';

const Header = () => {
  return (
    <header className="flex w-full justify-center border-b border-t border-white/8 py-4">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-5 px-5 sm:px-6 md:px-8 lg:h-10 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div className="w-full lg:w-[190px]">
          <Link
            href="/"
            className="investigation-serif text-[2.2rem] leading-none text-white sm:text-[2.6rem] lg:text-[3rem]"
          >
            Kalyan
          </Link>
        </div>

        <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[0.95rem] text-white/80 sm:text-[1rem] lg:gap-14 lg:text-[1.05rem]">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 lg:gap-14">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        <Link
          href="/#projects"
          className="w-fit rounded-xl bg-[#e8e8e8] px-4 py-2.5 text-[0.95rem] font-bold text-[#3e595c] shadow-[0_12px_24px_rgba(0,0,0,0.14)] transition hover:-translate-y-0.5 sm:px-5 sm:py-3 sm:text-[1.05rem]"
        >
          Get Resume
        </Link>
      </div>
    </header>
  );
};

export default Header;
