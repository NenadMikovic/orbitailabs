'use client';

import { useSession } from 'next-auth/react';

export default function AccountClient() {
  const { data: session, status } = useSession();

  if (status === 'loading') return <p>Loading...</p>;
  if (!session) return <p>You must be logged in.</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Welcome, {session.user?.name || session.user?.email}</h1>
    </div>
  );
}
