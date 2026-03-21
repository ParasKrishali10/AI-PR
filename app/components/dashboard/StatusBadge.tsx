import React from "react";
import type { JobState, PRStatus } from "@/app/lib/dashboardTypes";

export function PRStatusBadge({ status }: { status: PRStatus }) {
  const cfg =
    status === "completed"
      ? { bg: "bg-emerald-500/10 border-emerald-500/20 text-emerald-300", label: "Completed" }
      : status === "analyzing"
        ? { bg: "bg-sky-500/10 border-sky-500/20 text-sky-300", label: "Analyzing" }
        : { bg: "bg-amber-500/10 border-amber-500/20 text-amber-300", label: "Pending" };

  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 border ${cfg.bg} text-xs font-semibold`}>
      {cfg.label}
    </span>
  );
}

export function QueueJobStateBadge({ state }: { state: JobState }) {
  const cfg =
    state === "completed"
      ? { bg: "bg-emerald-500/10 border-emerald-500/20 text-emerald-300", label: "Completed" }
      : state === "active"
        ? { bg: "bg-sky-500/10 border-sky-500/20 text-sky-300", label: "Active" }
        : state === "failed"
          ? { bg: "bg-rose-500/10 border-rose-500/20 text-rose-300", label: "Failed" }
          : { bg: "bg-amber-500/10 border-amber-500/20 text-amber-300", label: "Waiting" };

  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 border ${cfg.bg} text-xs font-semibold`}>
      {cfg.label}
    </span>
  );
}

