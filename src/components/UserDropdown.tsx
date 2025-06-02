"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function UserDropdown() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  if (loading) return null;

  return (
    <div className="flex gap-4 items-center">
      {!session ? (
        <>
          <button
            onClick={() => signIn()}
            className="text-sm px-4 py-2 rounded-md bg-dark text-white border border-white/20 hover:bg-white/10 transition"
          >
            Sign In
          </button>
          <Link
            href="/sign-up"
            className="text-sm px-4 py-2 rounded-md bg-white text-dark font-semibold hover:opacity-90 transition"
          >
            Sign Up
          </Link>
        </>
      ) : (
        <>
          <Link
            href="/account"
            className="text-sm px-4 py-2 rounded-md bg-dark text-white border border-white/20 hover:bg-white/10 transition"
          >
            Dashboard
          </Link>
          <button
            onClick={() => signOut()}
            className="text-sm px-4 py-2 rounded-md bg-white text-dark font-semibold hover:opacity-90 transition"
          >
            Sign Out
          </button>
        </>
      )}
    </div>
  );
}
