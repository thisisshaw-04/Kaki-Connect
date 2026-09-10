import { Shield } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { PrimaryLink } from "@/components/primary-link";
import { SlashMark } from "@/components/brand-mark";
import { familyMember, senior } from "@/lib/data";

export default function FamilyWelcome() {
  return (
    <AppShell role="family" backHref="/">
      <div className="flex flex-1 flex-col">
        <div className="flex items-center justify-between">
          <p className="text-[13px] font-semibold tracking-tight text-primary">
            Family view
          </p>
          <SlashMark label="// Priya" />
        </div>
        <h1 className="font-display mt-2 text-[30px] leading-[1.08] font-semibold tracking-[-0.04em]">
          See how {senior.name}’s day is going.
        </h1>
        <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
          Hi {familyMember.name}. This is a calm check-in, not a tracker.{" "}
          {senior.name} chose what you can see — outings, who he’s with, and
          when he’s home.
        </p>

        <div className="lift mt-6 rounded-[22px] p-4">
          <div className="flex items-start gap-3">
            <span className="flex size-10 items-center justify-center rounded-2xl bg-[#eaf1f8] text-primary">
              <Shield className="size-5" />
            </span>
            <div>
              <p className="font-semibold tracking-tight">Dignity first</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                No live GPS. No recordings. If he’s at home doing nothing in
                particular, that’s all you’ll see: home, and well.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-auto space-y-3 pt-8">
          <PrimaryLink href="/family/link" className="h-14">
            Continue as {familyMember.name}
          </PrimaryLink>
          <p className="text-center text-sm text-muted-foreground">
            Linked to {senior.fullName} · {senior.neighbourhood}
          </p>
        </div>
      </div>
    </AppShell>
  );
}
