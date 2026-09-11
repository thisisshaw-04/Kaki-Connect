import { Card } from "@/components/ui-bits";
import { partners } from "@/lib/data";

export function PartnerList({ heading }: { heading?: string }) {
  return (
    <div className="space-y-2">
      {heading ? <p className="text-sm font-semibold">{heading}</p> : null}
      {partners.map((partner) => (
        <Card key={partner.id}>
          <p className="text-[11px] font-bold tracking-[0.08em] text-primary uppercase">
            {partner.role}
          </p>
          <p className="mt-1 font-bold">{partner.name}</p>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{partner.detail}</p>
        </Card>
      ))}
    </div>
  );
}
