import Link from "next/link";
import { ArrowRight, MapPin, Phone, Shield, Sun } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { ListenButton } from "@/components/listen-button";
import { SosButton } from "@/components/sos-button";
import { Card, Pill, Portrait } from "@/components/ui-bits";
import {
  activityFilters,
  familyMember,
  nearbyActivities,
  outing,
  photos,
  senior,
} from "@/lib/data";

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
          <h1 className="text-[22px] font-semibold tracking-[-0.015em]">
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
                  index === 0 ? "bg-primary text-white" : "bg-[#f0eeea] text-foreground"
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <Card className="overflow-hidden p-0">
          <div className="relative h-36">
            <Portrait
              src={photos.reservoir}
              alt="Bedok Reservoir at sunset"
              className="h-full w-full"
            />
            <Pill className="absolute top-3 left-3 bg-[#ffdd67] text-[#3d3200]">
              Specially picked for you today
            </Pill>
          </div>
          <div className="p-5">
            <p className="text-[11px] font-bold tracking-[0.12em] text-primary uppercase">
              {outing.area}
            </p>
            <h2 className="mt-1 text-[22px] font-bold leading-tight">{outing.title}</h2>
            <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="size-4" />
              {outing.place}
            </p>
            <p className="mt-3 text-sm">
              <span className="font-semibold">2 Kakis joining:</span> {outing.kakisJoining}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {outing.access.map((item) => (
                <Pill key={item} className="bg-[#f0eeea] text-foreground">
                  {item}
                </Pill>
              ))}
            </div>
            <Link
              href="/elderly/activities/support"
              className="mt-4 flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#18181b] text-[13px] font-bold text-white"
            >
              Join this Kaki Group <ArrowRight className="size-4" />
            </Link>
            <div className="mt-3 rounded-xl bg-[#eaf1f8] p-3">
              <p className="flex items-center gap-1 text-sm font-bold text-primary">
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
          <span className="text-sm font-semibold text-primary">View all (8)</span>
        </div>
        <div className="space-y-3">
          {nearbyActivities.map((item) => (
            <Link
              key={item.id}
              href="/elderly/activities/support"
              className="block rounded-[20px] border border-[#c2c6d1]/30 bg-white p-4"
            >
              <p className="text-xs font-semibold text-primary">
                {item.when} · {item.attending}
              </p>
              <h3 className="mt-1 text-lg font-bold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.place}</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <Pill key={tag} className="bg-[#f0eeea] text-foreground">
                    {tag}
                  </Pill>
                ))}
              </div>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                View & Join Group <ArrowRight className="size-4" />
              </span>
            </Link>
          ))}
        </div>

        <Card className="bg-[#fff6f5]">
          <p className="font-bold">Need assistance right now?</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Reach Silver Generation Ambassador or emergency response hotline with one tap.
          </p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <a
              href="tel:995"
              className="flex min-h-12 items-center justify-center gap-1 rounded-full bg-[#ba1a1a] text-sm font-bold text-white"
            >
              <Phone className="size-4" /> Call 995
            </a>
            <a
              href={`tel:${familyMember.phone.replace(/\s/g, "")}`}
              className="flex min-h-12 items-center justify-center gap-1 rounded-full bg-primary text-sm font-bold text-white"
            >
              <Phone className="size-4" /> Call Sarah
            </a>
          </div>
        </Card>
      </div>
    </AppShell>
  );
}
