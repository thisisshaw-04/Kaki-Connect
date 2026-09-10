import { AppShell } from "@/components/app-shell";
import { ListenButton } from "@/components/listen-button";
import { PrimaryLink } from "@/components/primary-link";
import { Initials, Pill } from "@/components/ui-bits";
import { outing } from "@/lib/data";

export default function OutingDetails() {
  return (
    <AppShell
      role="elderly"
      title="Outing"
      backHref="/elderly/activities"
      action={<ListenButton />}
    >
      <div className="flex flex-1 flex-col gap-4">
        <div>
          <Pill>Today · {outing.start}</Pill>
          <h1 className="mt-2 text-[26px] leading-tight font-bold">{outing.title}</h1>
          <p className="mt-1 text-muted-foreground">{outing.place}</p>
        </div>

        <p className="text-[16px] leading-relaxed text-muted-foreground">
          {outing.notes} Your daughter Priya will get a simple update when you
          leave, arrive, and come home — not a live map.
        </p>

        <div className="rounded-2xl border border-border bg-card p-4">
          <h2 className="font-bold">Who’s going</h2>
          <ul className="mt-3 space-y-3">
            {outing.companions.map((person) => (
              <li key={person.name} className="flex items-center gap-3">
                <Initials name={person.name} />
                <div>
                  <p className="font-semibold">{person.name}</p>
                  <p className="text-sm text-muted-foreground">{person.note}</p>
                </div>
              </li>
            ))}
            <li className="flex items-center gap-3">
              <Initials name="Wei Ming" tone="green" />
              <div>
                <p className="font-semibold">Wei Ming · volunteer</p>
                <p className="text-sm text-muted-foreground">
                  Walks with you from the block and back
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-2">
          {outing.access.map((item) => (
            <Pill key={item} className="bg-muted text-foreground">
              {item}
            </Pill>
          ))}
        </div>

        <div className="mt-auto pt-4">
          <PrimaryLink href="/elderly/booked" className="h-16 text-lg">
            Count me in
          </PrimaryLink>
        </div>
      </div>
    </AppShell>
  );
}
