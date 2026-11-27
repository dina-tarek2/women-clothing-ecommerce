"use client";

import { useEffect, useId, useState } from "react";
import { ROUTES } from "@/config/routes";
import { LinkButton } from "@/shared/components/atoms/LinkButton";
import { NavLink } from "./NavLink";
import { navItem } from "@/config/navigation";
import { CloseIcon, MenuIcon } from "../atoms/Icons";

type MobileMenuProps = {
  items: navItem[];
};

export function MobileMenu({ items }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-9 w-9 items-center justify-center rounded-full text-ink hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40"
      >
        {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
      </button>

      {open && (
        <div
          id={panelId}
          className="absolute inset-x-0 top-full border-b border-line bg-white shadow-sm"
        >
          <nav
            aria-label="Mobile navigation"
            className="mx-auto flex max-w-[1440px] flex-col px-4 py-2"
          >
            {items.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                onClick={close}
                className="border-b border-line py-3.5 text-base"
              >
                {item.label}
              </NavLink>
            ))}

            <LinkButton
              href={ROUTES.login}
              variant="secondary"
              onClick={close}
              className="my-4 w-full"
            >
              Sign in
            </LinkButton>
          </nav>
        </div>
      )}
    </div>
  );
}