"use client"

import axios from "axios"
import { signIn, signOut, useSession } from "next-auth/react"
import { useEffect, useState } from "react"

interface Owner{
  login:string
  id:number
  avatar_url:string
  url:string
  type:string
}

interface Repo{
  id:number
  name:string
  full_name:string,
  private:boolean,
  owner:Owner
}

export default function Home() {
  const { data: session } = useSession()
  const [repos,setRepos]=useState<Repo[]>([])
  useEffect(()=>{
     if(!session) return

     const fetchRepos=async()=>{
      console.log("Repos fetching")
     const res = await axios.get("/api/github/repos")
console.log("Response data:", res.data)
console.log("Is array:", Array.isArray(res.data))
setRepos(res.data)


     }
     fetchRepos()
  },[session])

    const handleConnect=async(repoId:number,fullName:string,owner:string)=>{
      try{
        const res=await axios.post("/api/github/connect",{
          repoId,
          fullName,
          owner
        })
        console.log(res.data)
        window.location.href="https://github.com/apps/AI-PR-RISK/installations/new"
        alert("succes")
      }catch(error)
      {
        console.log(error)
        alert("error happens")
      }

  }


  if (!session) {
    return (
      <main className="h-screen flex items-center justify-center">
        <button
          onClick={() => signIn("github")}
          className="px-4 py-2 bg-black text-white rounded"
        >
          Login with GitHub
        </button>
      </main>
    )
  }


  return (
    <main className=" bg-cyan-800 h-screen flex flex-col items-center justify-center gap-4">
      <p>Logged in as {session.user?.name}</p>
      <button
        onClick={() => signOut()}
        className="px-4 py-2 bg-red-500 text-white rounded"
      >
        Logout
      </button>
       <ul className="space-y-2 py-20 mb-10">
        {repos.map((repo) => (
          <li
            key={repo.id}
            className="p-3 border rounded flex justify-between items-center"
          >
            <span>{repo.name}</span>
            <span>{repo.full_name}</span>
            {/* <span>{repo.private}</span> */}

            <button onClick={()=>handleConnect(repo.id,repo.full_name,repo.owner.login)}
              className="px-3 py-1 bg-blue-600 text-white rounded text-sm"
            >
              Connect
            </button>
          </li>
        ))}
      </ul>
    </main>
  )
}
