import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Banana God | $BGOD",
  description:
    "Banana God — the chosen banana. A community-driven meme coin on Solana.",
  keywords: [
    "Banana God",
    "BGOD",
    "Solana",
    "meme coin",
    "crypto",
    "memecoin",
  ],
  openGraph: {
    title: "Banana God | $BGOD",
    description:
      "The chosen banana has arrived. All hail Banana God.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Banana God | $BGOD",
    description:
      "The chosen banana has arrived. All hail Banana God.",
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