"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function VerifyEmailClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [message, setMessage] = useState("Verifying your email...");

  useEffect(() => {
    const verified = searchParams.get("verified");

    if (verified === "true") {
      setMessage("Email verified! Redirecting to sign-in...");
      setTimeout(() => {
        router.push("/auth/signin?verified=true");
      }, 2000);
    } else {
      setMessage("Invalid verification link.");
    }
  }, [searchParams, router]);

  return (
    <div className="flex items-center justify-center h-screen text-white text-center px-6">
      <div>
        <h1 className="text-2xl font-semibold mb-4">Email Verification</h1>
        <p>{message}</p>
      </div>
    </div>
  );
}
