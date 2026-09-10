import { ArrowRight, Phone, Trees } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { ListenButton } from "@/components/listen-button";
import { SosButton } from "@/components/sos-button";
import { Portrait, UiPic } from "@/components/ui-bits";
import { friends, senior } from "@/lib/data";

export default function ElderlyHome() {
  const raymond = friends[0];

  return (
    <AppShell
      role="elderly"
      title="KakiConnect"
      subtitle={senior.neighbourhood}
      backHref="/"
      action={<SosButton />}
      showNav
      current="/elderly/home"
    >
      <div className="flex flex-col gap-4">
        <section>
          <div className="flex items-center justify-between">
            <span className="text-[13px] font-bold tracking-wide text-ink uppercase">
              Today&apos;s Choice
            </span>
            <span className="rounded-full bg-[#f6ede3] px-2.5 py-0.5 text-[11px] text-muted-foreground">
              Thursday Morning
            </span>
          </div>
          <h1 className="mt-2 text-[28px] leading-9 font-semibold tracking-[-0.02em]">
            What would you like to do today, {senior.name}?
          </h1>
          <ListenButton
            label="Tap to listen to options out loud"
            className="mt-3 w-full justify-center"
          />
        </section>

        <a href="/elderly/activities" className="block">
          <article className="relative flex flex-col overflow-hidden rounded-[24px] border-2 border-ink bg-white p-5">
            <div className="flex items-start justify-between gap-2">
              <span className="inline-flex items-center rounded-full bg-[#fbf6f0] px-3 py-1 text-[11px] font-semibold text-ink ring-1 ring-ink">
                Fresh air & walking
              </span>
              <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-green-wash text-[#1f5a48]">
                <Trees className="size-5" />
              </span>
            </div>
            <h2 className="mt-3 max-w-[13rem] text-[22px] leading-tight font-semibold tracking-[-0.015em]">
              Go out for an outdoor activity
            </h2>
            <p className="mt-2 max-w-[14rem] text-sm leading-relaxed text-muted-foreground">
              Join a small group for Sunset Fishing & Kopi, Dim Sum, or park strolls with a volunteer helper.
            </p>
            <UiPic
              src="/illustrations/outing-walk.png"
              alt=""
              className="pointer-events-none absolute right-[-6px] bottom-16 h-[148px] w-auto"
            />
            <div className="relative z-10 mt-5 border-t border-ink pt-3">
              <span className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-lilac text-[13px] font-bold text-ink">
                Explore Outing Activities
                <ArrowRight className="size-4" />
              </span>
            </div>
          </article>
        </a>

        <a href="/elderly/call" className="block">
          <article className="relative flex flex-col overflow-hidden rounded-[24px] border-2 border-ink bg-white p-5">
            <span className="absolute top-0 right-6 rounded-b-lg bg-lilac-wash px-3 py-0.5 text-[11px] font-bold text-[#5a3d8a]">
              Recommended for today
            </span>
            <div className="mt-3 flex items-start justify-between gap-2">
              <span className="inline-flex items-center rounded-full bg-[#fbf6f0] px-3 py-1 text-[11px] font-semibold text-ink ring-1 ring-ink">
                Cozy & relaxing at home
              </span>
              <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-lilac-wash text-[#5a3d8a]">
                <Phone className="size-5" />
              </span>
            </div>
            <h2 className="mt-3 max-w-[14rem] text-[22px] leading-tight font-semibold tracking-[-0.015em]">
              Stay home & call a matched Kaki
            </h2>
            <p className="mt-2 max-w-[15rem] text-sm leading-relaxed text-muted-foreground">
              Have a friendly 1-on-1 video kopi chat with Uncle Raymond (matched based on Hokkien & gardening).
            </p>
            <UiPic
              src="/illustrations/kopi-chat.png"
              alt=""
              className="pointer-events-none absolute right-[-10px] top-[78px] h-[92px] w-auto"
            />
            <div className="relative z-10 mt-3 flex items-center gap-3 rounded-xl bg-[#fbf6f0] p-3 ring-1 ring-ink">
              <Portrait
                src={raymond.photo}
                alt={raymond.name}
                className="size-10 shrink-0 rounded-full"
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="truncate font-bold">{raymond.name}</p>
                  <p className="shrink-0 text-[11px] font-semibold text-[#1f5a48]">Online now</p>
                </div>
                <p className="truncate text-xs text-muted-foreground">Shared: {raymond.shared}</p>
              </div>
            </div>
            <div className="relative z-10 mt-5 border-t border-ink pt-3">
              <span className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-lilac text-[13px] font-bold text-ink">
                Video Call Uncle Raymond
                <ArrowRight className="size-4" />
              </span>
            </div>
          </article>
        </a>
      </div>
    </AppShell>
  );
}
