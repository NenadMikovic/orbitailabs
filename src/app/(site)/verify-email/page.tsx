import { Suspense } from "react";
import dynamic from "next/dynamic";

// Dynamically import the client-only component
const VerifyEmailClient = dynamic(() => import("@/components/VerifyEmailClient"), { ssr: false });

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={<div className="text-white text-center pt-10">Verifying email...</div>}>
      <VerifyEmailClient />
    </Suspense>
  );
}
