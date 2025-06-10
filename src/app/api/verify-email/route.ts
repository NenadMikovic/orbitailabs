import { prisma } from "@/libs/prismaDB";
import { sendEmail } from "@/libs/email";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token");

  if (!token) {
    return NextResponse.json({ error: "Missing token" }, { status: 400 });
  }

  const user = await prisma.user.findFirst({
    where: { verifyToken: token },
  });

  if (!user) {
    return NextResponse.json({ error: "Invalid or expired token" }, { status: 400 });
  }

  await prisma.user.update({
    where: { id: user.id },
    data: {
      emailVerified: new Date(),
      verifyToken: null,
    },
  });

  return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/verify-email?token=${token}`);

}

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ error: "Email is required." }, { status: 400 });
  }

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    return NextResponse.json({ error: "User not found." }, { status: 404 });
  }

  if (user.emailVerified) {
    return NextResponse.json({ message: "Email already verified." });
  }

  const token = crypto.randomUUID();
  const verifyUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/verify-email?token=${token}`;

  await prisma.user.update({
    where: { id: user.id },
    data: { verifyToken: token },
  });

  await sendEmail({
    to: email,
    subject: "Confirm your OrbitAI Labs account",
    html: `
      <div style="font-family:sans-serif;font-size:16px;color:#111;">
        <h2>Welcome to OrbitAI Labs, ${user.name || "Explorer"} 👋</h2>
        <p>Thanks for signing up! Please confirm your email to activate your account:</p>
        <p>
          <a href="${verifyUrl}"
             style="background:#9D00FF;color:white;padding:10px 20px;border-radius:6px;text-decoration:none;">
            Verify My Email
          </a>
        </p>
        <p>This link will expire in 24 hours.</p>
        <br />
        <p>— OrbitAI Labs Team</p>
      </div>
    `,
  });

  return NextResponse.json({ success: true });
}
