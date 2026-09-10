import Link from "next/link";
import { ArrowRight, Home, Trees } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { ListenButton } from "@/components/listen-button";
import { Pill, Sticker } from "@/components/ui-bits";
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
      <div className="space-y-3.5">
        <section>
          <p className="text-[13px] font-semibold tracking-tight text-primary">
            Bedok · {outing.weather}
          </p>
          <h1 className="font-display mt-1 text-[26px] leading-[1.1] font-semibold tracking-[-0.03em]">
            What would you like to do today, {senior.name}?
          </h1>
        </section>

        <Link
          href="/elderly/activities"
          className="lift block rounded-[24px] p-5 transition hover:-translate-y-0.5"
        >
          <Pill>
            <Trees className="size-3.5" />
            Fresh air
          </Pill>
          <h2 className="mt-3 text-[20px] font-bold tracking-tight">
            Go out for a bit
          </h2>
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
          className="lift-fun relative block overflow-hidden rounded-[24px] p-5"
        >
          <Sticker className="absolute top-0 right-5 rounded-t-none">
            Easy for today
          </Sticker>
          <Pill className="bg-[#fff4c4] text-[#715c00]">
            <Home className="size-3.5" />
            Stay in
          </Pill>
          <h2 className="mt-3 text-[20px] font-bold tracking-tight">
            Stay home and call a friend
          </h2>
          <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
            {raymond.name} is free. You both like gardens and a slow kopi chat.
          </p>
          <div className="mt-3 flex items-center gap-3 rounded-2xl bg-white/80 px-3 py-3 ring-1 ring-[#e4c451]/30">
            <div className="flex size-10 items-center justify-center rounded-full bg-[#ffe17a] font-bold">
              R
            </div>
            <div>
              <p className="font-semibold">{raymond.name}</p>
              <p className="text-xs font-semibold text-[#1b5e20]">Online now</p>
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
