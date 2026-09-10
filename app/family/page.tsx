import { AppShell } from "@/components/app-shell";
import { PrimaryLink } from "@/components/primary-link";
import { Card, Pill, UiPic } from "@/components/ui-bits";
import { familyMember, senior } from "@/lib/data";

export default function FamilyWelcome() {
  return (
    <AppShell role="family" title="KakiConnect" subtitle="Family Peace of Mind" backHref="/">
      <div className="flex flex-1 flex-col">
        <Pill className="bg-[#ead9fa]">Caregiver Safety Network</Pill>
        <h1 className="mt-3 text-[30px] leading-[1.08] font-extrabold tracking-[-0.04em]">
          See how {senior.name}&apos;s day is going.
        </h1>
        <p className="mt-3 text-[16px] leading-relaxed text-muted-foreground">
          Hi {familyMember.name}. This is a calm check-in, not a tracker. {senior.name} chose what you can see — outings, who he&apos;s with, and when he&apos;s home.
        </p>
        <Card tone="lavender" className="relative mt-6 overflow-hidden">
          <p className="font-semibold tracking-tight">Protected by Fei Yue Community Care</p>
          <p className="mt-1 text-sm leading-relaxed text-[#6b5e52]">
            No live GPS unless the 60-minute safety escalation fires. No recordings. If he&apos;s at home, that&apos;s all you&apos;ll see: home, and well.
          </p>
          <UiPic
            src="/illustrations/person-tablet.png"
            alt=""
            className="mx-auto mt-3 h-28 w-auto"
          />
        </Card>
        <div className="mt-auto space-y-3 pt-8">
          <PrimaryLink href="/family/link" className="h-14">
            Continue as {familyMember.name}
          </PrimaryLink>
          <p className="text-center text-sm text-muted-foreground">
            Linked to {senior.fullName} · {senior.neighbourhood} · {familyMember.phone}
          </p>
        </div>
      </div>
    </AppShell>
  );
}
