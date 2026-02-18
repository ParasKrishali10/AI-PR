"use client";

import React, { useRef, useState, useEffect } from "react";
import { GitCommit, FileCode, AlertTriangle, CheckCircle2, Search, Database, Server, Activity } from "lucide-react";
import { motion } from "framer-motion";
// 1. Import the specific "SaaS" font
import { Inter } from "next/font/google";

// 2. Configure the font
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"], // Load light and medium weights for "smoothness"
});

export default function RiskAnalysisConnection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftDotRef = useRef<HTMLDivElement>(null);
  const rightDotRef = useRef<HTMLDivElement>(null);
  const [svgPath, setSvgPath] = useState("");

  // Path Calculation Logic
  useEffect(() => {
    const updatePath = () => {
      if (containerRef.current && leftDotRef.current && rightDotRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const leftRect = leftDotRef.current.getBoundingClientRect();
        const rightRect = rightDotRef.current.getBoundingClientRect();

        const startX = leftRect.left - containerRect.left + leftRect.width / 2;
        const startY = leftRect.top - containerRect.top + leftRect.height / 2;
        const endX = rightRect.left - containerRect.left + rightRect.width / 2;
        const endY = rightRect.top - containerRect.top + rightRect.height / 2;

        const controlX = (startX + endX) / 2;
        const controlY = startY;

        const d = `M ${startX},${startY} C ${controlX},${startY} ${controlX},${endY} ${endX},${endY}`;
        setSvgPath(d);
      }
    };

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
      // 3. Apply the font and 'antialiased' for that smooth, crisp look
      className={`relative w-full py-24 flex flex-col items-center justify-center bg-[#020808] overflow-hidden ${inter.className} antialiased`}
    >
      {/* Header Section */}
      <div className="mb-16 text-center max-w-2xl relative z-20 px-6">
        <h2 className="text-4xl md:text-6xl font-semibold text-white mb-6 tracking-tighter">
          From <span className="text-blue-500">Signal</span> to <span className="text-teal-400">Context</span>
        </h2>
        {/* Smooth, relaxed font style */}
        <p className="text-zinc-400 text-lg md:text-xl font-normal tracking-tight leading-relaxed">
          See how raw PR changes are mapped to human-readable risk assessments.
        </p>
      </div>

      <div className="relative flex flex-col md:flex-row items-stretch justify-center w-full max-w-7xl gap-12 md:gap-32 p-6 md:p-10 z-10">

        {/* LEFT CARD */}
        <div className="flex-1 relative flex flex-col gap-8 bg-[#0a0a0a] border border-zinc-800 rounded-3xl p-8 shadow-2xl">
          <div className="flex items-center gap-5 mb-2 border-b border-zinc-800 pb-6">
            <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20 shadow-inner">
              <GitCommit className="text-blue-400" size={26} />
            </div>
            <div>
               <h3 className="text-xl font-semibold text-white tracking-tight">Detected Signals</h3>
               <p className="text-zinc-500 text-sm font-medium mt-1">4 files changed • 2 risk indicators</p>
            </div>
          </div>

          <div className="flex flex-col gap-5 relative">
            <div
              ref={leftDotRef}
              className="absolute -right-[42px] top-[132px] w-4 h-4 bg-blue-500 border-2 border-white rounded-full z-50 shadow-[0_0_20px_rgba(59,130,246,1)] hidden md:block"
            />

            {/* Item 1 */}
            <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-zinc-900/40 transition-all border border-transparent hover:border-zinc-800">
               <div className="mt-1 flex-shrink-0 w-9 h-9 rounded-lg bg-blue-900/10 border border-blue-500/20 flex items-center justify-center">
                 <Search size={16} className="text-blue-400" />
               </div>
               <div>
                 <div className="flex items-center gap-2">
                    <span className="text-zinc-300 font-medium text-sm">Modified</span>
                    <code className="text-blue-300 bg-blue-500/10 px-1.5 py-0.5 rounded text-xs font-mono tracking-tight">package.json</code>
                 </div>
                 <p className="text-zinc-500 text-xs mt-1 font-medium">Dependency `axios` updated to v1.6.0</p>
               </div>
            </div>

            {/* Item 2 (Active) */}
            <div className="flex items-start gap-4 p-5 bg-zinc-900/60 rounded-xl border border-blue-500/30 shadow-lg relative overflow-hidden group">
               <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors" />
               <div className="mt-1 flex-shrink-0 w-9 h-9 rounded-lg bg-blue-500/20 border border-blue-500 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.2)] relative z-10">
                 <AlertTriangle size={16} className="text-blue-400" />
               </div>
               <div className="relative z-10">
                 <div className="flex items-center gap-2">
                    <span className="text-white font-semibold text-sm tracking-tight">Modified</span>
                    <code className="text-blue-300 bg-blue-500/20 px-1.5 py-0.5 rounded text-xs font-mono tracking-tight border border-blue-500/20">auth.ts</code>
                 </div>
                 <p className="text-zinc-400 text-sm mt-1 leading-snug font-medium">Changed logic in <span className="font-mono text-xs text-zinc-300">verifySession()</span> middleware</p>
               </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-zinc-900/40 transition-all border border-transparent hover:border-zinc-800">
               <div className="mt-1 flex-shrink-0 w-9 h-9 rounded-lg bg-blue-900/10 border border-blue-500/20 flex items-center justify-center">
                 <Database size={16} className="text-blue-400" />
               </div>
               <div>
                 <div className="flex items-center gap-2">
                    <span className="text-zinc-300 font-medium text-sm">Modified</span>
                    <code className="text-blue-300 bg-blue-500/10 px-1.5 py-0.5 rounded text-xs font-mono tracking-tight">schema.prisma</code>
                 </div>
                 <p className="text-zinc-500 text-xs mt-1 font-medium">New index added to `User` table</p>
               </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-zinc-900/40 transition-all border border-transparent hover:border-zinc-800">
               <div className="mt-1 flex-shrink-0 w-9 h-9 rounded-lg bg-blue-900/10 border border-blue-500/20 flex items-center justify-center">
                 <FileCode size={16} className="text-blue-400" />
               </div>
               <div>
                 <div className="flex items-center gap-2">
                    <span className="text-zinc-300 font-medium text-sm">Added</span>
                    <code className="text-blue-300 bg-blue-500/10 px-1.5 py-0.5 rounded text-xs font-mono tracking-tight">utils/eval.js</code>
                 </div>
                 <p className="text-zinc-500 text-xs mt-1 font-medium">New file with dynamic execution</p>
               </div>
            </div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="flex-1 relative flex flex-col gap-8 bg-[#0a0a0a] border border-zinc-800 rounded-3xl p-8 shadow-2xl">
          <div className="flex items-center gap-5 mb-2 border-b border-zinc-800 pb-6">
            <div className="p-3 bg-teal-500/10 rounded-xl border border-teal-500/20 shadow-inner">
              <CheckCircle2 className="text-teal-400" size={26} />
            </div>
            <div>
               <h3 className="text-xl font-semibold text-white tracking-tight">AI Risk Assessment</h3>
               <p className="text-zinc-500 text-sm font-medium mt-1">Gemini 1.5 Pro Analysis</p>
            </div>
          </div>

          <div className="flex flex-col gap-6 relative h-full">
             <div
                ref={rightDotRef}
                className="absolute -left-[42px] top-[105px] w-4 h-4 bg-teal-400 border-2 border-white rounded-full z-50 shadow-[0_0_20px_rgba(45,212,191,1)] hidden md:block"
              />

            <div className="flex items-center gap-3 text-zinc-400 text-xs font-medium uppercase tracking-wider mb-1 px-1">
               <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                </span>
               Analyzing cross-file context
            </div>

            {/* Analysis 1 */}
            <div className="p-6 bg-teal-950/20 border border-teal-500/30 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <Activity className="text-teal-500" size={40} />
              </div>
              <div className="flex justify-between items-start mb-3 relative z-10">
                 <h4 className="text-teal-300 font-semibold text-lg tracking-tight">Critical Auth Logic Change</h4>
                 <span className="px-2 py-1 bg-teal-500/10 text-teal-300 text-[10px] uppercase tracking-wider font-bold rounded border border-teal-500/20 shadow-[0_0_10px_rgba(45,212,191,0.1)]">High Severity</span>
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed relative z-10 font-medium">
                The modification to <code className="text-teal-200 bg-teal-500/10 px-1 py-0.5 rounded font-mono text-xs">verifySession()</code> bypasses the previous rate-limit check. Combined with the new dependency, this increases the risk of session hijacking.
              </p>
            </div>

            {/* Analysis 2 */}
            <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl relative">
              <div className="flex justify-between items-start mb-3">
                 <h4 className="text-zinc-200 font-semibold text-lg tracking-tight">Database Lock Risk</h4>
                 <span className="px-2 py-1 bg-yellow-500/10 text-yellow-500 text-[10px] uppercase tracking-wider font-bold rounded border border-yellow-500/20">Medium</span>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed font-medium">
                Adding an index to the <code className="text-zinc-300 bg-zinc-800 px-1 py-0.5 rounded font-mono text-xs">User</code> table on a production database may cause downtime. Consider using <code className="text-zinc-300 bg-zinc-800 px-1 py-0.5 rounded font-mono text-xs">CONCURRENTLY</code>.
              </p>
            </div>

             {/* Footer Info */}
            <div className="mt-auto pt-5 border-t border-zinc-800 flex items-center justify-between text-zinc-500 text-xs font-medium tracking-wide">
                <div className="flex items-center gap-2">
                    <Server size={14} />
                    <span>Server Impact: <span className="text-zinc-300">Low</span></span>
                </div>
                <span>Confidence: <span className="text-teal-400">98%</span></span>
            </div>
          </div>
        </div>
      </div>

      {/* THE DRAWING BEAM SVG */}
      <svg className="absolute inset-0 pointer-events-none w-full h-full z-0 hidden md:block">
        {svgPath && (
          <>
            <path
              d={svgPath}
              stroke="#1e293b"
              strokeWidth="2"
              fill="none"
            />
            <motion.path
              d={svgPath}
              stroke="url(#gradient-beam)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="gradient-beam" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#2dd4bf" />
              </linearGradient>
            </defs>
          </>
        )}
      </svg>

    </section>
  );
}