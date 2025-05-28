import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/auth";
import { NextResponse } from "next/server";
import { prisma } from "@/libs/prismaDB";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: { name: true, email: true, location: true },
  });

  return NextResponse.json(user);
}
