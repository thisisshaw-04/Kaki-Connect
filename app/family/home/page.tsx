import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { PrimaryLink } from "@/components/primary-link";
import { Card, Portrait, StatusDot } from "@/components/ui-bits";
import { checkIns, outing, photos, senior, volunteer } from "@/lib/data";

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
        title="KakiConnect"
        subtitle="Today"
        backHref="/family/link"
        showNav
        current="/family/home"
      >
        <Card className="border-[#ba1a1a]/20 bg-[#ffdad6]">
          <h1 className="text-xl font-bold tracking-tight">
            Couldn&apos;t refresh Dad&apos;s day
          </h1>
          <p className="mt-2 text-sm leading-relaxed">
            His last known update is still here on your phone. Try again in a moment — this is a connection issue, not an emergency. The 60-minute safety escalation has not fired.
          </p>
          <PrimaryLink href="/family/home" className="mt-4">
            Try again
          </PrimaryLink>
        </Card>
      </AppShell>
    );
  }

  if (quiet) {
    return (
      <AppShell
        role="family"
        title="KakiConnect"
        subtitle="Today"
        backHref="/family/link"
        showNav
        current="/family/home"
      >
        <Card>
          <p className="text-sm font-semibold text-primary">Home</p>
          <h1 className="mt-2 text-[26px] font-semibold tracking-[-0.02em]">
            {senior.name} is at home
          </h1>
          <p className="mt-2 leading-relaxed text-muted-foreground">
            No outing booked today. Last activity was a 22-minute video kopi chat with Uncle Raymond yesterday.
          </p>
        </Card>
        <p className="mt-6 text-sm text-muted-foreground">
          That&apos;s the whole update. A quiet day is still a good day.
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
      title="KakiConnect"
      subtitle="Today"
      backHref="/family/link"
      showNav
      current="/family/home"
    >
      <div className="space-y-3.5">
        <section className="rounded-[24px] bg-primary p-5 text-primary-foreground">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-2.5 py-1 text-[12px] font-semibold">
            <StatusDot live />
            Out right now
          </div>
          <h1 className="mt-3 text-[26px] leading-[1.1] font-semibold tracking-[-0.02em]">
            {senior.name} is at {outing.area}
          </h1>
          <p className="mt-2 flex items-start gap-2 text-[14px] leading-relaxed text-primary-foreground/85">
            <MapPin className="mt-0.5 size-4 shrink-0" />
            {outing.title} · {outing.pavilion}
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
            {latest?.label} · {latest?.time} · {done}/{checkIns.length} taps · home ~ {outing.expectedHome}
          </p>
        </section>

        <Card>
          <div className="flex items-center justify-between">
            <h2 className="font-semibold tracking-tight">Who he&apos;s with</h2>
            <Link href="/family/outing" className="text-[13px] font-semibold text-primary">
              Live check-ins
            </Link>
          </div>
          <ul className="mt-3 space-y-3">
            <li className="flex items-center gap-3">
              <Portrait
                src={photos.rachel}
                alt={volunteer.name}
                className="size-12 rounded-2xl"
              />
              <div>
                <p className="font-semibold">{volunteer.name}</p>
                <p className="text-sm text-muted-foreground">
                  Volunteer companion · walking with him
                </p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Portrait src={photos.ahmad} alt="Ahmad" className="size-12 rounded-2xl" />
              <div>
                <p className="font-semibold">Ahmad</p>
                <p className="text-sm text-muted-foreground">Fishing kaki</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Portrait src={photos.susan} alt="Susan" className="size-12 rounded-2xl" />
              <div>
                <p className="font-semibold">Susan</p>
                <p className="text-sm text-muted-foreground">Bringing extra bait</p>
              </div>
            </li>
          </ul>
        </Card>

        <Link
          href="/family/outing"
          className="flex items-center justify-between rounded-[22px] border border-[#c2c6d1]/30 bg-white p-4"
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
          <PrimaryLink href="tel:+6591234567" variant="outline" className="flex-1">
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
