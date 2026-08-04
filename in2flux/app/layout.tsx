import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Banana God | $BGOD",
  description:
    "Banana God is a community-powered meme coin on Solana.",
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