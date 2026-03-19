"use client"
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { signIn, signOut, useSession } from "next-auth/react"
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
export default function MainS() {
  return (
    <section className="font-inter relative min-h-screen flex items-center justify-center text-center bg-[#020617] text-white overflow-hidden">

      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(circle,rgba(56,189,248,0.35),transparent_70%)] blur-3xl"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b1a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b1a_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff22_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
      <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(circle,rgba(56,189,248,0.25),transparent_70%)] blur-3xl"></div>

      <div className="relative z-10 max-w-3xl -mt-40">

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-400/10 border border-slate-400/20 backdrop-blur-md text-slate-200 text-lg shadow-md shadow-cyan-600">
          <span className="border rounded-full w-8 justify-center bg-black">✨</span>
          Smarter Task Management
        </div>

        <h1 className="text-6xl md:text-6xl font-semibold mt-6">
          AI-Driven Risk Intelligence for Pull Requests
        </h1>

        <p className="text-gray-400 mt-6 text-lg font-medium">
          Automate code reviews, surface early risk signals, and reduce reviewer effort by 40%. Our event-driven pipeline processes 1,000+ webhooks daily to ensure your codebase stays secure and stable.
        </p>

        <div className="flex gap-4 justify-center mt-8">
          <button className="px-8 flex py-3 gap-2 rounded-full bg-gradient-to-r from-white to-gray-300 text-black font-medium transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]">
            <Sparkles className='size-5 mt-1'/>
            <span className='text-lg font-semibold' onClick={() => signIn("github")}>Connect GitHub</span>
          </button>

          <button onClick={() => signIn("github")} className="px-6 py-3 bg-black shadow-lg shadow-cyan-700 rounded-full border-2 border-grey-900">
            View On GitHub
          </button>
        </div>

      </div>
      <motion.div
        initial={{ opacity: 0, x: "-100vw", rotateX: 45 }}
        animate={{ opacity: 0.6, x: "-50%", rotateX: 45 }}
        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}

        style={{ transformPerspective: 1200 }}

        className="absolute bottom-[-150px] left-1/2 w-[1000px] pointer-events-none"
      >
        <img src="/PR.png" alt="" className='rounded-xl shadow-2xl border border-white/10' />
      </motion.div>

    </section>
  );
}