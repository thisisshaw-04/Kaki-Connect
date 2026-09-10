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
        "h-14 w-full rounded-full text-base font-semibold",
        className
      )}
    >
      {children}
    </Link>
  );
}
