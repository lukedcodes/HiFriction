"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import styles from "./Challenges.module.css";

export default function ChallengeFeed({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setPaused(!entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.feed} ${paused ? styles.paused : ""}`}
      aria-label="Example challenges"
    >
      <div className={styles.feedTrack}>{children}</div>
    </div>
  );
}
