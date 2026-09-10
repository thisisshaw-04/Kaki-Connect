import { Check } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { PrimaryLink } from "@/components/primary-link";
import { Card, Pill, Portrait } from "@/components/ui-bits";
import {
  outing,
  photos,
  volunteerSchedule,
} from "@/lib/data";

export default function VolunteerOuting() {
  return (
    <AppShell
      role="volunteer"
      title="KakiConnect"
      subtitle="Volunteer Mode"
      backHref="/volunteer/requests"
    >
      <div className="space-y-4">
        <p className="text-[11px] tracking-[0.12em] text-muted-foreground">
          {"// #SG-BEDOK-71"}
        </p>
        <div className="flex gap-3">
          <Portrait
            src={photos.uncleTanVolunteer}
            alt="Mr Tan"
            className="size-16 rounded-2xl"
          />
          <div>
            <h1 className="text-2xl font-bold">Mr Tan (Age 71)</h1>
            <Pill className="mt-1 bg-[#d6f0dc] text-[#1b5e20]">Verified Resident</Pill>
            <p className="mt-1 text-sm text-muted-foreground">
              Living at Blk 122 Bedok North St 2
            </p>
          </div>
        </div>
        <Card>
          <p className="font-bold">
            Reservoir Fishing & Kopi Gathering with 3 peer kakis
          </p>
          <p className="text-sm text-muted-foreground">{outing.pavilion}</p>
        </Card>
        <div>
          <h2 className="font-bold">1. Schedule & Timings · Tomorrow Afternoon</h2>
          <ol className="mt-3 space-y-3">
            {volunteerSchedule.map((item) => (
              <li key={item.time} className="flex gap-3">
                <span className="w-16 shrink-0 text-sm font-bold text-primary">
                  {item.time}
                </span>
                <span>
                  <span className="block font-semibold">{item.title}</span>
                  <span className="block text-sm text-muted-foreground">{item.detail}</span>
                  <span className="text-[11px] text-[#737781]">{item.hangul}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
        <Card>
          <h2 className="font-bold">2. Route & Transit Plan</h2>
          <Pill className="mt-2">Step-Free Verified</Pill>
          <p className="mt-2 text-sm leading-relaxed">
            Gentle 12-minute shaded walk from Blk 122 to Bedok Reservoir sheltered pavilion via step-free PCN (Park Connector Network). Wide pedestrian-only concrete boardwalk, completely free from vehicular traffic or steep ramps.
          </p>
          <p className="mt-2 text-xs font-semibold text-primary">PCN Green Track #B4</p>
          <div className="mt-3 grid grid-cols-3 gap-2 text-center text-sm">
            <div className="rounded-xl bg-[#f0eeea] p-2">
              <p className="font-bold">85%</p>
              <p className="text-[11px] text-muted-foreground">Fully shaded</p>
            </div>
            <div className="rounded-xl bg-[#f0eeea] p-2">
              <p className="font-bold">750 m</p>
              <p className="text-[11px] text-muted-foreground">Distance</p>
            </div>
            <div className="rounded-xl bg-[#f0eeea] p-2">
              <p className="font-bold">4 stops</p>
              <p className="text-[11px] text-muted-foreground">Rest benches</p>
            </div>
          </div>
        </Card>
        <Card>
          <h2 className="font-bold">3. Scope of Support</h2>
          <ul className="mt-2 space-y-1 text-sm">
            {["General travel companionship", "Light arm / elbow assistance"].map((item) => (
              <li key={item} className="flex gap-2">
                <Check className="size-4 text-primary" /> {item}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            <strong>Important Responsibility Notice.</strong> Non-medical accompaniment. You are providing social warmth, conversation, and walking companionship. All specialized medical, therapy, and clinical needs are continuously coordinated directly by Fei Yue FSC coordinators.
          </p>
        </Card>
        <Card>
          <h2 className="font-bold">4. Peer Kakis Joining · 동반 이웃 2명</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Mr Tan will meet his regular neighborhood friends at the jetty pavilion:
          </p>
          <p className="mt-2 text-sm">
            <strong>Ahmad (71)</strong> · Bedok South Kaki • Fishing Enthusiast
          </p>
          <p className="text-sm">
            <strong>Susan (67)</strong> · Blk 124 Neighbor • Brings Hot Tea
          </p>
        </Card>
        <Card>
          <h2 className="font-bold">5. Language & Rapport · 소통 팁</h2>
          <p className="mt-1 text-sm">
            Primary Tongues: Hokkien (福建话) · Bahasa Melayu (Pasar) · Basic English
          </p>
          <p className="mt-2 text-sm leading-relaxed">
            Mr Tan warmly enjoys storytelling about his youth in <strong>1970s Katong</strong>, traditional fishing techniques, and old hawker flavors along Joo Chiat. Asking him about old Katong cinema will spark a big smile!
          </p>
        </Card>
        <PrimaryLink href="/volunteer/plan">Accept & Help Mr Tan Join</PrimaryLink>
      </div>
    </AppShell>
  );
}
