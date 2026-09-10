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
          <h1 className="font-display text-[24px] font-semibold tracking-[-0.03em]">
            Good morning, Uncle Tan
          </h1>
          <p className="mt-1 text-muted-foreground">Bedok North · bright and breezy</p>
        </div>

        <Link
          href="/elderly/outing"
          className="relative block overflow-hidden rounded-[28px] bg-primary p-5 text-primary-foreground shadow-[0_16px_32px_-16px_rgba(47,93,151,0.85)]"
        >
          <div className="absolute -top-10 -right-8 size-32 rounded-full bg-[#ffdd67]/20" />
          <div className="relative">
          <Pill className="bg-[#ffdd67] text-[#3d3200]">Picked for this afternoon</Pill>
          <h2 className="font-display mt-3 text-[26px] leading-[1.1] font-semibold tracking-[-0.03em]">{featured.title}</h2>
          <p className="mt-2 flex items-center gap-1 text-sm text-primary-foreground/90">
            <MapPin className="size-4" />
            {featured.place}
          </p>
          <div className="mt-4 flex items-center gap-3 rounded-2xl bg-white/12 p-3 ring-1 ring-white/15">
            <div className="flex -space-x-2">
              <Initials name="Ahmad" className="size-9 ring-2 ring-primary" />
              <Initials name="Susan" tone="gold" className="size-9 ring-2 ring-primary" />
            </div>
            <p className="text-sm">
              Ahmad and Auntie Susan are going. Wei Ming can walk with you.
            </p>
          </div>
          <span className="mt-4 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#ffdd67] font-bold text-[#3d3200] shadow-[0_4px_0_#e4c451]">
            See this outing <ArrowRight className="size-4" />
          </span>
          </div>
        </Link>

        <div className="space-y-3">
          {rest.map((item) => (
            <Link
              key={item.id}
              href="/elderly/outing"
              className="lift block rounded-[22px] p-4 transition hover:-translate-y-0.5"
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
