import { AppShell } from "@/components/app-shell";
import { PrimaryLink } from "@/components/primary-link";
import { SosButton } from "@/components/sos-button";
import { Card, UiPic } from "@/components/ui-bits";
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
        <Card tone="sky" className="relative overflow-hidden">
          <UiPic
            src="/ui/icon-elderly.png"
            alt=""
            className="pointer-events-none absolute -right-2 -top-3 h-28 w-28"
          />
          <p className="text-sm text-muted-foreground">Signed in as</p>
          <h1 className="mt-1 max-w-[70%] text-[28px] font-extrabold tracking-[-0.04em]">{senior.fullName}</h1>
          <p className="text-muted-foreground">
            {senior.name} · {senior.age} · {senior.estate}
          </p>
          <p className="mt-3 text-sm">{senior.languages.join(" · ")}</p>
          <p className="mt-1 text-sm text-muted-foreground">{senior.block}</p>
        </Card>
        <Card tone="mint">
          <h2 className="font-bold">Family Peace of Mind</h2>
          <p className="mt-2 text-sm leading-relaxed text-[#3d4a42]">
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
