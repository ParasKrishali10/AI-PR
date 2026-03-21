"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { ArrowLeft, RefreshCcw } from "lucide-react";
import Link from "next/link";
import DashboardShell from "@/app/components/dashboard/DashboardShell";
import type { PullRequestDetail } from "@/app/lib/dashboardTypes";
import { PRStatusBadge } from "@/app/components/dashboard/StatusBadge";
import { SkeletonCard } from "@/app/components/dashboard/Skeletons";
import { formatDateTime } from "@/app/lib/dashboardFormat";

async function fetchJson<T>(url: string) {
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return (await res.json()) as T;
}

function CodeLine({ type, content }: PullRequestDetail["diffFiles"][number]["lines"][number]) {
  const cls =
    type === "added"
      ? "text-emerald-200 bg-emerald-500/10"
      : type === "removed"
        ? "text-rose-200 bg-rose-500/10"
        : "text-white/70 bg-white/0";
  const prefix = type === "added" ? "+" : type === "removed" ? "-" : " ";
  return (
    <div className={`font-mono text-[12px] leading-5 px-2 py-0.5 rounded ${cls}`}>
      <span className="text-white/40">{prefix}</span>
      <span>{content}</span>
    </div>
  );
}

export default function PullRequestDetailPage() {
  const params = useParams<{ prId: string }>();
  const prId = params.prId;

  const [detail, setDetail] = useState<PullRequestDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDetail = async () => {
    if (!prId) return;
    setLoading(true);
    setError(null);
    try {
      const data = await fetchJson<PullRequestDetail>(`/api/prs?id=${encodeURIComponent(prId)}`);
      setDetail(data);
    } catch (e: any) {
      setError(e?.message ?? "Failed to load PR details.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prId]);

  const groupedComments = useMemo(() => {
    const map = new Map<string, PullRequestDetail["comments"]>();
    if (!detail) return map;
    for (const c of detail.comments) {
      const list = map.get(c.filePath) ?? [];
      list.push(c);
      map.set(c.filePath, list);
    }
    for (const [, list] of map) list.sort((a, b) => a.id.localeCompare(b.id));
    return map;
  }, [detail]);

  return (
    <DashboardShell>
      <div className="space-y-6">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-3">
            <Link
              href="/pull-requests"
              className="inline-flex items-center gap-2 rounded-2xl bg-white/5 border border-white/10 px-3 py-2 hover:bg-white/10 transition-colors"
            >
              <ArrowLeft size={16} />
              Back
            </Link>
            <div>
              <div className="text-xs text-white/60 font-medium">Pull Request Detail</div>
              <div className="mt-1 flex items-center gap-2 flex-wrap">
                <h1 className="text-2xl font-bold tracking-tight">{detail?.title ?? "Loading…"}</h1>
                {detail ? <PRStatusBadge status={detail.status} /> : null}
              </div>
            </div>
          </div>

          <button
            className="inline-flex items-center gap-2 rounded-2xl bg-white/5 border border-white/10 px-4 py-2.5 hover:bg-white/10 transition-colors"
            onClick={() => void fetchDetail()}
          >
            <RefreshCcw size={16} />
            Refresh
          </button>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        ) : error ? (
          <div className="rounded-2xl border border-rose-500/30 bg-rose-500/10 p-5 text-rose-200">
            {error}
          </div>
        ) : detail ? (
          <>
            {/* Metadata */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <div className="text-xs text-white/60 font-medium">Repository</div>
                  <div className="text-sm font-semibold mt-2">{detail.repoName}</div>
                </div>
                <div>
                  <div className="text-xs text-white/60 font-medium">Author</div>
                  <div className="text-sm font-semibold mt-2">{detail.author}</div>
                </div>
                <div>
                  <div className="text-xs text-white/60 font-medium">Branch</div>
                  <div className="text-sm font-semibold mt-2">{detail.branch}</div>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-white/60">
                <span>
                  Created: <span className="text-white">{formatDateTime(detail.createdAt)}</span>
                </span>
                <span>•</span>
                <span>
                  Updated: <span className="text-white">{formatDateTime(detail.updatedAt)}</span>
                </span>
              </div>
            </div>

            {/* AI issues + comments */}
            <div className="grid grid-cols-1 xl:grid-cols-5 gap-4">
              <div className="xl:col-span-3 rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold">Diff / Code changes (mock)</div>
                    <div className="text-xs text-white/60 mt-1">Colored added/removed/context lines</div>
                  </div>
                  <div className="text-xs text-white/60">Files: {detail.diffFiles.length}</div>
                </div>

                <div className="mt-4 space-y-4">
                  {detail.diffFiles.map((f, idx) => (
                    <details key={f.filePath} className="group" open={idx === 0}>
                      <summary className="cursor-pointer list-none flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 hover:bg-black/30">
                        <div className="min-w-0">
                          <div className="text-sm font-semibold truncate">{f.filePath}</div>
                          <div className="text-xs text-white/60 mt-1">
                            {groupedComments.get(f.filePath)?.length ?? 0} AI comments
                          </div>
                        </div>
                        <div className="text-xs text-white/60">Expand</div>
                      </summary>
                      <div className="mt-3 space-y-2">
                        <div className="rounded-xl border border-white/10 overflow-hidden bg-black/30">
                          <div className="px-3 py-2 border-b border-white/10 text-xs text-white/60">
                            Preview
                          </div>
                          <div className="p-3 space-y-1">
                            {f.lines.map((l, i) => (
                              <CodeLine key={`${i}-${l.content}`} {...l} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </details>
                  ))}
                </div>
              </div>

              <div className="xl:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm font-semibold">AI-generated review comments</div>
                <div className="text-xs text-white/60 mt-1">Issues + suggestions highlighted per file</div>

                <div className="mt-4">
                  {detail.comments.length === 0 ? (
                    <div className="text-sm text-white/60 py-10 text-center">
                      No AI comments yet. {detail.status === "completed" ? "Try refreshing." : "The worker is still processing."}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {Array.from(groupedComments.entries()).map(([filePath, comments]) => (
                        <div key={filePath} className="rounded-2xl border border-white/10 bg-black/20 overflow-hidden">
                          <div className="px-4 py-3 border-b border-white/10">
                            <div className="text-sm font-semibold">{filePath}</div>
                            <div className="text-xs text-white/60 mt-1">
                              {comments.length} comment{comments.length === 1 ? "" : "s"}
                            </div>
                          </div>
                          <div className="p-4 space-y-3">
                            {comments.map((c) => {
                              const sevCls =
                                c.severity === "critical"
                                  ? "border-rose-500/30 bg-rose-500/10 text-rose-200"
                                  : c.severity === "warning"
                                    ? "border-amber-500/30 bg-amber-500/10 text-amber-200"
                                    : "border-sky-500/30 bg-sky-500/10 text-sky-200";

                              return (
                                <div key={c.id} className={`rounded-2xl border ${sevCls} p-4`}>
                                  <div className="text-xs uppercase tracking-wider font-bold opacity-90">
                                    {c.severity}
                                    {c.lineHint ? <span className="font-normal text-white/70"> • line {c.lineHint}</span> : null}
                                  </div>
                                  <div className="mt-2 font-semibold text-sm">Issue</div>
                                  <div className="mt-1 text-sm leading-relaxed text-white/80">{c.issue}</div>

                                  <div className="mt-3 font-semibold text-sm">Suggestion</div>
                                  <div className="mt-1 text-sm leading-relaxed text-white/85">{c.suggestion}</div>

                                  {c.excerpt ? (
                                    <div className="mt-3 text-xs text-white/70">
                                      <div className="text-[11px] uppercase tracking-wider text-white/50 font-semibold">Excerpt</div>
                                      <pre className="mt-1 whitespace-pre-wrap break-words bg-black/20 border border-white/10 rounded-xl p-3 text-white/75 font-mono text-[12px]">
                                        {c.excerpt}
                                      </pre>
                                    </div>
                                  ) : null}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {detail.aiIssues.length ? (
                  <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="text-sm font-semibold">Highlighted issues</div>
                    <div className="text-xs text-white/60 mt-1">Top concerns detected by the mock AI signals</div>
                    <div className="mt-3 space-y-2">
                      {detail.aiIssues.map((i, idx) => (
                        <div key={`${i}-${idx}`} className="text-sm text-white/80 flex items-start gap-2">
                          <span className="text-teal-300 mt-1">•</span>
                          <span>{i}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </>
        ) : null}
      </div>
    </DashboardShell>
  );
}

