"use client"
import CountUp from "react-countup"

export function SubHeading() {
  return (
    <section
      id="insights"
      className="relative w-full bg-[#0b1120] overflow-hidden px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_45%)]" />
      <div className="mx-auto max-w-6xl">
        <div className="relative z-10 rounded-3xl border border-slate-800/80 bg-slate-950/60 p-6 sm:p-10 lg:p-12 text-center text-white">
          <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 border border-sky-300/20 px-4 py-1.5 text-xs sm:text-sm text-sky-200">
            <span className="text-blue-400">✦</span>
            AI Risk Intelligence
          </div>

          <h2 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-medium leading-tight text-slate-100">
            Our AI analyzes pull requests to detect hidden risks, summarize complex changes, and help engineering teams ship secure and reliable code faster.
          </h2>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 text-left sm:text-center">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <div className="text-3xl sm:text-4xl font-semibold text-white">10K+</div>
              <div className="mt-1 text-slate-400 text-sm">Pull Requests Analyzed</div>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <div className="text-3xl sm:text-4xl font-semibold text-white">
                <CountUp end={98} duration={2} />%
              </div>
              <div className="mt-1 text-slate-400 text-sm">Risk Detection Accuracy</div>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <div className="text-3xl sm:text-4xl font-semibold text-white">
                <CountUp end={40} duration={2} />%
              </div>
              <div className="mt-1 text-slate-400 text-sm">Faster Code Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}