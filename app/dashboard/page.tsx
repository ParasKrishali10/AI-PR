"use client";

import React, { useEffect, useMemo } from "react";
import { TrendingUp, Zap, Activity, RotateCcw } from "lucide-react";
import DashboardShell from "@/app/components/dashboard/DashboardShell";
import { useDashboard } from "@/app/components/dashboard/DashboardContext";
import { PRStatusBadge, QueueJobStateBadge } from "@/app/components/dashboard/StatusBadge";
import { SkeletonCard } from "@/app/components/dashboard/Skeletons";
import { formatRelativeTime } from "@/app/lib/dashboardFormat";

function SummaryCard({
  label,
  value,
  sub,
  trend,
}: {
  label: string;
  value: string;
  sub: string;
  trend?: { text: string };
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-teal-400/10 blur-xl" />
      <div className="text-xs text-white/60 font-medium">{label}</div>
      <div className="mt-2 text-3xl font-bold tracking-tight">{value}</div>
      <div className="mt-3 text-sm text-white/70 flex items-center gap-2">
        {trend ? <TrendingUp size={14} className="text-emerald-300" /> : null}
        <span>{sub}</span>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const { repos, prs, queue, loading, refreshQueue, refreshPRs, simulateWebhookNewPR } = useDashboard();

  // Keep the queue fresh on the dashboard.
  // useEffect(() => {
  //   const id = window.setInterval(() => {
  //     void refreshQueue();
  //     void refreshPRs();
  //   }, 4000);
  //   return () => window.clearInterval(id);
  // }, [refreshPRs, refreshQueue]);

  const totals = useMemo(() => {
    const completed = prs.filter((p) => p.status === "completed").length;
    const analyzing = prs.filter((p) => p.status === "analyzing").length;
    const pending = prs.filter((p) => p.status === "pending").length;
    return { completed, analyzing, pending };
  }, [prs]);

  const recentPRs = useMemo(() => {
    return [...prs].sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1)).slice(0, 6);
  }, [prs]);

  return (
    <DashboardShell>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs text-white/60 font-medium">Dashboard</div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mt-1">AI PR Analyzer Overview</h1>
            <p className="text-sm text-white/65 mt-2">
              Track webhook events, processing stages, and AI-generated review signals.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                const repoId = repos[0]?.id ?? 1;
                const nextPr = 200 + ((Date.now() / 1000) | 0) % 700;
                void simulateWebhookNewPR({ repoId, prNumber: nextPr });
              }}
              className="inline-flex items-center gap-2 rounded-2xl px-4 py-2.5 bg-white/10 border border-white/10 hover:bg-white/15 transition-colors"
            >
              <Zap size={16} className="text-teal-200" />
              Simulate New PR
            </button>
            <button
              className="inline-flex items-center gap-2 rounded-2xl px-4 py-2.5 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              onClick={() => {
                void refreshQueue();
                void refreshPRs();
              }}
            >
              <RotateCcw size={16} />
              Refresh
            </button>
          </div>
        </div>

        {/* Summary cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {loading.repos ? (
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          ) : (
            <>
              <SummaryCard
                label="Total repositories connected"
                value={`${repos.length}`}
                sub="GitHub installations in sync"
                trend={{ text: "+12%" }}
              />
              <SummaryCard
                label="Total PRs analyzed"
                value={`${totals.completed}`}
                sub="Completed AI reviews"
              />
              <SummaryCard
                label="Pending PRs in queue"
                value={`${queue.counts.waiting}`}
                sub={`${totals.pending} awaiting worker (mock)`}
              />
              <SummaryCard
                label="Completed reviews"
                value={`${totals.completed}`}
                sub={`${totals.analyzing} currently analyzing`}
              />
            </>
          )}
        </div>

        {/* Recent activity + Queue health */}
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-4">
          <div className="xl:col-span-3 rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-sm font-semibold">Recent PR activity</div>
                <div className="text-xs text-white/60 mt-1">Latest webhook + processing updates</div>
              </div>
              <div className="inline-flex items-center gap-2 text-xs text-white/60">
                <Activity size={14} className="text-teal-200" />
                Auto-updates
              </div>
            </div>

            <div className="mt-4 space-y-3">
              {loading.prs ? (
                Array.from({ length: 5 }).map((_, i) => <SkeletonCard key={i} />)
              ) : recentPRs.length === 0 ? (
                <div className="text-sm text-white/60 py-10 text-center">No PRs yet. Simulate one.</div>
              ) : (
                recentPRs.map((pr) => (
                  <div
                    key={pr.id}
                    className="flex items-start justify-between gap-3 p-3 rounded-2xl border border-white/5 bg-white/0 hover:bg-white/5 transition-colors"
                  >
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <div className="font-semibold text-sm truncate max-w-[420px]">{pr.title}</div>
                        <PRStatusBadge status={pr.status} />
                      </div>
                      <div className="text-xs text-white/60 mt-2">
                        {pr.repoName} • updated {formatRelativeTime(pr.updatedAt)}
                      </div>
                    </div>
                    <div className="text-xs text-white/60 whitespace-nowrap">{pr.prNumber}</div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="xl:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-sm font-semibold">Worker / Queue status</div>
            <div className="text-xs text-white/60 mt-1">Active, waiting, failed jobs</div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="text-xs text-white/60">Waiting</div>
                <div className="mt-2 text-2xl font-bold">{queue.counts.waiting}</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="text-xs text-white/60">Active</div>
                <div className="mt-2 text-2xl font-bold">{queue.counts.active}</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="text-xs text-white/60">Failed</div>
                <div className="mt-2 text-2xl font-bold text-rose-300">{queue.counts.failed}</div>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between gap-2 text-xs text-white/60">
                <span>Recent jobs</span>
                <span>{queue.worker.name}</span>
              </div>

              <div className="mt-3 space-y-3">
                {loading.queue ? (
                  Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)
                ) : queue.jobs.length === 0 ? (
                  <div className="text-sm text-white/60 py-6">No jobs in queue.</div>
                ) : (
                  queue.jobs.slice(0, 6).map((j) => (
                    <div key={j.jobId} className="flex items-start justify-between gap-3 rounded-2xl border border-white/5 bg-white/0 p-3 hover:bg-white/5">
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <QueueJobStateBadge state={j.state} />
                          <div className="text-xs text-white/60">PR #{j.prNumber}</div>
                        </div>
                        <div className="text-xs text-white/60 mt-2">
                          Repo ID {j.repositoryId} • {formatRelativeTime(j.updatedAt)}
                        </div>
                        {j.state === "failed" && j.error ? (
                          <div className="text-xs text-rose-300 mt-2 line-clamp-2">{j.error}</div>
                        ) : null}
                      </div>
                      <div className="text-xs text-white/40">{j.attemptsMade} try</div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}

