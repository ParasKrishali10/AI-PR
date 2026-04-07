"use client";

import React, { useEffect, useMemo } from "react";
import { RefreshCcw, PlayCircle, AlertTriangle } from "lucide-react";
import DashboardShell from "@/app/components/dashboard/DashboardShell";
import { useDashboard } from "@/app/components/dashboard/DashboardContext";
import { QueueJobStateBadge } from "@/app/components/dashboard/StatusBadge";
import { SkeletonTable } from "@/app/components/dashboard/Skeletons";
import { formatRelativeTime } from "@/app/lib/dashboardFormat";

function Bar({ value, total, cls }: { value: number; total: number; cls: string }) {
  const pct = total === 0 ? 0 : (value / total) * 100;

  return (
    <div className="flex-1 flex items-center gap-2">
      <div className="text-xs text-white/60 w-10 text-right">{value}</div>

      <div className="flex-1 h-3 rounded-full bg-white/5 border border-white/10 overflow-hidden">
        <div
          className={`${cls} h-full transition-all duration-500`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

export default function QueueMonitoringPage() {
  const { jobs, loading, refreshQueue } = useDashboard();

  // useEffect(() => {
  //   const id = window.setInterval(() => void refreshQueue(), 4000);
  //   return () => window.clearInterval(id);
  // }, [refreshQueue]);

  const total = useMemo(
    () => jobs.waiting.length + jobs.active.length + jobs.completed.length + jobs.failed.length,
    [jobs],
  );
  const allJobs = [
  ...jobs.waiting,
  ...jobs.active,
  ...jobs.completed,
  ...jobs.failed,
];

  return (
    <DashboardShell>
      <div className="space-y-6">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <div className="text-xs text-white/60 font-medium">Queue Monitoring</div>
            <h1 className="text-3xl font-bold tracking-tight mt-1">BullMQ Job States (Mock)</h1>
            <p className="text-sm text-white/65 mt-2">
Tracks job progression through Redis-backed queues from waiting to execution and final states.            </p>
          </div>

          <button
            className="inline-flex items-center gap-2 rounded-2xl bg-white/5 border border-white/10 px-4 py-2.5 hover:bg-white/10 transition-colors"
            onClick={() => void refreshQueue()}
          >
            <RefreshCcw size={16} />
            Refresh
          </button>
        </div>

        {loading.queue ? (
          <SkeletonTable />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold">Job counts</div>
                  <div className="text-xs text-white/60 mt-1">Total tracked: {total}</div>
                </div>
                <div className="text-xs text-white/60">Worker: {"Unknown"}</div>
              </div>

              <div className="mt-4 space-y-4">

  <div className="flex items-center gap-3">
    <div className="w-24 text-sm text-white/70">Waiting</div>
    <Bar value={jobs.waiting.length} total={total} cls="bg-amber-400/70" />
  </div>

  <div className="flex items-center gap-3">
    <div className="w-24 text-sm text-white/70">Active</div>
    <Bar value={jobs.active.length} total={total} cls="bg-sky-400/70" />
  </div>

  <div className="flex items-center gap-3">
    <div className="w-24 text-sm text-white/70">Completed</div>
    <Bar value={jobs.completed.length} total={total} cls="bg-emerald-400/70" />
  </div>

  <div className="flex items-center gap-3">
    <div className="w-24 text-sm text-white/70">Failed</div>
    <Bar value={jobs.failed.length} total={total} cls="bg-rose-400/70" />
  </div>

</div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="text-xs uppercase tracking-wider text-white/60 font-bold">Legend</div>
                <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-white/70">
                  <div className="flex items-center gap-2">
                    <PlayCircle size={16} className="text-sky-300" />
                    Active
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertTriangle size={16} className="text-rose-300" />
                    Failed
                  </div>
                </div>
                <div className="mt-3 text-xs text-white/55">
                  {/* Heartbeat: {formatRelativeTime(queue.worker.lastHeartbeatAt )} */}
                  Heartbeat: {formatRelativeTime("90000")}
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
              <div className="px-5 py-4 border-b border-white/10 text-sm font-semibold flex items-center justify-between">
                <span>Tracked jobs</span>
                <span className="text-xs text-white/60 font-medium">
                  waiting/active/completed/failed
                </span>
              </div>

              <div className="overflow-auto">
                <div className="min-w-[720px]">
                  <div className="grid grid-cols-[1.2fr_0.8fr_0.9fr_1fr] px-5 py-3 text-xs text-white/60 bg-black/10 border-b border-white/5">
                    <div>Job</div>
                    <div>State</div>
                    <div>Attempts</div>
                    <div>Updated</div>
                  </div>

                  {allJobs.length === 0 ? (
  <div className="px-5 py-14 text-center text-sm text-white/60">
    No jobs. Use “Simulate New PR” from the dashboard.
  </div>
) : (
  allJobs.map((j) => (
    <div
      key={j.id}
      className="grid grid-cols-[1.2fr_0.8fr_0.9fr_1fr] px-5 py-4 border-b border-white/5 hover:bg-white/5 transition-colors"
    >
      <div>
        <div className="font-semibold text-sm">PR #{j.data.prNumber}</div>
        <div className="text-xs text-white/60 mt-1">
          Repo ID {j.data.repositoryId} • Job ID {j.id}
        </div>

        {j.state === "failed" && j.failedReason ? (
          <div className="text-xs text-rose-200 mt-2 line-clamp-2">
            {j.failedReason}
          </div>
        ) : null}
      </div>

      <div className="flex items-center">
        <QueueJobStateBadge state={j.state} />
      </div>

      <div className="text-xs text-white/60">{j.attemptsMade}</div>

      <div className="text-xs text-white/60">
        {formatRelativeTime(new Date(j.timestamp).toISOString())}
      </div>
    </div>
  ))
)}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardShell>
  );
}

