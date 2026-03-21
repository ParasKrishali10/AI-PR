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
  const [queue, setQueue] = useState<QueueSnapshot>({
    worker: { name: "mock", lastHeartbeatAt: new Date(0).toISOString() },
    jobs: [],
    counts: { waiting: 0, active: 0, completed: 0, failed: 0 },
  });
  const [loading, setLoading] = useState<LoadingState>({ repos: true, prs: true, queue: true });
  const session=useSession()

  const refreshRepos = useCallback(async () => {
    setLoading((s) => ({ ...s, repos: true }));
    const data = await fetchJson<ConnectedRepository[]>(`/api/repos/?${session.data?.githubId}`);
    setRepos(data);
    setLoading((s) => ({ ...s, repos: false }));
  }, []);

  const refreshPRs = useCallback(async () => {
    setLoading((s) => ({ ...s, prs: true }));
    const data = await fetchJson<PullRequestSummary[]>("/api/prs");
    setPRs(data);
    setLoading((s) => ({ ...s, prs: false }));
  }, []);

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
    void refreshAll();
  }, [refreshAll]);

  const value = useMemo<DashboardContextValue>(
    () => ({
      repos,
      prs,
      queue,
      loading,
      refreshAll,
      refreshRepos,
      refreshPRs,
      refreshQueue,
      simulateWebhookNewPR,
    }),
    [loading, prs, queue, refreshAll, refreshPRs, refreshQueue, refreshRepos, repos, simulateWebhookNewPR],
  );

  return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>;
}

export function useDashboard() {
  const ctx = useContext(DashboardContext);
  if (!ctx) throw new Error("useDashboard must be used within DashboardProvider");
  return ctx;
}

