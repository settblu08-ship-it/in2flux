import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Banana God | $BGOD",
  description:
    "Banana God — the chosen banana. A community-driven meme coin on Solana.",
  keywords: [
    "Banana God",
    "$BGOD",
    "BGOD",
    "Solana",
    "meme coin",
    "memecoin",
    "crypto",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Banana God | $BGOD",
    description:
      "The jungle has a ruler. The banana has spoken. All hail Banana God.",
    type: "website",
    siteName: "Banana God",
  },
  twitter: {
    card: "summary_large_image",
    title: "Banana God | $BGOD",
    description:
      "The jungle has a ruler. The banana has spoken. All hail Banana God.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="theme-color"
          content="#030303"
        />

        <meta
          name="mobile-web-app-capable"
          content="yes"
        />

        <meta
          name="apple-mobile-web-app-capable"
          content="yes"
        />

        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </head>

      <body>{children}</body>
    </html>
  );
}