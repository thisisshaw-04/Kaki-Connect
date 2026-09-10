import { AppShell } from "@/components/app-shell";
import { PrimaryLink } from "@/components/primary-link";
import { Card, Portrait } from "@/components/ui-bits";
import { volunteer } from "@/lib/data";

export default function VolunteerProfile() {
  return (
    <AppShell
      role="volunteer"
      title="KakiConnect"
      subtitle="Volunteer Mode"
      backHref="/volunteer"
      showNav
      current="/volunteer/profile"
    >
      <div className="space-y-4">
        <Card className="flex gap-3" tone="sky">
          <Portrait
            src={volunteer.photo}
            alt={volunteer.name}
            className="size-16 rounded-full"
          />
          <div>
            <h1 className="text-xl font-bold">{volunteer.name}</h1>
            <p className="text-sm text-muted-foreground">
              Age {volunteer.age} · {volunteer.neighbourhood}
            </p>
            <p className="mt-1 text-xs font-semibold text-primary">{volunteer.verified}</p>
            <p className="text-sm">{volunteer.role}</p>
          </div>
        </Card>
        <Card>
          <p className="font-bold">Transit preferences</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Update these to receive instant SMS companion matches along your usual East-side routes.
          </p>
        </Card>
        <PrimaryLink href="/" variant="ghost">
          Switch role
        </PrimaryLink>
      </div>
    </AppShell>
  );
}
