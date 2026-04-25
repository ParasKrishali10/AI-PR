"use client"
import { useState, type MouseEvent } from "react";
import { Menu, Sparkles, X } from "lucide-react";

const navItems = [
  { href: "#features", label: "Features" },
  { href: "#insights", label: "Insights" },
  { href: "#integration", label: "Integration" },
  { href: "#cta", label: "Get Started" },
];

const handleConnect = async () => {
  try {
    window.location.href = "https://github.com/apps/AI-PR-RISK/installations/new";
  } catch (error) {
    console.log(error);
  }
};

export default function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleSectionNav = (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/70 bg-slate-950/75 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-18 items-center justify-between">
          <a href="#" className="inline-flex items-center gap-2 text-white">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-sky-400/25 bg-sky-500/10">
              <Sparkles className="size-5 text-sky-300" />
            </span>
            <span className="text-base sm:text-lg font-semibold tracking-tight">MergePilot</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-white"
                onClick={handleSectionNav(item.href)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <button
              className="rounded-full border border-slate-700 bg-slate-900 px-5 py-2 text-sm font-medium text-white transition-all hover:border-sky-400/40 hover:bg-slate-800"
              onClick={handleConnect}
            >
              Connect GitHub
            </button>
          </div>

          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-slate-200"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {menuOpen ? (
          <div className="md:hidden border-t border-slate-800 py-4">
            <div className="flex flex-col gap-3 text-sm text-slate-300">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-2 py-1 transition-colors hover:bg-slate-900 hover:text-white"
                  onClick={handleSectionNav(item.href)}
                >
                  {item.label}
                </a>
              ))}
              <button
                className="mt-2 rounded-full border border-slate-700 bg-slate-900 px-5 py-2 text-sm font-medium text-white transition-all hover:border-sky-400/40 hover:bg-slate-800"
                onClick={handleConnect}
              >
                Connect GitHub
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}