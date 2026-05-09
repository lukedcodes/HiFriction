"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import styles from "./Counter.module.css";

export default function Counter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    async function fetch() {
      const { count } = await supabase
        .from("waitlist")
        .select("id", { count: "exact", head: true });
      setCount(count ?? 0);
    }
    fetch();
  }, []);

  if (count === null) return null;

  return (
    <p className={styles.counter} aria-live="polite">
      <span className={styles.dot} aria-hidden="true" />
      <span className={styles.number}>{count.toLocaleString()}</span>
      <span className={styles.label}>humans already in</span>
    </p>
  );
}
