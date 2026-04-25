interface CardProps {
  top: string;
  center: string;
  bottom: string;
}

export function Cardf({ top, center, bottom }: CardProps) {
  return (
    <article className="group relative w-full h-full rounded-2xl border border-slate-800/80 bg-slate-950/70 p-6 sm:p-7 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:shadow-[0_20px_45px_-20px_rgba(56,189,248,0.35)]">
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.15),transparent_50%)]" />
      <div className="relative">
        <p className="inline-flex text-[11px] sm:text-xs tracking-[0.2em] uppercase font-semibold text-sky-200/80 rounded-full border border-sky-300/25 px-3 py-1 bg-sky-500/10">
          {top}
        </p>
        <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-300">{center}</p>
        <div className="mt-7 pt-4 border-t border-slate-800/80">
          <span className="text-[11px] sm:text-xs tracking-[0.18em] uppercase text-slate-500 font-medium">
            {bottom}
          </span>
        </div>
      </div>
    </article>
  );
}