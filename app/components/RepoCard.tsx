"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GitBranch,
  MoreHorizontal,
  Activity,
  PauseCircle,
  PlayCircle,
  Code2,
  ChevronDown
} from "lucide-react";
import { cn } from "../lib/utils";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["500", "700"] });

interface RepoCardProps {
  name: string;
  url: string;
  language: "TypeScript" | "Python" | "Go" | "Rust";
  status: "active" | "paused";
  riskCount: number;
  lastScan: string;
}

export default function RepoCard({
  name,
  url,
  language,
  status: initialStatus,
  riskCount,
  lastScan
}: RepoCardProps) {
  const [status, setStatus] = useState(initialStatus);
  const [isHovered, setIsHovered] = useState(false);
  const isActive = status === "active";

  const langConfig = {
    TypeScript: { color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    Python: { color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
    Go: { color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
    Rust: { color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/20" },
  }[language];

  return (
    <motion.div
      className="relative w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={false}
    >
      {/* 1. THE "HEAD" CARD (Always Visible - z-index 20) */}
      <div
        className={cn(
          "relative z-20 w-full bg-[#0c0c0c] border rounded-2xl p-5 transition-all duration-400 ease-in-out",
          // When hovered, flatten bottom corners so it connects to the card below
          isHovered ? "rounded-b-none border-teal-500/50 shadow-[0_0_30px_rgba(45,212,191,0.2)]" : "border-zinc-800",
          !isActive && "opacity-70 grayscale"
        )}
      >
         {/* Top Glow */}
         <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 via-transparent to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />

         <div className="relative z-10 flex justify-between items-center">
            <div className="flex gap-4 items-center">
               <div className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300",
                  isActive
                     ? "bg-zinc-900 border-zinc-800 text-zinc-300"
                     : "bg-zinc-950 border-zinc-900 text-zinc-700",
                  isHovered && isActive && "bg-teal-500/10 border-teal-500/30 text-teal-400"
               )}>
                  <GitBranch size={20} />
               </div>

               <div>
                  <h3 className={cn("text-xl font-bold text-white tracking-tight leading-none", spaceGrotesk.className)}>
                     {name}
                  </h3>
                  <p className="text-xs text-zinc-500 mt-1 font-mono">{url.replace('github.com/', '')}</p>
               </div>
            </div>

            {/* Visual indicator that card expands */}
            <motion.div
               animate={{ rotate: isHovered ? 180 : 0 }}
               className="text-zinc-600"
            >
               <ChevronDown size={20} />
            </motion.div>
         </div>
      </div>

      {/* 2. THE "BODY" CARD (Slides out - z-index 10) */}
      <motion.div
        layout
        initial={{ height: 0, opacity: 0 }}
        animate={{
           height: isHovered ? "auto" : 0,
           opacity: isHovered ? 1 : 0,
           y: isHovered ? 0 : -20 // Slight vertical slide for "drawer" effect
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }} // Matches your CSS .4s ease-in-out
        className="relative z-10 w-full bg-[#111] border-x border-b border-zinc-800 rounded-b-2xl overflow-hidden -mt-[1px]"
      >
         <div className="p-5 pt-6 space-y-5">

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-3">
               <div className="px-3 py-2 bg-zinc-900/50 rounded-lg border border-zinc-800/50">
                  <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-wider block mb-1">Risk Events</span>
                  <div className="flex items-center gap-2">
                     <span className={cn("text-xl font-bold leading-none", riskCount > 0 ? "text-rose-400" : "text-zinc-300", spaceGrotesk.className)}>
                        {riskCount}
                     </span>
                     {riskCount > 0 && <Activity size={12} className="text-rose-500 animate-pulse" />}
                  </div>
               </div>

               <div className="px-3 py-2 bg-zinc-900/50 rounded-lg border border-zinc-800/50 flex flex-col justify-between">
                  <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-wider block mb-1">Stack</span>
                  <div className={cn("self-start px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1.5 border", langConfig)}>
                     <Code2 size={10} />
                     {language}
                  </div>
               </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-2 border-t border-zinc-800/50">
               <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    {isActive && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>}
                    <span className={cn("relative inline-flex rounded-full h-2 w-2", isActive ? "bg-teal-500" : "bg-zinc-700")}></span>
                  </span>
                  <span className="text-xs text-zinc-500 font-medium">
                     {isActive ? lastScan : "Paused"}
                  </span>
               </div>

               <button
                  onClick={(e) => {
                     e.stopPropagation();
                     setStatus(isActive ? "paused" : "active");
                  }}
                  className={cn(
                    "px-4 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all",
                    isActive
                      ? "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white"
                      : "bg-teal-500/10 text-teal-400 border border-teal-500/20 hover:bg-teal-500/20"
                  )}
               >
                  {isActive ? <PauseCircle size={14} /> : <PlayCircle size={14} />}
                  {isActive ? "Pause" : "Resume"}
               </button>
            </div>
         </div>
      </motion.div>
    </motion.div>
  );
}