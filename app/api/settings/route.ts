import { prisma } from "@/app/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest,res:NextResponse){
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

export async function POST(req: Request) {
  const session = await getServerSession()
  const userId = session?.user?.id

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const body = await req.json()

  const updated = await prisma.settings.upsert({
    where:{userId},
    update: body,
    create: {
      userId,
      ...body
    }
  })

  return NextResponse.json(updated)
}