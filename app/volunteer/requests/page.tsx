import { AppShell } from "@/components/app-shell";
import { Card, GoButton, Pill, SlashMark, UiPic } from "@/components/ui-bits";
import { volunteerRequests } from "@/lib/data";

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
      <h1 className="text-[30px] font-extrabold tracking-[-0.04em]">Open Companion Requests</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        All Requests (4) · Nearby East Coast & Bedok
      </p>
      <ul className="mt-4 space-y-3">
        {volunteerRequests.map((request, index) => (
          <li key={request.id}>
            <a
              href={request.id === "fishing" ? "/volunteer/outing" : "/volunteer/requests"}
              className="block"
            >
              <Card
                highlight={request.featured}
                tone={request.featured ? undefined : "sky"}
                className="relative overflow-hidden"
              >
                <UiPic
                  src={request.id === "fishing" ? "/ui/icon-fish.svg" : "/ui/icon-dimsum.svg"}
                  alt=""
                  className="pointer-events-none absolute -right-2 -top-2 h-24 w-24"
                />
                <div className="flex items-start justify-between gap-2 pr-16">
                  <SlashMark label={`// 0${index + 1}`} />
                  {request.featured ? (
                    <Pill className="bg-white/80 text-[#3a322c]">
                      Featured Match · {request.distance}
                    </Pill>
                  ) : null}
                </div>
                <p className="mt-2 text-[11px] font-semibold tracking-wide text-primary uppercase">
                  Walking Companionship
                </p>
                <h2 className="mt-1 text-lg font-bold">{request.title}</h2>
                <p className="text-sm text-muted-foreground">
                  {request.senior} · {request.age}y · {request.hangul}
                </p>
                <p className="mt-2 text-sm leading-relaxed">{request.blurb}</p>
                <p className="mt-2 text-sm font-semibold">{request.need}</p>
                <p className="mt-1 text-sm">{request.when}</p>
                <p className="text-sm text-muted-foreground">{request.place}</p>
                <p className="mt-1 text-sm">{request.group}</p>
                <p className="mt-2 text-xs font-semibold text-[#1f5a48]">{request.badge}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-[13px] font-bold">I Can Help</span>
                  <GoButton />
                </div>
              </Card>
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-center text-sm text-muted-foreground">
        Need a tailored route? Update your transit preferences in Profile to receive instant SMS companion matches.
      </p>
    </AppShell>
  );
}
