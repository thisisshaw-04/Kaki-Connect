import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { ListenButton } from "@/components/listen-button";
import { SosButton } from "@/components/sos-button";
import { Card, Pill, Portrait, UiPic } from "@/components/ui-bits";
import { friends, senior } from "@/lib/data";

export default function ElderlyHome() {
  const raymond = friends[0];

  return (
    <AppShell
      role="elderly"
      title="KakiConnect"
      subtitle={`📍 ${senior.neighbourhood}`}
      backHref="/"
      action={<SosButton />}
      showNav
      current="/elderly/home"
    >
      <div className="space-y-4">
        <section>
          <div className="flex items-center justify-between">
            <p className="text-[13px] font-semibold text-muted-foreground">Today&apos;s Choice</p>
            <ListenButton label="Listen" />
          </div>
          <p className="mt-1 text-[11px] font-medium tracking-wide text-muted-foreground uppercase">
            Thursday Morning
          </p>
          <h1 className="mt-1 text-[30px] leading-[1.08] font-extrabold tracking-[-0.04em]">
            What would you like to do today, {senior.name}?
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Tap to listen to options out loud
          </p>
        </section>

        <Link href="/elderly/activities" className="block">
          <Card tone="mint" className="relative overflow-hidden">
            <UiPic
              src="/ui/icon-park.svg"
              alt=""
              className="pointer-events-none absolute -right-2 -top-2 h-28 w-28 opacity-95"
            />
            <Pill className="bg-white/80">Fresh air & walking</Pill>
            <h2 className="mt-4 max-w-[70%] text-[24px] font-extrabold leading-tight tracking-[-0.03em]">
              Go out for an outdoor activity
            </h2>
            <p className="mt-2 max-w-[78%] text-sm leading-relaxed text-[#3d4a42]">
              Join a small group for Sunset Fishing & Kopi, Dim Sum, or park strolls with a volunteer helper.
            </p>
            <span className="mt-5 flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#16181d] text-[13px] font-bold text-white">
              Explore Outing Activities <ArrowRight className="size-4" />
            </span>
          </Card>
        </Link>

        <Link href="/elderly/call" className="block">
          <Card tone="butter" className="relative overflow-hidden">
            <span className="absolute top-0 right-6 rounded-b-2xl bg-white px-3 py-0.5 text-[11px] font-bold text-[#766100]">
              Recommended for today
            </span>
            <UiPic
              src="/ui/icon-home.svg"
              alt=""
              className="pointer-events-none absolute -right-1 top-8 h-24 w-24"
            />
            <Pill className="mt-2 bg-white/80">Cozy & relaxing at home</Pill>
            <h2 className="mt-4 max-w-[72%] text-[24px] font-extrabold leading-tight tracking-[-0.03em]">
              Stay home & call a matched Kaki
            </h2>
            <p className="mt-2 max-w-[80%] text-sm leading-relaxed text-[#5a4e2a]">
              Have a friendly 1-on-1 video kopi chat with Uncle Raymond (matched based on Hokkien & gardening).
            </p>
            <div className="mt-3 flex items-center gap-3 rounded-[22px] bg-white/70 p-3">
              <Portrait
                src={raymond.photo}
                alt={raymond.name}
                className="size-11 rounded-full"
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <p className="truncate font-bold">{raymond.name}</p>
                  <p className="text-[11px] font-semibold text-[#1b5e20]">Online now</p>
                </div>
                <p className="truncate text-xs text-muted-foreground">
                  Shared: {raymond.shared}
                </p>
              </div>
            </div>
            <span className="mt-5 flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#16181d] text-[13px] font-bold text-white">
              Video Call Uncle Raymond <ArrowRight className="size-4" />
            </span>
          </Card>
        </Link>
      </div>
    </AppShell>
  );
}
