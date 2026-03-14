"use client"
import CountUp from "react-countup"
export async function SubHeading() {
  return (
    <section className="relative w-full bg: #0a0a0a flex flex-col items-center justify-center overflow-hidden py-24 mt-[100px]">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:30px_30px] opacity-[0.1] [mask-image:radial-gradient(ellipse_at_top,white,transparent_70%)] "></div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-[100%] border-t border-slate-300/60 bg-gradient-to-b from-slate-800/40 to-transparent [mask-image:radial-gradient(ellipse_at_top,white,transparent_70%)] ">
        <div className="absolute inset-0 rounded-[100%] shadow-[inset_0_50px_100px_-20px_rgba(148,163,184,0.2)]"></div>
      </div>

      <div className="relative z-10 max-w-5xl px-4 text-center mt-12 text-white">

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
bg-[#0f1f2a] text-white
border border-slate-700
shadow-[0_0_20px_rgba(120,160,255,0.4)]
backdrop-blur-md text-sm mb-8">

  <span className="text-blue-400">✦</span>
  AI Risk Intelligence
</div>

        <h2 className="text-3xl md:text-5xl font-medium leading-tight mb-16 text-slate-200">
          Our AI analyzes pull requests to detect hidden risks, summarize<span className="text-slate-500"> complex changes, and help engineering teams ship secure and reliable code faster.</span>
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 text-center border-t border-slate-800/80 pt-10">
          <div>
            <div className="text-4xl font-semibold mb-2">
                 10K+
              </div>
            <div className="text-slate-500 text-sm font-medium">Pull Requests Analyzed</div>
          </div>
          <div className="hidden md:block w-px h-16 bg-slate-800/80"></div>
          <div>
            <div className="text-4xl font-semibold mb-2">
              <CountUp end={98} duration={2}/>%
              </div>
            <div className="text-slate-500 text-sm font-medium">Risk Detection Accuracy</div>
          </div>
          <div className="hidden md:block w-px h-16 bg-slate-800/80"></div>
          <div>
            <div className="text-4xl font-semibold mb-2">
              <CountUp end={40} duration={2}/>%</div>
            <div className="text-slate-500 text-sm font-medium">Faster Code Reviews</div>
          </div>
        </div>

      </div>
    </section>
  );
}