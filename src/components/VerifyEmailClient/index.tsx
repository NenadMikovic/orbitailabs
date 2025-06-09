"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function VerifyEmailClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = searchParams.get("token");
    if (!token) {
      setMessage("Invalid or missing token.");
      setLoading(false);
      return;
    }

    const verify = async () => {
  try {
    const res = await fetch(`/api/verify-email?token=${token}`);
    const json = await res.json();

    if (json.success) {
  toast.success("Email verified!");
  setMessage("Redirecting to login...");
  setTimeout(() => router.push("/auth/signin?verified=true"), 2000);
} else {
  toast.error(json.error || "Verification failed.");
  setMessage(json.error || "Invalid or expired link.");
}

  } catch (err: any) {
    // Only show server error if it truly fails to connect
    console.error("Verification API error:", err);
    toast.error("Unexpected error.");
    setMessage("Unexpected error occurred.");
  } finally {
    setLoading(false);
  }
};


    verify();
  }, [searchParams, router]);

  return (
    <div className="flex items-center justify-center h-screen text-white text-center px-6">
      {loading ? (
        <p>Verifying your email...</p>
      ) : (
        <>
          <h1 className="text-2xl font-semibold mb-4">Email Verification</h1>
          <p>{message}</p>
        </>
      )}
    </div>
  );
}
