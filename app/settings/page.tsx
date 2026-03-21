"use client";

import React, { useState } from "react";
import DashboardShell from "@/app/components/dashboard/DashboardShell";
import { Fingerprint, Save, ShieldAlert } from "lucide-react";

export default function SettingsPage() {
  const [sensitivity, setSensitivity] = useState(75);
  const [enabled, setEnabled] = useState(true);

  return (
    <DashboardShell>
      <div className="space-y-6">
        <div>
          <div className="text-xs text-white/60 font-medium">Settings</div>
          <h1 className="text-3xl font-bold tracking-tight mt-1">Policy Engine</h1>
          <p className="text-sm text-white/65 mt-2">
            Tune how the AI signals risk. This UI is mock-only; wire it to your real config storage as needed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <Fingerprint className="text-teal-200" size={22} />
                </div>
                <div>
                  <div className="text-sm font-semibold">AI strictness profile</div>
                  <div className="text-xs text-white/60 mt-1">Mock configuration slider</div>
                </div>
              </div>
              <div className="text-3xl font-bold tabular-nums">{sensitivity}%</div>
            </div>

            <div className="mt-5">
              <input
                type="range"
                min={0}
                max={100}
                value={sensitivity}
                onChange={(e) => setSensitivity(Number(e.target.value))}
                className="w-full accent-teal-300"
              />
              <div className="mt-2 flex items-center justify-between text-xs text-white/60">
                <span>Permissive</span>
                <span>Balanced</span>
                <span>Paranoid</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-sm font-semibold flex items-center gap-2">
              <ShieldAlert size={16} className="text-rose-200" />
              Features
            </div>
            <div className="text-xs text-white/60 mt-1">Mock toggles</div>

            <div className="mt-5 space-y-4">
              <label className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                <div>
                  <div className="text-sm font-semibold">Block high-risk signals</div>
                  <div className="text-xs text-white/60 mt-1">Simulates review enforcement</div>
                </div>
                <input
                  type="checkbox"
                  checked={enabled}
                  onChange={(e) => setEnabled(e.target.checked)}
                  className="h-5 w-5 accent-teal-300"
                />
              </label>
            </div>

            <button
              onClick={() => alert("Settings saved (mock).")}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white/10 border border-white/10 px-4 py-3 hover:bg-white/15 transition-colors"
            >
              <Save size={16} />
              Save changes
            </button>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}

