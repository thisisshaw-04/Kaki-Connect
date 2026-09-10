import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const pastel = {
  mint: "bg-[#d4efe4]",
  sky: "bg-[#d7e5f4]",
  butter: "bg-[#f8e56a]",
  blush: "bg-[#f7c8c4]",
  lavender: "bg-[#ead9fa]",
  peach: "bg-[#f3e0c8]",
  fog: "bg-[#fffdf9]",
} as const;

export type PastelTone = keyof typeof pastel;

export function Initials({
  name,
  className,
  tone = "blue",
}: {
  name: string;
  className?: string;
  tone?: "blue" | "gold" | "rose" | "green";
}) {
  const tones = {
    blue: "bg-[#d7e5f4] text-[#3d5270]",
    gold: "bg-[#f8e56a] text-[#4a3200]",
    rose: "bg-[#f7c8c4] text-[#8a2a32]",
    green: "bg-[#d4efe4] text-[#1f5a48]",
  };
  const initials = name
    .split(" ")
    .filter((part) => !["Uncle", "Auntie", "Mr", "Mdm"].includes(part))
    .slice(0, 2)
    .map((part) => part[0])
    .join("");

  return (
    <div
      className={cn(
        "flex size-12 shrink-0 items-center justify-center rounded-full text-sm font-bold",
        tones[tone],
        className
      )}
    >
      {initials}
    </div>
  );
}

export function Portrait({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} className={cn("object-cover", className)} />
  );
}

export function UiPic({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      aria-hidden={alt ? undefined : true}
      className={cn("object-contain", className)}
    />
  );
}

export function Pill({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold tracking-tight text-[#2a2218]",
        className
      )}
    >
      {children}
    </span>
  );
}

export function StatusDot({ live = false }: { live?: boolean }) {
  return (
    <span className="relative flex size-2.5" aria-hidden>
      {live ? (
        <span className="absolute inline-flex size-full rounded-full bg-[#2e7d32] opacity-60 motion-safe:animate-ping" />
      ) : null}
      <span
        className={cn(
          "relative inline-flex size-2.5 rounded-full",
          live ? "bg-[#2e7d32]" : "bg-muted-foreground"
        )}
      />
    </span>
  );
}

export function Card({
  children,
  className,
  highlight = false,
  tone,
}: {
  children: React.ReactNode;
  className?: string;
  highlight?: boolean;
  tone?: PastelTone | "white";
}) {
  const resolved = highlight ? "butter" : (tone ?? "white");
  return (
    <div
      className={cn(
        "rounded-[28px] p-5",
        resolved === "white" ? "bg-white" : pastel[resolved],
        className
      )}
    >
      {children}
    </div>
  );
}

export function SlashMark({ label = "//" }: { label?: string }) {
  return (
    <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-white/70 px-2 text-[10px] font-semibold tracking-[0.08em] text-[#6b7280]">
      {label}
    </span>
  );
}

export function choiceClass(on: boolean) {
  return cn(
    "min-h-14 w-full rounded-[28px] p-4 text-left transition",
    on ? "bg-[#d4efe4] ring-2 ring-[#2a2218]" : "bg-white"
  );
}

export function GoButton({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "flex size-11 shrink-0 items-center justify-center rounded-full bg-[#2a2218] text-white",
        className
      )}
    >
      <ArrowUpRight className="size-5" />
    </span>
  );
}

export function IconCircle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "flex size-12 shrink-0 items-center justify-center rounded-full bg-white text-[#2a2218]",
        className
      )}
    >
      {children}
    </span>
  );
}
