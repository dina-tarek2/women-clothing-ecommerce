import Link from "next/link";
import type { ComponentProps } from "react";
import { buttonClasses, type ButtonStyleProps } from "./button";

type LinkButtonProps = ComponentProps<typeof Link> & ButtonStyleProps;

export function LinkButton({ variant, size, className, ...props }: LinkButtonProps) {
  return <Link className={buttonClasses({ variant, size, className })} {...props} />;
}