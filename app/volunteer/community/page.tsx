import { AppShell } from "@/components/app-shell";
import { PrimaryLink } from "@/components/primary-link";
import { Card } from "@/components/ui-bits";

export default function VolunteerCommunity() {
  return (
    <AppShell
      role="volunteer"
      title="KakiConnect"
      subtitle="Volunteer Mode"
      backHref="/volunteer/requests"
      showNav
      current="/volunteer/community"
    >
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Community</h1>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Heartlands Edition tips, Fei Yue FSC updates, and the companionship safety guide.
        </p>
        <Card tone="lavender">
          <p className="font-bold">Safe & Dignified Companionship</p>
          <p className="mt-1 text-sm text-muted-foreground">
            3 golden rules, allowed vs not-allowed support, and 24/7 emergency numbers.
          </p>
          <PrimaryLink href="/volunteer/safety" className="mt-3" variant="black">
            Open safety guidelines
          </PrimaryLink>
        </Card>
        <Card tone="sky">
          <p className="font-bold">Fei Yue FSC desk</p>
          <p className="mt-1 text-sm">6743-9821 · Direct volunteer coordinator</p>
        </Card>
      </div>
    </AppShell>
  );
}
