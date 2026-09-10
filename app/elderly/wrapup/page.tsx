"use client";

import { useState } from "react";
import { AppShell } from "@/components/app-shell";
import { PrimaryLink } from "@/components/primary-link";
import { SosButton } from "@/components/sos-button";
import { Card, Pill, Portrait, UiPic } from "@/components/ui-bits";
import { outing, photos } from "@/lib/data";
import { cn } from "@/lib/utils";

const ratings = ["Loved it!", "It was okay", "Need help"];

export default function WrapupPage() {
  const [rating, setRating] = useState("Loved it!");

  return (
    <AppShell
      role="elderly"
      title="KakiConnect"
      backHref="/elderly/friends"
      action={<SosButton />}
      showNav
      current="/elderly/friends"
    >
      <div className="space-y-4">
        <p className="text-[11px] tracking-[0.16em] text-muted-foreground">
          {"// 04:CONN · Call completed"}
        </p>
        <div className="flex items-center gap-3">
          <Portrait
            src={photos.raymond}
            alt="Uncle Raymond"
            className="size-16 rounded-full"
          />
          <div className="min-w-0 flex-1">
            <h1 className="text-[22px] font-bold leading-tight">
              Great Chat with Uncle Raymond!
            </h1>
            <p className="text-sm text-muted-foreground">Both audio & video quality stayed crisp!</p>
          </div>
          <UiPic
            src="/illustrations/kopi-chat.png"
            alt=""
            className="h-14 w-auto shrink-0"
          />
        </div>
        <p className="text-[16px] leading-relaxed">
          You chatted for <strong>18 minutes</strong>! That was wonderful.
        </p>
        <div>
          <p className="font-semibold">How was your chat today?</p>
          <p className="text-xs text-muted-foreground">A short note helps us match you better next time</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {ratings.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setRating(item)}
                className={cn(
                  "rounded-full border-2 border-ink px-4 py-2 text-sm font-semibold",
                  rating === item ? "bg-lilac text-ink" : "bg-white"
                )}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <Card highlight>
          <p className="font-bold">Suggested Connection · Schedule Next Kopi Call</p>
          <Pill className="mt-2">Virtual</Pill>
          <p className="mt-2 text-sm leading-relaxed">
            Uncle Raymond is free tomorrow at <strong>10:30 AM</strong> for a morning catchup!
          </p>
          <PrimaryLink href="/elderly/friends" variant="black" className="mt-3">
            Book Reminder
          </PrimaryLink>
        </Card>
        <Card className="overflow-hidden p-0">
          <Portrait
            src={photos.reservoir}
            alt="Bedok Reservoir sunset"
            className="h-28 w-full"
          />
          <div className="p-4">
            <p className="font-bold">In-Person Buddy Outing</p>
            <p className="text-sm">Meet in Person? · Bedok · {outing.title}</p>
            <p className="text-sm text-muted-foreground">This Thursday, 5:00 PM</p>
            <PrimaryLink href="/elderly/outing" variant="outline" className="mt-3">
              View Outing Details
            </PrimaryLink>
          </div>
        </Card>
        <PrimaryLink href="/elderly/home">Back to Home Screen</PrimaryLink>
      </div>
    </AppShell>
  );
}
