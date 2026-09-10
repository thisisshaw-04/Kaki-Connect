import Link from "next/link";
import { ArrowRight, MapPin, Phone, Shield, Sun } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { ListenButton } from "@/components/listen-button";
import { SosButton } from "@/components/sos-button";
import { Card, Pill, UiPic } from "@/components/ui-bits";
import {
  activityFilters,
  familyMember,
  nearbyActivities,
  outing,
  senior,
} from "@/lib/data";

const nearbyArt: Record<string, string> = {
  "teh-c": "/ui/icon-kopi.png",
  "park-walk": "/ui/icon-park.png",
  herbal: "/ui/icon-tea.png",
};

const nearbyTone: Record<string, "sky" | "mint" | "lavender"> = {
  "teh-c": "sky",
  "park-walk": "mint",
  herbal: "lavender",
};

export default function ActivitiesPage() {
  return (
    <AppShell
      role="elderly"
      title="KakiConnect"
      subtitle={`📍 ${senior.neighbourhood} Ave 3`}
      backHref="/elderly/home"
      action={<SosButton />}
      showNav
      current="/elderly/home"
    >
      <div className="space-y-5">
        <div>
          <h1 className="text-[30px] font-extrabold tracking-[-0.04em]">
            Good morning, {senior.name}!
          </h1>
          <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
            <Sun className="size-4 text-[#715c00]" />
            {outing.weather}
          </p>
          <div className="mt-3">
            <ListenButton label="Listen to today's activities" />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">What would you like to do?</h2>
            <span className="text-xs text-muted-foreground">Swipe for more</span>
          </div>
          <div className="mt-2 flex gap-2 overflow-x-auto pb-1">
            {activityFilters.map((item, index) => (
              <span
                key={item}
                className={`shrink-0 rounded-full px-3 py-1.5 text-[12px] font-semibold ${
                  index === 0 ? "bg-[#16181d] text-white" : "bg-[#f4f5f7] text-foreground"
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <Card tone="sky" className="overflow-hidden p-0">
          <div className="relative h-40 overflow-hidden">
            <UiPic
              src="/ui/ill-reservoir.png"
              alt="Bedok Reservoir at sunset"
              className="h-full w-full object-cover"
            />
            <Pill className="absolute top-3 left-3 bg-[#fff3c9] text-[#3d3200]">
              Specially picked for you today
            </Pill>
          </div>
          <div className="p-5">
            <p className="text-[11px] font-bold tracking-[0.12em] text-[#315e8e] uppercase">
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
            <Link
              href="/elderly/activities/support"
              className="mt-4 flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#16181d] text-[13px] font-bold text-white"
            >
              Join this Kaki Group <ArrowRight className="size-4" />
            </Link>
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
          <span className="text-sm font-semibold">View all (8)</span>
        </div>
        <div className="space-y-3">
          {nearbyActivities.map((item) => (
            <Link
              key={item.id}
              href="/elderly/activities/support"
              className="block"
            >
              <Card tone={nearbyTone[item.id] ?? "white"} className="relative overflow-hidden">
                <UiPic
                  src={nearbyArt[item.id] ?? "/ui/icon-park.png"}
                  alt=""
                  className="pointer-events-none absolute -right-1 -top-1 h-20 w-20"
                />
                <p className="pr-16 text-xs font-semibold">
                  {item.when} · {item.attending}
                </p>
                <h3 className="mt-1 pr-16 text-lg font-extrabold tracking-[-0.02em]">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.place}</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <Pill key={tag} className="bg-white/80 text-foreground">
                      {tag}
                    </Pill>
                  ))}
                </div>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold">
                  View & Join Group <ArrowRight className="size-4" />
                </span>
              </Card>
            </Link>
          ))}
        </div>

        <Card tone="blush">
          <p className="font-bold">Need assistance right now?</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Reach Silver Generation Ambassador or emergency response hotline with one tap.
          </p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <a
              href="tel:995"
              className="flex min-h-12 items-center justify-center gap-1 rounded-full bg-white text-sm font-bold text-[#c62828]"
            >
              <Phone className="size-4" /> Call 995
            </a>
            <a
              href={`tel:${familyMember.phone.replace(/\s/g, "")}`}
              className="flex min-h-12 items-center justify-center gap-1 rounded-full bg-[#16181d] text-sm font-bold text-white"
            >
              <Phone className="size-4" /> Call Sarah
            </a>
          </div>
        </Card>
      </div>
    </AppShell>
  );
}
