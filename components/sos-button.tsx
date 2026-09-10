"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, X } from "lucide-react";
import { familyMember } from "@/lib/data";

export function SosButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex size-12 items-center justify-center rounded-full bg-[#f5d6d2] text-[11px] font-bold tracking-tight text-[#c62828] active:scale-95"
      >
        SOS
      </button>
      {open ? (
        <div className="absolute inset-0 z-50 flex items-end bg-black/25 p-4">
          <div className="w-full rounded-[32px] bg-white p-5 shadow-[0_20px_50px_-20px_rgba(22,24,29,0.4)]">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.08em] text-[#c62828] uppercase">
                  Need assistance right now?
                </p>
                <h2 className="mt-1 text-[20px] font-extrabold tracking-tight">
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
                className="flex size-10 items-center justify-center rounded-full bg-[#f4f5f7]"
              >
                <X className="size-4" />
              </button>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <a
                href="tel:995"
                className="flex min-h-16 flex-col items-center justify-center gap-1 rounded-[24px] bg-[#ffe4e2] font-bold text-[#c62828]"
              >
                <Phone className="size-5" />
                Call 995
              </a>
              <a
                href={`tel:${familyMember.phone.replace(/\s/g, "")}`}
                className="flex min-h-16 flex-col items-center justify-center gap-1 rounded-[24px] bg-[#d7f0f7] font-bold text-[#124780]"
              >
                <Phone className="size-5" />
                Call Sarah
              </a>
            </div>
            <Link
              href="/elderly/care"
              onClick={() => setOpen(false)}
              className="mt-3 flex min-h-12 items-center justify-center rounded-full bg-[#f4f5f7] text-sm font-semibold"
            >
              Open Care Hub
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
}
