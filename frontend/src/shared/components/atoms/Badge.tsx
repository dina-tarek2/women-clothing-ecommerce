import { cn } from "@/lib/utils";

type BadgeProps = {
  count: number;
  max?: number;
  className?: string;
};

export function Badge({ count, max = 99, className }: BadgeProps) {
  if (count <= 0) return null;

  return (
    <span
      aria-hidden="true"
      className={cn(
        "ms-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full",
        "bg-white px-1.5 text-xs font-semibold text-brand tabular-nums",
        className
      )}
    >
      {count > max ? `${max}+` : count}
    </span>
  );
}