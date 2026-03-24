"use client";

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type {
  ConnectedRepository,
  PullRequestSummary,
  QueueSnapshot,
} from "@/app/lib/dashboardTypes";
import { useSession } from "next-auth/react";

type LoadingState = {
  repos: boolean;
  prs: boolean;
  queue: boolean;
};

type DashboardContextValue = {
  repos: ConnectedRepository[];
  stats:{analyzed:number,pending:number,analyzing:number};
  prs: PullRequestSummary[];
  queue: QueueSnapshot;
  loading: LoadingState;
  refreshAll: () => Promise<void>;
  refreshRepos: () => Promise<void>;
  refreshPRs: () => Promise<void>;
  refreshQueue: () => Promise<void>;
  simulateWebhookNewPR: (input: { repoId: number; prNumber: number }) => Promise<void>;
};

const DashboardContext = createContext<DashboardContextValue | null>(null);

async function fetchJson<T>(url: string, init?: RequestInit): Promise<T> {
  const res = await fetch(url, {
    ...init,
    headers: {
      "content-type": "application/json",
      ...(init?.headers ?? {}),
    },
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Request failed: ${res.status} ${text}`.trim());
  }
  return res.json() as Promise<T>;
}

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [repos, setRepos] = useState<ConnectedRepository[]>([]);
  const [prs, setPRs] = useState<PullRequestSummary[]>([]);
  const {data:session,status}=useSession()
  const userId=session?.user.id
  const [queue, setQueue] = useState<QueueSnapshot>({
    worker: { name: "mock", lastHeartbeatAt: new Date(0).toISOString() },
    jobs: [],
    counts: { waiting: 0, active: 0, completed: 0, failed: 0 },
  });
  const [loading, setLoading] = useState<LoadingState>({ repos: true, prs: true, queue: true });
  const [stats,setStats]=useState({
    analyzed:0,
    pending:0,
    analyzing:0
  })

  const refreshRepos = useCallback(async () => {
    if(!session?.user.id) return
    setLoading((s) => ({ ...s, repos: true }));
  const data = await fetchJson<ConnectedRepository[]>(`/api/repos?id=${userId}`)
setRepos(data)
    setLoading((s) => ({ ...s, repos: false }));
  }, [userId]);

  const refreshPRs = useCallback(async () => {
    if(!session?.user.id) return
    setLoading((s) => ({ ...s, prs: true }));
    const data = await fetchJson<{
    prs: PullRequestSummary[];
    analyzed: number;
    pending: number;
    analyzing: number;
  }>(`/api/prs?id=${userId}`);
    setPRs(data.prs);
    setStats({analyzed:data.analyzed,pending:data.pending,analyzing:data.analyzing})
    setLoading((s) => ({ ...s, prs: false }));
  }, [userId]);

  const refreshQueue = useCallback(async () => {
    setLoading((s) => ({ ...s, queue: true }));
    const data = await fetchJson<QueueSnapshot>("/api/queue");
    setQueue(data);
    setLoading((s) => ({ ...s, queue: false }));
  }, []);

  const refreshAll = useCallback(async () => {
    await Promise.allSettled([refreshRepos(), refreshPRs(), refreshQueue()]);
    // Some endpoints may fail in dev; we keep partial state.
    setLoading((s) => ({ ...s, repos: false, prs: false, queue: false }));
  }, [refreshPRs, refreshQueue, refreshRepos]);

  const simulateWebhookNewPR = useCallback(
    async (input: { repoId: number; prNumber: number }) => {
      await fetchJson<{ ok: boolean }>(`/api/prs`, {
        method: "POST",
        body: JSON.stringify(input),
      });
      // The worker simulation runs asynchronously; we refresh queue + PR list.
      await Promise.allSettled([refreshQueue(), refreshPRs()]);
    },
    [refreshPRs, refreshQueue],
  );

  useEffect(() => {
    if(status==="authenticated" && userId){
      void refreshAll();
    }
  }, [refreshAll,status,userId]);

  useEffect(() => {
  console.log("userId:", userId);
}, [userId]);
  const value = useMemo<DashboardContextValue>(
    () => ({
      repos,
      stats,
      prs,
      queue,
      loading,
      refreshAll,
      refreshRepos,
      refreshPRs,
      refreshQueue,
      simulateWebhookNewPR,
    }),
    [loading, prs, queue, refreshAll, refreshPRs, refreshQueue, refreshRepos, repos,stats, simulateWebhookNewPR],
  );

  return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>;
}

export function useDashboard() {
  const ctx = useContext(DashboardContext);
  if (!ctx) throw new Error("useDashboard must be used within DashboardProvider");
  return ctx;
}

