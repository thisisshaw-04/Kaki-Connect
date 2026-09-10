import { AppShell } from "@/components/app-shell";
import { ListenButton } from "@/components/listen-button";
import { PrimaryLink } from "@/components/primary-link";
import { Input } from "@/components/ui/input";
import { familyMember, senior } from "@/lib/data";

export default function ElderlySetup() {
  return (
    <AppShell
      role="elderly"
      title="A few details"
      backHref="/elderly"
      action={<ListenButton />}
    >
      <div className="flex flex-1 flex-col gap-6">
        <div>
          <h1 className="text-[26px] leading-tight font-bold">
            What should neighbours call you?
          </h1>
          <p className="mt-2 text-[16px] leading-relaxed text-muted-foreground">
            A nickname is fine. People nearby will use this name.
          </p>
        </div>

        <label className="space-y-2">
          <span className="text-sm font-semibold">Name</span>
          <Input
            defaultValue={senior.name}
            className="h-14 rounded-2xl text-lg"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-semibold">Neighbourhood</span>
          <Input
            defaultValue={senior.neighbourhood}
            className="h-14 rounded-2xl text-lg"
          />
        </label>

        <div className="rounded-2xl border border-border bg-card p-4">
          <p className="font-semibold">Share a quiet update with family?</p>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            {familyMember.name} ({familyMember.relation.toLowerCase()}) can see
            when you go out, who you’re with, and when you’re home. Not a live
            map. You can switch this off anytime.
          </p>
          <div className="mt-3 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground">
            Sharing with {familyMember.name} · on
          </div>
        </div>

        <div className="mt-auto">
          <PrimaryLink href="/elderly/home" className="h-16 text-lg">
            I’m ready
          </PrimaryLink>
        </div>
      </div>
    </AppShell>
  );
}
