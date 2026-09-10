"use client";

import { useState } from "react";
import { AppShell } from "@/components/app-shell";
import { Card } from "@/components/ui-bits";
import { familyMember, fsc, outing, volunteerLiveTaps } from "@/lib/data";
import { cn } from "@/lib/utils";

type Tap = {
  id: string;
  label: string;
  time: string;
  detail: string;
  done: boolean;
};

export default function VolunteerLive() {
  const [items, setItems] = useState<Tap[]>(
    volunteerLiveTaps.map((item) => ({ ...item }))
  );

  function tap(id: string) {
    setItems((current) =>
      current.map((item) =>
        item.id === id
          ? {
              ...item,
              done: true,
              time: new Date().toLocaleTimeString("en-SG", {
                hour: "numeric",
                minute: "2-digit",
              }),
            }
          : item
      )
    );
  }

  return (
    <AppShell
      role="volunteer"
      title="KakiConnect"
      subtitle="Volunteer Mode"
      backHref="/volunteer/plan"
      showNav
      current="/volunteer/live"
    >
      <div className="space-y-4">
        <Card tone="mint">
          <p className="text-sm font-semibold text-primary">
            Active Companionship · Mr Tan (Bedok)
          </p>
          <h1 className="mt-1 text-xl font-bold">Tan Ah Kow (76)</h1>
          <p className="text-sm">24/7 FSC Coordinator · Current Live Phase OUTING-BEDOK-04</p>
          <p className="mt-2 font-semibold">En Route to Bedok Reservoir</p>
          <p className="text-sm text-muted-foreground">
            Next Step: Arriving at Sheltered Pavilion A with Mr Tan
          </p>
          <p className="mt-2 text-xs font-semibold">Overall Route Journey · Step 2 of 3</p>
        </Card>
        <div>
          <h2 className="font-bold">1-Tap Check-in Timeline</h2>
          <p className="text-sm text-muted-foreground">
            Tap button to seamlessly notify family and FSC coordinator via SMS · 원클릭 기록
          </p>
        </div>
        <ul className="space-y-3">
          {items.map((item) => (
            <li
              key={item.id}
              className={cn(
                "rounded-[28px] p-4",
                item.done ? "bg-[#f6ede3]" : "bg-[#d5efe6]"
              )}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-bold">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.time}</p>
                  <p className="mt-1 text-sm">{item.detail}</p>
                </div>
                {item.done ? (
                  <span className="text-xs font-semibold text-[#1f5a48]">Sent</span>
                ) : (
                  <button
                    type="button"
                    className="min-h-12 shrink-0 rounded-full bg-[#3a322c] px-4 text-sm font-bold text-white"
                    onClick={() => tap(item.id)}
                  >
                    Tap to send
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
        <Card tone="butter">
          <p className="font-bold">Companion Care Prompts · 실시간 주의 사항</p>
          <ul className="mt-2 space-y-2 text-sm">
            <li>
              <strong>Hydration reminder.</strong> Offer water break after 20 mins of walking · Recommended in 8 mins
            </li>
            <li>
              <strong>Weather reminder.</strong> Sheltered pavilion nearby if it rains · Pavilion A (120m ahead)
            </li>
            <li>
              <strong>Emergency Protocol.</strong> If feeling unwell, tap SOS or contact SCDF 995 immediately
            </li>
          </ul>
        </Card>
        <div className="grid grid-cols-2 gap-2">
          <a
            href={`tel:${familyMember.phone.replace(/\s/g, "")}`}
            className="flex min-h-14 items-center justify-center rounded-full bg-[#3a322c] px-3 text-center text-sm font-bold text-white"
          >
            Call Daughter Sarah
          </a>
          <a
            href={`tel:${fsc.phone.replace("-", "")}`}
            className="flex min-h-14 items-center justify-center rounded-full bg-[#f6ede3] px-3 text-center text-sm font-bold"
          >
            Contact FSC
          </a>
        </div>
        <p className="text-center text-xs text-muted-foreground">{outing.title}</p>
      </div>
    </AppShell>
  );
}
