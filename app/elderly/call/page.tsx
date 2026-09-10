import { AppShell } from "@/components/app-shell";
import { PrimaryLink } from "@/components/primary-link";
import { Initials, Pill } from "@/components/ui-bits";
import { friends } from "@/lib/data";

export default function CallSetup() {
  const person = friends[0];

  return (
    <AppShell role="elderly" title="Video call" backHref="/elderly/friends">
      <div className="flex flex-1 flex-col">
        <h1 className="font-display text-[26px] font-semibold tracking-[-0.03em]">
          Call {person.name}
        </h1>
        <p className="mt-2 text-[16px] text-muted-foreground">
          A short face-to-face from the sofa. Family only sees that a chat
          happened, not what you talked about.
        </p>

        <div className="lift mt-6 rounded-[24px] p-5">
          <div className="flex items-center gap-4">
            <Initials name={person.name} className="size-16 text-lg" />
            <div>
              <Pill className="bg-[#e8f5e9] text-[#1b5e20]">Online now</Pill>
              <h2 className="mt-2 text-xl font-bold">{person.fullName}</h2>
              <p className="text-sm text-muted-foreground">
                {person.age} · {person.neighbourhood}
              </p>
            </div>
          </div>
          <p className="mt-4 rounded-xl bg-muted px-3 py-3 text-sm leading-relaxed">
            You both like {person.shared.toLowerCase()}. Last chat:{" "}
            {person.lastChat}.
          </p>
        </div>

        <div className="mt-auto space-y-3 pt-8">
          <PrimaryLink href="/elderly/calling" className="h-16 text-lg">
            Start call
          </PrimaryLink>
          <PrimaryLink href="/elderly/friends" variant="outline">
            Not now
          </PrimaryLink>
        </div>
      </div>
    </AppShell>
  );
}
