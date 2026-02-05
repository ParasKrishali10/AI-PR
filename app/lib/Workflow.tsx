"use client";

import React, { useRef, useState, useEffect } from "react";
import { GitCommit, FileCode, AlertTriangle, CheckCircle2, Search, Database, Server } from "lucide-react";
import { motion } from "framer-motion";

export default function RiskAnalysisConnection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftDotRef = useRef<HTMLDivElement>(null);
  const rightDotRef = useRef<HTMLDivElement>(null);
  const [svgPath, setSvgPath] = useState("");

  // 1. Calculate the S-Curve path between the two dots
  useEffect(() => {
    const updatePath = () => {
      if (containerRef.current && leftDotRef.current && rightDotRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const leftRect = leftDotRef.current.getBoundingClientRect();
        const rightRect = rightDotRef.current.getBoundingClientRect();

        // Calculate center points relative to the container
        const startX = leftRect.left - containerRect.left + leftRect.width / 2;
        const startY = leftRect.top - containerRect.top + leftRect.height / 2;
        const endX = rightRect.left - containerRect.left + rightRect.width / 2;
        const endY = rightRect.top - containerRect.top + rightRect.height / 2;

        // Create smooth S-curve
        const controlX = (startX + endX) / 2;
        const controlY = startY;

        // This SVG path command draws a curve from Start to End
        const d = `M ${startX},${startY} C ${controlX},${startY} ${controlX},${endY} ${endX},${endY}`;
        setSvgPath(d);
      }
    };

    // Delay calculation slightly to ensure layout is ready
    const timer = setTimeout(updatePath, 500);
    window.addEventListener("resize", updatePath);
    return () => {
        window.removeEventListener("resize", updatePath);
        clearTimeout(timer);
    }
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-24 flex flex-col items-center justify-center bg-[#020808] overflow-hidden"
    >
      <div className="mb-12 text-center max-w-2xl relative z-20">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          From <span className="text-blue-400">Signal</span> to <span className="text-teal-400">Context</span>
        </h2>
        <p className="text-zinc-500 text-lg">
          See how raw PR changes are mapped to human-readable risk assessments.
        </p>
      </div>

      <div className="relative flex flex-col md:flex-row items-stretch justify-center w-full max-w-7xl gap-12 md:gap-32 p-10 z-10">

        {/* LEFT CARD: Raw Signals */}
        <div className="flex-1 relative flex flex-col gap-8 bg-[#0a0a0a] border border-zinc-800 rounded-3xl p-8 shadow-2xl">
          <div className="flex items-center gap-4 mb-2 border-b border-zinc-800 pb-6">
            <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
              <GitCommit className="text-blue-400" size={24} />
            </div>
            <div>
               <h3 className="text-xl font-bold text-white">Detected Signals</h3>
               <p className="text-zinc-500 text-sm">4 files changed • 2 risk indicators</p>
            </div>
          </div>

          <div className="flex flex-col gap-6 relative">
            {/* The LEFT DOT - Source of the line (Attached to the 2nd item) */}
            <div
              ref={leftDotRef}
              className="absolute -right-[42px] top-[125px] w-4 h-4 bg-blue-500 border-2 border-white rounded-full z-50 shadow-[0_0_15px_rgba(59,130,246,1)]"
            />

            {/* Item 1 */}
            <div className="flex items-start gap-4 p-2 rounded-xl hover:bg-zinc-900/30 transition-colors">
               <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                 <Search size={14} className="text-blue-400" />
               </div>
               <div>
                 <p className="text-white font-medium">Modified <code className="text-blue-300 bg-blue-900/20 px-1 py-0.5 rounded text-xs">package.json</code></p>
                 <p className="text-zinc-500 text-sm">Dependency `axios` updated to v1.6.0</p>
               </div>
            </div>

            {/* Item 2 (The Connected One) */}
            <div className="flex items-start gap-4 p-4 bg-zinc-900/50 rounded-xl border border-blue-500/30 shadow-lg">
               <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500 flex items-center justify-center">
                 <AlertTriangle size={14} className="text-blue-400" />
               </div>
               <div>
                 <p className="text-white font-medium">Modified <code className="text-blue-300 bg-blue-900/20 px-1 py-0.5 rounded text-xs">auth.ts</code></p>
                 <p className="text-zinc-500 text-sm">Changed logic in `verifySession()` middleware</p>
               </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start gap-4 p-2 rounded-xl hover:bg-zinc-900/30 transition-colors">
               <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                 <Database size={14} className="text-blue-400" />
               </div>
               <div>
                 <p className="text-white font-medium">Modified <code className="text-blue-300 bg-blue-900/20 px-1 py-0.5 rounded text-xs">schema.prisma</code></p>
                 <p className="text-zinc-500 text-sm">New index added to `User` table</p>
               </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-start gap-4 p-2 rounded-xl hover:bg-zinc-900/30 transition-colors">
               <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                 <FileCode size={14} className="text-blue-400" />
               </div>
               <div>
                 <p className="text-white font-medium">Added <code className="text-blue-300 bg-blue-900/20 px-1 py-0.5 rounded text-xs">utils/eval.js</code></p>
                 <p className="text-zinc-500 text-sm">New file with dynamic execution</p>
               </div>
            </div>
          </div>
        </div>

        {/* RIGHT CARD: AI Assessment */}
        <div className="flex-1 relative flex flex-col gap-8 bg-[#0a0a0a] border border-zinc-800 rounded-3xl p-8 shadow-2xl">
          <div className="flex items-center gap-4 mb-2 border-b border-zinc-800 pb-6">
            <div className="p-3 bg-teal-500/10 rounded-xl border border-teal-500/20">
              <CheckCircle2 className="text-teal-400" size={24} />
            </div>
            <div>
               <h3 className="text-xl font-bold text-white">AI Risk Assessment</h3>
               <p className="text-zinc-500 text-sm">Gemini 1.5 Pro Analysis</p>
            </div>
          </div>

          <div className="flex flex-col gap-6 relative h-full">
             {/* The RIGHT DOT - Destination of the line (Attached to 1st Analysis) */}
             <div
                ref={rightDotRef}
                className="absolute -left-[42px] top-[100px] w-4 h-4 bg-teal-400 border-2 border-white rounded-full z-50 shadow-[0_0_15px_rgba(45,212,191,1)]"
              />

            <div className="flex items-center gap-2 text-zinc-500 text-sm mb-2">
               <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                </span>
               Analyzing cross-file context...
            </div>

            {/* Analysis 1 (High Risk - Connected) */}
            <div className="p-6 bg-teal-950/20 border border-teal-500/30 rounded-2xl">
              <div className="flex justify-between items-start mb-3">
                 <h4 className="text-teal-300 font-bold text-md">Critical Auth Logic Change</h4>
                 <span className="px-2 py-1 bg-teal-500/20 text-teal-400 text-[10px] uppercase tracking-wide font-bold rounded border border-teal-500/20">High Severity</span>
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed">
                The modification to <code className="text-white bg-white/10 px-1 rounded">verifySession()</code> bypasses the previous rate-limit check. Combined with the new dependency, this increases the risk of session hijacking.
              </p>
            </div>

            {/* Analysis 2 (Medium Risk) */}
            <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
              <div className="flex justify-between items-start mb-3">
                 <h4 className="text-white font-bold text-md">Database Lock Risk</h4>
                 <span className="px-2 py-1 bg-yellow-500/10 text-yellow-500 text-[10px] uppercase tracking-wide font-bold rounded border border-yellow-500/20">Medium</span>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Adding an index to the `User` table on a production database may cause downtime. Consider using `CONCURRENTLY`.
              </p>
            </div>

             {/* Footer Info */}
            <div className="mt-auto pt-4 border-t border-zinc-800 flex items-center justify-between text-zinc-600 text-xs">
                <div className="flex items-center gap-2">
                    <Server size={14} />
                    <span>Server Impact: Low</span>
                </div>
                <span>Confidence: 98%</span>
            </div>
          </div>
        </div>
      </div>

      {/* THE DRAWING BEAM SVG */}
      <svg className="absolute inset-0 pointer-events-none w-full h-full z-0">
        {svgPath && (
          <>
            {/* 1. The Faint Background Path */}
            <path
              d={svgPath}
              stroke="#1e293b"
              strokeWidth="2"
              fill="none"
            />
            {/* 2. The Animated Drawing Path */}
            <motion.path
              d={svgPath}
              stroke="url(#gradient-beam)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }} // Ensures it stays permanently after drawing
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="gradient-beam" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" /> {/* Blue start */}
                <stop offset="100%" stopColor="#2dd4bf" /> {/* Teal end */}
              </linearGradient>
            </defs>
          </>
        )}
      </svg>

    </section>
  );
}