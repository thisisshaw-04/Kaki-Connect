import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { PrimaryLink } from "@/components/primary-link";
import { Initials, Pill, StatusDot } from "@/components/ui-bits";
import { checkIns, outing, senior } from "@/lib/data";

export default async function FamilyHome({
  searchParams,
}: {
  searchParams: Promise<{ view?: string }>;
}) {
  const { view } = await searchParams;
  const quiet = view === "quiet";
  const failed = view === "error";

  if (failed) {
    return (
      <AppShell
        role="family"
        title="Today"
        backHref="/family/link"
        showNav
        current="/family/home"
        wide
      >
        <div className="rounded-2xl border border-destructive/30 bg-[#ffdad6] p-5">
          <h1 className="text-xl font-bold">Couldn’t refresh Dad’s day</h1>
          <p className="mt-2 text-sm leading-relaxed">
            His last known update is still here on your phone. Try again in a
            moment — this is a connection issue, not an emergency.
          </p>
          <PrimaryLink href="/family/home" className="mt-4">
            Try again
          </PrimaryLink>
        </div>
      </AppShell>
    );
  }

  if (quiet) {
    return (
      <AppShell
        role="family"
        title="Today"
        backHref="/family/link"
        showNav
        current="/family/home"
        wide
      >
        <div className="rounded-[24px] border border-border bg-card p-5">
          <Pill>Home</Pill>
          <h1 className="mt-3 text-2xl font-bold">{senior.name} is at home</h1>
          <p className="mt-2 leading-relaxed text-muted-foreground">
            No outing booked today. Last activity was a 22-minute video chat
            with Uncle Raymond yesterday.
          </p>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          That’s the whole update. A quiet day is still a good day.
        </p>
        <PrimaryLink href="/family/note" variant="outline" className="mt-6">
          Send a short note
        </PrimaryLink>
      </AppShell>
    );
  }

  const latest = checkIns.filter((item) => item.done).at(-1);

  return (
    <AppShell
      role="family"
      title="Today"
      backHref="/family/link"
      showNav
      current="/family/home"
      wide
    >
      <div className="space-y-4">
        <section className="rounded-[24px] border border-[#cfe3c8] bg-[#f3faf3] p-5">
          <div className="flex items-center gap-2 text-sm font-semibold text-[#1b5e20]">
            <StatusDot live />
            Out right now
          </div>
          <h1 className="mt-2 text-[26px] leading-tight font-bold">
            {senior.name} is at {outing.area}
          </h1>
          <p className="mt-2 flex items-start gap-2 text-[15px] leading-relaxed text-muted-foreground">
            <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
            {outing.title} · {outing.place}
          </p>
          <p className="mt-3 text-sm">
            Latest: {latest?.label} at {latest?.time}. Expected home around{" "}
            {outing.expectedHome}.
          </p>
        </section>

        <section className="rounded-2xl border border-border bg-card p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-bold">Who he’s with</h2>
            <Link
              href="/family/outing"
              className="text-sm font-semibold text-primary"
            >
              Live check-ins
            </Link>
          </div>
          <ul className="mt-3 space-y-3">
            <li className="flex items-center gap-3">
              <Initials name="Wei Ming" tone="green" />
              <div>
                <p className="font-semibold">Wei Ming</p>
                <p className="text-sm text-muted-foreground">
                  Volunteer · walking with him
                </p>
              </div>
            </li>
            {outing.companions.map((person) => (
              <li key={person.name} className="flex items-center gap-3">
                <Initials name={person.name} />
                <div>
                  <p className="font-semibold">{person.name}</p>
                  <p className="text-sm text-muted-foreground">{person.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <Link
          href="/family/outing"
          className="flex items-center justify-between rounded-2xl border border-border bg-card p-4"
        >
          <div>
            <p className="font-bold">Check-in timeline</p>
            <p className="text-sm text-muted-foreground">
              Left home, arrived, next tap at wrap-up
            </p>
          </div>
          <ArrowRight className="size-5 text-primary" />
        </Link>

        <div className="flex gap-3">
          <PrimaryLink href="/family/note" className="flex-1">
            <Phone className="size-4" />
            Send a note
          </PrimaryLink>
          <PrimaryLink
            href="tel:+6591234567"
            variant="outline"
            className="flex-1"
          >
            Call Dad
          </PrimaryLink>
        </div>

        <p className="text-center text-xs text-muted-foreground">
          <Link href="/family/home?view=quiet" className="underline">
            Preview a quiet day
          </Link>
          {" · "}
          <Link href="/family/home?view=error" className="underline">
            If updates fail
          </Link>
        </p>
      </div>
    </AppShell>
  );
}
