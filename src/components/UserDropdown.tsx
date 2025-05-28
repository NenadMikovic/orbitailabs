"use client";

import { useState, useRef, useEffect } from "react";
import { signOut } from "next-auth/react";
import Link from "next/link";

export default function UserDropdown({ name }: { name?: string | null }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className="relative z-50 hidden sm:block" ref={menuRef}>
        <button
          onClick={() => setOpen(!open)}
          className="text-sm text-white hover:text-opacity-75 px-4 py-2 rounded-md bg-dark border border-white/20"
        >
          {name ?? "Account"}
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-48 rounded-md bg-dark border border-white/10 shadow-lg z-50">
            <Link
              href="/account"
              className="block px-4 py-2 text-sm text-white hover:bg-white/10"
              onClick={() => setOpen(false)}
            >
              My Account
            </Link>
            <button
              onClick={() => signOut()}
              className="w-full text-left px-4 py-2 text-sm text-white hover:bg-white/10"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>

      {/* Mobile Modal */}
      <div className="block sm:hidden" ref={menuRef}>
        <button
          onClick={() => setOpen(true)}
          className="text-sm text-white hover:text-opacity-75 px-4 py-2 rounded-md bg-dark border border-white/20"
        >
          {name ?? "Account"}
        </button>

        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
            <div className="bg-dark w-[90%] max-w-sm p-6 rounded-md border border-white/10 shadow-lg">
              <h2 className="text-white text-lg mb-4">Account Menu</h2>
              <Link
                href="/account"
                className="block px-4 py-2 text-sm text-white hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                My Account
              </Link>
              <button
                onClick={() => signOut()}
                className="w-full text-left px-4 py-2 text-sm text-white hover:bg-white/10"
              >
                Sign Out
              </button>
              <button
                onClick={() => setOpen(false)}
                className="mt-4 w-full text-center text-white/70 text-sm hover:text-white"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
