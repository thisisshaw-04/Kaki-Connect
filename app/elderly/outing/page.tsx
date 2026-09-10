import { Check } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { PrimaryLink } from "@/components/primary-link";
import { SosButton } from "@/components/sos-button";
import { Card, Portrait } from "@/components/ui-bits";
import { kakis, outing, photos, volunteer } from "@/lib/data";

export default function OutingDetails() {
  return (
    <AppShell
      role="elderly"
      title="KakiConnect"
      backHref="/elderly/activities/companion"
      action={<SosButton />}
      showNav
      current="/elderly/home"
    >
      <div className="space-y-4">
        <p className="text-sm font-semibold text-primary">
          {outing.dayLabel}, 4:30 PM · {outing.spacesLeft} Spaces Left
        </p>
        <h1 className="text-[26px] leading-tight font-bold">{outing.title}</h1>
        <p className="text-muted-foreground">{outing.jetty}</p>
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            <Portrait src={photos.rachel} alt="Rachel" className="size-9 rounded-full ring-2 ring-white" />
            {kakis.slice(0, 2).map((person) => (
              <Portrait
                key={person.name}
                src={person.photo}
                alt={person.name}
                className="size-9 rounded-full ring-2 ring-white"
              />
            ))}
          </div>
          <p className="text-sm">Care guide + 3 senior kakis ready</p>
        </div>

        <Card>
          <p className="text-sm font-semibold text-primary">Support Match: {volunteer.name}</p>
          <p className="text-sm text-muted-foreground">
            Verified Companion • First-Aid Certified
          </p>
        </Card>

        <Card>
          <p className="font-bold">Social Match • Your 3 Kakis</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Matched based on gentle walking pace, East-side neighbourhood, and morning kopi preferences.
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
                  <div className="flex items-center gap-2">
                    <p className="font-bold">
                      {person.name}, {person.age}
                    </p>
                    <span className="text-xs font-semibold text-primary">{person.fit}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{person.neighbourhood}</p>
                  <p className="mt-0.5 text-sm italic">&quot;{person.quote}&quot;</p>
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
          <p className="mt-1 text-sm text-muted-foreground">
            Audited specifically for senior physical ease and comfort before every outing.
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {[
              ["Wheelchair Friendly Restroom", "Barrier-free, wide door, grab bars verified near the jetty."],
              ["Shaded Bench Seating", "Rest benches every 50 meters along the route with ample shade."],
              ["Step-Free Pathway", "Step-free ramp access verified from Bedok MRT bus stop to jetty."],
            ].map(([title, detail]) => (
              <li key={title} className="flex gap-2">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>
                  <span className="font-semibold">{title}</span>
                  <span className="block text-muted-foreground">{detail}</span>
                </span>
              </li>
            ))}
          </ul>
        </Card>
        <PrimaryLink href="/elderly/booked">Join Activity</PrimaryLink>
        <PrimaryLink href="/elderly/care" variant="outline">
          Message Rachel or Group
        </PrimaryLink>
      </div>
    </AppShell>
  );
}
