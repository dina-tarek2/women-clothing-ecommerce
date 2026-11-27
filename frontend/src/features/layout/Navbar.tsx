import { mainNav } from "@/config/navigation";
import { Container } from "@/shared/components/atoms/Container";
import { Logo } from "@/shared/components/atoms/Logo";
import { MobileMenu } from "@/shared/components/molecules/MobileMenu";
import { NavActions } from "@/shared/components/molecules/NavActions";
import { NavLink } from "@/shared/components/molecules/NavLink";

type NavbarProps = {
  cartCount?: number;
};

export function Navbar({ cartCount = 0 }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white">
      <Container className="grid h-16 grid-cols-[1fr_auto_1fr] items-center md:h-[72px]">
        <div className="justify-self-start">
          <Logo />
        </div>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 md:flex"
        >
          {mainNav.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2 md:gap-3">
          <NavActions cartCount={cartCount} />
          <MobileMenu items={mainNav} />
        </div>
      </Container>
    </header>
  );
}