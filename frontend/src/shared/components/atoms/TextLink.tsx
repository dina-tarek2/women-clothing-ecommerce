import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type TextLinkProps = ComponentProps<typeof Link> & {
  active?: boolean;
};

export function TextLink({ active = false, className, ...props }: TextLinkProps) {
  return (
    <Link
      aria-current={active ? "page" : undefined}
      className={cn(
        "text-[15px] font-medium text-ink transition-colors hover:text-brand",
        active && "text-brand",
        className
      )}
      {...props}
    />
  );
}