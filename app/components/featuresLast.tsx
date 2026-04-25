import { Cardf } from "./Cardf";

export function FeaturesLast() {
  return (
    <section id="features" className="bg-[#0b1120] px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <p className="inline-flex items-center rounded-full border border-slate-700/80 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-slate-300">
            Why teams choose this
          </p>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
            Eliminate Manual Guesswork in Code Reviews
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Structured PR intelligence designed to help reviewers prioritize risky changes fast.
          </p>
        </div>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          <Cardf
            top="Risk Signals"
            center="Detect authentication, permission, and security-sensitive changes in pull requests automatically."
            bottom="AI Security Analysis"
          />
          <Cardf
            top="PR Summary"
            center="Generate concise AI summaries so reviewers understand large changes quickly."
            bottom="LLM Powered"
          />
          <Cardf
            top="GitHub Webhooks"
            center="Analyze pull requests in real time with event-driven processing across repositories."
            bottom="Real-Time Analysis"
          />
          <Cardf
            top="Risk Scoring"
            center="Score each PR based on file sensitivity, complexity, and security-critical code paths."
            bottom="Smart Signal Engine"
          />
        </div>
      </div>
    </section>
  );
}