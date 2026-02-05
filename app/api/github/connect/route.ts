import { getServerSession } from "next-auth"
import { authOptions } from "../../auth/[...nextauth]/route"
import { NextResponse } from "next/server"
import { prisma } from "@/app/lib/prisma"

export async function POST(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const { repoId, fullName, owner, installationId } = await req.json()
    const githubId = (session as any).githubId
const repo = await prisma.repository.upsert({
  where: { githubRepoId: repoId },

  update: {
    fullName,
    owner,
    installationId,
    user: {
      connect: { githubId }
    }
  },

  create: {
    githubRepoId: repoId,
    fullName,
    owner,
    installationId:0,
    user: {
      connectOrCreate: {
        where: { githubId },
        create: {
          githubId,
          name: session.user?.name
        }
      }
    }
  }
})


    console.log("Saved repo:", repo)
    return NextResponse.json(repo)

  } catch (error) {
    console.log("Error saving repo:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
