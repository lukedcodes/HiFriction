"use client";

import { useEffect, useRef, useState } from "react";
import { menuItems } from "@/lib/menu";
import styles from "./Nav.module.css";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);

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

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="/" aria-label="Hi Friction home" className={styles.brand}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/HiFriction-Logo-Dark.png" alt="Hi Friction" width={164} height={36} />
        </a>

        <div ref={wrapRef} className={styles.actions}>
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
