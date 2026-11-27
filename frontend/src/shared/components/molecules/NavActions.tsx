import { ROUTES } from "@/config/routes";
import { Badge } from "@/shared/components/atoms/Badge";
import { LinkButton } from "@/shared/components/atoms/LinkButton";
import { cn } from "@/lib/utils";

type NavActionsProps = {
  cartCount?: number;
  className?: string;
};

export function NavActions({ cartCount = 0, className }: NavActionsProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <LinkButton
        href={ROUTES.login}
        variant="secondary"
        size="md"
        className="hidden md:inline-flex"
      >
        Sign in
      </LinkButton>

      <LinkButton
        href={ROUTES.cart}
        variant="primary"
        size="md"
        aria-label={cartCount > 0 ? `Bag, ${cartCount} items` : "Bag"}
      >
        Bag
        <Badge count={cartCount} />
      </LinkButton>
    </div>
  );
}