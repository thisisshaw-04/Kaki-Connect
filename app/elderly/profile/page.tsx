import { AppShell } from "@/components/app-shell";
import { PrimaryLink } from "@/components/primary-link";
import { familyMember, familyShare, senior } from "@/lib/data";

export default function ElderlyProfile() {
  return (
    <AppShell
      role="elderly"
      title="Me"
      backHref="/elderly/home"
      showNav
      current="/elderly/profile"
    >
      <div className="space-y-5">
        <div className="rounded-[24px] border border-border bg-card p-5">
          <p className="text-sm text-muted-foreground">Signed in as</p>
          <h1 className="mt-1 text-2xl font-bold">{senior.fullName}</h1>
          <p className="text-muted-foreground">
            {senior.age} · {senior.neighbourhood}
          </p>
          <p className="mt-3 text-sm">{senior.languages.join(" · ")}</p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-5">
          <h2 className="font-bold">Family updates</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {familyMember.name} can see a short version of your day. She does
            not get a live map.
          </p>
          <ul className="mt-3 space-y-1 text-sm">
            {familyShare.yes.map((item) => (
              <li key={item}>· {item}</li>
            ))}
          </ul>
        </div>

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
