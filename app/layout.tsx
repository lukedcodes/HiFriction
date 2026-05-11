import type { Metadata } from "next";
import { Noto_Serif, Noto_Sans } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CookieToast from "@/components/CookieToast";
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
  title: "Hi Friction — The Human Social Network",
  description:
    "Social media was better when humans were posting. Hi Friction verifies every user, every post, every day. Bots aren't welcome here.",
  metadataBase: new URL("https://hifriction.com"),
  openGraph: {
    title: "Hi Friction — The Human Social Network",
    description:
      "Social media was better when humans were posting. Hi Friction verifies every user, every post, every day. Bots aren't welcome here.",
    url: "https://hifriction.com",
    siteName: "Hi Friction",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@hifriction",
    title: "Hi Friction — The Human Social Network",
    description: "Social media was better when humans were posting.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

const jsonLdOrg = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Hi Friction",
  url: "https://hifriction.com",
  logo: "https://hifriction.com/HiFriction-Logo-Light.png",
  description: "The bot-free social network where every user is verified human.",
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
      </body>
    </html>
  );
}
