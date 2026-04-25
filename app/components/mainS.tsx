"use client"
import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { signIn } from "next-auth/react";

const handleConnect = async () => {
  try {
    window.location.href = "https://github.com/apps/AI-PR-RISK/installations/new";
  } catch (error) {
    console.log(error);
  }
};

export default function MainS() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0b1120] px-4 sm:px-6 lg:px-8 pt-14 sm:pt-16 pb-16 sm:pb-20 lg:pb-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.16),transparent_48%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#33415514_1px,transparent_1px),linear-gradient(to_bottom,#33415514_1px,transparent_1px)] bg-[size:52px_52px]" />

      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-left"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/25 bg-sky-500/10 px-3.5 py-1.5 text-xs sm:text-sm text-sky-100">
              <Sparkles className="size-4 text-sky-300" />
              AI PR Risk Intelligence
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.65, delay: 0.08, ease: "easeOut" }}
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight"
            >
              Ship PRs with confidence, not guesswork.
            </motion.h1>

            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              Detect risky changes early, generate actionable AI review comments, and keep your team focused on what matters most.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3">
              <button
                onClick={() => signIn("github")}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm sm:text-base font-semibold text-slate-900 transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-12px_rgba(255,255,255,0.7)]"
              >
                Connect GitHub
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <button
                onClick={handleConnect}
                className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 px-6 py-3 text-sm sm:text-base font-medium text-slate-100 transition-colors hover:bg-slate-800"
              >
                Install App
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-r from-sky-500/30 to-cyan-500/15 blur-2xl" />
            <div className="overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/70 shadow-2xl">
              <Image
                src="/PR.png"
                alt="AI PR analyzer dashboard preview"
                width={1200}
                height={720}
                className="h-auto w-full"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}