import { Check, Play, Shield } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { PrimaryLink } from "@/components/primary-link";
import { SosButton } from "@/components/sos-button";
import { Card, Pill, Portrait } from "@/components/ui-bits";
import { kakis, outing, photos, volunteer } from "@/lib/data";

export default function BookedPage() {
  return (
    <AppShell
      role="elderly"
      title="KakiConnect"
      backHref="/elderly/home"
      action={<SosButton />}
      showNav
      current="/elderly/home"
    >
      <div className="space-y-4">
        <Pill className="bg-[#d6f0dc] text-[#1b5e20]">
          Confirmed • 4 Kakis & 1 Volunteer
        </Pill>
        <p className="text-[11px] font-bold tracking-[0.12em] text-primary uppercase">
          Coordinated dual-match // 듀얼 매치
        </p>
        <h1 className="text-[26px] leading-tight font-bold">Your Outing is Ready!</h1>
        <p className="text-sm leading-relaxed text-muted-foreground">
          We found wonderful kakis and a friendly volunteer companion to join you for a gentle, sunlit afternoon.
        </p>
        <Card className="overflow-hidden p-0">
          <Portrait
            src={photos.reservoirBoardwalk}
            alt="Bedok Reservoir boardwalk"
            className="h-36 w-full"
          />
          <div className="p-5">
            <Pill>Reservoir Leisure · // 01 Outing Ticket</Pill>
            <p className="mt-2 text-xs font-semibold text-[#715c00]">Breezy & Shaded</p>
            <h2 className="mt-1 text-xl font-bold">{outing.title}</h2>
            <p className="text-sm text-muted-foreground">
              {outing.dayLabel} · {outing.start} – {outing.end}
            </p>
            <p className="text-sm">{outing.pavilion}</p>
          </div>
        </Card>
        <Card>
          <p className="text-sm font-semibold text-primary">
            Support Match · Verified Companion · 1-to-1 Support
          </p>
          <div className="mt-3 flex gap-3">
            <Portrait
              src={volunteer.photo}
              alt={volunteer.name}
              className="size-16 rounded-2xl"
            />
            <div>
              <p className="font-bold">{volunteer.name}</p>
              <p className="text-sm text-muted-foreground">
                Age {volunteer.age} · {volunteer.neighbourhood}
              </p>
              <p className="mt-1 flex items-center gap-1 text-xs font-semibold text-primary">
                <Shield className="size-3.5" /> {volunteer.verified}
              </p>
              <p className="text-xs">Role: {volunteer.role}</p>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {volunteer.skills.map((skill) => (
              <Pill key={skill}>{skill}</Pill>
            ))}
          </div>
          <p className="mt-3 text-sm leading-relaxed">
            Rachel will accompany you to the activity and travel with you directly from{" "}
            <strong>{volunteer.meetingFrom}</strong>.
          </p>
          <button
            type="button"
            className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#fff3c9] px-4 py-2 text-sm font-bold"
          >
            <Play className="size-4" /> Listen to Rachel&apos;s voice note (0:15s)
          </button>
        </Card>
        <Card>
          <p className="font-bold">Social Match · Your Kakis · 3 Joining</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Matched based on gentle walking pace, East-side neighborhood, and morning kopi preferences.
          </p>
          <ul className="mt-3 space-y-3">
            {kakis.map((person) => (
              <li key={person.name} className="flex gap-3">
                <Portrait
                  src={person.photo}
                  alt={person.name}
                  className="size-12 rounded-xl"
                />
                <div>
                  <p className="font-bold">
                    {person.name}, {person.age}
                  </p>
                  <p className="text-xs text-muted-foreground">{person.neighbourhood}</p>
                  <p className="text-sm">{person.quote}</p>
                  <p className="text-xs text-muted-foreground">
                    {person.languages.join(" · ")}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Card>
        <Card>
          <p className="font-bold">Accessibility & Dignity Guarantee</p>
          <ul className="mt-2 space-y-1 text-sm">
            {[
              "Step-free & ramp access verified",
              "Ample shaded bench seating available",
              "Clean wheelchair-friendly restroom 50m away",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <Check className="size-4 text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </Card>
        <PrimaryLink href="/elderly/home">Join Activity</PrimaryLink>
        <PrimaryLink href="/family/home" variant="outline">
          Preview what family sees
        </PrimaryLink>
      </div>
    </AppShell>
  );
}
