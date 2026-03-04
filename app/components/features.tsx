"use client";
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, BrainCircuit, Users, FileCode, Lock } from "lucide-react";

export default function Features() {
  return (
    <section className="relative w-full py-24 px-4 flex flex-col items-center">

      <div className="max-w-3xl text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Deterministic Signals. <span className="text-teal-400">AI Context.</span>
        </h2>
        <p className="text-zinc-400 text-lg">
          We don't replace human reviewers. We give them the map.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-2 bg-[#0a0a0a]/60 border border-zinc-800/50 rounded-3xl p-8 hover:border-teal-500/20 transition-colors group backdrop-blur-sm"
        >
          <div className="flex justify-between items-start mb-8">
            <div className="p-3 bg-teal-500/10 rounded-xl border border-teal-500/20 group-hover:bg-teal-500/20 transition-colors">
              <ShieldCheck className="text-teal-400" size={32} />
            </div>
            <span className="px-3 py-1 text-xs font-mono text-teal-400/80 bg-teal-500/5 rounded-full border border-teal-500/10">
              100% Deterministic
            </span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Zero Hallucinations</h3>
          <p className="text-zinc-400 leading-relaxed">
            We don't use AI to guess if code is safe. We use rigid AST parsing to detect
            changes in <code className="bg-zinc-800 px-1 py-0.5 rounded text-zinc-300 text-sm">package.json</code>,
            auth middleware, and sensitive logic. If we flag it, it changed.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="md:row-span-2 bg-[#0a0a0a]/60 border border-zinc-800/50 rounded-3xl p-8 hover:border-blue-500/20 transition-colors group backdrop-blur-sm flex flex-col justify-between"
        >
          <div>
            <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20 mb-8 w-fit group-hover:bg-blue-500/20 transition-colors">
              <BrainCircuit className="text-blue-400" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">AI for Explanation</h3>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Raw signals are confusing. We feed the diff and the detected risks into Gemini
              to generate a human-readable summary.
            </p>
          </div>
          <div className="bg-[#050505] rounded-xl p-4 border border-zinc-800 text-sm font-mono text-zinc-500">
            <span className="text-blue-400">@PR-Bot:</span> This PR modifies auth logic in <span className="text-zinc-300">middleware.ts</span> and adds 2 new dependencies.
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-[#0a0a0a]/60 border border-zinc-800/50 rounded-3xl p-8 hover:border-purple-500/20 transition-colors group backdrop-blur-sm"
        >
          <Users className="text-purple-400 mb-6" size={32} />
          <h3 className="text-xl font-bold text-white mb-2">Advisory Only</h3>
          <p className="text-zinc-500 text-sm">
            We never block PRs. We flag them so humans know where to look.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-[#0a0a0a]/60 border border-zinc-800/50 rounded-3xl p-8 hover:border-orange-500/20 transition-colors group backdrop-blur-sm"
        >
          <FileCode className="text-orange-400 mb-6" size={32} />
          <h3 className="text-xl font-bold text-white mb-2">Full Audit History</h3>
          <p className="text-zinc-500 text-sm">
            Every signal is persisted to PostgreSQL for compliance and review.
          </p>
        </motion.div>
    <div className="container">
  <div className="card">
    <div className="front">
      <p className="front-heading">
           <FileCode className="text-orange-400 mb-6" size={32} />
          <h3 className="text-xl font-bold text-white mb-2">Full Audit History</h3>
        </p>
    </div>
    <div className="back">
      <p className="back-heading">Back card</p>
     <p className="text-zinc-500 text-sm">
            Every signal is persisted to PostgreSQL for compliance and review.
          </p>
    </div>
  </div>
</div>
    <div className="container">
  <div className="card">
    <div className="front">
      <p className="front-heading">
           <FileCode className="text-orange-400 mb-6" size={32} />
          <h3 className="text-xl font-bold text-white mb-2">Full Audit History</h3>
        </p>
    </div>
    <div className="back">
      <p className="back-heading">Back card</p>
     <p className="text-zinc-500 text-sm">
            Every signal is persisted to PostgreSQL for compliance and review.
          </p>
    </div>
  </div>
</div>
<div className="group h-72 w-64 [perspective:1000px]">
  <div className="relative h-full w-full rounded-2xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

    <div className="absolute inset-0 h-full w-full rounded-2xl bg-zinc-900 p-6 [backface-visibility:hidden]">
      <div className="flex flex-col h-full">
        <FileCode className="text-orange-400 mb-6" size={32} />
        <h3 className="text-xl font-bold text-white mb-2">Full Audit History</h3>
        <p className="text-zinc-400 text-sm mt-auto">Hover to learn more</p>
      </div>
    </div>

    <div className="absolute inset-0 h-full w-full rounded-2xl bg-gradient-to-br from-green-400 to-blue-600 p-6 [transform:rotateY(180deg)] [backface-visibility:hidden]">
      <div className="flex flex-col h-full justify-center text-center">
        <h3 className="text-xl font-bold text-white mb-4">How it works</h3>
        <p className="text-white/90 text-sm leading-relaxed">
          Every signal is persisted to PostgreSQL for compliance and review.
        </p>
      </div>
    </div>

  </div>
</div>

      </div>
    </section>
  );
}