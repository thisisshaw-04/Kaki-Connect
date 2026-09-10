import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex size-16 items-center justify-center rounded-[22px] bg-primary text-primary-foreground shadow-[0_10px_24px_-10px_rgba(47,93,151,0.8)]",
        className
      )}
      aria-hidden
    >
      <span className="absolute -top-1 -right-1 flex size-5 items-center justify-center rounded-full bg-[#ffdd67] text-[11px] font-black text-[#3d3200] shadow-sm">
        •
      </span>
      <svg viewBox="0 0 48 48" className="size-9">
        <circle cx="18" cy="20" r="2.2" fill="currentColor" />
        <circle cx="30" cy="20" r="2.2" fill="currentColor" />
        <path
          d="M16 28c2.4 3.2 6 4.8 8 4.8s5.6-1.6 8-4.8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export function SlashMark({ label = "//" }: { label?: string }) {
  return (
    <span className="font-display text-[11px] tracking-[0.18em] text-primary/45">
      {label}
    </span>
  );
}
