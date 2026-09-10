import { Phone, Shield } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { PrimaryLink } from "@/components/primary-link";
import { Card, Pill } from "@/components/ui-bits";
import { familyMember, fsc, outing } from "@/lib/data";

export default function VolunteerPlan() {
  return (
    <AppShell
      role="volunteer"
      title="KakiConnect"
      subtitle="Volunteer Mode"
      backHref="/volunteer/outing"
      showNav
      current="/volunteer/requests"
    >
      <div className="space-y-4">
        <Pill className="bg-[#d5efe6] text-[#1f5a48]">Confirmed Match · Companion outing ready</Pill>
        <h1 className="text-[26px] leading-tight font-bold">
          You&apos;re helping Mr Tan join! 🎉
        </h1>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Thank you for keeping our kampung connected. Mr Tan is looking forward to the stroll.
        </p>
        <Card>
          <p className="text-[11px] font-bold tracking-wide text-primary uppercase">
            MEET // 01 · Essential Meeting Details
          </p>
          <p className="text-xs text-muted-foreground">Meeting point and travel timing</p>
          <dl className="mt-3 space-y-3 text-sm">
            <div>
              <dt className="font-semibold">Meeting Point</dt>
              <dd>Blk 122 Bedok North Void Deck · Benches near Lift Lobby B</dd>
            </div>
            <div>
              <dt className="font-semibold">Meeting Time</dt>
              <dd>Tomorrow · 3:30 PM · Please arrive 5 mins early</dd>
            </div>
            <div>
              <dt className="font-semibold">Destination</dt>
              <dd>{outing.pavilion}</dd>
            </div>
            <div>
              <dt className="font-semibold">Duration</dt>
              <dd>Approx 3 hours · Return by 6:30 PM</dd>
            </div>
          </dl>
        </Card>
        <Card>
          <p className="font-bold">Family & Caregiver Connection</p>
          <p className="text-xs text-muted-foreground">Family and FSC coordinator · // CARE 02</p>
          <div className="mt-3 space-y-3 text-sm">
            <div>
              <p className="font-semibold">Emergency Contact · Family</p>
              <p>Daughter {familyMember.name}</p>
              <p className="text-muted-foreground">
                SMS departure & arrival alerts will trigger automatically
              </p>
            </div>
            <div>
              <p className="font-semibold">FSC Care Coordinator</p>
              <p>
                {fsc.coordinator} ({fsc.organisation})
              </p>
              <p className="text-muted-foreground">{fsc.hours}</p>
              <a
                href={`tel:${fsc.phone.replace("-", "")}`}
                className="mt-2 inline-flex items-center gap-1 font-semibold text-primary"
              >
                <Phone className="size-4" /> {fsc.phone}
              </a>
            </div>
          </div>
        </Card>
        <Card>
          <p className="flex items-center gap-2 font-bold">
            <Shield className="size-4 text-primary" /> Privacy Protected
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Senior NRIC and sensitive health history are kept confidential under Singapore PDPA. Only necessary accompaniment notes are shared.
          </p>
        </Card>
        <PrimaryLink href="/volunteer/live">Add to Calendar & View Checklist</PrimaryLink>
        <PrimaryLink href="/volunteer/safety" variant="outline">
          Message FSC Coordinator / Safety guidelines
        </PrimaryLink>
        <p className="text-center text-xs text-muted-foreground">
          Cannot attend? Cancel at least 4h prior
        </p>
      </div>
    </AppShell>
  );
}
