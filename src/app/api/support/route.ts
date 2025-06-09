// /src/app/api/support/route.ts

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    const data = await resend.emails.send({
      from: `OrbitAI Labs <${process.env.EMAIL_FROM_SUPPORT}>`,
      to: "support@orbitailabs.com",
      subject: `Support Request from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family:Arial,sans-serif;font-size:14px;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong><br>${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ message: "Request sent", data }, { status: 200 });
  } catch (error) {
    console.error("Error sending support request:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
