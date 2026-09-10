import { cn } from "@/lib/utils";

export const pastel = {
  mint: "bg-[#dff5e8]",
  sky: "bg-[#d7f0f7]",
  butter: "bg-[#fff3c9]",
  blush: "bg-[#ffe4e2]",
  lavender: "bg-[#ece7ff]",
  peach: "bg-[#ffe8d6]",
  fog: "bg-[#f4f5f7]",
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
    <img src={src} alt={alt} className={cn("object-contain", className)} />
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
        "inline-flex items-center gap-1.5 rounded-full bg-white/70 px-3 py-1 text-[11px] font-semibold tracking-tight text-[#16181d]",
        className
      )}
    >
      {children}
    </span>
  );
}

export function StatusDot({ live = false }: { live?: boolean }) {
  return (
    <span className="relative flex size-2.5">
      {live ? (
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#2e7d32] opacity-60" />
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
        "rounded-[32px] p-5",
        resolved === "white"
          ? "bg-white shadow-[0_12px_32px_-20px_rgba(22,24,29,0.28)]"
          : pastel[resolved],
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
    "w-full rounded-[28px] p-4 text-left transition",
    on ? "bg-[#dff5e8]" : "bg-[#f4f5f7]"
  );
}
