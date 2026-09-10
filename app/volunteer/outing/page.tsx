import { AppShell } from "@/components/app-shell";
import { PrimaryLink } from "@/components/primary-link";
import { outing, senior } from "@/lib/data";

export default function VolunteerOuting() {
  return (
    <AppShell
      role="volunteer"
      title="Request"
      backHref="/volunteer/requests"
    >
      <div className="flex flex-1 flex-col gap-4">
        <div>
          <h1 className="text-2xl font-bold">{outing.title}</h1>
          <p className="text-muted-foreground">
            {senior.fullName}, {senior.age} · {outing.place}
          </p>
        </div>
        <p className="text-[15px] leading-relaxed">
          Meet downstairs at Block 123, Bedok North Ave 3 at 3:40 PM. Bus 5 to
          the reservoir. Stay at Pavilion A. Walk him home after.
        </p>
        <div className="rounded-2xl border border-border bg-card p-4 text-sm leading-relaxed">
          <p className="font-bold">Family</p>
          <p className="mt-1 text-muted-foreground">
            Priya (daughter) will see your check-ins. Tap when you leave, when
            you arrive, when you wrap up, and when he’s home.
          </p>
        </div>
        <div className="mt-auto">
          <PrimaryLink href="/volunteer/live">I’ll take this</PrimaryLink>
        </div>
      </div>
    </AppShell>
  );
}
