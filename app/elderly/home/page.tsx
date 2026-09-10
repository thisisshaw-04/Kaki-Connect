import Link from "next/link";
import { ArrowRight, Home, Trees } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { ListenButton } from "@/components/listen-button";
import { Pill } from "@/components/ui-bits";
import { outing, friends, senior } from "@/lib/data";

export default function ElderlyHome() {
  const raymond = friends[0];

  return (
    <AppShell
      role="elderly"
      title="Today"
      backHref="/"
      action={<ListenButton label="Listen" />}
      showNav
      current="/elderly/home"
    >
      <div className="space-y-4">
        <section>
          <p className="text-sm font-semibold text-primary">Bedok · {outing.weather}</p>
          <h1 className="mt-1 text-[26px] leading-tight font-bold">
            What would you like to do today, {senior.name}?
          </h1>
        </section>

        <Link
          href="/elderly/activities"
          className="block rounded-[24px] border border-border bg-card p-5 shadow-[0_4px_20px_-2px_rgba(47,93,151,0.08)]"
        >
          <Pill>
            <Trees className="size-3.5" />
            Fresh air
          </Pill>
          <h2 className="mt-3 text-xl font-bold">Go out for a bit</h2>
          <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
            Sunset fishing this afternoon, or a slower walk. Someone can walk
            with you from the block.
          </p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
            See nearby outings <ArrowRight className="size-4" />
          </span>
        </Link>

        <Link
          href="/elderly/call"
          className="block rounded-[24px] border-2 border-[#ffe17a] bg-[#fffdf5] p-5"
        >
          <div className="mb-3 flex items-center justify-between">
            <Pill className="bg-[#fff4c4] text-[#715c00]">
              <Home className="size-3.5" />
              Stay in
            </Pill>
            <span className="rounded-b-lg bg-[#ffdd67] px-2 py-0.5 text-[11px] font-bold text-[#3d3200]">
              Easy for today
            </span>
          </div>
          <h2 className="text-xl font-bold">Stay home and call a friend</h2>
          <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
            {raymond.name} is free. You both like gardens and a slow kopi chat.
          </p>
          <div className="mt-3 flex items-center gap-3 rounded-xl bg-muted px-3 py-3">
            <div className="flex size-10 items-center justify-center rounded-full bg-[#ffe17a] font-bold">
              R
            </div>
            <div>
              <p className="font-semibold">{raymond.name}</p>
              <p className="text-xs text-primary">Online now</p>
            </div>
          </div>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
            Start a video call <ArrowRight className="size-4" />
          </span>
        </Link>
      </div>
    </AppShell>
  );
}
