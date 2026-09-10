import { AppShell } from "@/components/app-shell";
import { PrimaryLink } from "@/components/primary-link";
import { SosButton } from "@/components/sos-button";
import { Card } from "@/components/ui-bits";
import { familyMember, familyShare, senior } from "@/lib/data";

export default function ElderlyProfile() {
  return (
    <AppShell
      role="elderly"
      title="KakiConnect"
      backHref="/elderly/home"
      action={<SosButton />}
      showNav
      current="/elderly/profile"
    >
      <div className="space-y-4">
        <Card>
          <p className="text-sm text-muted-foreground">Signed in as</p>
          <h1 className="mt-1 text-2xl font-bold">{senior.fullName}</h1>
          <p className="text-muted-foreground">
            {senior.name} · {senior.age} · {senior.estate}
          </p>
          <p className="mt-3 text-sm">{senior.languages.join(" · ")}</p>
          <p className="mt-1 text-sm text-muted-foreground">{senior.block}</p>
        </Card>
        <Card>
          <h2 className="font-bold">Family Peace of Mind</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {familyMember.name} ({familyMember.relation}, {familyMember.phone}) receives outing alerts. She does not get a live map unless the 60-minute safety escalation fires.
          </p>
          <ul className="mt-3 space-y-1 text-sm">
            {familyShare.yes.map((item) => (
              <li key={item}>· {item}</li>
            ))}
          </ul>
        </Card>
        <PrimaryLink href="/family/home" variant="outline">
          Open family view
        </PrimaryLink>
        <PrimaryLink href="/" variant="ghost">
          Switch role
        </PrimaryLink>
      </div>
    </AppShell>
  );
}
