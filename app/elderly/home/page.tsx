import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { ListenButton } from "@/components/listen-button";
import { SosButton } from "@/components/sos-button";
import { Card, GoButton, Pill, Portrait, UiPic } from "@/components/ui-bits";
import { friends, senior } from "@/lib/data";

export default function ElderlyHome() {
  const raymond = friends[0];

  return (
    <AppShell
      role="elderly"
      title="Today's Choice"
      subtitle={`Thursday Morning · ${senior.neighbourhood}`}
      backHref="/"
      action={<SosButton />}
      showNav
      current="/elderly/home"
    >
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-3">
          <h1 className="text-[26px] leading-[1.1] font-extrabold tracking-[-0.04em]">
            What would you like to do today, {senior.name}?
          </h1>
          <ListenButton label="Listen" />
        </div>
        <p className="text-sm text-muted-foreground">Tap to listen to options out loud</p>

        <Link href="/elderly/activities" className="block">
          <Card tone="mint" className="relative min-h-[210px] overflow-hidden">
            <UiPic
              src="/ui/icon-park.svg"
              alt=""
              className="pointer-events-none absolute -right-3 -top-3 h-24 w-24"
            />
            <Pill>Fresh air & walking</Pill>
            <h2 className="mt-4 max-w-[78%] text-[22px] font-extrabold leading-tight tracking-[-0.03em]">
              Go out for an outdoor activity
            </h2>
            <p className="mt-2 max-w-[85%] text-sm leading-relaxed text-[#3d4a42]">
              Join a small group for Sunset Fishing & Kopi, Dim Sum, or park strolls with a volunteer helper.
            </p>
            <div className="mt-6 flex items-end justify-between gap-3">
              <p className="text-[13px] font-bold">Explore Outing Activities</p>
              <GoButton />
            </div>
          </Card>
        </Link>

        <Link href="/elderly/call" className="block">
          <Card tone="butter" className="relative overflow-hidden">
            <span className="absolute top-4 right-4 rounded-full bg-white px-3 py-1 text-[11px] font-bold text-[#766100]">
              Recommended for today
            </span>
            <UiPic
              src="/ui/icon-home.svg"
              alt=""
              className="pointer-events-none absolute -right-2 bottom-16 h-20 w-20"
            />
            <Pill>Cozy & relaxing at home</Pill>
            <h2 className="mt-4 max-w-[80%] text-[22px] font-extrabold leading-tight tracking-[-0.03em]">
              Stay home & call a matched Kaki
            </h2>
            <p className="mt-2 max-w-[88%] text-sm leading-relaxed text-[#5a4e2a]">
              Have a friendly 1-on-1 video kopi chat with Uncle Raymond (matched based on Hokkien & gardening).
            </p>
            <div className="mt-3 flex items-center gap-3">
              <Portrait
                src={raymond.photo}
                alt={raymond.name}
                className="size-12 rounded-full"
              />
              <div className="min-w-0 flex-1">
                <p className="truncate font-bold">{raymond.name}</p>
                <p className="text-[11px] font-semibold text-[#1b5e20]">Online now</p>
                <p className="truncate text-xs text-muted-foreground">Shared: {raymond.shared}</p>
              </div>
            </div>
            <div className="mt-5 flex items-end justify-between gap-3">
              <p className="text-[13px] font-bold">Video Call Uncle Raymond</p>
              <GoButton />
            </div>
          </Card>
        </Link>
      </div>
    </AppShell>
  );
}
