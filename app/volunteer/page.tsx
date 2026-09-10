import { ArrowRight } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { PrimaryLink } from "@/components/primary-link";
import { Card, Pill, SlashMark, UiPic } from "@/components/ui-bits";

const tones = ["mint", "sky", "lavender"] as const;

export default function VolunteerWelcome() {
  return (
    <AppShell
      role="volunteer"
      title="KakiConnect"
      subtitle="Volunteer Mode"
      backHref="/"
    >
      <div className="flex flex-1 flex-col gap-4">
        <div className="relative overflow-hidden rounded-[32px] bg-[#d7f0f7] p-5">
          <UiPic
            src="/ui/icon-volunteer.png"
            alt=""
            className="pointer-events-none absolute -right-2 -top-3 h-28 w-28"
          />
          <p className="text-[11px] font-bold tracking-[0.12em] uppercase">
            Neighborhood Companionship Initiative
          </p>
          <h1 className="mt-2 max-w-[75%] text-[28px] leading-[1.08] font-extrabold tracking-[-0.04em]">
            Help an older adult stay connected.
          </h1>
          <p className="mt-2 max-w-[82%] text-[15px] leading-relaxed text-[#315e8e]">
            Accompany a senior to their favorite neighborhood activity. Every small walk, MRT trip, or reservoir visit helps prevent isolation right in your estate.
          </p>
        </div>
        <Pill className="bg-[#ece7ff]">Heartlands Edition · 동네 친구 파트너 // Kaki Companion</Pill>
        <p className="text-sm font-semibold">Scope of Volunteering · // Reassurances</p>
        {[
          {
            n: "01",
            title: "Non-medical, peer travel only",
            body: "Friendly companion walking and leisure journeys only. No clinical lifting, nursing, or medication administration responsibilities.",
          },
          {
            n: "02",
            title: "24/7 FSC Coordinator On-Call",
            body: "Direct Family Service Centre care desk line. Quick escalation support whenever weather changes or sudden changes occur.",
          },
          {
            n: "03",
            title: "Privacy-Protected Details",
            body: "Senior profiles and NRIC information remain strictly safeguarded under PDPA. Meeting addresses unlock only when a walk is confirmed.",
          },
        ].map((item, index) => (
          <Card key={item.n} tone={tones[index]}>
            <SlashMark label={item.n} />
            <p className="mt-1 font-bold">{item.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
          </Card>
        ))}
        <Card tone="butter">
          <p className="font-bold">Kaki Volunteer Quick Tips · 봉사 팁</p>
          <ul className="mt-2 space-y-2 text-sm">
            <li>
              <strong>Walk at Their Rhythm.</strong> Never rush curbs or MRT gantries. Allow seniors to set their comfortable walking pace.
            </li>
            <li>
              <strong>Hydration Check.</strong> Encourage water breaks, particularly during humid Singapore afternoon outings.
            </li>
            <li>
              <strong>Check-In & Check-Out.</strong> Tap &apos;Arrived at Void Deck&apos; upon pickup so the elder&apos;s family gets quiet peace of mind.
            </li>
          </ul>
        </Card>
        <div className="mt-auto pt-2">
          <PrimaryLink href="/volunteer/requests">
            View Open Requests (4 Nearby)
            <ArrowRight className="size-5" />
          </PrimaryLink>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Your neighborhood has 4 seniors looking for a walking buddy today
          </p>
        </div>
      </div>
    </AppShell>
  );
}
