'use client';

import { useSession } from 'next-auth/react';

export default function AccountClient() {
  const { data: session } = useSession();

  if (!session) return <p>Loading...</p>;

  return (
    <div>
      <h1>Welcome, {session.user?.name}</h1>
      {/* Your account update form will go here */}
    </div>
  );
}
