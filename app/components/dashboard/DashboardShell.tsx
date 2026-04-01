"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  Bell,
  Menu,
  LayoutDashboard,
  GitBranch,
  ListChecks,
  Cpu,
  Settings,
  Sparkles,
} from "lucide-react";
import { useDashboard } from "./DashboardContext";
import { cn } from "@/app/lib/utils";

type NavItem = {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
};

const navItems: NavItem[] = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/repos", label: "Repositories", icon: GitBranch },
  { href: "/pull-requests", label: "Pull Requests", icon: ListChecks },
  { href: "/queue", label: "Queue", icon: Cpu },
  { href: "/settings", label: "Settings", icon: Settings },
];

function formatCount(n: number) {
  if (n < 10) return `${n}`;
  if (n < 100) return `${n}`;
  return "99+";
}

export default function DashboardShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { data: session } = useSession();
  const { jobs, loading } = useDashboard();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);

  const notifications = useMemo(() => {
  const failed = jobs.failed.slice(0, 3);
const completed = jobs.completed.slice(0, 3);
    const items = [
      ...failed.map((j) => ({
        id: `f-${j.jobId}`,
        title: `Worker failed job #${j.data.prNumber}`,
        detail: j.failedReason ?? "Unknown error",
        // detail: j.attemptsMade ?? "Unknown error",
        at: new Date(j.timestamp).toISOString(),
      })),
      ...completed.map((j) => ({
        id: `c-${j.jobId}`,
        title: `Review completed for PR #${j.data.prNumber}`,
        detail: j.returnValue?.comment ? j.returnValue?.comment : "AI-based risk signals generated ",
        at: new Date(j.timestamp).toISOString(),
      })),
    ];
    return items.slice(0, 5);
  }, [jobs]);

  const notifCount = notifications.length;

  return (
    <div className="min-h-screen bg-[#020a0a] text-white">
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(45,212,191,0.18),transparent_40%),radial-gradient(circle_at_85%_10%,rgba(56,189,248,0.14),transparent_45%)]" />

        {/* Sidebar (desktop) */}
        <aside className="hidden lg:flex lg:flex-col lg:fixed lg:inset-y-0 lg:w-72 bg-[#050a0a] border-r border-white/5">
          <div className="flex items-center gap-3 px-6 py-5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-400/20 to-sky-400/20 border border-white/10 flex items-center justify-center">
              <Sparkles size={18} className="text-teal-300" />
            </div>
            <div className="leading-tight">
              <div className="font-semibold">AI PR Analyzer</div>
              <div className="text-xs text-white/60">Dashboard</div>
            </div>
          </div>

          <nav className="px-4 pb-6">
            <div className="space-y-1">
              {navItems.map((item) => {
                const active = pathname === item.href;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "group flex items-center gap-3 px-3 py-2.5 rounded-xl border transition-colors",
                      active
                        ? "bg-white/5 border-white/10 text-white"
                        : "border-transparent text-white/70 hover:text-white hover:bg-white/5 hover:border-white/10",
                    )}
                  >
                    <Icon size={18} />
                    <span className="text-sm font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </nav>

          <div className="mt-auto px-6 pb-6">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
              <div className="text-sm font-semibold">Queue health</div>
              <div className="mt-2 grid grid-cols-3 gap-2 text-xs">
                <div className="rounded-xl bg-white/5 border border-white/10 px-2 py-1">
                  <div className="text-white/70">Waiting</div>
                  <div className="font-semibold">{jobs.waiting.length}</div>
                </div>
                <div className="rounded-xl bg-white/5 border border-white/10 px-2 py-1">
                  <div className="text-white/70">Active</div>
                  <div className="font-semibold">{jobs.active.length}</div>
                </div>
                <div className="rounded-xl bg-white/5 border border-white/10 px-2 py-1">
                  <div className="text-white/70">Failed</div>
                  <div className="font-semibold text-rose-300">{jobs.failed.length}</div>
                </div>
              </div>
              {loading.queue ? <div className="mt-2 text-xs text-white/60">Loading…</div> : null}
            </div>
          </div>
        </aside>

        {/* Mobile nav overlay */}
        {mobileNavOpen ? (
          <div
            className="lg:hidden fixed inset-0 z-50 bg-black/60"
            onClick={() => setMobileNavOpen(false)}
          />
        ) : null}

        {/* Main content */}
        <div className="lg:pl-72">
          {/* Top navbar */}
          <header className="sticky top-0 z-40 bg-[#020a0a]/80 backdrop-blur border-b border-white/5">
            <div className="px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <button
                  className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10"
                  onClick={() => setMobileNavOpen(true)}
                  aria-label="Open navigation"
                >
                  <Menu size={18} />
                </button>
                <div className="hidden sm:block">
                  <div className="text-xs text-white/60">Today</div>
                  <div className="text-sm font-semibold">
                    {new Date().toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" })}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="relative">
                  <button
                    className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                    onClick={() => setNotifOpen((v) => !v)}
                    aria-label="Notifications"
                  >
                    <Bell size={18} className="text-white/80" />
                    {notifCount > 0 ? (
                      <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-rose-500 text-[10px] font-semibold flex items-center justify-center border border-[#020a0a]">
                        {formatCount(notifCount)}
                      </span>
                    ) : null}
                  </button>

                  {notifOpen ? (
                    <div className="absolute right-0 mt-2 w-[360px] rounded-2xl bg-[#050a0a] border border-white/10 shadow-xl overflow-hidden">
                      <div className="px-4 py-3 border-b border-white/10">
                        <div className="text-sm font-semibold">Notifications</div>
                        <div className="text-xs text-white/60">
                          {notifCount > 0 ? `${notifCount} items` : "No new items"}
                        </div>
                      </div>
                      <div className="max-h-[320px] overflow-auto">
                        {notifications.length === 0 ? (
                          <div className="px-4 py-6 text-sm text-white/60">You're all caught up.</div>
                        ) : (
                          notifications.map((n) => (
                            <div
                              key={n.id}
                              className="px-4 py-3 border-b border-white/5 last:border-b-0 hover:bg-white/5"
                            >
                              <div className="text-sm font-semibold">{n.title}</div>
                              <div className="text-xs text-white/65 mt-1">{n.detail}</div>
                              <div className="text-[11px] text-white/45 mt-2">
                                {new Date(n.at).toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" })}
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  ) : null}
                </div>

                <div className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 px-3 py-2">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500/20 to-sky-500/20 border border-white/10 flex items-center justify-center">
                    <div className="w-3.5 h-3.5 rounded-full bg-teal-300" />
                  </div>
                  <div className="hidden md:block">
                    <div className="text-sm font-semibold">{session?.user?.name ?? "Demo User"}</div>
                    <div className="text-xs text-white/60">Connected</div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Mobile sidebar */}
          {mobileNavOpen ? (
            <aside className="lg:hidden fixed z-50 inset-y-0 left-0 w-80 bg-[#050a0a] border-r border-white/10 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 px-1 py-2">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-400/20 to-sky-400/20 border border-white/10 flex items-center justify-center">
                    <Sparkles size={18} className="text-teal-300" />
                  </div>
                  <div className="leading-tight">
                    <div className="font-semibold">AI PR Analyzer</div>
                    <div className="text-xs text-white/60">Dashboard</div>
                  </div>
                </div>
                <button
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  onClick={() => setMobileNavOpen(false)}
                  aria-label="Close navigation"
                >
                  ✕
                </button>
              </div>

              <nav className="mt-3 space-y-1">
                {navItems.map((item) => {
                  const active = pathname === item.href;
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "group flex items-center gap-3 px-3 py-2.5 rounded-xl border transition-colors",
                        active
                          ? "bg-white/5 border-white/10 text-white"
                          : "border-transparent text-white/70 hover:text-white hover:bg-white/5 hover:border-white/10",
                      )}
                      onClick={() => setMobileNavOpen(false)}
                    >
                      <Icon size={18} />
                      <span className="text-sm font-medium">{item.label}</span>
                    </Link>
                  );
                })}
              </nav>
            </aside>
          ) : null}

          <main className="px-4 sm:px-6 py-6">
            <div className="max-w-7xl mx-auto">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}

