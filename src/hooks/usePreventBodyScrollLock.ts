"use client";

import { useEffect } from "react";

export function usePreventBodyScrollLock() {
  useEffect(() => {
    const observer = new MutationObserver(() => {
      if (document.body.style.overflow === "hidden") {
        document.body.style.overflow = "auto";
      }
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ["style"] });

    return () => observer.disconnect();
  }, []);
}
