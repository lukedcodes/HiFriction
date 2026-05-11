"use client";

import { useState, useRef } from "react";
import { supabase } from "@/lib/supabase";
import styles from "./WaitlistForm.module.css";

type AvailabilityState = "idle" | "checking" | "available" | "taken" | "invalid";

function gtag(...args: unknown[]) {
  if (typeof window !== "undefined" && "gtag" in window) {
    (window as { gtag: (...a: unknown[]) => void }).gtag(...args);
  }
}

export default function WaitlistForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [availability, setAvailability] = useState<AvailabilityState>("idle");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState("");
  const checkTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const usernamePattern = /^[a-zA-Z0-9_]{3,20}$/;

  async function checkAvailability(value: string) {
    if (!usernamePattern.test(value)) {
      setAvailability("invalid");
      return;
    }
    setAvailability("checking");
    const { count } = await supabase
      .from("waitlist")
      .select("id", { count: "exact", head: true })
      .ilike("username", value);

    const result = count === 0 ? "available" : "taken";
    setAvailability(result);
    gtag("event", "username_checked", { result });
  }

  function handleUsernameChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value.replace(/[^a-zA-Z0-9_]/g, "").slice(0, 20);
    setUsername(val);
    setAvailability("idle");
    if (checkTimeout.current) clearTimeout(checkTimeout.current);
    if (val.length >= 3) {
      checkTimeout.current = setTimeout(() => checkAvailability(val), 600);
    }
  }

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!usernamePattern.test(username) || !email.includes("@")) return;

    gtag("event", "cta_click", {
      cta_label: "reserve_my_spot",
      page_location: window.location.href,
    });

    setSubmitting(true);
    setServerError("");

    const { error } = await supabase
      .from("waitlist")
      .insert({ username: username.toLowerCase(), email: email.toLowerCase() });

    if (error) {
      if (error.code === "23505") {
        const isDuplicateEmail = error.message.includes("email");
        setServerError(
          isDuplicateEmail
            ? "Looks like you're already in. Good instincts."
            : "Someone just grabbed that one. Humans are fast."
        );
      } else {
        setServerError("Something went wrong. A human is on it.");
      }
    } else {
      setSuccess(true);
      gtag("event", "waitlist_signup", { method: "email" });
    }
    setSubmitting(false);
  }

  if (success) {
    return (
      <div className={styles.successBox} role="status">
        <p className={styles.successText}>
          You're in. <span className={styles.accentAt}>@{username}</span> is
          reserved. You're human. Probably.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form} noValidate>
      <div className={styles.inputGroup}>
        <div className={styles.inputRow}>
          <span className={styles.atPrefix} aria-hidden="true">@</span>
          <input
            type="text"
            className={styles.usernameInput}
            placeholder="username"
            value={username}
            onChange={handleUsernameChange}
            autoComplete="username"
            aria-label="Username"
            aria-describedby="username-feedback"
            minLength={3}
            maxLength={20}
            required
          />
          {availability === "checking" && (
            <span className={styles.spinner} aria-label="Checking..." />
          )}
        </div>

        <p
          id="username-feedback"
          className={`${styles.feedback} ${styles[`feedback-${availability}`] ?? ""}`}
          aria-live="polite"
        >
          {availability === "available" && `@${username} is yours`}
          {availability === "taken" && "That one's gone. Try another."}
          {availability === "invalid" &&
            "3–20 characters, letters, numbers, underscores only."}
        </p>
      </div>

      <input
        type="email"
        className={styles.emailInput}
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoComplete="email"
        aria-label="Email address"
        required
      />

      {serverError && (
        <p className={styles.serverError} role="alert">
          {serverError}
        </p>
      )}

      <button
        type="submit"
        className={styles.cta}
        disabled={submitting || availability === "taken"}
        aria-busy={submitting}
      >
        {submitting ? "Reserving…" : "Reserve my spot →"}
      </button>
    </form>
  );
}
