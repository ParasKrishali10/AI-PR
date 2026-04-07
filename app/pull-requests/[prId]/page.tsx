"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { ArrowLeft, RefreshCcw } from "lucide-react";
import Link from "next/link";
import DashboardShell from "@/app/components/dashboard/DashboardShell";
import type { PullRequestDetail, PullRequestListResponse } from "@/app/lib/dashboardTypes";
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
  const [repoName,setRepoName]=useState("")
  const [detail, setDetail] = useState<PullRequestListResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [comment,setComment]=useState("")
  const fetchDetail = async () => {
    if (!prId) return;
    setLoading(true);
    setError(null);
    try {
      const data = await fetchJson<PullRequestListResponse>(`/api/prs/ind/?id=${encodeURIComponent(prId)}`);
      setDetail(data);
      const real=data.repoName.split("/")[1]
      setComment(data.commentPosted.length>0?data.commentPosted:"")
      setRepoName(real)
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
    // for (const c of detail.commentPosted ? detail.commentPosted : []) {
    //   const list = map.get(c.filePath) ?? [];
    //   list.push(c);
    //   map.set(c.filePath, list);
    // }
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
                {/* {detail ? <PRStatusBadge status={detail.status} /> : null} */}
                {detail ? <PRStatusBadge status={detail.state} /> : null}
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
                  <div className="text-sm font-semibold mt-2">{repoName}</div>
                </div>
                <div>
                  <div className="text-xs text-white/60 font-medium">Author</div>
                  <div className="text-sm font-semibold mt-2">{detail.author}</div>
                </div>
                <div>
                  <div className="text-xs text-white/60 font-medium">Title</div>
                  <div className="text-sm font-semibold mt-2">{detail.title}</div>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-white/60">
                <span>
                  Created: <span className="text-white">{formatDateTime(detail.createdAt)}</span>
                </span>
                <span>•</span>
                <span>
                  {/* Updated: <span className="text-white">{formatDateTime(detail.updatedAt)}</span> */}
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
                  <div className="text-xs text-white/60">Files: {detail.affectedFiles.length}</div>
                </div>

                <div className="mt-4 space-y-4">
                  {detail.affectedFiles.map((f, idx) => (
                    <details key={idx} className="group" open={idx === 0}>
                      <summary className="cursor-pointer list-none flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 hover:bg-black/30">
                        <div className="min-w-0">
                          <div className="text-sm font-semibold truncate">{f}</div>
                          <div className="text-xs text-white/60 mt-1">
                            {groupedComments.get(f)?.length ?? 0} AI comments
                          </div>
                        </div>
                        <div className="text-xs text-white/60">Expand</div>
                      </summary>
                      <div className="mt-3 space-y-2">
                        <div className="rounded-xl border border-white/10 overflow-hidden bg-black/30">
                          <div className="px-3 py-2 border-b border-white/10 text-xs text-white/60">
                            Preview
                          </div>
                          {/* <div className="p-3 space-y-1">
                            {f.lines.map((l, i) => (
                              <CodeLine key={`${i}-${l.content}`} {...l} />
                            ))}
                          </div> */}
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
                 {!detail.commentPosted ? (
  <div className="text-sm text-white/60 py-10 text-center">
    No AI comments yet.
  </div>
) : (
  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
    <pre className="whitespace-pre-wrap break-words text-sm text-white/80 font-mono">
      {detail.commentPosted}
    </pre>
  </div>
)}
                </div>

                {/* {detail.aiIssues.length ? (
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
                ) : null} */}
              </div>
            </div>
          </>
        ) : null}
      </div>
    </DashboardShell>
  );
}

