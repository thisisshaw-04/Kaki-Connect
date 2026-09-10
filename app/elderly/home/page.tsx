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
        <h1 className="text-[26px] leading-[1.15] font-extrabold tracking-[-0.04em]">
          What would you like to do today, {senior.name}?
        </h1>
        <p className="text-sm text-muted-foreground">Tap to listen to options out loud</p>
        <ListenButton label="Listen" />

        <a href="/elderly/activities" className="block">
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
            <p className="mt-2 max-w-[85%] text-sm leading-relaxed text-[#3a322c]">
              Join a small group for Sunset Fishing & Kopi, Dim Sum, or park strolls with a volunteer helper.
            </p>
            <div className="mt-6 flex items-end justify-between gap-3">
              <p className="text-[13px] font-bold">Explore Outing Activities</p>
              <GoButton />
            </div>
          </Card>
        </a>

        <a href="/elderly/call" className="block">
          <Card tone="butter" className="relative">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <Pill>Cozy & relaxing at home</Pill>
              <span className="shrink-0 rounded-full bg-beige-card px-3 py-1 text-[11px] font-bold text-[#5a3d8a]">
                Recommended for today
              </span>
            </div>
            <h2 className="mt-4 text-[22px] font-extrabold leading-tight tracking-[-0.03em]">
              Stay home & call a matched Kaki
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[#7a6c60]">
              Have a friendly 1-on-1 video kopi chat with Uncle Raymond (matched based on Hokkien & gardening).
            </p>
            <div className="mt-4 flex items-center gap-3">
              <Portrait
                src={raymond.photo}
                alt={raymond.name}
                className="size-12 shrink-0 rounded-full"
              />
              <div className="min-w-0 flex-1">
                <p className="font-bold">{raymond.name}</p>
                <p className="text-[13px] font-semibold text-[#1f5a48]">Online now</p>
                <p className="text-xs leading-snug text-muted-foreground">
                  Shared: {raymond.shared}
                </p>
              </div>
              <UiPic
                src="/ui/icon-home.svg"
                alt=""
                className="size-16 shrink-0"
              />
            </div>
            <div className="mt-5 flex items-end justify-between gap-3">
              <p className="text-[13px] font-bold">Video Call Uncle Raymond</p>
              <GoButton />
            </div>
          </Card>
        </a>
      </div>
    </AppShell>
  );
}
