"use client";

import { useEffect, useRef, useState, type SVGProps } from "react";
import { challenges, type Challenge } from "./heroChallenges";
import styles from "./Hero.module.css";

const CYCLE_MS = 4000;
/** Countdown shown on each challenge card, in seconds. Resets every cycle. */
const COUNTDOWN_SECONDS = 166; // 2:46

/** setInterval that pauses while the tab is hidden. */
function useVisibleInterval(tick: () => void, ms: number) {
  const tickRef = useRef(tick);
  tickRef.current = tick;
  useEffect(() => {
    let id: number | undefined;
    const start = () => {
      if (id === undefined) id = window.setInterval(() => tickRef.current(), ms);
    };
    const stop = () => {
      if (id !== undefined) {
        window.clearInterval(id);
        id = undefined;
      }
    };
    const onVisibility = () => (document.hidden ? stop() : start());

    if (!document.hidden) start();
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [ms]);
}

export default function HeroPhone() {
  const [index, setIndex] = useState(0);
  const [seconds, setSeconds] = useState(COUNTDOWN_SECONDS);

  useVisibleInterval(() => setIndex((i) => (i + 1) % challenges.length), CYCLE_MS);
  useVisibleInterval(() => setSeconds((s) => (s > 0 ? s - 1 : 0)), 1000);

  useEffect(() => {
    setSeconds(COUNTDOWN_SECONDS);
  }, [index]);

  const current = challenges[index];
  const next = challenges[(index + 1) % challenges.length];

  return (
    <div className={styles.phone} aria-hidden="true">
      <div className={styles.phoneScreen}>
        <Backdrop key={index} challenge={current} />
        {next.video && (
          <video
            key={`preload-${next.video}`}
            className={styles.phonePreloader}
            src={next.video}
            preload="auto"
            muted
            playsInline
            aria-hidden="true"
          />
        )}

        <div className={styles.statusBar}>
          <CloseIcon className={styles.statusIcon} />
          <span className={styles.tokensPill}>
            <span className={styles.tokensDot} />
            340
          </span>
        </div>

        <div key={`card-${index}`} className={styles.challengeCard}>
          <div className={styles.challengeTop}>
            <span className={styles.challengeTag}>Video Challenge</span>
            <span className={styles.timerPill}>{formatTime(seconds)}</span>
          </div>
          <p className={styles.challengePrompt}>{current.prompt}</p>
        </div>

        <div className={styles.cameraBar}>
          <FlashIcon className={styles.cameraIcon} />
          <span className={styles.captureBtn} />
          <FlipIcon className={styles.cameraIcon} />
        </div>
      </div>
    </div>
  );
}

function formatTime(total: number) {
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function Backdrop({ challenge }: { challenge: Challenge }) {
  if (challenge.video) {
    return (
      <video
        className={styles.phoneBackdrop}
        src={challenge.video}
        poster={challenge.image}
        autoPlay
        muted
        loop
        playsInline
      />
    );
  }
  if (challenge.image) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img className={styles.phoneBackdrop} src={challenge.image} alt="" />
    );
  }
  return (
    <div
      className={styles.phoneBackdrop}
      style={{ backgroundImage: challenge.backdrop }}
    />
  );
}

function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...props}>
      <path d="M6 6l12 12M18 6l-12 12" />
    </svg>
  );
}

function FlashIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 4h6v5h2l-7 11v-7H8z" />
    </svg>
  );
}

function FlipIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 8a8 8 0 0 1 14-3" />
      <path d="M18 3v4h-4" />
      <path d="M20 16a8 8 0 0 1-14 3" />
      <path d="M6 21v-4h4" />
    </svg>
  );
}
