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
      "min-h-14 rounded-full bg-lilac text-base font-bold text-ink shadow-[0_10px_24px_-12px_rgba(90,61,138,0.45)] hover:bg-[#b892e4] active:scale-[0.98]",
    black:
      "min-h-12 rounded-full bg-lilac text-[13px] font-bold text-ink shadow-sm hover:bg-[#b892e4] active:scale-95",
    outline:
      "min-h-14 rounded-full border-2 border-lilac bg-white text-base font-semibold text-ink",
    ghost: "min-h-12 rounded-full text-sm font-semibold text-muted-foreground",
    secondary:
      "min-h-14 rounded-full bg-lilac-wash text-base font-semibold text-[#5a3d8a]",
  } as const;

  return (
    <a
      href={href}
      className={cn(
        "inline-flex w-full items-center justify-center gap-2 px-5 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lilac focus-visible:ring-offset-2",
        styles[variant],
        className
      )}
    >
      {children}
    </a>
  );
}
