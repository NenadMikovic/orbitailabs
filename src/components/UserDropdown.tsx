"use client";

import { useState, useRef, useEffect } from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function UserDropdown({ name }: { name?: string | null }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavigate = (e: React.MouseEvent, href: string) => {
    e.stopPropagation(); // Stop event propagation
    setOpen(false);
    setTimeout(() => router.push(href), 100); // Small delay to ensure state updates
  };

  return (
    <>
      {/* Desktop Dropdown */}
      <div className="relative z-50 hidden sm:inline-block" ref={wrapperRef}>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setOpen(!open);
          }}
          className="text-sm text-white hover:text-opacity-75 px-4 py-2 rounded-md bg-dark border border-white/20"
        >
          {name ?? "Account"}
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-48 rounded-md bg-dark border border-white/10 shadow-lg">
            <button
              onClick={(e) => handleNavigate(e, "/account")}
              className="w-full text-left px-4 py-2 text-sm text-white hover:bg-white/10"
            >
              My Account
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpen(false);
                setTimeout(() => signOut(), 100);
              }}
              className="w-full text-left px-4 py-2 text-sm text-white hover:bg-white/10"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>

      {/* Mobile Modal - unchanged */}
      <div className="block sm:hidden" ref={wrapperRef}>
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
              <button
                onClick={(e) => handleNavigate(e, "/account")}
                className="w-full text-left px-4 py-2 text-sm text-white hover:bg-white/10"
              >
                My Account
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen(false);
                  setTimeout(() => signOut(), 100);
                }}
                className="w-full text-left px-4 py-2 text-sm text-white hover:bg-white/10"
              >
                Sign Out
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen(false);
                }}
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