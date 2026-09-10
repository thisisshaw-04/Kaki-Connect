"use client";

import { useState } from "react";
import { AppShell } from "@/components/app-shell";
import { Button } from "@/components/ui/button";
import { checkIns as initial, outing, senior } from "@/lib/data";
import { cn } from "@/lib/utils";

type CheckIn = {
  id: string;
  label: string;
  time: string;
  detail: string;
  done: boolean;
};

export default function VolunteerLive() {
  const [items, setItems] = useState<CheckIn[]>(
    initial.map((item) => ({ ...item }))
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
      title="Live outing"
      backHref="/volunteer/outing"
      showNav
      current="/volunteer/live"
    >
      <div className="space-y-4">
        <div className="rounded-2xl border border-[#cfe3c8] bg-[#f3faf3] p-4">
          <p className="text-sm font-semibold text-[#1b5e20]">With {senior.name}</p>
          <h1 className="mt-1 text-xl font-bold">{outing.title}</h1>
          <p className="text-sm text-muted-foreground">{outing.place}</p>
        </div>
        <p className="text-sm text-muted-foreground">
          Each tap also reaches Priya. Keep it factual.
        </p>
        <ul className="space-y-3">
          {items.map((item) => (
            <li
              key={item.id}
              className={cn(
                "rounded-2xl border p-4",
                item.done ? "border-border bg-card" : "border-primary/30 bg-accent/40"
              )}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-bold">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.time}</p>
                </div>
                {item.done ? (
                  <span className="text-xs font-semibold text-[#1b5e20]">Sent</span>
                ) : (
                  <Button
                    size="sm"
                    className="rounded-full"
                    onClick={() => tap(item.id)}
                  >
                    Tap to send
                  </Button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </AppShell>
  );
}
