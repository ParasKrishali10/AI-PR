"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GitBranch,
  Activity,
  Clock,
  Search,
  Bell,
  User,
  GitCommit,
  Zap,
  ShieldAlert,
  CheckCircle2
} from "lucide-react";
import { Space_Grotesk } from "next/font/google";
import { cn } from "../lib/utils";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "700"] });

// --- TYPES ---
type RiskLevel = "Critical" | "High" | "Medium" | "Low" | "Safe";

interface RepoRowProps {
  name: string;
  desc: string;
  risk: RiskLevel;
  value: string;
  count: string;
}

export default function DashboardOverview() {
  return (
    <div className="min-h-screen bg-[#020808] p-6 md:p-8 space-y-12 overflow-x-hidden font-sans">

      {/* 1. TOP NAVBAR */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
           <div className="flex items-center gap-2 text-zinc-500 text-sm mb-1 font-medium">
              <span>Pages</span>
              <span>/</span>
              <span className="text-white">Dashboard</span>
           </div>
           <h1 className={cn("text-3xl font-bold text-white tracking-tight", spaceGrotesk.className)}>
              Risk Analytics
           </h1>
        </div>

        <div className="flex items-center gap-4 bg-[#0c0c0c] p-2 rounded-xl border border-zinc-800 shadow-sm">
           <div className="relative group">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-teal-400 transition-colors" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent border-none outline-none text-sm text-white pl-9 w-40 focus:w-64 transition-all duration-300 placeholder:text-zinc-600"
              />
           </div>
           <button className="relative text-zinc-400 hover:text-white transition-colors p-1">
              <Bell size={18} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full border-2 border-[#0c0c0c]" />
           </button>
           <button className="text-zinc-400 hover:text-white transition-colors p-1"><User size={18} /></button>
        </div>
      </div>

      {/* 2. MINI STAT CARDS (Top Row) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
         <MiniStatCard
            icon={GitBranch}
            color="black"
            label="Active PRs"
            value="24"
            footer={<><span className="text-green-400 font-bold">+55%</span> than last week</>}
         />
         <MiniStatCard
            icon={User}
            color="rose"
            label="Contributors"
            value="12"
            footer={<><span className="text-green-400 font-bold">+3%</span> new devs</>}
         />
         <MiniStatCard
            icon={ShieldAlert}
            color="green"
            label="Risk Score"
            value="12%"
            footer={<><span className="text-rose-400 font-bold">-2%</span> (Safety improved)</>}
         />
         <MiniStatCard
            icon={Clock}
            color="blue"
            label="Scan Time"
            value="1.2s"
            footer="Just updated"
         />
      </div>

      {/* 3. HERO SECTION: "Risks by Repository" (Table + Map) */}
      <div className="relative mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

           {/* Left: Data Table (Spans 2 cols) */}
           <div className="lg:col-span-2 relative">
              {/* Floating Header Icon */}
              <div className="absolute -top-6 left-6 z-20">
                 <div className="w-16 h-16 bg-gradient-to-tr from-emerald-500 to-teal-400 rounded-xl shadow-[0_4px_20px_0px_rgba(16,185,129,0.4)] flex items-center justify-center text-white">
                    <Activity size={32} />
                 </div>
              </div>

              <div className="bg-[#0c0c0c] border border-zinc-800 rounded-xl p-6 pt-12 h-full">
                 <div className="flex justify-between items-end mb-6 mt-2">
                    <div>
                       <h3 className={cn("text-xl font-bold text-white", spaceGrotesk.className)}>Risks by Repository</h3>
                       <p className="text-zinc-500 text-sm mt-1">Live monitoring of active projects.</p>
                    </div>
                 </div>

                 <div className="space-y-2">
                    <RepoRow name="auth-service" desc="TS • Next.js" risk="Critical" value="78%" count="234" />
                    <RepoRow name="frontend-core" desc="TS • React" risk="Medium" value="45%" count="128" />
                    <RepoRow name="payment-api" desc="Go • Gin" risk="Low" value="12%" count="56" />
                    <RepoRow name="docs-site" desc="MDX • Astro" risk="Safe" value="0%" count="12" />
                    <RepoRow name="legacy-backend" desc="Python • Flask" risk="High" value="62%" count="15" />
                 </div>
              </div>
           </div>

           {/* Right: Topology Visualizer (Spans 1 col) */}
           <div className="relative mt-12 lg:mt-0">
              {/* Floating Header Icon */}
              <div className="absolute -top-6 left-6 z-20">
                 <div className="w-16 h-16 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-xl shadow-[0_4px_20px_0px_rgba(59,130,246,0.4)] flex items-center justify-center text-white">
                    <Zap size={32} />
                 </div>
              </div>

              <div className="bg-[#0c0c0c] border border-zinc-800 rounded-xl p-6 pt-12 h-full flex flex-col">
                 <h3 className={cn("text-xl font-bold text-white mt-2", spaceGrotesk.className)}>Live Topology</h3>
                 <p className="text-zinc-500 text-sm mb-6">Service dependency map.</p>

                 <div className="flex-1 bg-zinc-900/30 rounded-lg border border-zinc-800/50 relative overflow-hidden group min-h-[250px]">
                    {/* Abstract "Map" Animation */}
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="relative w-40 h-40">
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full animate-pulse shadow-[0_0_10px_white]" />
                          <div className="absolute bottom-0 left-0 w-3 h-3 bg-rose-500 rounded-full animate-pulse delay-700 shadow-[0_0_10px_#f43f5e]" />
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-teal-500 rounded-full animate-pulse delay-300 shadow-[0_0_10px_#14b8a6]" />

                          {/* Connecting Lines */}
                          <svg className="absolute inset-0 w-full h-full pointer-events-none">
                             <motion.path
                                d="M 80 10 L 10 150 M 80 10 L 150 150 M 10 150 L 150 150"
                                fill="none"
                                stroke="rgba(255,255,255,0.1)"
                                strokeWidth="2"
                             />
                          </svg>
                       </div>
                    </div>
                    <div className="absolute bottom-4 left-4 text-[10px] text-zinc-500 font-mono">
                       nodes: 3<br/>edges: 3<br/>latency: 12ms
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>


      {/* 4. METRICS ROW (Floating Charts) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">

         {/* CHART 1: BLUE BAR */}
         <ChartCard
            color="blue"
            title="Scan Volume"
            subtitle="Last Campaign Performance"
            footer="campaign sent 2 days ago"
            type="bar"
         />

         {/* CHART 2: GREEN LINE */}
         <ChartCard
            color="green"
            title="Health Score"
            subtitle="(+15%) increase in safety."
            footer="updated 4 min ago"
            type="line"
         />

         {/* CHART 3: ROSE LINE (The "Black" chart in reference, adapted for Risk) */}
         <ChartCard
            color="rose"
            title="Critical Incidents"
            subtitle="Security events per day"
            footer="just updated"
            type="line-filled"
         />

      </div>
    </div>
  );
}

/* --- SUB COMPONENTS --- */

function RepoRow({ name, desc, risk, value, count }: RepoRowProps) {
   // Strict color mapping based on the 'risk' prop type
   const riskMap: Record<RiskLevel, string> = {
      Critical: "text-rose-400 bg-rose-500/10",
      High: "text-orange-400 bg-orange-500/10",
      Medium: "text-yellow-400 bg-yellow-500/10",
      Low: "text-blue-400 bg-blue-500/10",
      Safe: "text-teal-400 bg-teal-500/10"
   };

   return (
      <div className="flex items-center justify-between p-4 hover:bg-zinc-900/50 rounded-xl transition-colors group cursor-pointer border border-transparent hover:border-zinc-800">
         <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center text-zinc-500 group-hover:text-white transition-colors border border-zinc-800 group-hover:border-zinc-700">
               <GitCommit size={18} />
            </div>
            <div>
               <h4 className="text-sm font-bold text-zinc-200 group-hover:text-white">{name}</h4>
               <span className="text-xs text-zinc-500 font-medium">{desc}</span>
            </div>
         </div>

         <div className="text-right flex items-center gap-6">
            <div className="hidden sm:block text-right">
               <div className="text-sm font-bold text-white">{count}</div>
               <div className="text-[10px] text-zinc-500 uppercase tracking-wider">Changes</div>
            </div>
            <div className="w-16 text-right">
               <div className={cn("text-sm font-bold", riskMap[risk].split(" ")[0])}>{value}</div>
               <div className="text-[10px] text-zinc-500 uppercase tracking-wider">Risk</div>
            </div>
         </div>
      </div>
   )
}

function MiniStatCard({ icon: Icon, color, label, value, footer }: any) {
   const colors: Record<string, string> = {
      black: "bg-[#18181b] text-white shadow-zinc-900/20", // Close to the reference "Bookings" card
      blue: "bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40",
      green: "bg-gradient-to-tr from-emerald-500 to-teal-400 text-white shadow-emerald-500/40",
      rose: "bg-gradient-to-tr from-rose-600 to-rose-400 text-white shadow-rose-500/40",
   };

   return (
      <div className="bg-[#0c0c0c] border border-zinc-800 rounded-xl p-4 pt-4 relative mt-4">
         <div className={cn(
            "absolute -top-4 left-4 w-12 h-12 rounded-lg flex items-center justify-center shadow-lg",
            colors[color]
         )}>
            <Icon size={20} />
         </div>
         <div className="text-right">
            <p className="text-sm text-zinc-500 font-medium">{label}</p>
            <h3 className={cn("text-2xl font-bold text-white", spaceGrotesk.className)}>{value}</h3>
         </div>
         <div className="mt-4 pt-3 border-t border-zinc-800/50">
            <p className="text-xs text-zinc-400 font-medium">
               {footer}
            </p>
         </div>
      </div>
   )
}

function ChartCard({ color, title, subtitle, footer, type }: any) {
   const colors: Record<string, string> = {
      blue: "from-blue-600 to-blue-400 shadow-blue-500/40",
      green: "from-emerald-600 to-emerald-400 shadow-emerald-500/40",
      rose: "from-rose-600 to-rose-400 shadow-rose-500/40",
   };

   return (
      <div className="relative mt-8 group">
         {/* FLOATING HEADER CHART */}
         <div className={cn(
            "absolute -top-8 left-4 right-4 h-48 rounded-xl bg-gradient-to-tr shadow-lg flex items-center justify-center z-10 p-4 transition-transform group-hover:-translate-y-1 duration-300",
            colors[color]
         )}>
            {/* NOTE: In a real app, use Recharts or Tremor here.
                These are CSS/SVG representations to match the visual style of the reference image.
            */}

            {type === "bar" && (
               <div className="flex items-end justify-between w-full h-full px-2 pb-2">
                   {[40, 30, 70, 80, 50, 90, 40].map((h, i) => (
                      <div key={i} className="w-2 rounded-t-sm bg-white/80" style={{ height: `${h}%` }} />
                   ))}
               </div>
            )}

            {type === "line" && (
               <svg className="w-full h-full overflow-visible" viewBox="0 0 100 50" preserveAspectRatio="none">
                  <path d="M0 40 Q 25 45, 50 20 T 100 5" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="50" cy="20" r="2" fill="white" />
                  <circle cx="100" cy="5" r="2" fill="white" />
               </svg>
            )}

             {type === "line-filled" && (
               <svg className="w-full h-full overflow-visible" viewBox="0 0 100 50" preserveAspectRatio="none">
                   <defs>
                     <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                       <stop offset="0%" style={{stopColor:'rgb(255,255,255)', stopOpacity:0.5}} />
                       <stop offset="100%" style={{stopColor:'rgb(255,255,255)', stopOpacity:0}} />
                     </linearGradient>
                   </defs>
                  <path d="M0 30 Q 30 10, 60 30 T 100 20 V 50 H 0 Z" fill="url(#grad1)" />
                  <path d="M0 30 Q 30 10, 60 30 T 100 20" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />
               </svg>
            )}
         </div>

         {/* CARD BODY */}
         <div className="bg-[#0c0c0c] border border-zinc-800 rounded-xl p-6 pt-44 pb-4 h-full">
            <h3 className={cn("text-lg font-bold text-white", spaceGrotesk.className)}>{title}</h3>
            <p className="text-sm text-zinc-400 mt-1">{subtitle}</p>
            <div className="mt-4 pt-4 border-t border-zinc-800/50 flex items-center gap-2 text-xs text-zinc-500 font-medium">
               <Clock size={14} />
               <span>{footer}</span>
            </div>
         </div>
      </div>
   )
}