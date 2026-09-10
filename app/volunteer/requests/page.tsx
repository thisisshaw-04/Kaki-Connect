import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { volunteerRequests } from "@/lib/data";

export default function VolunteerRequests() {
  return (
    <AppShell
      role="volunteer"
      title="Open requests"
      backHref="/volunteer"
      showNav
      current="/volunteer/requests"
    >
      <h1 className="text-2xl font-bold">Near Bedok this week</h1>
      <p className="mt-2 text-muted-foreground">
        Pick one you can actually finish. Better one complete walk than three
        maybes.
      </p>
      <ul className="mt-5 space-y-3">
        {volunteerRequests.map((request) => (
          <li key={request.id}>
            <Link
              href={
                request.id === "fishing-today"
                  ? "/volunteer/outing"
                  : "/volunteer/requests"
              }
              className="block rounded-2xl border border-border bg-card p-4"
            >
              <p className="text-xs font-semibold tracking-wide text-primary uppercase">
                {request.when}
              </p>
              <h2 className="mt-1 text-lg font-bold">{request.title}</h2>
              <p className="text-sm text-muted-foreground">
                {request.senior} · {request.place}
              </p>
              <p className="mt-2 text-sm">{request.need}</p>
              <p className="mt-1 text-sm text-muted-foreground">{request.group}</p>
            </Link>
          </li>
        ))}
      </ul>
    </AppShell>
  );
}
