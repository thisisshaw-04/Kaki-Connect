import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { VariantProps } from "class-variance-authority";

export function PrimaryLink({
  href,
  children,
  className,
  variant = "default",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: VariantProps<typeof buttonVariants>["variant"];
}) {
  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ variant, size: "lg" }),
        "h-14 w-full gap-2 rounded-full text-base font-semibold tracking-tight transition-transform active:scale-[0.98]",
        variant === "default" &&
          "shadow-[0_12px_24px_-12px_rgba(47,93,151,0.85)]",
        variant === "secondary" && "shadow-[0_10px_20px_-12px_rgba(228,196,81,0.9)]",
        className
      )}
    >
      {children}
    </Link>
  );
}
