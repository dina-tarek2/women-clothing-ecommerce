import { ROUTES } from "./routes";

export type navItem = { label: string; href: string };

export const mainNav: navItem[] = [
  { label: "Shop", href: ROUTES.shop },
  { label: "Sale", href: ROUTES.sale },
  { label: "Wishlist", href: ROUTES.wishlist },
  { label: "About & Help", href: ROUTES.about },
];
