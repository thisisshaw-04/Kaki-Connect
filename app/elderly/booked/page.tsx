import { Check } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { PrimaryLink } from "@/components/primary-link";
import { outing, familyMember } from "@/lib/data";

export default function BookedPage() {
  return (
    <AppShell role="elderly" title="You’re in" backHref="/elderly/home">
      <div className="flex flex-1 flex-col items-center text-center">
        <div className="mt-6 flex size-16 items-center justify-center rounded-full bg-[#d6f0dc] text-[#1b5e20] shadow-[0_8px_20px_-10px_rgba(46,125,50,0.6)]">
          <Check className="size-8" />
        </div>
        <h1 className="font-display mt-5 text-[28px] leading-tight font-semibold tracking-[-0.03em]">
          See you at {outing.start}
        </h1>
        <p className="mt-3 max-w-sm text-[16px] leading-relaxed text-muted-foreground">
          Wei Ming will meet you downstairs at 3:40 PM. Ahmad and Auntie Susan
          will already be at the pavilion.
        </p>
        <div className="lift mt-6 w-full rounded-[22px] p-4 text-left">
          <p className="font-semibold">{outing.title}</p>
          <p className="mt-1 text-sm text-muted-foreground">{outing.place}</p>
          <p className="mt-3 text-sm leading-relaxed">
            {familyMember.name} will see that you’re out, and get a tap when
            you’re home. Nothing more than that.
          </p>
        </div>
        <div className="mt-auto w-full space-y-3 pt-8">
          <PrimaryLink href="/elderly/home">Back to today</PrimaryLink>
          <PrimaryLink href="/family/home" variant="outline">
            Preview what family sees
          </PrimaryLink>
        </div>
      </div>
    </AppShell>
  );
}
