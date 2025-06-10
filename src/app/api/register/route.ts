import { prisma } from "@/libs/prismaDB";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { nanoid } from "nanoid";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, password } = body;

  if (!name || !email || !password) {
    return new NextResponse("Missing Fields", { status: 400 });
  }

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return new NextResponse("Email already exists", { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const verifyToken = nanoid(32);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      verifyToken,
      emailVerified: null, // make sure it's not pre-verified
    },
  });

  await resend.emails.send({
    from: `OrbitAI Labs <${process.env.EMAIL_FROM_NOREPLY}>`,
    to: email,
    subject: "Confirm your OrbitAI Labs account",
    html: `
      <div style="font-family:sans-serif;font-size:16px;color:#111;">
        <h2>Welcome to OrbitAI Labs, ${name || "Explorer"} 👋</h2>
        <p>Thanks for signing up! Please confirm your email to activate your account:</p>
        <p>
          <a href="${process.env.NEXT_PUBLIC_BASE_URL}/api/verify-email?token=${verifyToken}"
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

  return NextResponse.json({ message: "Confirmation email sent" }, { status: 200 });
}
