import { Shield } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { PrimaryLink } from "@/components/primary-link";
import { Card, Pill } from "@/components/ui-bits";
import { familyMember, senior } from "@/lib/data";

export default function FamilyWelcome() {
  return (
    <AppShell role="family" title="KakiConnect" subtitle="Family Peace of Mind" backHref="/">
      <div className="flex flex-1 flex-col">
        <Pill>Caregiver Safety Network</Pill>
        <h1 className="mt-3 text-[28px] leading-9 font-semibold tracking-[-0.02em]">
          See how {senior.name}&apos;s day is going.
        </h1>
        <p className="mt-3 text-[16px] leading-relaxed text-muted-foreground">
          Hi {familyMember.name}. This is a calm check-in, not a tracker. {senior.name} chose what you can see — outings, who he&apos;s with, and when he&apos;s home.
        </p>
        <Card className="mt-6">
          <div className="flex items-start gap-3">
            <span className="flex size-10 items-center justify-center rounded-2xl bg-[#eaf1f8] text-primary">
              <Shield className="size-5" />
            </span>
            <div>
              <p className="font-semibold tracking-tight">Protected by Fei Yue Community Care</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                No live GPS unless the 60-minute safety escalation fires. No recordings. If he&apos;s at home, that&apos;s all you&apos;ll see: home, and well.
              </p>
            </div>
          </div>
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
