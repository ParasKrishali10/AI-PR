import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { fetchUserRepos } from "@/app/lib/github";
import { NextResponse } from "next/server";

export async function GET(){
    const session=await getServerSession(authOptions)
    if(!session || !(session as any).accessToken){
        return NextResponse.json({error:"Unauthorized"},{status:401})
    }

    try{
        const repos=await fetchUserRepos((session as any).accessToken)
        console.log(repos)
        return NextResponse.json(repos)
    }catch(error){
        return NextResponse.json({error:"Failed to load repos"},{status:500})
    }
}