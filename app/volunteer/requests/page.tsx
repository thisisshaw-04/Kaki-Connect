import { MapPin, Shield } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import {
  Card,
  GoButton,
  Initials,
  Pill,
  Portrait,
  UiPic,
} from "@/components/ui-bits";
import { volunteerRequests } from "@/lib/data";
import { cn } from "@/lib/utils";

type Request = (typeof volunteerRequests)[number];

function RequestCard({ request }: { request: Request }) {
  return (
    <a href={request.href} className="block">
      <Card
        tone={request.featured ? "mint" : "lavender"}
        className="overflow-hidden p-0"
      >
        <div
          className={cn(
            "relative h-36 overflow-hidden",
            request.hero ? "bg-green-wash" : "bg-lilac-wash"
          )}
        >
          {request.hero ? (
            <Portrait
              src={request.hero}
              alt={request.heroAlt}
              className="h-full w-full"
            />
          ) : null}
          {request.illustration ? (
            <UiPic
              src={request.illustration}
              alt=""
              className={cn(
                "pointer-events-none absolute w-auto",
                request.hero
                  ? "right-[-8px] -bottom-4 h-36"
                  : "right-[-12px] -bottom-5 h-44"
              )}
            />
          ) : null}
          {request.featured ? (
            <Pill className="absolute top-3 left-3 bg-white text-ink">
              Featured Match
            </Pill>
          ) : request.accent ? (
            <UiPic
              src={request.accent}
              alt=""
              className="absolute top-3 left-3 size-11"
            />
          ) : null}
          <div className="absolute bottom-3 left-3 flex items-end gap-2">
            {request.portrait ? (
              <Portrait
                src={request.portrait}
                alt={request.senior}
                className="size-14 rounded-2xl object-cover object-top ring-[3px] ring-white"
              />
            ) : (
              <Initials
                name={request.senior}
                tone="lilac"
                className="size-14 rounded-2xl ring-[3px] ring-white"
              />
            )}
            <span className="rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-bold text-ink ring-1 ring-ink">
              {request.senior} · {request.age}y
            </span>
          </div>
        </div>

        <div className="px-4 pt-3 pb-4">
          <p
            className={cn(
              "text-[11px] font-bold tracking-[0.12em] uppercase",
              request.featured ? "text-[#1f5a48]" : "text-[#5a3d8a]"
            )}
          >
            {request.category}
          </p>
          <h2 className="mt-0.5 text-[20px] leading-tight font-extrabold tracking-[-0.03em]">
            {request.title}
          </h2>
          <p className="mt-1 text-sm leading-snug text-muted-foreground">
            {request.blurb}
          </p>

          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {request.chips.map((chip) => (
              <Pill key={chip} className="bg-white text-ink">
                {chip}
              </Pill>
            ))}
          </div>

          <p className="mt-2.5 text-[13px] font-semibold leading-snug">
            {request.need}
          </p>
          <p className="mt-1 flex items-start gap-1.5 text-sm">
            <MapPin className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
            <span>
              <span className="font-semibold">{request.place}</span>
              {request.pickup ? (
                <span className="text-muted-foreground"> · {request.pickup}</span>
              ) : null}
            </span>
          </p>

          {request.companions.length > 0 ? (
            <div className="mt-2.5 flex items-center gap-2">
              <div className="flex -space-x-2">
                {request.companions.map((person) => (
                  <Portrait
                    key={person.name}
                    src={person.photo}
                    alt={person.name}
                    className="size-8 rounded-full object-cover object-top ring-2 ring-white"
                  />
                ))}
              </div>
              <p className="text-xs leading-snug text-muted-foreground">
                {request.group}
              </p>
            </div>
          ) : (
            <p className="mt-2.5 text-xs leading-snug text-muted-foreground">
              {request.group}
            </p>
          )}

          <p className="mt-2 flex items-start gap-1.5 text-xs font-semibold text-[#1f5a48]">
            <Shield className="mt-0.5 size-3.5 shrink-0" />
            {request.badge}
          </p>

          <div className="mt-3 flex items-center justify-between">
            <span className="text-[13px] font-bold">I Can Help</span>
            <GoButton />
          </div>
        </div>
      </Card>
    </a>
  );
}

export default function VolunteerRequests() {
  return (
    <AppShell
      role="volunteer"
      title="KakiConnect"
      subtitle="Volunteer Mode"
      backHref="/volunteer"
      showNav
      current="/volunteer/requests"
    >
      <div className="flex items-end justify-between gap-3">
        <div>
          <h1 className="text-[28px] font-extrabold tracking-[-0.04em]">
            Open Companion Requests
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            All Requests (4) · Nearby East Coast & Bedok
          </p>
        </div>
        <UiPic
          src="/illustrations/person-wave.png"
          alt=""
          className="h-16 w-auto shrink-0"
        />
      </div>
      <ul className="mt-4 space-y-3">
        {volunteerRequests.map((request) => (
          <li key={request.id}>
            <RequestCard request={request} />
          </li>
        ))}
      </ul>
      <p className="mt-4 pb-2 text-center text-sm text-muted-foreground">
        Need a tailored route? Update your transit preferences in Profile to
        receive instant SMS companion matches.
      </p>
    </AppShell>
  );
}
