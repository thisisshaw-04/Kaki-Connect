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
      wide
    >
      <h1 className="text-2xl font-bold">A light week so far</h1>
      <p className="mt-2 text-muted-foreground">
        Two outings, one chat. No medical log — just how he spent his time.
      </p>
      <ol className="mt-5 space-y-3">
        {week.map((item) => {
          const inner = (
            <>
              <div className="flex items-baseline justify-between gap-3">
                <p className="text-sm font-semibold text-primary">
                  {item.day} · {item.date}
                </p>
                <span className="text-xs font-semibold tracking-wide uppercase text-muted-foreground">
                  {item.status === "live"
                    ? "Happening now"
                    : item.status === "upcoming"
                      ? "Coming up"
                      : kindLabel[item.kind]}
                </span>
              </div>
              <h2 className="mt-1 font-bold">{item.title}</h2>
              {item.with ? (
                <p className="mt-1 text-sm text-muted-foreground">{item.with}</p>
              ) : null}
            </>
          );

          const className = cn(
            "block rounded-2xl border p-4",
            item.status === "live"
              ? "border-[#cfe3c8] bg-[#f3faf3]"
              : "border-border bg-card"
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
