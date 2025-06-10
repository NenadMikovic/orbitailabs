"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function VerifyEmailClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const verified = searchParams.get("verified");

    if (verified === "true") {
      setMessage("Email verified! Redirecting to sign-in...");
      setLoading(false); // ✅ FIX: stop loading
      setTimeout(() => {
        router.push("/auth/signin?verified=true");
      }, 2000);
      return;
    }

    const token = searchParams.get("token");
    if (!token) {
      setMessage("Invalid or missing token.");
      setLoading(false);
      return;
    }

    // Optional: remove this if you're no longer handling token verification here
    setMessage("Unexpected verification state.");
    setLoading(false);
  }, [searchParams, router]);

  return (
    <div className="flex items-center justify-center h-screen text-white text-center px-6">
      {loading ? (
        <p>Verifying your email...</p>
      ) : (
        <div>
          <h1 className="text-2xl font-semibold mb-4">Email Verification</h1>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}
