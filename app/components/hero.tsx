"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { ShieldAlert, Zap, Lock, Eye } from "lucide-react";

// Staggered entrance variants for the "one-by-one" look
const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  },
};

export default function PRRiskHero() {
  const riskSignals = [
    { title: "Dependency Risk", desc: "Monitor package.json & lockfiles", icon: <Zap size={18} className="text-teal-400" /> },
    { title: "Auth & Access", desc: "Detect middleware & policy changes", icon: <Lock size={18} className="text-blue-400" /> },
    { title: "Suspicious Code", desc: "Signal eval() or shell execution", icon: <ShieldAlert size={18} className="text-pink-400" /> },
  ];

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#000000] overflow-hidden">

      {/* THE FIX: The Teal Spotlight Layer */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-teal-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="spotlight-background" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl"
      >
        {/* 1. Main Heading */}
        <motion.h1
          variants={item}
          className="text-[48px] md:text-[86px] font-bold tracking-tight text-white leading-[1.05] mb-6"
        >
          AI-Assisted <br />
          PR Risk Signals
        </motion.h1>

        {/* 2. Subheading */}
        <motion.p
          variants={item}
          className="text-zinc-400 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-14"
        >
          Rules for facts. AI for explanation. Humans for judgment. <br />
          Early risk signals to help reviewers decide where to look first.
        </motion.p>

        {/* 3. The Search Bar with Glass Effect to catch the spotlight */}
        <motion.div variants={item} className="w-full max-w-2xl mb-16">
          <div className="bg-[#0f0f0f]/60 border border-zinc-800/60 rounded-2xl px-6 py-5 flex justify-between items-center backdrop-blur-xl group hover:border-teal-500/20 transition-all">
            <div className="flex items-center gap-3">
              <Eye size={20} className="text-zinc-600 group-hover:text-teal-400 transition-colors" />
              <span className="text-zinc-600 font-medium">Analyze a Pull Request...</span>
            </div>
            <div className="text-zinc-700 font-mono text-sm tracking-widest">⌘ K</div>
          </div>
        </motion.div>

        {/* 4. The Signal Cards */}
        <motion.div variants={item} className="flex flex-wrap justify-center gap-4 w-full">
          {riskSignals.map((signal) => (
            <div
              key={signal.title}
              className="bg-[#0f0f0f]/40 border border-zinc-800/40 rounded-3xl p-6 flex flex-col items-start gap-1 hover:bg-zinc-800/40 transition-all min-w-[260px] text-left group"
            >
              <div className="flex items-center gap-3 mb-1">
                 <div className="p-2 bg-zinc-900 rounded-lg border border-zinc-800 group-hover:border-teal-500/20">
                    {signal.icon}
                 </div>
                 <span className="text-white font-bold text-lg tracking-tight">{signal.title}</span>
              </div>
              <span className="text-zinc-500 text-sm">{signal.desc}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}