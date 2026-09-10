import { AppShell } from "@/components/app-shell";
import { PrimaryLink } from "@/components/primary-link";
import { familyMember, familyShare, senior } from "@/lib/data";

export default function FamilyLink() {
  return (
    <AppShell role="family" title="What you can see" backHref="/family">
      <div className="flex flex-1 flex-col gap-5">
        <div>
          <h1 className="font-display text-[26px] font-semibold tracking-[-0.03em]">
            {senior.name} invited {familyMember.name}
          </h1>
          <p className="mt-2 text-muted-foreground">
            {familyMember.relation} · you live in {familyMember.livesIn}. He
            lives in {senior.neighbourhood}.
          </p>
        </div>

        <div className="lift rounded-[22px] p-4">
          <h2 className="font-bold text-[#1b5e20]">He is sharing</h2>
          <ul className="mt-2 space-y-2 text-sm leading-relaxed">
            {familyShare.yes.map((item) => (
              <li key={item}>· {item}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-border bg-muted/60 p-4">
          <h2 className="font-bold">He is not sharing</h2>
          <ul className="mt-2 space-y-2 text-sm leading-relaxed text-muted-foreground">
            {familyShare.no.map((item) => (
              <li key={item}>· {item}</li>
            ))}
          </ul>
        </div>

        <div className="mt-auto">
          <PrimaryLink href="/family/home">Open today’s view</PrimaryLink>
        </div>
      </div>
    </AppShell>
  );
}
