"use client";

import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";
import { TextLink } from "@/shared/components/atoms/TextLink";

type NavLinkProps = Omit<ComponentProps<typeof TextLink>, "active"> & {
  href: string;
};

export function NavLink({ href, ...props }: NavLinkProps) {
  const pathname = usePathname();
  const active = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return <TextLink href={href} active={active} {...props} />;
}