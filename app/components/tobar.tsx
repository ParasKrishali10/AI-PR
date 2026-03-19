"use client"
import { Sparkles } from 'lucide-react';
import axios from 'axios';
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
export default function Topbar(){
    return(
        <div className="font-inter min-w-screen  text-white   w-full bg-gradient-to-r rom-[#091017] via-[#0f1f2a] to-[#091017] px-8 py-4 ">
            <div className='flex justify-between'>
            <div className='flex  gap-2'>
                <Sparkles className='size-6 mt-1'/>
                <h2 className='font-medium text-xl'>

                MergePilot
                </h2>
            </div>
                <div className='flex gap-6 font-medium text-lg text-gray-500 lg:gap-14'>
                    <div>
                        Features
                    </div>
                    <div>
                        Why Us
                    </div>
                    <div>
                        Integration
                    </div>
                    <div>
                        OurProcess
                    </div>

                    <div>
                        FAQ
                    </div>
                </div>
                <div >
                    <button className='font-medium px-6 py-2 rounded-full
bg-[#0f1f2a] text-white
shadow-[0_0_20px_rgba(120,160,255,0.4)]
border border-slate-700 cursor-pointer' onClick={handleConnect}>Connect</button>
                </div>
            </div>

        </div>
    )
}