import { ArrowRight, Phone, Play, Shield } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { PrimaryLink } from "@/components/primary-link";
import { SosButton } from "@/components/sos-button";
import { Card, Pill, Portrait } from "@/components/ui-bits";
import { kakis, outing, photos, volunteer } from "@/lib/data";

export default function SupportCompanionPage() {
  return (
    <AppShell
      role="elderly"
      title="KakiConnect"
      subtitle="View 2 of 3"
      backHref="/elderly/activities/support"
      action={<SosButton />}
      showNav
      current="/elderly/home"
    >
      <div className="space-y-4">
        <p className="text-[11px] font-bold tracking-[0.1em] text-primary uppercase">
          Support Match Review
        </p>
        <Card className="overflow-hidden p-0">
          <Portrait
            src={photos.rachelHero}
            alt="Rachel Lin, volunteer companion"
            className="h-40 w-full"
          />
          <div className="p-5">
            <p className="text-sm text-muted-foreground">
              {outing.dayLabel} · {outing.start} – {outing.end}
            </p>
            <h1 className="mt-1 text-[22px] font-bold leading-tight">{outing.title}</h1>
            <p className="text-sm text-muted-foreground">{outing.jetty}</p>
            <Pill className="mt-3">Support Match • Verified Companion</Pill>
            <h2 className="mt-3 text-xl font-bold">{volunteer.name}</h2>
            <p className="text-sm text-muted-foreground">
              Age {volunteer.age} • {volunteer.neighbourhood}
            </p>
            <p className="mt-2 flex items-start gap-1 text-sm font-semibold text-primary">
              <Shield className="mt-0.5 size-4 shrink-0" />
              {volunteer.verified}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {volunteer.skills.map((skill) => (
                <Pill key={skill} className="bg-[#f6ede3] text-[#3a322c]">
                  {skill}
                </Pill>
              ))}
            </div>
            <div className="mt-4 rounded-[22px] bg-white/70 p-3">
              <p className="text-sm font-bold">Dedicated Meeting Arrangement</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                Rachel will accompany you to the activity and travel with you directly from{" "}
                <strong>{volunteer.meetingFrom}</strong>.
              </p>
            </div>
            <button
              type="button"
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-[#f6ede3] py-3 text-sm font-bold"
            >
              <Play className="size-4" /> Listen to Rachel&apos;s voice greeting
            </button>
            <p className="mt-1 text-center text-xs text-muted-foreground">
              Duration: 0:15s • Warm & clear
            </p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <a
                href="tel:+6590000000"
                className="flex min-h-11 items-center justify-center gap-1 rounded-full bg-primary text-sm font-bold text-white"
              >
                <Phone className="size-4" /> Call Rachel
              </a>
              <a
                href="tel:67439821"
                className="flex min-h-11 items-center justify-center rounded-full bg-[#f6ede3] text-sm font-bold"
              >
                Safety hotline
              </a>
            </div>
          </div>
        </Card>
        <Card>
          <p className="font-bold">Social Match: 3 Kaki Friends</p>
          <p className="text-sm text-muted-foreground">Ahmad, Susan, Mr Tan attending</p>
          <div className="mt-3 flex -space-x-2">
            {kakis.map((person) => (
              <Portrait
                key={person.name}
                src={person.photo}
                alt={person.name}
                className="size-10 rounded-xl ring-2 ring-white"
              />
            ))}
          </div>
        </Card>
        <Card>
          <p className="font-bold">Accessibility & Dignity Guarantee</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Step-free path, rest benches & pacing verified
          </p>
        </Card>
        <PrimaryLink href="/elderly/outing">
          Confirm & Join Activity
          <ArrowRight className="size-5" />
        </PrimaryLink>
      </div>
    </AppShell>
  );
}
