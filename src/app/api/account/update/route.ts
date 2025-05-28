import { authOptions } from "@/libs/auth";
import { getServerSession } from "next-auth";
import { prisma } from "@/libs/prismaDB";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const data = await req.json();

  try {
    const updatedUser = await prisma.user.update({
      where: {
        email: session.user.email,
      },
      data: {
        name: data.name,
        email: data.email,
        password: data.password, // Make sure to hash this in production!
        location: data.location,
      },
    });

    return NextResponse.json({ message: "Account updated", user: updatedUser });
  } catch (error) {
    return NextResponse.json({ message: "Update failed", error }, { status: 500 });
  }
}
