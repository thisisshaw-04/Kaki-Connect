import { MapPin, Phone, Shield, Sun } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { ListenButton } from "@/components/listen-button";
import { SosButton } from "@/components/sos-button";
import { Card, GoButton, Pill, Portrait, UiPic } from "@/components/ui-bits";
import {
  activityFilters,
  familyMember,
  nearbyActivities,
  outing,
  photos,
  senior,
} from "@/lib/data";

const nearbyTone: Record<string, "sky" | "mint" | "lavender"> = {
  "teh-c": "sky",
  "park-walk": "mint",
  herbal: "lavender",
};

const nearbyArt: Record<string, string> = {
  "teh-c": "/illustrations/kopi-chat.png",
  "park-walk": "/illustrations/outing-walk.png",
  herbal: "/illustrations/person-tablet.png",
};

export default function ActivitiesPage() {
  return (
    <AppShell
      role="elderly"
      title="KakiConnect"
      subtitle={`${senior.neighbourhood} Ave 3`}
      backHref="/elderly/home"
      action={<SosButton />}
      showNav
      current="/elderly/home"
    >
      <div className="min-w-0 space-y-5">
        <div>
          <h1 className="text-[26px] font-extrabold tracking-[-0.04em]">
            Good morning, {senior.name}!
          </h1>
          <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
            <Sun className="size-4 text-[#3a322c]" />
            {outing.weather}
          </p>
          <div className="mt-3">
            <ListenButton label="Listen to today's activities" />
          </div>
        </div>

        <div className="min-w-0">
          <div className="flex items-center justify-between gap-3">
            <h2 className="min-w-0 font-semibold">What would you like to do?</h2>
            <span className="shrink-0 text-xs text-muted-foreground">Swipe for more</span>
          </div>
          <div
            className="-mx-5 mt-2 min-w-0 overflow-x-auto overscroll-x-contain"
            role="list"
            aria-label="Activity filters"
          >
            <div className="flex w-max min-h-12 items-center gap-2 px-5 py-1.5">
              {activityFilters.map((item, index) => (
                <span
                  key={item}
                  role="listitem"
                  aria-current={index === 0 ? "true" : undefined}
                  className={`inline-flex min-h-11 shrink-0 items-center whitespace-nowrap rounded-full px-3.5 py-2 text-[13px] leading-none font-semibold ${
                    index === 0 ? "bg-lilac text-ink" : "bg-white text-foreground ring-1 ring-ink"
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <Card tone="butter" className="relative overflow-hidden p-0">
          <div className="relative h-40 overflow-hidden bg-green-wash">
            <Portrait
              src={photos.reservoir}
              alt="Bedok Reservoir at sunset"
              className="h-full w-full opacity-90"
            />
            <UiPic
              src="/illustrations/fishing.png"
              alt=""
              className="pointer-events-none absolute right-2 -bottom-2 h-36 w-auto"
            />
            <Pill className="absolute top-3 left-3 bg-white text-ink">
              Specially picked for you today
            </Pill>
          </div>
          <div className="p-5">
            <p className="text-[11px] font-bold tracking-[0.12em] text-[#1f5a48] uppercase">
              {outing.area}
            </p>
            <h2 className="mt-1 text-[22px] font-extrabold leading-tight">{outing.title}</h2>
            <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="size-4" />
              {outing.place}
            </p>
            <p className="mt-3 text-sm">
              <span className="font-semibold">2 Kakis joining:</span> {outing.kakisJoining}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {outing.access.map((item) => (
                <Pill key={item} className="bg-white/80 text-foreground">
                  {item}
                </Pill>
              ))}
            </div>
            <a
              href="/elderly/activities/support"
              className="mt-4 flex items-center justify-between"
            >
              <span className="text-[13px] font-bold">Join this Kaki Group</span>
              <GoButton />
            </a>
            <div className="mt-3 rounded-[22px] bg-white/75 p-3">
              <p className="flex items-center gap-1 text-sm font-bold">
                <Shield className="size-4" /> Family peace of mind active
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                Your daughter Sarah will be automatically notified when your group gathers safely at the location.
              </p>
            </div>
          </div>
        </Card>

        <div className="flex items-center justify-between">
          <h2 className="font-semibold">Happening Near You</h2>
          <span className="text-sm font-medium text-muted-foreground">View all (8)</span>
        </div>
        <div className="space-y-3">
          {nearbyActivities.map((item) => (
            <a
              key={item.id}
              href="/elderly/activities/support"
              className="block"
            >
              <Card tone={nearbyTone[item.id] ?? "white"} className="relative overflow-hidden p-4">
                <div className="min-w-0 pr-16">
                  <p className="text-[13px] font-semibold">
                    {item.when} · {item.attending}
                  </p>
                  <h3 className="mt-1 text-[17px] font-extrabold leading-tight tracking-[-0.02em]">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.place}</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <Pill key={tag} className="text-[11px]">
                        {tag}
                      </Pill>
                    ))}
                  </div>
                  <span className="mt-3 flex items-center justify-between">
                    <span className="text-sm font-bold">View & Join Group</span>
                    <GoButton />
                  </span>
                </div>
                <UiPic
                  src={nearbyArt[item.id] ?? "/illustrations/person-point.png"}
                  alt=""
                  className="pointer-events-none absolute right-[-4px] bottom-1 h-[92px] w-auto"
                />
              </Card>
            </a>
          ))}
        </div>

        <Card tone="blush">
          <p className="font-bold">Need assistance right now?</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Reach AIC Silver Generation Ambassador or emergency response hotline with one tap.
          </p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <a
              href="tel:995"
              className="flex min-h-14 items-center justify-center gap-1 rounded-full bg-white text-sm font-bold text-[#8f2428]"
            >
              <Phone className="size-4" /> Call 995
            </a>
            <a
              href={`tel:${familyMember.phone.replace(/\s/g, "")}`}
              className="flex min-h-14 items-center justify-center gap-1 rounded-full bg-lilac text-sm font-bold text-ink"
            >
              <Phone className="size-4" /> Call Sarah
            </a>
          </div>
        </Card>
      </div>
    </AppShell>
  );
}
