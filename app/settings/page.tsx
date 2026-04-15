"use client";

import React, { useEffect, useState } from "react";
import DashboardShell from "@/app/components/dashboard/DashboardShell";
import { Fingerprint, Save, ShieldAlert } from "lucide-react";
import Toggle from "../components/Toggle"


const DetectionToggles=[{
  id: 1,
  name: "Block high-risk signals",
  key:"blockHighRisk",
}, {
  id: 2,
  name: "Detect Dependency Changes",
  key: "detectDependencyChanges",
  // description: "Simulates review enforcement"
}, {
  id: 3,
  name: "Detect auth/middleware changes",
  // description: "Simulates review enforcement"
  key: "detectAuthMiddlewareChanges"
},{
  id: 4,
  name: "Detect Malcious Patterns",
  // description: "Simulates review enforcement"
  key:"detectMaliciousPatterns"
}

];
const SecurityToggles=[{
  id: 1,
  name: "Detect eval() usage",
  description: "Simulates review enforcement",
  key: "detectEvalUsage"
}, {
  id: 2,
  name: "Detect exec/spawn usage",
  description: "Simulates review enforcement",
  key: "detectExecSpawnUsage"
}, {
  id: 3,
  name: "Detect child_process usage",
  description: "Simulates review enforcement",
  key: "detectChildProcessUsage"
}
];



export default function SettingsPage() {
  type Settings=Record<string,boolean>

  const [sensitivity, setSensitivity] = useState(75);
  const [settings, setSettings] = useState<Settings>({});

  useEffect(()=>{
  const allToggles=[...DetectionToggles,...SecurityToggles]
  const initialState=Object.fromEntries(
    allToggles.map(t=>[t.key,true])
  )
  setSettings(initialState)
},[])

const saveSettings=async()=>{
  const p=await fetch("/api/settings",{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify(settings)
  })

  console.log("Settings Saved")
}

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
            <div className="text-xs text-white/60 mt-1">Detection toggles</div>
          {DetectionToggles.map((toggle)=>{
            return <div key={toggle.id} className="mt-5 space-y-4">
              <label className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                <div>
                  <div className="text-sm font-semibold">{toggle.name}</div>
                  <div className="text-xs text-white/60 mt-1">Simulates review enforcement</div>
                </div>
                 <Toggle
  checked={!!settings[toggle.key]}
  onChange={(value) =>
  setSettings(prev => ({
    ...prev,
    [toggle.key]: value,
  }))
}
/>
              </label>
              </div>
          })}
          <div className="mt-7 text-sm font-semibold flex items-center gap-2">
              <ShieldAlert size={16} className="text-rose-200" />
              Features
            </div>
            <div className="text-xs text-white/60 mt-1">Detection toggles</div>
          {SecurityToggles.map((toggle)=>{
            return <div key={toggle.id} className="mt-5 space-y-4">
              <label className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                <div>
                  <div className="text-sm font-semibold">{toggle.name}</div>
                  <div className="text-xs text-white/60 mt-1">Simulates review enforcement</div>
                </div>
               <Toggle
  checked={!!settings[toggle.key]}
  onChange={(value) =>
  setSettings(prev => ({
    ...prev,
    [toggle.key]: value,
  }))
}
/>
              </label>
              </div>
          })}

            <button
              onClick={saveSettings}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white/10 border border-white/10 px-4 py-3 hover:bg-white/15 transition-colors cursor-pointer"
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

