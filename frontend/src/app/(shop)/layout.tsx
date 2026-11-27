import { Navbar } from "@/features/layout/Navbar";
import type { ReactNode } from "react";

export default function ShopLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
    </>
  );
}
