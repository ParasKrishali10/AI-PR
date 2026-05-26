import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest){
    const id=req.nextUrl.searchParams.get("id")
    if(!id){
        return NextResponse.json({message:"ID is required"},{status:400})
    }
    const pr=await prisma.pullRequest.findUnique({
        where:{id}
    })
    if (!pr) {
  return NextResponse.json({ message: "PR not found" }, { status: 404 });
}

    const repo=await prisma.repository.findUnique({
        where:{id:pr?.repoId}
    })

    const prRisk=await prisma.pullRequestRisk.findUnique({
        where:{pullRequestId:id}
    })
    const ans={...pr,repoName:repo?.fullName,affectedFiles:prRisk?.affectedFiles ?? []}
    if(!pr){
        return NextResponse.json({message:"PR not found"},{status:404})
    }
    return NextResponse.json(
  JSON.parse(
    JSON.stringify(ans, (_, value) =>
      typeof value === "bigint" ? value.toString() : value
    )
  )
)
}