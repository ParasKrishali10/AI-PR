"use client";

import React, { useMemo, useState } from "react";
import { Plus, Search } from "lucide-react";
import DashboardShell from "@/app/components/dashboard/DashboardShell";
import { useDashboard } from "@/app/components/dashboard/DashboardContext";
import { SkeletonCard } from "@/app/components/dashboard/Skeletons";
import { formatDateTime } from "@/app/lib/dashboardFormat";
import { cn } from "@/app/lib/utils";

export default function RepositoriesPage() {
  const { repos, loading } = useDashboard();
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return repos;
    return repos.filter((r) => r.fullName.toLowerCase().includes(q) || r.owner.toLowerCase().includes(q));
  }, [repos, query]);

  const handleConnect=async()=>{
      try{
        window.location.href="https://github.com/apps/AI-PR-RISK/installations/new"
        // alert("succes")
      }catch(error)
      {
        console.log(error)
        // alert("error happens")
      }

  }

  return (
    <DashboardShell>
      <div className="space-y-6">
        <div>
          <div className="text-xs text-white/60 font-medium">Repositories</div>
          <h1 className="text-3xl font-bold tracking-tight mt-1">Connected GitHub Repositories</h1>
          <p className="text-sm text-white/65 mt-2">
            Manage installations and view last sync time. Connect new repos from the GitHub app installation page.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
          <div className="relative w-full max-w-xl">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search repos…"
              className="w-full rounded-2xl bg-white/5 border border-white/10 px-10 py-3 text-sm outline-none focus:border-teal-400/50"
            />
          </div>

          <button
            className="cursor-pointer inline-flex items-center gap-2 rounded-2xl px-4 py-3 bg-white/10 border border-white/10 hover:bg-white/15 transition-colors w-full lg:w-auto justify-center"
            onClick={handleConnect}
          >
            <Plus size={18} className="text-teal-200" />
            Connect new repo
          </button>
        </div>

        {loading.repos ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        ) : (
          <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
            <div className="px-5 py-4 border-b border-white/10 text-sm font-semibold flex items-center justify-between">
              <span>Repositories</span>
              <span className="text-xs text-white/60 font-medium">{filtered.length} connected</span>
            </div>
            <div className="divide-y divide-white/5">
              {filtered.map((r) => (
                <div
                  key={r.id}
                  className="px-5 py-4 hover:bg-white/5 transition-colors flex items-center justify-between gap-3"
                >
                  <div className="min-w-0">
                    <div className="font-semibold text-sm truncate">{r.fullName}</div>
                  </div>
                    <div className="text-xs text-white/60 mt-1">Owner: {r.owner}</div>
                  {/* <div className={cn("text-xs text-white/60 whitespace-nowrap")}>
                    Last sync: {formatDateTime(r.lastSyncAt)}
                  </div> */}
                </div>
              ))}
              {filtered.length === 0 ? (
                <div className="px-5 py-10 text-center text-sm text-white/60">No matches.</div>
              ) : null}
            </div>
          </div>
        )}
      </div>
    </DashboardShell>
  );
}

