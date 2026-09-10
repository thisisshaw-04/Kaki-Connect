import { Phone } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { SosButton } from "@/components/sos-button";
import { Card, Pill, UiPic } from "@/components/ui-bits";
import { familyMember, fsc, senior } from "@/lib/data";

export default function CareHubPage() {
  return (
    <AppShell
      role="elderly"
      title="KakiConnect"
      subtitle="싱가포르 케어 허브"
      backHref="/elderly/home"
      action={<SosButton />}
      showNav
      current="/elderly/care"
    >
      <div className="space-y-4">
        <Pill className="bg-[#ede0fa]">Care Hub</Pill>
        <h1 className="text-[30px] leading-tight font-extrabold tracking-[-0.04em]">Help is always nearby</h1>
        <p className="text-[16px] leading-relaxed text-muted-foreground">
          Family peace of mind, Fei Yue FSC, and emergency numbers — without leaving the app.
        </p>
        <Card tone="mint" className="relative overflow-hidden">
          <UiPic
            src="/illustrations/person-dog.png"
            alt=""
            className="pointer-events-none absolute right-0 -bottom-1 h-20 w-auto"
          />
          <p className="pr-16 font-bold">Family Peace of Mind</p>
          <p className="mt-2 max-w-[85%] text-sm leading-relaxed">
            {familyMember.name} ({familyMember.relation}) is your verified emergency contact at {familyMember.phone}.
            She receives automated check-in SMS when an outing begins.
          </p>
          <p className="mt-2 max-w-[90%] text-sm leading-relaxed text-[#3a322c]">
            60 Min Guarantee: if no check-in is received, an urgent alert and live GPS is escalated to family and the community care centre.
          </p>
        </Card>
        <Card tone="sky">
          <p className="font-bold">FSC Care Coordinator</p>
          <p className="mt-1 text-sm">
            {fsc.coordinator} · {fsc.organisation}
          </p>
          <p className="text-sm text-muted-foreground">{fsc.hours}</p>
          <a
            href={`tel:${fsc.phone.replace("-", "")}`}
            className="mt-3 flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#3a322c] font-bold text-white"
          >
            <Phone className="size-4" /> Call {fsc.phone}
          </a>
        </Card>
        <Card tone="blush">
          <p className="font-bold">Need assistance right now?</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Reach Silver Generation Ambassador or emergency response with one tap. Stay with {senior.name} until help arrives.
          </p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <a
              href="tel:995"
              className="flex min-h-14 flex-col items-center justify-center rounded-[22px] bg-white text-sm font-bold text-[#d6454a]"
            >
              995
              <span className="text-[11px] font-medium">Ambulance / SCDF</span>
            </a>
            <a
              href={`tel:${familyMember.phone.replace(/\s/g, "")}`}
              className="flex min-h-14 flex-col items-center justify-center rounded-[22px] bg-[#3a322c] text-sm font-bold text-white"
            >
              Call Sarah
              <span className="text-[11px] font-medium">Daughter</span>
            </a>
          </div>
        </Card>
      </div>
    </AppShell>
  );
}
