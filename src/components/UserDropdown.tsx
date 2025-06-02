"use client";

import { useState, useRef, useEffect } from "react";
import { signOut } from "next-auth/react";
import Link from "next/link";

export default function UserDropdown({ name }: { name?: string | null }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <div ref={wrapperRef}>
      <button
        onClick={() => setOpen(true)}
        className="text-sm text-white hover:text-opacity-75 px-4 py-2 rounded-md bg-dark border border-white/20"
      >
        {name ?? "Account"}
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="bg-dark w-[90%] max-w-sm p-6 rounded-md border border-white/10 shadow-lg text-white space-y-3">
            <h2 className="text-lg mb-2">Dashboard</h2>

            <Link
              href="/account"
              className="block px-4 py-2 text-sm rounded hover:bg-white/10"
              onClick={() => setOpen(false)}
            >
              My Account
            </Link>

            <button
              onClick={() => {
                setOpen(false);
                signOut();
              }}
              className="w-full text-left px-4 py-2 text-sm rounded hover:bg-white/10"
            >
              Sign Out
            </button>

            <button
              onClick={() => setOpen(false)}
              className="block w-full text-center text-sm text-white/70 hover:text-white mt-2"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
