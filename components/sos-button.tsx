"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Phone, X } from "lucide-react";
import { familyMember } from "@/lib/data";

export function SosButton() {
  const [open, setOpen] = useState(false);
  const [host, setHost] = useState<HTMLElement | null>(null);
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setHost(document.querySelector(".phone-app") as HTMLElement | null);
  }, []);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    const opener = openerRef.current;
    return () => {
      window.removeEventListener("keydown", onKey);
      opener?.focus();
    };
  }, [open]);

  const dialog =
    open && host
      ? createPortal(
          <div
            className="absolute inset-0 z-50 flex items-end bg-black/40 p-4"
            onClick={() => setOpen(false)}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              className="w-full rounded-[32px] bg-white p-5 text-[#16181d] shadow-[0_20px_50px_-20px_rgba(22,24,29,0.4)]"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold tracking-[0.08em] text-[#9b1c1c] uppercase">
                    Need assistance right now?
                  </p>
                  <h2 id={titleId} className="mt-1 text-[20px] font-extrabold tracking-tight">
                    Reach help with one tap
                  </h2>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Silver Generation Ambassador, family, or emergency response.
                  </p>
                </div>
                <button
                  ref={closeRef}
                  type="button"
                  aria-label="Close"
                  onClick={() => setOpen(false)}
                  className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#f4f4f2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16181d]"
                >
                  <X className="size-4" />
                </button>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <a
                  href="tel:995"
                  className="flex min-h-16 flex-col items-center justify-center gap-1 rounded-[24px] bg-[#f5d6d2] font-bold text-[#9b1c1c]"
                >
                  <Phone className="size-5" />
                  Call 995
                </a>
                <a
                  href={`tel:${familyMember.phone.replace(/\s/g, "")}`}
                  className="flex min-h-16 flex-col items-center justify-center gap-1 rounded-[24px] bg-[#d5ebf5] font-bold text-[#124780]"
                >
                  <Phone className="size-5" />
                  Call Sarah
                </a>
              </div>
              <Link
                href="/elderly/care"
                onClick={() => setOpen(false)}
                className="mt-3 flex min-h-12 items-center justify-center rounded-full bg-[#f4f4f2] text-sm font-semibold"
              >
                Open Care Hub
              </Link>
            </div>
          </div>,
          host
        )
      : null;

  return (
    <>
      <button
        ref={openerRef}
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label="Emergency SOS"
        onClick={() => setOpen(true)}
        className="flex size-12 items-center justify-center rounded-full bg-[#f5d6d2] text-[13px] font-bold tracking-tight text-[#9b1c1c] transition active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9b1c1c] focus-visible:ring-offset-2"
      >
        SOS
      </button>
      {dialog}
    </>
  );
}
