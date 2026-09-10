import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { Card } from "@/components/ui-bits";
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
      title="KakiConnect"
      subtitle="This week"
      backHref="/family/home"
      showNav
      current="/family/week"
    >
      <h1 className="text-[26px] font-semibold tracking-[-0.02em]">A light week so far</h1>
      <p className="mt-2 text-muted-foreground">
        Two outings, one kopi chat. No medical log — just how he spent his time.
      </p>
      <ol className="mt-5 space-y-3">
        {week.map((item) => {
          const live = item.status === "live";
          const inner = (
            <>
              <div className="flex items-baseline justify-between gap-3">
                <p className={cn("text-sm font-semibold", live ? "text-[#1b5e20]" : "text-muted-foreground")}>
                  {item.day} · {item.date}
                </p>
                <span
                  className={cn(
                    "text-xs font-semibold tracking-wide uppercase",
                    live ? "text-[#3d4a42]" : "text-muted-foreground"
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
                <p className={cn("mt-1 text-sm", live ? "text-[#3d4a42]" : "text-muted-foreground")}>
                  {item.with}
                </p>
              ) : null}
            </>
          );

          return (
            <li key={item.date}>
              {item.status === "live" ? (
                <Link
                  href="/family/outing"
                  className="block rounded-[28px] bg-[#dff5e8] p-4"
                >
                  {inner}
                </Link>
              ) : (
                <Card>{inner}</Card>
              )}
            </li>
          );
        })}
      </ol>
    </AppShell>
  );
}
