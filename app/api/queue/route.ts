import { NextResponse } from "next/server";
import { getMockQueueSnapshot } from "@/app/lib/mockDashboardStore";

export async function GET() {
  const snapshot = getMockQueueSnapshot();
  return NextResponse.json(snapshot);
}

