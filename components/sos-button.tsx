"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Siren, X } from "lucide-react";
import { familyMember } from "@/lib/data";

export function SosButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-red-200 bg-red-100 px-3.5 text-[12px] font-bold tracking-tight text-red-600 shadow-sm active:scale-95"
      >
        <Siren className="size-4" />
        SOS
      </button>
      {open ? (
        <div className="absolute inset-0 z-50 flex items-end bg-black/35 p-4">
          <div className="w-full rounded-[24px] bg-white p-5 shadow-xl">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.08em] text-red-600 uppercase">
                  Need assistance right now?
                </p>
                <h2 className="mt-1 text-[20px] font-bold tracking-tight">
                  Reach help with one tap
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Silver Generation Ambassador, family, or emergency response.
                </p>
              </div>
              <button
                type="button"
                aria-label="Close"
                onClick={() => setOpen(false)}
                className="flex size-9 items-center justify-center rounded-full bg-[#f0eeea]"
              >
                <X className="size-4" />
              </button>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <a
                href="tel:995"
                className="flex min-h-16 flex-col items-center justify-center gap-1 rounded-2xl bg-[#ba1a1a] font-bold text-white"
              >
                <Phone className="size-5" />
                Call 995
              </a>
              <a
                href={`tel:${familyMember.phone.replace(/\s/g, "")}`}
                className="flex min-h-16 flex-col items-center justify-center gap-1 rounded-2xl bg-primary font-bold text-white"
              >
                <Phone className="size-5" />
                Call Sarah
              </a>
            </div>
            <Link
              href="/elderly/care"
              onClick={() => setOpen(false)}
              className="mt-3 flex min-h-12 items-center justify-center rounded-full bg-[#f0eeea] text-sm font-semibold"
            >
              Open Care Hub
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
}
