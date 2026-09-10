import { AppShell } from "@/components/app-shell";
import { PrimaryLink } from "@/components/primary-link";
import { Card } from "@/components/ui-bits";
import { familyMember, familyShare, senior } from "@/lib/data";

export default function FamilyLink() {
  return (
    <AppShell role="family" title="KakiConnect" subtitle="What you can see" backHref="/family">
      <div className="flex flex-1 flex-col gap-5">
        <div>
          <h1 className="text-[26px] font-semibold tracking-[-0.02em]">
            {senior.name} invited {familyMember.name}
          </h1>
          <p className="mt-2 text-muted-foreground">
            {familyMember.relation} · you live in {familyMember.livesIn}. He lives in {senior.neighbourhood}.
          </p>
        </div>
        <Card className="bg-[#eaf1f8]">
          <h2 className="font-bold text-primary">He is sharing</h2>
          <ul className="mt-2 space-y-2 text-sm leading-relaxed">
            {familyShare.yes.map((item) => (
              <li key={item}>· {item}</li>
            ))}
          </ul>
        </Card>
        <Card>
          <h2 className="font-bold">He is not sharing</h2>
          <ul className="mt-2 space-y-2 text-sm leading-relaxed text-muted-foreground">
            {familyShare.no.map((item) => (
              <li key={item}>· {item}</li>
            ))}
          </ul>
        </Card>
        <div className="mt-auto">
          <PrimaryLink href="/family/home">Open today&apos;s view</PrimaryLink>
        </div>
      </div>
    </AppShell>
  );
}
