declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

const CONSENT_KEY = "hf_cookie_consent";

/**
 * Fire a GA4 event.
 *
 * Consent model (GA4 Consent Mode v2):
 * - GA is loaded for everyone with analytics_storage='denied' by default,
 *   so non-consenters still produce anonymous, cookieless page_view pings.
 * - Page views are sent for everyone. All other events are gated on
 *   explicit acceptance so non-consenters get traffic-counting only.
 * - If GA hasn't finished loading yet, the event queues in dataLayer
 *   via the gtag stub and is processed once gtag.js is ready.
 */
export function track(event: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  if (event !== "page_view") {
    const accepted = localStorage.getItem(CONSENT_KEY) === "true";
    if (!accepted) return;
  }

  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function (...args: unknown[]) {
      (window.dataLayer as unknown[]).push(args);
    };
  }
  window.gtag("event", event, params);
}

export {};
