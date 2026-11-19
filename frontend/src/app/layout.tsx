import type { Metadata } from "next";
import { Inter, Satisfy } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const script = Satisfy({ subsets: ["latin"], weight: "400", variable: "--font-script" });

export const metadata: Metadata = {
  title: siteConfig.name,
  description: "Covered, chic, never plain",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${script.variable}`}>
      <body className="font-sans text-ink antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}