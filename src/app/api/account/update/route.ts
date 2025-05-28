import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/auth";
import { NextResponse } from "next/server";
import { prisma } from "@/libs/prismaDB";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { name, email, location } = await req.json();

  try {
    await prisma.user.update({
      where: { email: session.user.email },
      data: { name, email, location },
    });

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("Update error:", e);
    return NextResponse.json({ error: "Failed to update user." }, { status: 500 });
  }
}
