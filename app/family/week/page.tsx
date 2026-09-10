import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { GoButton } from "@/components/ui-bits";
import { week } from "@/lib/data";
import { cn } from "@/lib/utils";

const kindLabel = {
  outing: "Outing",
  call: "Video chat",
  home: "At home",
};

const tones = [
  "bg-white",
  "bg-[#d5ebf5]",
  "bg-[#f6e79c]",
  "bg-[#d8efe4]",
  "bg-[#e5dff4]",
];

export default function FamilyWeek() {
  return (
    <AppShell
      role="family"
      title="This week"
      subtitle="KakiConnect"
      backHref="/family/home"
      showNav
      current="/family/week"
    >
      <h1 className="text-center text-[26px] font-extrabold tracking-[-0.04em]">A light week so far</h1>
      <p className="mt-2 text-center text-muted-foreground">
        Two outings, one kopi chat. No medical log — just how he spent his time.
      </p>
      <ol className="mt-5 space-y-3">
        {week.map((item, index) => {
          const live = item.status === "live";
          const inner = (
            <div className="flex items-end justify-between gap-3">
              <div className="min-w-0">
                <p className={cn("text-sm font-semibold", live ? "text-[#1b5e20]" : "text-muted-foreground")}>
                  {item.day} · {item.date}
                </p>
                <span className="text-[11px] font-semibold tracking-wide uppercase text-muted-foreground">
                  {item.status === "live"
                    ? "Happening now"
                    : item.status === "upcoming"
                      ? "Coming up"
                      : kindLabel[item.kind]}
                </span>
                <h2 className="mt-1 font-extrabold">{item.title}</h2>
                {item.with ? (
                  <p className="mt-1 text-sm text-muted-foreground">{item.with}</p>
                ) : null}
              </div>
              {item.status === "live" ? <GoButton /> : <GoButton className="bg-[#16181d]/90" />}
            </div>
          );

          return (
            <li key={item.date}>
              {item.status === "live" ? (
                <Link href="/family/outing" className="block rounded-[28px] bg-[#d8efe4] p-4">
                  {inner}
                </Link>
              ) : (
                <div className={`rounded-[28px] p-4 ${tones[index % tones.length]}`}>{inner}</div>
              )}
            </li>
          );
        })}
      </ol>
    </AppShell>
  );
}
