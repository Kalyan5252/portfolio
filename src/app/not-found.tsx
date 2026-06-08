import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#050b10] px-6 py-16 text-white">
      <div className="mx-auto flex max-w-3xl flex-col items-start gap-6">
        <p className="text-sm uppercase tracking-[0.3em] text-white/45">
          Not Found
        </p>
        <h1 className="text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">
          This page does not exist.
        </h1>
        <p className="max-w-xl text-base leading-8 text-white/68">
          The link may be outdated, or the page may have moved while the
          portfolio was being updated.
        </p>
        <Link
          href="/"
          className="rounded-full border border-white/12 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/24 hover:bg-white/5"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
