'use client';

import { Suspense } from "react";
import VerifyEmailClient from "@/components/VerifyEmailClient";

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={<div className="text-white text-center pt-10">Verifying email...</div>}>
      <VerifyEmailClient />
    </Suspense>
  );
}
