import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HiFriction",
  description: "A social network that pushes back.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
