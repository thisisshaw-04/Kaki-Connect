import { ArrowUpRight } from "lucide-react";
import { withBase } from "@/lib/base-path";
import { cn } from "@/lib/utils";

/** Fixed colour system: beige, lilac, crimson, green. */
export const pastel = {
  mint: "bg-green-wash",
  sky: "bg-beige-card",
  butter: "bg-lilac-wash",
  blush: "bg-crimson-wash",
  lavender: "bg-lilac-wash",
  peach: "bg-beige-card",
  fog: "bg-beige-card",
} as const;

export type PastelTone = keyof typeof pastel;

export function Initials({
  name,
  className,
  tone = "green",
}: {
  name: string;
  className?: string;
  tone?: "lilac" | "crimson" | "green" | "beige";
}) {
  const tones = {
    lilac: "bg-lilac-wash text-[#5a3d8a]",
    crimson: "bg-crimson-wash text-[#8f2428]",
    green: "bg-green-wash text-[#1f5a48]",
    beige: "bg-beige-card text-ink",
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
    <img src={withBase(src)} alt={alt} className={cn("object-cover", className)} />
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
      src={withBase(src)}
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
        "inline-flex items-center gap-1.5 rounded-full bg-[#ffffff] px-3 py-1.5 text-[11px] font-semibold tracking-tight text-ink ring-1 ring-ink",
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
        <span className="absolute inline-flex size-full rounded-full bg-green opacity-60 motion-safe:animate-ping" />
      ) : null}
      <span
        className={cn(
          "relative inline-flex size-2.5 rounded-full",
          live ? "bg-green" : "bg-muted-foreground"
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
  const resolved = highlight ? "lavender" : (tone ?? "white");
  return (
    <div
      className={cn(
        "rounded-[28px] border-2 border-ink p-5",
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
    <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-white px-2 text-[10px] font-semibold tracking-[0.08em] text-ink ring-1 ring-ink">
      {label}
    </span>
  );
}

export function choiceClass(on: boolean) {
  return cn(
    "min-h-14 w-full rounded-[28px] p-4 text-left transition",
    on ? "bg-lilac-wash ring-2 ring-ink" : "bg-white ring-1 ring-ink"
  );
}

export function GoButton({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "flex size-11 shrink-0 items-center justify-center rounded-full bg-ink text-white",
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
        "flex size-12 shrink-0 items-center justify-center rounded-full bg-lilac-wash text-[#5a3d8a]",
        className
      )}
    >
      {children}
    </span>
  );
}
