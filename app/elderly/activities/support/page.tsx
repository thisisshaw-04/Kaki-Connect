"use client";

import { useState } from "react";
import { ArrowRight, Check, Volume2 } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { SosButton } from "@/components/sos-button";
import { Card, Pill, choiceClass } from "@/components/ui-bits";
import { outing } from "@/lib/data";
import { PrimaryLink } from "@/components/primary-link";

const options = [
  {
    id: "self",
    title: "No, I can go myself",
    detail: "I am comfortable walking or taking MRT/bus independently",
  },
  {
    id: "travel",
    title: "Someone to travel with me",
    detail: "Meet up nearby and take the bus/train together as a pair",
    note: "Recommended for relaxed, friendly companionship",
    selected: true,
  },
  {
    id: "mobility",
    title: "Mobility assistance",
    detail: "Step-free routes, gentle arm-hold or wheelchair ramp navigation",
  },
  {
    id: "escort",
    title: "A volunteer/caregiver to accompany me",
    detail: "Dedicated door-to-door escort from home and throughout the activity",
  },
  {
    id: "home",
    title: "I would rather join from home",
    detail: "Connect via tablet video call or virtual kopi group",
  },
];

export default function SupportPreferencePage() {
  const [choice, setChoice] = useState("travel");

  return (
    <AppShell
      role="elderly"
      title="KakiConnect"
      backHref="/elderly/activities"
      action={<SosButton />}
      showNav
      current="/elderly/home"
    >
      <div className="space-y-4">
        <Card tone="mint" className="p-4">
          <p className="text-[11px] font-bold tracking-[0.1em] text-primary uppercase">
            Selected outing · // {outing.code}
          </p>
          <h2 className="mt-1 font-bold">{outing.shortTitle}</h2>
          <p className="text-sm text-muted-foreground">
            {outing.dayLabel} · {outing.start} – {outing.end}
          </p>
          <p className="mt-1 text-sm">Organized by {outing.organisedBy}</p>
        </Card>
        <h1 className="text-[22px] font-semibold leading-tight">
          Would you like some help joining this activity?
        </h1>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Choose what feels most comfortable for you. We adapt to your pace for every outing.
        </p>
        <button
          type="button"
              className="inline-flex items-center gap-2 rounded-full bg-lilac-wash px-4 py-2 text-sm font-bold text-[#5a3d8a]"
        >
          <Volume2 className="size-4" /> Tap to listen in Hokkien / Mandarin / English
        </button>
        <p className="text-xs text-muted-foreground">福建話 · 华语</p>
        <div className="space-y-2">
          {options.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setChoice(item.id)}
              className={choiceClass(choice === item.id)}
            >
              <p className="flex items-center gap-2 font-bold">
                {item.title}
                {choice === item.id ? <Check className="size-4 text-primary" /> : null}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
              {item.note ? (
                <p className="mt-1 text-xs font-semibold text-primary">{item.note}</p>
              ) : null}
            </button>
          ))}
        </div>
        <Card>
          <p className="text-sm leading-relaxed">
            Support is matched per activity with Lion Befrienders, TOUCH Community Services, AIC Silver Generation Volunteers, and Fei Yue FSC befrienders.
          </p>
          <Pill className="mt-2">Changeable anytime · Your choice only applies to this outing</Pill>
        </Card>
        <PrimaryLink href="/elderly/activities/companion">
          Continue to Match Social Kakis & Support
          <ArrowRight className="size-5" />
        </PrimaryLink>
      </div>
    </AppShell>
  );
}
