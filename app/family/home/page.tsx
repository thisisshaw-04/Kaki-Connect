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
      >
        <div className="rounded-[22px] bg-[#ffdad6] p-5 ring-1 ring-[#ba1a1a]/15">
          <h1 className="text-xl font-bold tracking-tight">
            Couldn’t refresh Dad’s day
          </h1>
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
      >
        <div className="lift rounded-[24px] p-5">
          <Pill>Home</Pill>
          <h1 className="font-display mt-3 text-[26px] font-semibold tracking-[-0.03em]">
            {senior.name} is at home
          </h1>
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
  const done = checkIns.filter((item) => item.done).length;

  return (
    <AppShell
      role="family"
      title="Today"
      backHref="/family/link"
      showNav
      current="/family/home"
    >
      <div className="space-y-3.5">
        <section className="relative overflow-hidden rounded-[26px] bg-primary p-5 text-primary-foreground shadow-[0_16px_32px_-16px_rgba(47,93,151,0.8)]">
          <div className="absolute -top-8 -right-6 size-28 rounded-full bg-[#ffdd67]/25" />
          <div className="absolute bottom-3 right-4 size-16 rounded-[20px] bg-white/10" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-2.5 py-1 text-[12px] font-semibold">
              <StatusDot live />
              Out right now
            </div>
            <h1 className="font-display mt-3 text-[26px] leading-[1.1] font-semibold tracking-[-0.03em]">
              {senior.name} is at {outing.area}
            </h1>
            <p className="mt-2 flex items-start gap-2 text-[14px] leading-relaxed text-primary-foreground/85">
              <MapPin className="mt-0.5 size-4 shrink-0" />
              {outing.title} · {outing.place}
            </p>
            <div className="mt-4 flex gap-1.5">
              {checkIns.map((item) => (
                <span
                  key={item.id}
                  className={`h-1.5 flex-1 rounded-full ${item.done ? "bg-[#ffdd67]" : "bg-white/25"}`}
                />
              ))}
            </div>
            <p className="mt-2 text-[12px] text-primary-foreground/80">
              {latest?.label} · {latest?.time} · {done}/{checkIns.length} taps ·
              home ~ {outing.expectedHome}
            </p>
          </div>
        </section>

        <section className="lift rounded-[22px] p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold tracking-tight">Who he’s with</h2>
            <Link
              href="/family/outing"
              className="text-[13px] font-semibold text-primary"
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
          className="lift flex items-center justify-between rounded-[22px] p-4 transition hover:-translate-y-0.5"
        >
          <div>
            <p className="font-semibold tracking-tight">Check-in timeline</p>
            <p className="text-sm text-muted-foreground">
              Left home, arrived, next tap at wrap-up
            </p>
          </div>
          <ArrowRight className="size-5 text-primary" />
        </Link>

        <div className="flex gap-2.5">
          <PrimaryLink href="/family/note" className="flex-1">
            <Phone className="size-4" />
            Send a note
          </PrimaryLink>
          <PrimaryLink
            href="tel:+6591234567"
            variant="outline"
            className="flex-1 bg-white"
          >
            Call Dad
          </PrimaryLink>
        </div>

        <p className="text-center text-[11px] text-muted-foreground">
          <Link href="/family/home?view=quiet" className="underline decoration-primary/30">
            Preview a quiet day
          </Link>
          {" · "}
          <Link href="/family/home?view=error" className="underline decoration-primary/30">
            If updates fail
          </Link>
        </p>
      </div>
    </AppShell>
  );
}
