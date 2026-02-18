"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Plus, Search, Filter } from "lucide-react";
import RepoCard from "../components/RepoCard";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["700"] });

export default function RepositoriesPage() {
  // MOUSE FOLLOW LOGIC
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className="relative min-h-screen w-full bg-[#020808] overflow-hidden"
      onMouseMove={handleMouseMove}
    >

      {/* 1. INTERACTIVE BACKGROUND (Solves Empty Space) */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(45, 212, 191, 0.07),
              transparent 80%
            )
          `,
        }}
      />

      {/* FIXED AMBIENT GLOWS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-teal-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto p-8 md:p-12 space-y-12">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <h1 className={`text-5xl md:text-6xl font-bold text-white tracking-tighter ${spaceGrotesk.className}`}>
              Repositories
            </h1>
            <p className="text-xl text-zinc-500 max-w-xl leading-relaxed">
              Manage your connected codebases. Pause monitoring or configure specific risk rules per project.
            </p>
          </div>

          <button className="flex items-center gap-3 px-8 py-4 bg-teal-500 text-black font-bold text-lg rounded-2xl shadow-[0_0_30px_rgba(45,212,191,0.3)] hover:shadow-[0_0_50px_rgba(45,212,191,0.5)] hover:scale-105 transition-all">
            <Plus size={24} strokeWidth={3} />
            Connect Repo
          </button>
        </div>

        {/* TOOLBAR */}
        <div className="flex items-center gap-4">
           <div className="relative flex-1 max-w-md group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-teal-400 transition-colors" size={20} />
              <input
                type="text"
                placeholder="Search projects..."
                className="w-full bg-[#0a0a0a] border border-zinc-800 text-white pl-12 pr-6 py-4 rounded-2xl outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 transition-all text-lg placeholder:text-zinc-700"
              />
           </div>
           <button className="px-6 py-4 bg-[#0a0a0a] border border-zinc-800 text-zinc-400 font-bold rounded-2xl hover:text-white hover:border-zinc-600 transition-colors flex items-center gap-2">
              <Filter size={20} /> Filter
           </button>
        </div>

        {/* HUGE GRID (2 Cols for maximum impact) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <RepoCard
            name="auth-service"
            url="github.com/acme/auth-service"
            language="TypeScript"
            status="active"
            riskCount={3}
            lastScan="2m ago"
          />
          <RepoCard
            name="data-pipeline"
            url="github.com/acme/data-pipeline"
            language="Python"
            status="active"
            riskCount={0}
            lastScan="1h ago"
          />
          <RepoCard
            name="payment-gateway"
            url="github.com/acme/payment-gateway"
            language="Go"
            status="paused"
            riskCount={0}
            lastScan="3d ago"
          />
          {/* Example of filling space with a placeholder */}
          <button className="group relative w-full min-h-[280px] bg-transparent border-2 border-zinc-900 border-dashed rounded-[2rem] flex flex-col items-center justify-center gap-6 hover:bg-zinc-900/30 hover:border-zinc-800 transition-all">
             <div className="w-20 h-20 rounded-full bg-zinc-900/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Plus size={32} className="text-zinc-600 group-hover:text-zinc-300" />
             </div>
             <p className="text-zinc-600 font-bold text-lg group-hover:text-zinc-400">Add another project</p>
          </button>
        </div>

      </div>
    </div>
  );
}