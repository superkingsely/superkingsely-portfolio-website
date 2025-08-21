"use client";
import { useEffect, useState } from "react";

export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return; // SSR guard

    const media = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    console.log(media,'media')
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);

    // initial value
    setIsMobile(media.matches);

    // subscribe
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [breakpoint]);

  return isMobile;
}
