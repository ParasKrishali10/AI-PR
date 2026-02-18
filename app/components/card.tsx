"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Zap,
  ShieldAlert,
  ChevronDown,
  Activity,
  GitPullRequest
} from "lucide-react";
import { cn } from "../lib/utils";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface AdvancedRiskCardProps {
  title?: string;
  repo?: string;
  riskScore?: number;
  status?: "Critical" | "Warning" | "Safe";
  author?: string;
  aiSummary?: string;
}

export default function AdvancedRiskCard({
  title = "Refactor Auth Middleware",
  repo = "auth-service",
  riskScore = 78,
  status = "Critical",
  author = "alice.dev",
  aiSummary = "The modification to verifySession() bypasses the previous rate-limit check. Combined with the new dependency, this increases the risk of session hijacking."
}: AdvancedRiskCardProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  // Status-based coloring
  const statusConfig = {
    Critical: {
      color: "text-rose-400",
      barColor: "bg-rose-500", // Explicit bar color
      bg: "bg-rose-500/10",
      border: "border-rose-500/20",
      glow: "from-rose-500/80 via-rose-500/20 to-teal-500/80",
      badge: "bg-rose-500 text-white shadow-[0_0_15px_rgba(244,63,94,0.4)]"
    },
    Warning: {
      color: "text-yellow-400",
      barColor: "bg-yellow-500",
      bg: "bg-yellow-500/10",
      border: "border-yellow-500/20",
      glow: "from-yellow-500/80 via-transparent to-teal-500/80",
      badge: "bg-yellow-500 text-black"
    },
    Safe: {
      color: "text-teal-400",
      barColor: "bg-teal-500",
      bg: "bg-teal-500/10",
      border: "border-teal-500/20",
      glow: "from-teal-500/80 via-transparent to-blue-500/80",
      badge: "bg-teal-500 text-white"
    }
  };

  const config = statusConfig[status];

  return (
    <div className={`relative group w-full max-w-md ${inter.className}`}>

      {/* 1. THE NEON GLOW BACKGROUND */}
      <div
        className={cn(
          "absolute -inset-0.5 rounded-[32px] bg-gradient-to-br opacity-50 blur-lg transition-all duration-500 group-hover:opacity-100 group-hover:blur-xl",
          config.glow
        )}
      />

      {/* 2. THE MAIN CARD CONTAINER */}
      <div className="relative w-full bg-[#080808] rounded-[30px] border border-white/10 p-6 shadow-2xl overflow-hidden">

        {/* Subtle Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>

        {/* --- HEADER SECTION --- */}
        <div className="relative z-10 flex justify-between items-start mb-6">
          <div className="space-y-1">
             <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-widest">
                <span>{repo}</span>
                <span className="w-1 h-1 rounded-full bg-zinc-600" />
                <span>{author}</span>
             </div>
             <h3 className="text-xl font-bold text-white tracking-tight leading-tight max-w-[200px]">
               {title}
             </h3>
          </div>

          {/* Glowing Status Badge */}
          <div className={cn(
            "px-3 py-1.5 rounded-full flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider",
            config.badge
          )}>
            <ShieldAlert size={12} fill="currentColor" />
            {status} Risk
          </div>
        </div>

        {/* --- METRICS SECTION (The Progress Bar Update) --- */}
        <div className="relative z-10 mb-8 space-y-3">
           <div className="flex justify-between items-end">
              <span className="text-zinc-400 text-xs font-medium">AI Risk Probability</span>
              <span className={cn("text-2xl font-bold tabular-nums", config.color)}>
                 {riskScore}%
              </span>
           </div>

           {/* THE ANIMATED FILLING BAR */}
           {/* Increased height to h-3 for better visibility */}
           <div className="h-3 w-full bg-zinc-900 rounded-full overflow-hidden border border-zinc-800 p-[2px]">
              <motion.div
                 // Start at width 0
                 initial={{ width: 0 }}
                 // Animate to full width when in view
                 whileInView={{ width: `${riskScore}%` }}
                 // 'once: true' ensures it doesn't reset every time you scroll
                 viewport={{ once: true }}
                 // Duration 1.5s makes it a slow, deliberate fill
                 transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                 className={cn("h-full rounded-full shadow-[0_0_12px_currentColor]", config.barColor)}
              />
           </div>
        </div>

        {/* --- FILES & ICONS ROW --- */}
        <div className="relative z-10 flex items-center justify-between mb-8 pb-8 border-b border-zinc-800/50">
           <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 shadow-[0_0_15px_rgba(45,212,191,0.2)]">
                 <Zap size={18} />
              </div>
              <div className="flex -space-x-3">
                 {[1,2,3].map((_, i) => (
                    <div key={i} className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 hover:-translate-y-1 hover:text-white transition-transform cursor-pointer">
                       <FileText size={16} />
                    </div>
                 ))}
              </div>
           </div>

           <div className="flex items-center gap-2">
              <span className="text-zinc-500 text-xs font-mono">+2 files</span>
              <div className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400">
                 <GitPullRequest size={14} />
              </div>
           </div>
        </div>

        {/* --- AI ANALYSIS FOOTER --- */}
        <div className="relative z-10">
           <div className="flex items-center gap-2 mb-3">
              <Activity size={14} className="text-zinc-500" />
              <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">AI Context Analysis</span>
           </div>

           <p className="text-sm text-zinc-300 leading-relaxed opacity-90 font-medium">
             {aiSummary}
           </p>

           <button
             onClick={() => setIsExpanded(!isExpanded)}
             className="mt-4 w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-xs font-bold text-white transition-colors flex items-center justify-center gap-2 group/btn"
           >
             View Full Report
             <ChevronDown size={14} className="group-hover/btn:translate-y-0.5 transition-transform" />
           </button>
        </div>

      </div>
    </div>
  );
}