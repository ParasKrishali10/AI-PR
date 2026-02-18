"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GitMerge,
  ShieldBan,
  CheckCircle2,
  GitPullRequest,
  ArrowRight
} from "lucide-react";
import { cn } from "../lib/utils";

interface ActivityItemProps {
  action: "blocked" | "merged" | "approved" | "scanned";
  prTitle: string;
  repoName: string;
  user: string;
  timestamp: string;
  riskScore: number;
  delay: number;
}

export default function ActivityItem({
  action,
  prTitle,
  repoName,
  user,
  timestamp,
  riskScore,
  delay
}: ActivityItemProps) {

  // Configuration based on Action Type
  const config = {
    blocked: {
      icon: ShieldBan,
      color: "text-rose-400",
      bg: "bg-rose-500/10",
      border: "border-rose-500/20",
      line: "bg-rose-500",
      label: "Risk Blocked"
    },
    merged: {
      icon: GitMerge,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20",
      line: "bg-purple-500",
      label: "PR Merged"
    },
    approved: {
      icon: CheckCircle2,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
      line: "bg-emerald-500",
      label: "Approved"
    },
    scanned: {
      icon: GitPullRequest,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
      line: "bg-zinc-700",
      label: "Scanned"
    }
  }[action];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: delay * 0.1 }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* 1. TIMELINE LINE */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-zinc-800 ml-[15px]" />

      {/* 2. TIMELINE DOT icon */}
      <div className={cn(
        "absolute left-0 top-0 w-8 h-8 rounded-full border-[3px] border-[#020808] flex items-center justify-center z-10",
        config.bg, config.color
      )}>
        <config.icon size={14} />
      </div>

      {/* 3. CARD CONTENT */}
      <div className={cn(
        "bg-[#0a0a0a] border rounded-xl p-4 hover:bg-zinc-900/40 transition-colors group",
        config.border
      )}>
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center gap-2">
            <span className={cn("text-xs font-bold uppercase tracking-wider", config.color)}>
              {config.label}
            </span>
            <span className="text-zinc-600 text-xs">•</span>
            <span className="text-zinc-500 text-xs font-mono">{timestamp}</span>
          </div>
          <div className="flex items-center gap-1 text-xs font-medium text-zinc-500 group-hover:text-zinc-300 transition-colors cursor-pointer">
            View Log <ArrowRight size={12} />
          </div>
        </div>

        <h3 className="text-white font-semibold mb-1">{prTitle}</h3>

        <div className="flex items-center gap-3 text-sm text-zinc-400">
          <span className="flex items-center gap-1">
             <span className="w-2 h-2 rounded-full bg-zinc-700" />
             {repoName}
          </span>
          <span>by <span className="text-zinc-300">{user}</span></span>
        </div>

        {/* RISK SCORE BADGE (Only relevant for blocked/scanned) */}
        {riskScore > 0 && (
          <div className="mt-3 inline-flex items-center gap-2 px-2 py-1 bg-zinc-900 rounded border border-zinc-800">
             <span className="text-xs text-zinc-500">Risk Score:</span>
             <div className="h-1.5 w-12 bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className={cn("h-full rounded-full", riskScore > 70 ? "bg-rose-500" : "bg-teal-500")}
                  style={{ width: `${riskScore}%` }}
                />
             </div>
             <span className={cn("text-xs font-bold", riskScore > 70 ? "text-rose-400" : "text-teal-400")}>
               {riskScore}%
             </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}