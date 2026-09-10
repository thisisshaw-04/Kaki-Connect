import { Phone, X } from "lucide-react";
import { familyMember } from "@/lib/data";

export const SOS_SHEET_ID = "sos-sheet";

export function SosButton() {
  return (
    <label
      htmlFor={SOS_SHEET_ID}
      aria-label="Emergency SOS"
      className="relative z-[90] inline-flex min-h-10 cursor-pointer items-center justify-center rounded-full border border-[#f8d4d2] bg-[#f8d4d2] px-3.5 py-1.5 text-[12px] font-bold tracking-tight text-[#8f2428] transition active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8f2428] focus-visible:ring-offset-2"
    >
      SOS
    </label>
  );
}

export function SosSheet() {
  return (
    <div className="sos-overlay" role="dialog" aria-modal="true" aria-labelledby="sos-title">
      <label htmlFor={SOS_SHEET_ID} className="sos-overlay-dismiss" aria-label="Close SOS" />
      <div className="sos-overlay-card">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold tracking-[0.08em] text-[#8f2428] uppercase">
              Need assistance right now?
            </p>
            <h2 id="sos-title" className="mt-1 text-[20px] font-extrabold tracking-tight">
              Reach help with one tap
            </h2>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              Silver Generation Ambassador, family, or emergency response.
            </p>
          </div>
          <label
            htmlFor={SOS_SHEET_ID}
            aria-label="Close"
            className="flex size-12 shrink-0 cursor-pointer items-center justify-center rounded-full bg-lilac-wash text-[#5a3d8a]"
          >
            <X className="size-4" />
          </label>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <a
            href="tel:995"
            className="flex min-h-16 flex-col items-center justify-center gap-1 rounded-[24px] bg-[#f8d4d2] font-bold text-[#8f2428]"
          >
            <Phone className="size-5" />
            Call 995
          </a>
          <a
            href={`tel:${familyMember.phone.replace(/\s/g, "")}`}
            className="flex min-h-16 flex-col items-center justify-center gap-1 rounded-[24px] bg-lilac-wash font-bold text-[#5a3d8a]"
          >
            <Phone className="size-5" />
            Call Sarah
          </a>
        </div>
        <a
          href="/elderly/care"
          className="sos-care-link mt-3 flex min-h-12 items-center justify-center rounded-full bg-lilac text-sm font-semibold text-ink"
        >
          Open Care Hub
        </a>
      </div>
    </div>
  );
}
