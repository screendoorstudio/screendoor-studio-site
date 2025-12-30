import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import "./globals.css";

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
});

export const metadata: Metadata = {
  title: "Screendoor Studio",
  description: "Words, music, video, design, products, marketing, business, non-profits, consulting, AI, research.",
  openGraph: {
    title: "Screendoor Studio",
    description: "Words, music, video, design, products, marketing, business, non-profits, consulting, AI, research.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={vt323.variable}>
      <body className="antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
