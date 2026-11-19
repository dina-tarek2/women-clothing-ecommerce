import type { ReactNode } from "react";

export default function ShopLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <main className="min-h-screen">{children}</main>
    </>
  );
}