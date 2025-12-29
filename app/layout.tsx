import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Screendoor Studio",
  description: "Words, music, video, design, products, marketing, business, non-profits, consulting.",
  openGraph: {
    title: "Screendoor Studio",
    description: "Words, music, video, design, products, marketing, business, non-profits, consulting.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
