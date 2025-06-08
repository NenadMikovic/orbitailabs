import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type EmailPayload = {
  to: string;
  subject: string;
  html: string;
  type?: "support" | "transactional"; // optional, defaults to transactional
};

export const sendEmail = async ({
  to,
  subject,
  html,
  type = "transactional",
}: EmailPayload) => {
  const from =
    type === "support"
      ? process.env.EMAIL_FROM_SUPPORT
      : process.env.EMAIL_FROM_NOREPLY;

  return await resend.emails.send({
    from: `OrbitAI Labs <${from}>`,
    to,
    subject,
    html,
  });
};
