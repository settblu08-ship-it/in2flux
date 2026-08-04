import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Banana God | $BGOD",
  description:
    "Worship the banana. Build the legend. Banana God is a community-powered meme coin on Solana.",

  applicationName: "Banana God",

  keywords: [
    "Banana God",
    "$BGOD",
    "BGOD",
    "Solana",
    "meme coin",
    "memecoin",
    "crypto",
  ],

  openGraph: {
    title: "Banana God | $BGOD",
    description:
      "Worship the banana. Build the legend.",
    type: "website",
    siteName: "Banana God",
  },

  twitter: {
    card: "summary_large_image",
    title: "Banana God | $BGOD",
    description:
      "Worship the banana. Build the legend.",
  },
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