import Link from "next/link";
import { cn } from "@/lib/utils";

export function PrimaryLink({
  href,
  children,
  className,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "black" | "outline" | "ghost" | "secondary";
}) {
  const styles = {
    primary:
      "min-h-16 rounded-full bg-primary text-base font-semibold text-white shadow-md hover:bg-[#4a76b1] active:scale-[0.98]",
    black:
      "min-h-12 rounded-full bg-[#18181b] text-[13px] font-bold text-white shadow-sm hover:bg-black active:scale-95",
    outline:
      "min-h-14 rounded-full border border-border bg-white text-base font-semibold",
    ghost: "min-h-12 rounded-full text-sm font-semibold text-muted-foreground",
    secondary:
      "min-h-14 rounded-full bg-[#ffdd67] text-base font-semibold text-[#3d3200]",
  } as const;

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex w-full items-center justify-center gap-2 px-5 transition",
        styles[variant],
        className
      )}
    >
      {children}
    </Link>
  );
}
