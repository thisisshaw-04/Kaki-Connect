import { AppShell } from "@/components/app-shell";
import { PartnerList } from "@/components/partner-list";
import { PrimaryLink } from "@/components/primary-link";
import { Card, UiPic } from "@/components/ui-bits";

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
        <div className="flex items-end justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold">Community</h1>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              Heartlands Edition tips, Fei Yue FSC updates, and tie-ups with Lion Befrienders, TOUCH, and AIC.
            </p>
          </div>
          <UiPic
            src="/illustrations/person-broom.png"
            alt=""
            className="h-24 w-auto shrink-0"
          />
        </div>
        <Card tone="lavender">
          <p className="font-bold">Safe & Dignified Companionship</p>
          <p className="mt-1 text-sm text-muted-foreground">
            3 golden rules, allowed vs not-allowed support, and 24/7 emergency numbers.
          </p>
          <PrimaryLink href="/volunteer/safety" className="mt-3" variant="black">
            Open safety guidelines
          </PrimaryLink>
        </Card>
        <PartnerList heading="Neighbourhood tie-ups" />
        <Card tone="sky">
          <p className="font-bold">Fei Yue FSC desk</p>
          <p className="mt-1 text-sm">6743-9821 · Direct volunteer coordinator for this outing</p>
        </Card>
      </div>
    </AppShell>
  );
}
