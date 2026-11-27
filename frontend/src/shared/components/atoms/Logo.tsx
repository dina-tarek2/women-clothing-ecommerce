import Link from "next/link";
import { ROUTES } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href={ROUTES.home}
      aria-label={`${siteConfig.name} – home`}
      className={cn("font-logo text-[28px] leading-none text-muted", className)}
    >
      {siteConfig.name}
    </Link>
  );
}