import { NextRequest,NextResponse } from "next/server";

export async function GET(req:NextRequest)
{
    const installationId=req.nextUrl.searchParams.get("installation_id")
      console.log("✅ Installation ID:", installationId)
  return NextResponse.json({ installationId })
}