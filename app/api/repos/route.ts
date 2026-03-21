import { prisma } from "@/app/lib/prisma";
import { NextRequest,NextResponse } from "next/server";
export async function GET(req: NextRequest) {
  try {
    const id = req.nextUrl.searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { message: "ID is required" },
        { status: 400 }
      );
    }

    const repos = await prisma.repository.findMany({
      where: {userId: id }
    });

    return NextResponse.json({ count: repos });

  } catch (error) {
    return NextResponse.json(
      { message: "Unexpected error happens" },
      { status: 500 }
    );
  }
}