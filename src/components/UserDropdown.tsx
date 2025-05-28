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
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        className="text-sm text-white hover:text-opacity-75 px-4 py-2 rounded-md bg-dark border border-white/20"
      >
        {name ?? "Account"}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 rounded-md bg-dark border border-white/10 shadow-lg z-50">
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
  );
}
