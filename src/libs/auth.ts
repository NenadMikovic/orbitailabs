import { prisma } from "@/libs/prismaDB";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import bcrypt from "bcrypt";
import { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/auth/signin",
  },
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Jhondoe" },
        password: { label: "Password", type: "password" },
        username: { label: "Username", type: "text", placeholder: "Jhon Doe" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Please enter an email or password");
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user || !user?.password) {
          throw new Error("No user found");
        }

        const passwordMatch = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!passwordMatch) {
          throw new Error("Incorrect password");
        }

        if (!user.emailVerified) {
          throw new Error("Please verify your email before logging in.");
    }

        return user;
      },
    }),

    EmailProvider({
      from: process.env.EMAIL_FROM_NOREPLY,
      async sendVerificationRequest({ identifier, url, provider }) {
        const html = `
          <div style="background:#0b0f1a;padding:24px;border-radius:12px;font-family:Arial;color:white;">
            <h2 style="color:#9D00FF;">OrbitAI Labs Login 🔐</h2>
            <p>Click below to access your dashboard:</p>
            <a href="${url}" style="display:inline-block;margin-top:16px;background:linear-gradient(to right,#9D00FF,#00C2FF);padding:12px 24px;border-radius:6px;color:white;text-decoration:none;">Sign In</a>
            <p style="margin-top:24px;font-size:12px;color:#888;">If you didn’t request this email, just ignore it.</p>
          </div>
        `;

        await resend.emails.send({
          from: `OrbitAI Labs <${provider.from}>`,
          to: identifier,
          subject: "Your OrbitAI Magic Login Link",
          html,
          text: `Sign in to OrbitAI Labs:\n${url}`,
        });
      },
    }),

    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      return `${baseUrl}/account`;
    },
  },
};
