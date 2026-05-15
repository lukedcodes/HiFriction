"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { track } from "@/lib/analytics";
import styles from "./CookieToast.module.css";

const CONSENT_KEY = "hf_cookie_consent";
const GA_ID = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;

function grantConsent() {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("consent", "update", { analytics_storage: "granted" });
}

export default function CookieToast() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored === "true") {
      grantConsent();
    } else if (stored !== "false") {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(CONSENT_KEY, "true");
    grantConsent();
    setVisible(false);
    track("consent_accepted");
  }

  function decline() {
    localStorage.setItem(CONSENT_KEY, "false");
    setVisible(false);
  }

  return (
    <>
      {GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied'});gtag('js',new Date());gtag('config','${GA_ID}',{send_page_view:false});`}
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
