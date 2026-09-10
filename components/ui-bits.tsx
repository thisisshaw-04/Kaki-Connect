import { cn } from "@/lib/utils";

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
    blue: "bg-[#d4e3ff] text-[#124780]",
    gold: "bg-[#ffe17a] text-[#554500]",
    rose: "bg-[#ffdad6] text-[#93000a]",
    green: "bg-[#d6f0dc] text-[#1b5e20]",
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
        "flex size-12 shrink-0 items-center justify-center rounded-[16px] text-sm font-bold",
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
        "inline-flex items-center gap-1.5 rounded-full bg-[#eaf1f8] px-3 py-1 text-[11px] font-semibold tracking-tight text-primary",
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
}: {
  children: React.ReactNode;
  className?: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-[24px] border bg-white p-5",
        highlight
          ? "border-2 border-[#ffdd67] bg-gradient-to-b from-[#fffef9] to-white"
          : "border-[#c2c6d1]/30",
        className
      )}
    >
      {children}
    </div>
  );
}

export function SlashMark({ label = "//" }: { label?: string }) {
  return (
    <span className="text-[11px] tracking-[0.18em] text-[#737781]/70">
      {label}
    </span>
  );
}
