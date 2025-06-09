// pages/api/support.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    await resend.emails.send({
      from: `OrbitAI Support <${process.env.EMAIL_FROM_SUPPORT}>`,
      to: "support@orbitailabs.com",
      subject: `New Support Request from ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 16px;">
          <h2>New Support Ticket</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br />")}</p>
        </div>
      `,
      replyTo: email,
    });

    return res.status(200).json({ message: "Support request sent successfully" });
  } catch (error: any) {
    console.error("Support email error:", error);
    return res.status(500).json({ message: "Failed to send support request" });
  }
}
