"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import styles from "./CookieToast.module.css";

const CONSENT_KEY = "hf_cookie_consent";
const GA_ID = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;

export default function CookieToast() {
  const [visible, setVisible] = useState(false);
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored === "true") {
      setHasConsent(true);
    } else if (stored !== "false") {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(CONSENT_KEY, "true");
    setHasConsent(true);
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(CONSENT_KEY, "false");
    setVisible(false);
  }

  return (
    <>
      {hasConsent && GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
          </Script>
        </>
      )}

      {visible && (
        <div className={styles.toast} role="dialog" aria-label="Cookie consent">
          <p className={styles.message}>
            We use analytics to understand what's working. Nothing creepy.
          </p>
          <div className={styles.actions}>
            <button className={styles.accept} onClick={accept}>
              That's fine
            </button>
            <button className={styles.decline} onClick={decline}>
              No thanks
            </button>
          </div>
        </div>
      )}
    </>
  );
}
