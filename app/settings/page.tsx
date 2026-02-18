"use client";

import React, { useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import {
  ShieldCheck,
  Bell,
  Cpu,
  Lock,
  Database,
  Slack,
  Mail,
  Zap,
  Save,
  Fingerprint
} from "lucide-react";
import { Space_Grotesk } from "next/font/google";
import { cn } from "../lib/utils";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "700"] });

export default function SettingsPage() {
  const [sensitivity, setSensitivity] = useState(75);

  // Mouse Follow Logic
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className="relative min-h-screen w-full bg-[#020808] overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* BACKGROUND GLOWS */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(650px circle at ${mouseX}px ${mouseY}px, rgba(45, 212, 191, 0.05), transparent 80%)`,
        }}
      />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* CHANGED: Removed max-w-5xl, using w-full with generous padding */}
      <div className="relative z-10 w-full h-full p-6 md:p-12 space-y-12">

        {/* HEADER */}
        <div className="flex items-end justify-between border-b border-zinc-800/50 pb-8">
          <div className="space-y-2">
            <h1 className={cn("text-5xl md:text-6xl font-bold text-white tracking-tighter", spaceGrotesk.className)}>
              Policy Engine
            </h1>
            <p className="text-xl text-zinc-500 max-w-3xl">
              Tune the AI's sensitivity. Decide exactly what gets flagged as a critical risk across your entire organization.
            </p>
          </div>
          <button className="px-8 py-4 bg-white text-black font-bold text-lg rounded-2xl hover:bg-zinc-200 transition-colors flex items-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
             <Save size={20} /> Save Changes
          </button>
        </div>

        {/* MAIN GRID - Spans full width */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 w-full">

          {/* LEFT COLUMN: SENSITIVITY & MODULES (8 Cols -> now wider) */}
          <div className="xl:col-span-8 space-y-8">

            {/* 1. GLOBAL SENSITIVITY SLIDER */}
            <section className="bg-[#0c0c0c] border border-zinc-900 rounded-[2.5rem] p-10 relative overflow-hidden group hover:border-zinc-800 transition-colors">
               <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 blur-[100px] rounded-full" />

               <div className="flex items-center gap-6 mb-12">
                 <div className="p-4 bg-teal-500/10 rounded-2xl border border-teal-500/20 text-teal-400 shadow-[0_0_20px_rgba(45,212,191,0.1)]">
                    <Fingerprint size={32} />
                 </div>
                 <div>
                    <h3 className={cn("text-2xl font-bold text-white", spaceGrotesk.className)}>AI Strictness Profile</h3>
                    <p className="text-base text-zinc-500">Threshold for automatically blocking a Pull Request.</p>
                 </div>
               </div>

               <div className="space-y-8 relative z-10 max-w-4xl">
                 <div className="flex justify-between items-end">
                    <span className={cn("text-7xl font-bold text-white tracking-tighter tabular-nums leading-none", spaceGrotesk.className)}>
                       {sensitivity}<span className="text-teal-500 text-4xl">%</span>
                    </span>
                    <span className="text-sm font-bold uppercase tracking-widest text-zinc-600 mb-2">Confidence Threshold</span>
                 </div>

                 <div className="relative pt-6 pb-2">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={sensitivity}
                      onChange={(e) => setSensitivity(parseInt(e.target.value))}
                      className="w-full h-4 bg-zinc-900 rounded-full appearance-none cursor-pointer accent-teal-500 hover:accent-teal-400 transition-all z-20 relative"
                    />
                    {/* Background Track Marks */}
                    <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-1 pointer-events-none">
                       {[...Array(21)].map((_, i) => (
                          <div key={i} className={cn("w-0.5 h-2 bg-zinc-800", i % 5 === 0 ? "h-4 bg-zinc-700" : "")} />
                       ))}
                    </div>
                 </div>

                 <div className="flex justify-between text-xs font-bold text-zinc-500 uppercase tracking-widest px-1">
                    <span>Permissive (Dev)</span>
                    <span>Balanced (Default)</span>
                    <span className="text-teal-500">Paranoid (SecOps)</span>
                 </div>
               </div>
            </section>

            {/* 2. SECURITY MODULES (Grid expands to fill space) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
               <ModuleCard
                  icon={Lock}
                  title="Auth Logic Analysis"
                  desc="Detects session hijacking, middleware tampering, and auth bypass attempts."
                  enabled={true}
               />
               <ModuleCard
                  icon={Database}
                  title="Schema Lock & Migration"
                  desc="Prevents unsafe database migrations and detects breaking schema changes."
                  enabled={true}
               />
               <ModuleCard
                  icon={ShieldCheck}
                  title="Secret Scanning"
                  desc="Blocks API keys, tokens, and private keys from entering main branch."
                  enabled={true}
               />
               <ModuleCard
                  icon={Cpu}
                  title="Performance Impact"
                  desc="Flags O(n²) loops, heavy renders, and large bundle size increases."
                  enabled={false}
               />
            </div>
          </div>

          {/* RIGHT COLUMN: NOTIFICATIONS (4 Cols -> Sticky) */}
          <div className="xl:col-span-4 space-y-6">
             <div className="bg-[#0c0c0c] border border-zinc-900 rounded-[2.5rem] p-10 h-full sticky top-8">
                <div className="flex items-center gap-4 mb-10">
                   <div className="p-3 bg-zinc-900 rounded-xl text-zinc-400">
                      <Bell size={24} />
                   </div>
                   <h3 className={cn("text-xl font-bold text-white", spaceGrotesk.className)}>Alert Channels</h3>
                </div>

                <div className="space-y-4">
                   <ChannelItem icon={Slack} label="Engineering" status="Connected" color="text-[#E01E5A]" />
                   <ChannelItem icon={Mail} label="Security Team" status="Active" color="text-blue-400" />
                   <ChannelItem icon={Zap} label="Webhook" status="Paused" color="text-yellow-400" />
                </div>

                <div className="mt-12 p-6 bg-zinc-900/30 rounded-3xl border border-zinc-800">
                   <p className="text-sm text-zinc-400 leading-relaxed">
                      <strong className="text-white block mb-2 font-bold">Pro Tip</strong>
                      Connect Slack to get real-time <span className="text-teal-400">"Risk Blocked"</span> notifications directly in your PR channels.
                   </p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// SUB-COMPONENTS

function ModuleCard({ icon: Icon, title, desc, enabled }: { icon: any, title: string, desc: string, enabled: boolean }) {
   return (
      <div className={cn(
         "group p-8 rounded-[2rem] border transition-all duration-300 flex flex-col justify-between min-h-[220px]",
         enabled
            ? "bg-[#0c0c0c] border-zinc-800 hover:border-teal-500/30 hover:bg-zinc-900/30"
            : "bg-[#0c0c0c] border-zinc-900 opacity-60 grayscale"
      )}>
         <div className="flex justify-between items-start">
            <div className={cn(
               "w-12 h-12 rounded-2xl flex items-center justify-center transition-colors shadow-inner",
               enabled ? "bg-teal-500/10 text-teal-400 border border-teal-500/10" : "bg-zinc-900 text-zinc-600 border border-zinc-800"
            )}>
               <Icon size={24} />
            </div>
            {/* Toggle Switch UI */}
            <div className={cn(
               "w-12 h-7 rounded-full relative transition-colors border",
               enabled ? "bg-teal-500 border-teal-400" : "bg-zinc-900 border-zinc-800"
            )}>
               <div className={cn(
                  "absolute top-1 w-4 h-4 bg-white rounded-full transition-all shadow-sm",
                  enabled ? "right-1.5" : "left-1.5"
               )} />
            </div>
         </div>

         <div>
            <h4 className="text-xl font-bold text-white mb-2 tracking-tight">{title}</h4>
            <p className="text-base text-zinc-500 leading-relaxed">{desc}</p>
         </div>
      </div>
   )
}

function ChannelItem({ icon: Icon, label, status, color }: any) {
   return (
      <button className="w-full flex items-center gap-5 p-5 rounded-3xl bg-zinc-900/20 border border-zinc-800/50 hover:bg-zinc-900/80 hover:border-zinc-700 transition-all group">
         <div className="w-12 h-12 rounded-2xl bg-[#0a0a0a] flex items-center justify-center border border-zinc-800 group-hover:scale-105 transition-transform shadow-lg">
            <Icon size={22} className={color} />
         </div>
         <div className="text-left">
            <span className="block text-base font-bold text-zinc-300 group-hover:text-white transition-colors">{label}</span>
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-600 group-hover:text-zinc-500">{status}</span>
         </div>
      </button>
   )
}