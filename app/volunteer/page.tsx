import { ArrowRight, Clock, HeartHandshake, Shield } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { PartnerList } from "@/components/partner-list";
import { PrimaryLink } from "@/components/primary-link";
import { UiPic } from "@/components/ui-bits";

const scope = [
  {
    n: "01",
    title: "Non-medical, peer travel only",
    body: "Friendly companion walking and leisure journeys only. No clinical lifting, nursing, or medication administration responsibilities.",
    icon: HeartHandshake,
    well: "bg-beige text-ink",
  },
  {
    n: "02",
    title: "24/7 FSC Coordinator On-Call",
    body: "Direct Family Service Centre care desk line. Quick escalation support whenever weather changes or sudden changes occur.",
    icon: Clock,
    well: "bg-green-wash text-[#1f5a48]",
  },
  {
    n: "03",
    title: "Privacy-Protected Details",
    body: "Senior profiles and NRIC information remain strictly safeguarded under PDPA. Meeting addresses unlock only when a walk is confirmed.",
    icon: Shield,
    well: "bg-lilac-wash text-[#5a3d8a]",
  },
];

export default function VolunteerWelcome() {
  return (
    <AppShell
      role="volunteer"
      title="KakiConnect"
      subtitle="Volunteer Mode"
      backHref="/"
    >
      <div className="flex flex-1 flex-col gap-4">
        <div className="flex items-start justify-between gap-3">
          <p className="inline-flex w-fit rounded-full bg-green-wash px-3 py-1 text-[11px] font-bold text-[#1f5a48]">
            Neighborhood Companionship Initiative
          </p>
          <UiPic
            src="/illustrations/person-wave.png"
            alt=""
            className="-mt-1 h-[84px] w-auto shrink-0"
          />
        </div>
        <h1 className="text-[28px] leading-[1.08] font-semibold tracking-[-0.02em]">
          Help an older adult stay connected.
        </h1>
        <p className="text-[16px] leading-[26px] text-muted-foreground">
          Accompany a senior to their favorite neighborhood activity. Every small walk, MRT trip, or reservoir visit helps prevent isolation right in your estate.
        </p>
        <p className="text-[13px] font-semibold text-ink">Heartlands Edition · Kaki Companion</p>
        <PartnerList heading="Working with neighbourhood partners" />
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold">Scope of Volunteering</p>
          <p className="text-[11px] text-muted-foreground">{"// Reassurances"}</p>
        </div>
        {scope.map((item) => {
          const Icon = item.icon;
          return (
            <article
              key={item.n}
              className="flex gap-3 rounded-[24px] border-2 border-ink bg-white p-4"
            >
              <span
                className={`flex size-12 shrink-0 items-center justify-center rounded-full ${item.well}`}
              >
                <Icon className="size-5" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <p className="font-bold">{item.title}</p>
                  <p className="text-[11px] text-muted-foreground">{item.n}</p>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            </article>
          );
        })}
        <article className="rounded-[24px] border-2 border-ink bg-white p-4">
          <p className="font-bold">Kaki Volunteer Quick Tips</p>
          <ol className="mt-3 space-y-3 text-sm">
            <li className="flex gap-3">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-lilac-wash text-[11px] font-bold text-[#5a3d8a]">
                1
              </span>
              <span>
                <strong>Walk at Their Rhythm.</strong> Never rush curbs or MRT gantries. Allow seniors to set their comfortable walking pace.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-green-wash text-[11px] font-bold text-[#1f5a48]">
                2
              </span>
              <span>
                <strong>Hydration Check.</strong> Encourage water breaks, particularly during humid Singapore afternoon outings.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-beige text-[11px] font-bold text-ink">
                3
              </span>
              <span>
                <strong>Check-In & Check-Out.</strong> Tap &apos;Arrived at Void Deck&apos; upon pickup so the elder&apos;s family gets quiet peace of mind.
              </span>
            </li>
          </ol>
        </article>
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
