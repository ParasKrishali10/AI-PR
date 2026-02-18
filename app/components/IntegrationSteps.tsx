"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Check, ShieldCheck, Zap, FileJson, Layers, Server } from "lucide-react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function IntegrationSteps() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      className={`relative w-full py-32 flex flex-col items-center bg-[#020808] overflow-hidden ${inter.className}`}
    >
      <div className="mb-24 text-center max-w-2xl px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tighter">
          Ready in <span className="text-teal-400">minutes</span>, not days.
        </h2>
        <p className="text-zinc-400 text-lg">
          No complex CI/CD pipelines to rewrite. Just install the app and protect your main branch.
        </p>
      </div>

      <div className="relative w-full max-w-4xl px-6">

        {/* VERTICAL GLOWING LINE */}
        <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-0.5 bg-zinc-800 -translate-x-1/2 z-0 hidden md:block">
           <motion.div
             style={{ height: lineHeight }}
             className="w-full bg-gradient-to-b from-blue-500 via-teal-400 to-emerald-500 shadow-[0_0_15px_rgba(45,212,191,0.6)]"
           />
        </div>

        {/* STEP 1: INSTALL */}
        <div className="relative flex flex-col md:flex-row items-center gap-8 mb-24">
          <div className="absolute left-0 md:left-1/2 w-14 h-14 bg-[#020808] border-2 border-zinc-800 rounded-full -translate-x-1/2 flex items-center justify-center z-10 shadow-xl">
             <div className="w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,1)]" />
          </div>

          <div className="w-full md:w-1/2 md:pr-16 text-left md:text-right">
            <h3 className="text-2xl font-semibold text-white mb-2 tracking-tight">Install GitHub App</h3>
            <p className="text-zinc-400 leading-relaxed">
              Grant read-access to your repository. We only read metadata and PR content—your source code is never stored.
            </p>
          </div>

          <div className="w-full md:w-1/2 md:pl-16">
             <div className="bg-[#0a0a0a] border border-zinc-800 rounded-xl p-6 shadow-2xl relative group hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                   <Github className="text-white" size={24} />
                   <span className="text-zinc-300 font-medium">PR Risk Analyzer</span>
                   <span className="ml-auto bg-blue-500/10 text-blue-400 text-xs px-2 py-1 rounded border border-blue-500/20">Official</span>
                </div>
                <button className="w-full py-2 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-colors">
                   Install on Organization
                </button>
             </div>
          </div>
        </div>

        {/* STEP 2: ZERO CONFIG (Updated) */}
        <div className="relative flex flex-col md:flex-row-reverse items-center gap-8 mb-24">
          <div className="absolute left-0 md:left-1/2 w-14 h-14 bg-[#020808] border-2 border-zinc-800 rounded-full -translate-x-1/2 flex items-center justify-center z-10 shadow-xl">
             <div className="w-3 h-3 bg-teal-400 rounded-full shadow-[0_0_10px_rgba(45,212,191,1)]" />
          </div>

          <div className="w-full md:w-1/2 md:pl-16 text-left">
            <h3 className="text-2xl font-semibold text-white mb-2 tracking-tight">Zero Configuration</h3>
            <p className="text-zinc-400 leading-relaxed">
              Don't waste time writing config files. We automatically scan your <code className="text-teal-400 bg-teal-500/10 px-1 rounded text-sm">package.json</code> and structure to understand your architecture instantly.
            </p>
          </div>

          {/* New "Auto-Detect" Visual */}
          <div className="w-full md:w-1/2 md:pr-16">
             <div className="bg-[#0a0a0a] border border-zinc-800 rounded-xl p-5 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between mb-4 border-b border-zinc-800 pb-3">
                   <div className="flex items-center gap-2">
                      <Zap size={16} className="text-teal-400" />
                      <span className="text-zinc-300 text-sm font-medium">Auto-Discovery</span>
                   </div>
                   <span className="text-xs text-zinc-500 animate-pulse">Scanning...</span>
                </div>

                <div className="space-y-3">
                   {/* Detected Item 1 */}
                   <div className="flex items-center justify-between p-2 bg-zinc-900/50 rounded-lg border border-zinc-800">
                      <div className="flex items-center gap-3">
                         <FileJson size={16} className="text-yellow-500" />
                         <span className="text-zinc-300 text-sm">TypeScript Project</span>
                      </div>
                      <Check size={16} className="text-teal-500" />
                   </div>

                   {/* Detected Item 2 */}
                   <div className="flex items-center justify-between p-2 bg-zinc-900/50 rounded-lg border border-zinc-800">
                      <div className="flex items-center gap-3">
                         <Layers size={16} className="text-blue-500" />
                         <span className="text-zinc-300 text-sm">Next.js Framework</span>
                      </div>
                      <Check size={16} className="text-teal-500" />
                   </div>

                   {/* Detected Item 3 */}
                   <div className="flex items-center justify-between p-2 bg-zinc-900/50 rounded-lg border border-zinc-800">
                      <div className="flex items-center gap-3">
                         <Server size={16} className="text-purple-500" />
                         <span className="text-zinc-300 text-sm">Prisma ORM</span>
                      </div>
                      <Check size={16} className="text-teal-500" />
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* STEP 3: PROTECT */}
        <div className="relative flex flex-col md:flex-row items-center gap-8">
          <div className="absolute left-0 md:left-1/2 w-14 h-14 bg-[#020808] border-2 border-zinc-800 rounded-full -translate-x-1/2 flex items-center justify-center z-10 shadow-xl">
             <div className="w-3 h-3 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,1)]" />
          </div>

          <div className="w-full md:w-1/2 md:pr-16 text-left md:text-right">
            <h3 className="text-2xl font-semibold text-white mb-2 tracking-tight">Merge with Confidence</h3>
            <p className="text-zinc-400 leading-relaxed">
              We automatically comment on risky PRs and can even block merging until a human admin approves.
            </p>
          </div>

          <div className="w-full md:w-1/2 md:pl-16">
             <div className="bg-[#0a0a0a] border border-zinc-800 rounded-xl p-6 shadow-2xl flex items-center gap-4 hover:border-emerald-500/30 transition-colors">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center border border-emerald-500/20">
                   <ShieldCheck className="text-emerald-400" size={24} />
                </div>
                <div>
                   <h4 className="text-white font-medium">Main Branch Protected</h4>
                   <p className="text-zinc-500 text-sm">2 checks passed</p>
                </div>
                <div className="ml-auto">
                   <Check className="text-emerald-500" size={20} />
                </div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}