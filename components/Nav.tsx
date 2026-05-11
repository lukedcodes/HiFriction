"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { menuItems } from "@/lib/menu";
import styles from "./Nav.module.css";

const PENDING_SCROLL_KEY = "hf:pendingScrollTo";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    function onPointer(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointer);
    };
  }, [open]);

  function handleWaitlistClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    if (pathname === "/") {
      smoothScrollTo("waitlist");
    } else {
      sessionStorage.setItem(PENDING_SCROLL_KEY, "waitlist");
      router.push("/");
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="/" aria-label="Hi Friction home" className={styles.brand}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/HiFriction-Logo-Dark.png" alt="Hi Friction" height={36} style={{ width: "auto" }} />
        </a>

        <div ref={wrapRef} className={styles.actions}>
          <a href="/#waitlist" onClick={handleWaitlistClick} className={styles.joinBtn}>
            Join Waitlist
          </a>
          <button
            type="button"
            className={styles.menuToggle}
            aria-expanded={open}
            aria-controls="primary-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <span className={styles.bar} aria-hidden="true" />
            <span className={styles.bar} aria-hidden="true" />
            <span className={styles.bar} aria-hidden="true" />
          </button>

          {open && (
            <nav id="primary-menu" className={styles.dropdown} aria-label="Primary">
              <ul className={styles.dropdownList}>
                {menuItems.map(({ href, label }) => (
                  <li key={href}>
                    <a href={href} className={styles.dropdownLink} onClick={() => setOpen(false)}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}

function smoothScrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({ top, behavior: "smooth" });
}
