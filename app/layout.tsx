import type { Metadata } from "next";
import { Noto_Serif, Noto_Sans } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CookieToast from "@/components/CookieToast";
import PageViewTracker from "@/components/PageViewTracker";
import "./globals.css";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto-serif",
  display: "swap",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hi Friction — The Human-Only Social Network",
  description:
    "Hi Friction is a human-only social network. Every user is verified human — not just at signup, but continuously. No bots, no AI. Reserve your username.",
  metadataBase: new URL("https://hifriction.com"),
  openGraph: {
    title: "Hi Friction — The Human-Only Social Network",
    description:
      "Hi Friction is a human-only social network. Every user is verified human — not just at signup, but continuously. No bots, no AI. Reserve your username.",
    url: "https://hifriction.com",
    siteName: "Hi Friction",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@hifriction",
    title: "Hi Friction — The Human-Only Social Network",
    description: "A human-only social network. Social media was better when humans were posting.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

const jsonLdOrg = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Hi Friction",
  url: "https://hifriction.com",
  logo: "https://hifriction.com/HiFriction-Logo-Light.png",
  description: "A human-only social network where every user is continuously verified as human.",
  slogan: "Humans only. We checked.",
  sameAs: [],
};

const jsonLdWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Hi Friction",
  url: "https://hifriction.com",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${notoSerif.variable} ${notoSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <CookieToast />
        <PageViewTracker />
      </body>
    </html>
  );
}
