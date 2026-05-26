import { prisma } from "@/app/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest){
    const session=await getServerSession()
    const userId=session?.user.id
    if(!userId){
        return NextResponse.json({message:"Unauthorized"},{status:401})
    }
    let settings=await prisma.settings.findFirst({
        where:{userId}
    })
    if(!settings){
        settings=await prisma.settings.create({
            data:{
                userId,
                ignoredPaths:["test/","__tests__/"],
                allowedExtensions:[".ts",".js"]
            }
        })
    }

    return NextResponse.json(settings)
}

export async function POST(req: NextRequest) {
  const session = await getServerSession()
  const user=await prisma.user.findFirst({
    where:{name:session?.user.name}
  })
  // console.log(session)
  const userId=user?.githubId
  const body=await req.json()
  // console.log("Received settings update:", body)
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
const mappedData = {
  enableDependencyRisk: body.detectDependencyChanges,
  enableAuthRisk: body.detectAuthMiddlewareChanges,
  enableMaliciousRisk: body.detectMaliciousPatterns,
  enableEval: body.detectEvalUsage,
  enableExec: body.detectExecSpawnUsage,
  enableChildProcess: body.detectChildProcessUsage,

};
  const updated=await prisma.settings.upsert({
    where:{userId},
    update:mappedData,
    create:{
      userId,
      ...mappedData
    }

  })
  console.log("Updated settings:", updated)
  return NextResponse.json(updated)
}