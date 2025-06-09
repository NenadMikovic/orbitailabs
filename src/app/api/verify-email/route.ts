import { prisma } from "@/libs/prismaDB";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token");

  if (!token) {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/signin?error=MissingToken`);
  }

  const user = await prisma.user.findFirst({
    where: { verifyToken: token },
  });

  if (!user) {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/signin?error=InvalidOrExpiredToken`);
  }

  await prisma.user.update({
    where: { id: user.id },
    data: {
      emailVerified: new Date().toISOString(),
      verifyToken: null,
    },
  });

  return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/signin?verified=true`);
}
