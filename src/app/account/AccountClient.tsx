'use client';

import { useSession } from "next-auth/react";

export default function AccountClient() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;
  if (!session) return <p>You are not logged in.</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Account Settings</h1>
      <p>Welcome, {session.user?.name || "user"}!</p>
      <p>Email: {session.user?.email}</p>
      {/* Form goes here */}
    </div>
  );
}
