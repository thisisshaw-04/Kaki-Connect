import Link from "next/link";
import { ArrowRight, Home, MapPin, Trees } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { ListenButton } from "@/components/listen-button";
import { SosButton } from "@/components/sos-button";
import { Card, Pill } from "@/components/ui-bits";
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
            <p className="text-[13px] font-semibold text-primary">Today&apos;s Choice</p>
            <ListenButton label="Listen" />
          </div>
          <p className="mt-1 text-[11px] font-medium tracking-wide text-muted-foreground uppercase">
            Thursday Morning
          </p>
          <h1 className="mt-1 text-[22px] leading-[30px] font-semibold tracking-[-0.015em]">
            What would you like to do today, {senior.name}?
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Tap to listen to options out loud
          </p>
        </section>

        <Link href="/elderly/activities" className="block">
          <Card className="flex flex-col">
            <div className="flex items-start justify-between gap-2">
              <Pill>
                <Trees className="size-3.5" />
                Fresh air & walking
              </Pill>
              <span className="flex size-12 items-center justify-center rounded-2xl bg-[#d4e3ff]/60 text-primary">
                <Trees className="size-6" />
              </span>
            </div>
            <h2 className="mt-3 text-[22px] font-bold leading-tight">
              Go out for an outdoor activity
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Join a small group for Sunset Fishing & Kopi, Dim Sum, or park strolls with a volunteer helper.
            </p>
            <span className="mt-5 flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#18181b] text-[13px] font-bold text-white">
              Explore Outing Activities <ArrowRight className="size-4" />
            </span>
          </Card>
        </Link>

        <Link href="/elderly/call" className="block">
          <Card highlight className="relative">
            <span className="absolute top-0 right-6 rounded-b-lg bg-[#ffdd67] px-3 py-0.5 text-[11px] font-bold text-[#766100]">
              Recommended for today
            </span>
            <div className="mt-2 flex items-start justify-between gap-2">
              <Pill className="bg-[#FEF7DC] text-[#766100]">
                <Home className="size-3.5" />
                Cozy & relaxing at home
              </Pill>
              <span className="flex size-12 items-center justify-center rounded-2xl bg-[#ffdd67] text-[#766100]">
                <MapPin className="hidden" />
                <Home className="size-6" />
              </span>
            </div>
            <h2 className="mt-3 text-[22px] font-bold leading-tight">
              Stay home & call a matched Kaki
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Have a friendly 1-on-1 video kopi chat with Uncle Raymond (matched based on Hokkien & gardening).
            </p>
            <div className="mt-3 flex items-center gap-3 rounded-xl border border-[#c2c6d1]/30 bg-[#f0eeea] p-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-[#ffe17a] font-bold">
                R
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <p className="truncate font-bold">{raymond.name}</p>
                  <p className="text-[11px] font-semibold text-primary">Online now</p>
                </div>
                <p className="truncate text-xs text-muted-foreground">
                  Shared: {raymond.shared}
                </p>
              </div>
            </div>
            <span className="mt-5 flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#18181b] text-[13px] font-bold text-white">
              Video Call Uncle Raymond <ArrowRight className="size-4" />
            </span>
          </Card>
        </Link>
      </div>
    </AppShell>
  );
}
