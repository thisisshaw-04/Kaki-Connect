import { Phone } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { Card, SlashMark } from "@/components/ui-bits";
import { fsc } from "@/lib/data";

const allowed = [
  ["Walking companionship", "Strolling leisurely around the void deck, parks, and wet markets."],
  ["Transit assistance", "Taking public bus and MRT together, finding priority seating, tapping cards."],
  ["Hawker navigation", "Scouting safe table seating and clearing space before senior sits down."],
  ["Communication support", "Reading out menu stall boards, prices, and event posters clearly."],
  ["Heartful conversation", "Active sharing, listening to memories, and keeping spirits joyful."],
];

const notAllowed = [
  ["Medication administration", "Never dose, dispense, or handle prescriptions directly."],
  ["Physical lifting & transfers", "Avoid hoisting from bed to chair without formal occupational training."],
  ["Money & banking handling", "Do not touch ATM PINs, bank books, cash cards, or large sums."],
  ["Clinical treatments", "No wound dressing, medical diagnostics, or catheter assistance."],
];

export default function VolunteerSafety() {
  return (
    <AppShell
      role="volunteer"
      title="KakiConnect"
      subtitle="Volunteer Mode"
      backHref="/volunteer/plan"
      showNav
      current="/volunteer/community"
    >
      <div className="space-y-4">
        <h1 className="text-[22px] font-bold leading-tight">
          Kaki Volunteer Guidelines · Safe & Dignified Companionship
        </h1>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Companionship is rooted in patience, mutual respect, and safe boundaries. Use this guide to ensure every outing feels comforting, empowering, and secure for our neighborhood seniors.
        </p>
        <h2 className="font-bold">3 Golden Rules of Companionship</h2>
        {[
          {
            n: "01",
            title: "Walk at Their Rhythm",
            body: "Never rush curbs, road crossings, or MRT gantries. Match the senior's natural gait and take shaded pauses whenever needed.",
            tag: "Patience over speed",
          },
          {
            n: "02",
            title: "Listen with Empathy",
            body: "Older adults love sharing nostalgic neighborhood stories (e.g. 1970s kampung days). Give them plenty of room to speak and reminisce.",
            tag: "Warm, non-judgmental presence",
          },
          {
            n: "03",
            title: "Preserve Agency & Dignity",
            body: 'Ask "Would you like an arm to hold?" rather than grabbing. Let the senior make choices about snacks and seating.',
            tag: "Choice creates empowerment",
          },
        ].map((item) => (
          <Card key={item.n}>
            <SlashMark label={item.n} />
            <p className="mt-1 font-bold">{item.title}</p>
            <p className="mt-2 text-sm leading-relaxed">{item.body}</p>
            <p className="mt-1 text-xs font-semibold text-primary">{item.tag}</p>
          </Card>
        ))}
        <Card tone="mint">
          <p className="font-bold">Allowed · General volunteer role</p>
          <ul className="mt-2 space-y-2 text-sm">
            {allowed.map(([title, detail]) => (
              <li key={title}>
                <strong>{title}:</strong> {detail}
              </li>
            ))}
          </ul>
        </Card>
        <Card tone="blush">
          <p className="font-bold">Not Allowed · Trained caregiver required</p>
          <ul className="mt-2 space-y-2 text-sm">
            {notAllowed.map(([title, detail]) => (
              <li key={title}>
                <strong>{title}:</strong> {detail}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm">
            If asked for restricted support, politely decline and alert FSC coordinators.
          </p>
        </Card>
        <Card>
          <p className="font-bold">Emergency & Support Network · 24/7</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Tap any hotline to directly place a call. Stay on the line with the operator and remain with the senior until verified help arrives.
          </p>
          <div className="mt-3 space-y-2">
            <a
              href={`tel:${fsc.phone.replace("-", "")}`}
              className="flex min-h-12 items-center justify-between rounded-[22px] bg-lilac px-4 font-bold text-ink"
            >
              <span>
                Fei Yue FSC Befriender
                <span className="block text-xs font-medium">Direct Volunteer Coordinator Desk</span>
              </span>
              <span className="inline-flex items-center gap-1">
                <Phone className="size-4" /> {fsc.phone}
              </span>
            </a>
            <a
              href="tel:995"
              className="flex min-h-12 items-center justify-between rounded-[22px] bg-[#f8d4d2] px-4 font-bold text-[#d6454a]"
            >
              <span>
                Ambulance / SCDF
                <span className="block text-xs font-medium">Severe injury, falls, breathlessness</span>
              </span>
              995
            </a>
            <a
              href="tel:999"
              className="flex min-h-12 items-center justify-between rounded-[22px] bg-[#f6ede3] px-4 font-bold text-[#3a322c]"
            >
              <span>
                Singapore Police Force
                <span className="block text-xs font-medium">Missing senior or safety threats</span>
              </span>
              999
            </a>
          </div>
          <p className="mt-3 text-sm">
            You are never alone on duty. When in doubt, pause the stroll and phone the Fei Yue team immediately.
          </p>
        </Card>
      </div>
    </AppShell>
  );
}
