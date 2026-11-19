import type { Metadata } from "next";
import { El_Messiri, IBM_Plex_Sans, Satisfy } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

// for texts
const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex",
});

// for headings or titles
const messiri = El_Messiri({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-messiri",
});

const script = Satisfy({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: "Covered, chic, never plain",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plex.variable} ${messiri.variable} ${script.variable}`}>
      <body className="font-sans text-ink antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
