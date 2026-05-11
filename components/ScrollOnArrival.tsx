"use client";

import { useEffect } from "react";

const PENDING_SCROLL_KEY = "hf:pendingScrollTo";

export default function ScrollOnArrival() {
  useEffect(() => {
    const id = sessionStorage.getItem(PENDING_SCROLL_KEY);
    if (!id) return;
    sessionStorage.removeItem(PENDING_SCROLL_KEY);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (!el) return;
        const top = el.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top, behavior: "smooth" });
      });
    });
  }, []);

  return null;
}
