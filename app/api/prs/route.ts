import { NextRequest, NextResponse } from "next/server";
import {
  getMockPRDetail,
  getMockPRs,
  simulateMockWebhookNewPR,
} from "@/app/lib/mockDashboardStore";
import { prisma } from "@/app/lib/prisma";
import { prRiskQueue } from "@/app/lib/queue";
import { PullRequestSummary } from "@/app/lib/dashboardTypes";

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  if (!id) {
      return NextResponse.json(
        { message: "ID is required" },
        { status: 400 }
      );
    }
    const user=await prisma.user.findUnique({
      where:{githubId:id}
    })

  if (user?.id) {
    const detail =await prisma.pullRequest.findMany({
      where:{
        repository:{
          userId:user.id
        },
        state:"merged"
      },include:{
        repository:true,
      }
    })
const formatted: PullRequestSummary[] = detail.map((pr) => ({
  id: pr.id,
  repoId: Number(pr.repoId),
  repoName: pr.repository.fullName,
  title: pr.title,
  author: pr.author,
  status: "completed",
  reviewSummary: "AI analyzed",
  updatedAt: pr.createdAt.toISOString(),
  createdAt: pr.createdAt.toISOString(),
  prNumber: pr.prNumber,
}));

  console.log(detail)
  console.log(formatted)

    const counts=await prRiskQueue.getJobCounts()
    console.log(counts)
    const analyzed=await counts.completed
    const pending=await counts.waiting
    const analyzing=counts.active
    if (!detail) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json({prs:formatted,analyzed,pending,analyzing});
  }

  return NextResponse.json(getMockPRs());
}

export async function POST(req: NextRequest) {
  const body = (await req.json().catch(() => null)) as
    | { repoId?: number; prNumber?: number }
    | null;

  const repoId = body?.repoId;
  const prNumber = body?.prNumber;

  if (typeof repoId !== "number" || typeof prNumber !== "number") {
    return NextResponse.json(
      { error: "Missing repoId/prNumber. Expected JSON: { repoId, prNumber }" },
      { status: 400 },
    );
  }

  const result = simulateMockWebhookNewPR({ repoId, prNumber });
  return NextResponse.json({ ok: true, ...result });
}

