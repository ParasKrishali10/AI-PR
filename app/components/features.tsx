"use client";
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, BrainCircuit, Users, FileCode, Lock } from "lucide-react";

export default function Features() {
  return (
    <section className="relative w-full py-24 px-4 flex flex-col items-center">

      {/* Section Header */}
      <div className="max-w-3xl text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Deterministic Signals. <span className="text-teal-400">AI Context.</span>
        </h2>
        <p className="text-zinc-400 text-lg">
          We don't replace human reviewers. We give them the map.
        </p>
      </div>

      {/* THE BENTO GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">

        {/* Card 1: Large Wide (The Core Logic) */}
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

        {/* Card 2: Tall (The AI Brain) */}
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

          {/* Visual Mockup of an AI Comment */}
          <div className="bg-[#050505] rounded-xl p-4 border border-zinc-800 text-sm font-mono text-zinc-500">
            <span className="text-blue-400">@PR-Bot:</span> This PR modifies auth logic in <span className="text-zinc-300">middleware.ts</span> and adds 2 new dependencies.
          </div>
        </motion.div>

        {/* Card 3: Small (Human in Loop) */}
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

        {/* Card 4: Small (Audit Trail) */}
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

      </div>
    </section>
  );
}