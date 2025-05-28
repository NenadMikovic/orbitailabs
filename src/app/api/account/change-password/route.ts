import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/auth";
import { prisma } from "@/libs/prismaDB";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { currentPassword, newPassword } = await req.json();

  if (!currentPassword || !newPassword) {
    return NextResponse.json({ error: "Missing password fields" }, { status: 400 });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user || !user.password) {
      return NextResponse.json({ error: "User not found or missing password" }, { status: 404 });
    }

    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return NextResponse.json({ error: "Current password is incorrect" }, { status: 400 });
    }

    const hashed = await bcrypt.hash(newPassword, 10);

    await prisma.user.update({
      where: { email: session.user.email },
      data: { password: hashed },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Password update error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
