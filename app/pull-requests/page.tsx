"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Filter } from "lucide-react";
import DashboardShell from "@/app/components/dashboard/DashboardShell";
import { useDashboard } from "@/app/components/dashboard/DashboardContext";
import { PRStatusBadge } from "@/app/components/dashboard/StatusBadge";
import { SkeletonTable } from "@/app/components/dashboard/Skeletons";
import type { PRStatus } from "@/app/lib/dashboardTypes";
import { formatRelativeTime } from "@/app/lib/dashboardFormat";

export default function PullRequestsPage() {
  const { prs, loading } = useDashboard();
  const [statusFilter, setStatusFilter] = useState<PRStatus | "all">("all");

  const filtered = useMemo(() => {
    const list = [...prs].sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1));
    if (statusFilter === "all") return list;
    return list.filter((p) => p.status === statusFilter);
  }, [prs, statusFilter]);

  const statusOptions: Array<{ value: PRStatus | "all"; label: string }> = [
    { value: "all", label: "All" },
    { value: "pending", label: "Pending" },
    { value: "analyzing", label: "Analyzing" },
    { value: "completed", label: "Completed" },
  ];

  return (
    <DashboardShell>
      <div className="space-y-6">
        <div>
          <div className="text-xs text-white/60 font-medium">Pull Requests</div>
          <h1 className="text-3xl font-bold tracking-tight mt-1">AI Review Queue</h1>
          <p className="text-sm text-white/65 mt-2">Click a PR to inspect the AI-generated comments per file.</p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="inline-flex items-center gap-2 text-sm text-white/70">
              <Filter size={16} />
              Status
            </div>
            <div className="flex flex-wrap gap-2">
              {statusOptions.map((opt) => {
                const active = opt.value === statusFilter;
                return (
                  <button
                    key={opt.value}
                    onClick={() => setStatusFilter(opt.value)}
                    className={`rounded-2xl px-3 py-2 text-sm border transition-colors ${
                      active
                        ? "bg-white/10 border-white/20 text-white"
                        : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="text-xs text-white/60">
            Showing <span className="font-semibold text-white">{filtered.length}</span> PRs
          </div>
        </div>

        {loading.prs ? (
          <SkeletonTable />
        ) : (
          <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
            <div className="px-5 py-4 border-b border-white/10 text-sm font-semibold flex items-center justify-between">
              <span>PRs</span>
              <span className="text-xs text-white/60 font-medium">Mock AI review summaries</span>
            </div>

            <div className="overflow-auto">
              <div className="min-w-[900px]">
                <div className="grid grid-cols-[2fr_1.5fr_0.9fr_2fr_0.8fr] px-5 py-3 text-xs text-white/60 bg-black/10 border-b border-white/5">
                  <div>Title</div>
                  <div>Repository</div>
                  <div>Status</div>
                  <div>AI review summary</div>
                  <div>Timestamp</div>
                </div>

                {filtered.map((pr) => (
                  <Link
                    key={pr.id}
                    href={`/pull-requests/${encodeURIComponent(pr.id)}`}
                    className="block"
                  >
                    <div className="grid grid-cols-[2fr_1.5fr_0.9fr_2fr_0.8fr] px-5 py-4 border-b border-white/5 hover:bg-white/5 transition-colors">
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 min-w-0">
                          <div className="truncate font-semibold text-sm">{pr.title}</div>
                          <ArrowUpRight size={14} className="text-white/40" />
                        </div>
                        <div className="text-xs text-white/60 mt-1">Author: {pr.author}</div>
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm truncate">{pr.repoName}</div>
                        <div className="text-xs text-white/60 mt-1">#{pr.prNumber}</div>
                      </div>
                      <div className="flex items-center">
                        <PRStatusBadge status={pr.status} />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm text-white/75 truncate" title={pr.reviewSummary || ""}>
                          {pr.reviewSummary ? pr.reviewSummary : "Not generated yet."}
                        </div>
                      </div>
                      <div className="text-xs text-white/60 whitespace-nowrap">{formatRelativeTime(pr.updatedAt)}</div>
                    </div>
                  </Link>
                ))}

                {filtered.length === 0 ? (
                  <div className="px-5 py-10 text-center text-sm text-white/60">No PRs match the selected filter.</div>
                ) : null}
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardShell>
  );
}

