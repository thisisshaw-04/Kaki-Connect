import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { week } from "@/lib/data";
import { cn } from "@/lib/utils";

const kindLabel = {
  outing: "Outing",
  call: "Video chat",
  home: "At home",
};

export default function FamilyWeek() {
  return (
    <AppShell
      role="family"
      title="This week"
      backHref="/family/home"
      showNav
      current="/family/week"
    >
      <h1 className="font-display text-[26px] font-semibold tracking-[-0.03em]">
        A light week so far
      </h1>
      <p className="mt-2 text-muted-foreground">
        Two outings, one chat. No medical log — just how he spent his time.
      </p>
      <ol className="mt-5 space-y-3">
        {week.map((item) => {
          const live = item.status === "live";
          const inner = (
            <>
              <div className="flex items-baseline justify-between gap-3">
                <p
                  className={cn(
                    "text-sm font-semibold",
                    live ? "text-[#ffdd67]" : "text-primary"
                  )}
                >
                  {item.day} · {item.date}
                </p>
                <span
                  className={cn(
                    "text-xs font-semibold tracking-wide uppercase",
                    live ? "text-primary-foreground/75" : "text-muted-foreground"
                  )}
                >
                  {item.status === "live"
                    ? "Happening now"
                    : item.status === "upcoming"
                      ? "Coming up"
                      : kindLabel[item.kind]}
                </span>
              </div>
              <h2 className="mt-1 font-bold">{item.title}</h2>
              {item.with ? (
                <p
                  className={cn(
                    "mt-1 text-sm",
                    live ? "text-primary-foreground/80" : "text-muted-foreground"
                  )}
                >
                  {item.with}
                </p>
              ) : null}
            </>
          );

          const className = cn(
            "block rounded-[22px] p-4",
            item.status === "live"
              ? "bg-primary text-primary-foreground shadow-[0_12px_24px_-14px_rgba(47,93,151,0.9)]"
              : "lift"
          );

          return (
            <li key={item.date}>
              {item.status === "live" ? (
                <Link href="/family/outing" className={className}>
                  {inner}
                </Link>
              ) : (
                <div className={className}>{inner}</div>
              )}
            </li>
          );
        })}
      </ol>
    </AppShell>
  );
}
