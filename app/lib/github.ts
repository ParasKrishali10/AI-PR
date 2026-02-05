import axios from "axios";
import { NextResponse } from "next/server";

export async function fetchUserRepos(accessToken:string){
    try{
        const res=await axios.get("https://api.github.com/user/repos?per_page=50",{
        headers:{
            Authorization:`Bearer ${accessToken}`,
            Accept:"application/vnd.github+json"
        }


    })

        return res.data
    }catch(error)
    {
        return NextResponse.json({message:"Unauthorized"},{status:500})
    }



}