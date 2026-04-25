"use client";

import React from "react";
import { Github, Twitter, ArrowRight } from "lucide-react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const handleConnect=async()=>{
      try{
        window.location.href="https://github.com/apps/AI-PR-RISK/installations/new"
        // alert("succes")
      }catch(error)
      {
        console.log(error)
        // alert("error happens")
      }

  }
export default function FooterCTA() {
  return (
    <footer
      id="cta"
      className={`relative w-full pt-20 sm:pt-24 lg:pt-28 pb-10 flex flex-col items-center bg-[#0b1120] overflow-hidden ${inter.className}`}
    >

      {/* THE BOTTOM GLOW (Sunrise Effect) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[360px] bg-sky-400/35 blur-[100px] rounded-full pointer-events-none z-0" />

      {/* MAIN CTA CONTENT */}
      <div className="relative z-10 text-center max-w-3xl px-4 sm:px-6 mb-16 sm:mb-20">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold text-white mb-6 sm:mb-8 tracking-tighter leading-tight">
          Ready to ship <br />
          with <span className="text-[#00a2ff]">confidence?</span>
        </h2>

        <p className="text-zinc-400 text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed">
          Stop guessing which PRs are risky. Let deterministic analysis guide your code reviews today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          {/* Primary Button */}
          <button className="group relative w-full sm:w-auto px-7 py-3.5 bg-teal-400 text-black font-semibold rounded-full text-base sm:text-lg hover:bg-teal-300 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(45,212,191,0.3)] hover:shadow-[0_0_30px_rgba(45,212,191,0.5)]" onClick={handleConnect}>
            Install on GitHub
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Secondary Button */}
          <button className="w-full sm:w-auto px-7 py-3.5 bg-zinc-900 text-white font-medium rounded-full text-base sm:text-lg border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 transition-all">
             View Documentation
          </button>
        </div>
      </div>

      {/* FOOTER LINKS */}
      <div className="relative z-10 w-full max-w-6xl px-4 sm:px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-5 text-zinc-500 text-sm">

        <div className="flex items-center gap-2">
           <div className="w-6 h-6 bg-teal-500 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-xs">P</span>
           </div>
           <span className="font-semibold text-zinc-300">PR Risk Analyzer</span>
        </div>

        <div className="flex items-center gap-5 sm:gap-8">
           <a href="#" className="hover:text-white transition-colors">Features</a>
           <a href="#" className="hover:text-white transition-colors">Pricing</a>
           <a href="#" className="hover:text-white transition-colors">Security</a>
        </div>

        <div className="flex items-center gap-4">
           <a href="#" className="p-2 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-white">
              <Twitter size={16} />
           </a>
           <a href="#" className="p-2 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-white">
              <Github size={16} />
           </a>
        </div>
      </div>
    </footer>
  );
}