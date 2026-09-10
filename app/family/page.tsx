import { Shield } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { PrimaryLink } from "@/components/primary-link";
import { familyMember, senior } from "@/lib/data";

export default function FamilyWelcome() {
  return (
    <AppShell role="family" backHref="/" wide>
      <div className="flex flex-1 flex-col">
        <p className="text-sm font-semibold text-primary">Family view</p>
        <h1 className="mt-2 text-3xl leading-tight font-bold tracking-tight">
          See how {senior.name}’s day is going.
        </h1>
        <p className="mt-3 max-w-md text-[16px] leading-relaxed text-muted-foreground">
          Hi {familyMember.name}. This is a calm check-in, not a tracker.{" "}
          {senior.name} chose what you can see — outings, who he’s with, and
          when he’s home.
        </p>

        <div className="mt-6 rounded-2xl border border-border bg-card p-4">
          <div className="flex items-start gap-3">
            <Shield className="mt-0.5 size-5 text-primary" />
            <div>
              <p className="font-semibold">Dignity first</p>
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
