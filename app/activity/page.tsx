"use client";

import React from "react";
import { Download, Calendar, Filter, ShieldCheck, Zap, Activity } from "lucide-react";
import ActivityItem from "../components/ActivityItem"; // Adjust path

export default function ActivityLogPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-10">

      {/* 1. HEADER & ACTIONS */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight mb-2">Activity Log</h1>
          <p className="text-zinc-400">Audit trail of all scanned, blocked, and approved pull requests.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white rounded-lg text-sm font-medium transition-colors">
          <Download size={16} />
          Export CSV
        </button>
      </div>

      {/* 2. VALUE STATS (The "ROI" Section) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
         <div className="bg-gradient-to-br from-teal-500/10 to-transparent border border-teal-500/20 rounded-2xl p-5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
               <ShieldCheck size={64} />
            </div>
            <p className="text-zinc-400 text-sm font-medium mb-1">Critical Risks Blocked</p>
            <h3 className="text-3xl font-bold text-white">12</h3>
            <p className="text-teal-400 text-xs mt-2 flex items-center gap-1">
               <Activity size={12} /> +4 this week
            </p>
         </div>

         <div className="bg-[#0a0a0a] border border-zinc-800 rounded-2xl p-5">
            <p className="text-zinc-400 text-sm font-medium mb-1">Total Scans Performed</p>
            <h3 className="text-3xl font-bold text-white">1,429</h3>
            <p className="text-zinc-500 text-xs mt-2">Across 8 repositories</p>
         </div>

         <div className="bg-[#0a0a0a] border border-zinc-800 rounded-2xl p-5">
            <p className="text-zinc-400 text-sm font-medium mb-1">Avg. Analysis Time</p>
            <h3 className="text-3xl font-bold text-white">1.2s</h3>
            <p className="text-green-400 text-xs mt-2 flex items-center gap-1">
               <Zap size={12} /> -0.3s vs last month
            </p>
         </div>
      </div>

      {/* 3. FILTERS */}
      <div className="flex items-center gap-2 pb-4 border-b border-zinc-800/50">
         <button className="px-3 py-1.5 text-xs font-medium bg-zinc-800 text-white rounded-md">All Events</button>
         <button className="px-3 py-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/50 rounded-md">Blocked Only</button>
         <button className="px-3 py-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/50 rounded-md">Merged</button>

         <div className="ml-auto flex items-center gap-2">
            <button className="p-2 text-zinc-500 hover:text-white rounded-md hover:bg-zinc-900">
               <Calendar size={16} />
            </button>
            <button className="p-2 text-zinc-500 hover:text-white rounded-md hover:bg-zinc-900">
               <Filter size={16} />
            </button>
         </div>
      </div>

      {/* 4. THE TIMELINE FEED */}
      <div className="relative pt-2">
         {/* Demo Data - Replace with API map */}
         <ActivityItem
            action="blocked"
            prTitle="feat: Add OAuth bypass for testing"
            repoName="auth-service"
            user="dave.junior"
            timestamp="10 mins ago"
            riskScore={92}
            delay={0}
         />

         <ActivityItem
            action="merged"
            prTitle="fix: Update React dependency to v19"
            repoName="frontend-core"
            user="sarah.lead"
            timestamp="2 hours ago"
            riskScore={12}
            delay={1}
         />

         <ActivityItem
            action="approved"
            prTitle="chore: Update README documentation"
            repoName="docs-site"
            user="alice.chen"
            timestamp="5 hours ago"
            riskScore={5}
            delay={2}
         />

         <ActivityItem
            action="blocked"
            prTitle="refactor: Database connection string logic"
            repoName="backend-api"
            user="intern.dev"
            timestamp="Yesterday, 4:20 PM"
            riskScore={88}
            delay={3}
         />

         <ActivityItem
            action="scanned"
            prTitle="feat: New user profile page"
            repoName="frontend-core"
            user="sarah.lead"
            timestamp="Yesterday, 10:00 AM"
            riskScore={45}
            delay={4}
         />
      </div>

    </div>
  );
}