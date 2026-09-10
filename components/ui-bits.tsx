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
    .filter((part) => !["Uncle", "Auntie"].includes(part))
    .slice(0, 2)
    .map((part) => part[0])
    .join("");

  return (
    <div
      className={cn(
        "flex size-12 shrink-0 items-center justify-center rounded-[18px] text-sm font-bold ring-1 ring-black/5",
        tones[tone],
        className
      )}
    >
      {initials}
    </div>
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

export function Sticker({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md bg-[#ffdd67] px-2 py-0.5 text-[10px] font-bold tracking-wide text-[#3d3200] uppercase shadow-[0_2px_0_#e4c451]",
        className
      )}
    >
      {children}
    </span>
  );
}
