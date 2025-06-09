"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function VerifyEmailPage() {
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

    const verifyEmail = async () => {
      try {
        const res = await fetch(`/api/verify-email?token=${token}`);
        const data = await res.json();

        if (res.ok) {
          toast.success("Email verified successfully!");
          setMessage("Redirecting to login...");
          setTimeout(() => {
            router.push("/auth/signin?verified=true");
          }, 2000);
        } else {
          toast.error(data.error || "Verification failed.");
          setMessage(data.error || "Invalid or expired link.");
        }
      } catch (err) {
        toast.error("Something went wrong.");
        setMessage("Server error.");
      } finally {
        setLoading(false);
      }
    };

    verifyEmail();
  }, []);

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
