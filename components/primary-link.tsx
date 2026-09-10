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
      "min-h-14 rounded-full bg-[#16181d] text-base font-bold text-white shadow-[0_10px_24px_-12px_rgba(22,24,29,0.55)] hover:bg-black active:scale-[0.98]",
    black:
      "min-h-12 rounded-full bg-[#16181d] text-[13px] font-bold text-white shadow-sm hover:bg-black active:scale-95",
    outline:
      "min-h-14 rounded-full bg-white text-base font-semibold text-[#16181d]",
    ghost: "min-h-12 rounded-full text-sm font-semibold text-muted-foreground",
    secondary:
      "min-h-14 rounded-full bg-[#fff3c9] text-base font-semibold text-[#3d3200]",
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
