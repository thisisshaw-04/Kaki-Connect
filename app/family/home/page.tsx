import { MapPin, Phone } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { PrimaryLink } from "@/components/primary-link";
import { Card, GoButton, Portrait, StatusDot, UiPic } from "@/components/ui-bits";
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
        title="Today"
        subtitle="KakiConnect"
        backHref="/family/link"
        showNav
        current="/family/home"
      >
        <Card tone="blush">
          <h1 className="text-xl font-extrabold tracking-tight">
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
        title="Today"
        subtitle="KakiConnect"
        backHref="/family/link"
        showNav
        current="/family/home"
      >
        <Card tone="mint" className="relative overflow-hidden">
          <UiPic
            src="/ui/icon-home.svg"
            alt=""
            className="pointer-events-none absolute -right-2 -top-2 h-24 w-24"
          />
          <p className="text-sm font-semibold">Home</p>
          <h1 className="mt-2 max-w-[75%] text-[28px] font-extrabold tracking-[-0.04em]">
            {senior.name} is at home
          </h1>
          <p className="mt-2 leading-relaxed text-[#3d4a42]">
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
      title="Today"
      subtitle="KakiConnect"
      backHref="/family/link"
      showNav
      current="/family/home"
    >
      <div className="space-y-3.5">
        <a
          href="/family/outing"
          className="relative block overflow-hidden rounded-[32px] bg-[#d8efe4] p-5"
        >
          <UiPic
            src="/ui/icon-fish.svg"
            alt=""
            className="pointer-events-none absolute -right-2 -top-1 h-28 w-28"
          />
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-2.5 py-1 text-[12px] font-semibold">
            <StatusDot live />
            Out right now
          </div>
          <h1 className="mt-3 max-w-[78%] text-[28px] leading-[1.08] font-extrabold tracking-[-0.04em]">
            {senior.name} is at {outing.area}
          </h1>
          <p className="mt-2 flex max-w-[85%] items-start gap-2 text-[14px] leading-relaxed text-[#3d4a42]">
            <MapPin className="mt-0.5 size-4 shrink-0" />
            {outing.title} · {outing.pavilion}
          </p>
          <div className="mt-4 flex gap-1.5" aria-hidden>
            {checkIns.map((item) => (
              <span
                key={item.id}
                className={`h-1.5 flex-1 rounded-full ${item.done ? "bg-[#16181d]" : "bg-white/70"}`}
              />
            ))}
          </div>
          <p className="mt-2 text-[13px] text-[#3d4a42]">
            {latest?.label} · {latest?.time} · {done}/{checkIns.length} taps · home ~ {outing.expectedHome}
          </p>
          <div className="mt-4 flex items-end justify-between gap-3">
            <p className="text-[13px] font-bold">Open this outing</p>
            <GoButton />
          </div>
        </a>

        <p className="px-1 text-[15px] font-semibold">Who he&apos;s with</p>
        <ul className="space-y-2">
          {[
            { src: photos.rachel, name: volunteer.name, hint: "Volunteer companion · walking with him" },
            { src: photos.ahmad, name: "Ahmad", hint: "Fishing kaki" },
            { src: photos.susan, name: "Susan", hint: "Bringing extra bait" },
          ].map((person) => (
            <li key={person.name} className="flex items-center gap-3 rounded-[24px] bg-white p-3">
              <Portrait src={person.src} alt={person.name} className="size-14 rounded-full" />
              <div className="min-w-0">
                <p className="font-extrabold leading-tight">{person.name}</p>
                <p className="mt-0.5 text-sm leading-snug text-muted-foreground">{person.hint}</p>
              </div>
            </li>
          ))}
        </ul>

        <a
          href="/family/outing"
          className="flex items-center justify-between rounded-[28px] bg-[#d5ebf5] p-4"
        >
          <div>
            <p className="font-semibold tracking-tight">Check-in timeline</p>
            <p className="text-sm text-muted-foreground">
              Left home, arrived, next tap at wrap-up
            </p>
            <p className="mt-1 text-[13px] font-bold">Live check-ins</p>
          </div>
          <GoButton />
        </a>

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
          <a href="/family/home?view=quiet" className="underline decoration-black/20">
            Preview a quiet day
          </a>
          {" · "}
          <a href="/family/home?view=error" className="underline decoration-black/20">
            If updates fail
          </a>
        </p>
      </div>
    </AppShell>
  );
}
