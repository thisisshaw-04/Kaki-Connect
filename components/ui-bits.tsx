import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const pastel = {
  mint: "bg-[#d8efe4]",
  sky: "bg-[#d5ebf5]",
  butter: "bg-[#f6e79c]",
  blush: "bg-[#f5d6d2]",
  lavender: "bg-[#e5dff4]",
  peach: "bg-[#f8e0cc]",
  fog: "bg-white",
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
    blue: "bg-[#d7f0f7] text-[#124780]",
    gold: "bg-[#fff3c9] text-[#554500]",
    rose: "bg-[#ffe4e2] text-[#93000a]",
    green: "bg-[#dff5e8] text-[#1b5e20]",
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
        "inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold tracking-tight text-[#16181d]",
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
    on ? "bg-[#d8efe4] ring-2 ring-[#16181d]" : "bg-white"
  );
}

export function GoButton({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "flex size-11 shrink-0 items-center justify-center rounded-full bg-[#16181d] text-white",
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
        "flex size-12 shrink-0 items-center justify-center rounded-full bg-white text-[#16181d]",
        className
      )}
    >
      {children}
    </span>
  );
}
