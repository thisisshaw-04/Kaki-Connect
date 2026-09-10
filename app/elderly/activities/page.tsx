import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { ListenButton } from "@/components/listen-button";
import { Initials, Pill } from "@/components/ui-bits";
import { activities } from "@/lib/data";

export default function ActivitiesPage() {
  const [featured, ...rest] = activities;

  return (
    <AppShell
      role="elderly"
      title="Outings nearby"
      backHref="/elderly/home"
      action={<ListenButton />}
      showNav
      current="/elderly/home"
    >
      <div className="space-y-5">
        <div>
          <h1 className="text-[24px] font-bold">Good morning, Uncle Tan</h1>
          <p className="mt-1 text-muted-foreground">Bedok North · bright and breezy</p>
        </div>

        <Link
          href="/elderly/outing"
          className="block overflow-hidden rounded-[28px] bg-primary p-5 text-primary-foreground shadow-[0_8px_24px_-4px_rgba(47,93,151,0.28)]"
        >
          <Pill className="bg-[#ffdd67] text-[#3d3200]">Picked for this afternoon</Pill>
          <h2 className="mt-3 text-2xl leading-tight font-bold">{featured.title}</h2>
          <p className="mt-2 flex items-center gap-1 text-sm text-primary-foreground/90">
            <MapPin className="size-4" />
            {featured.place}
          </p>
          <div className="mt-4 flex items-center gap-3 rounded-2xl bg-white/15 p-3">
            <div className="flex -space-x-2">
              <Initials name="Ahmad" className="size-9 ring-2 ring-primary" />
              <Initials name="Susan" tone="gold" className="size-9 ring-2 ring-primary" />
            </div>
            <p className="text-sm">
              Ahmad and Auntie Susan are going. Wei Ming can walk with you.
            </p>
          </div>
          <span className="mt-4 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#ffdd67] font-bold text-[#3d3200]">
            See this outing <ArrowRight className="size-4" />
          </span>
        </Link>

        <div className="space-y-3">
          {rest.map((item) => (
            <Link
              key={item.id}
              href="/elderly/outing"
              className="block rounded-2xl border border-border bg-card p-4"
            >
              <p className="text-xs font-semibold tracking-wide text-primary uppercase">
                {item.start}
              </p>
              <h3 className="mt-1 text-lg font-bold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.place}</p>
              <p className="mt-2 text-sm">
                {item.companions.map((c) => c.name).join(" · ")}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
