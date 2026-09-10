import { AppShell } from "@/components/app-shell";
import { PrimaryLink } from "@/components/primary-link";
import { senior } from "@/lib/data";

export default function VolunteerWelcome() {
  return (
    <AppShell role="volunteer" backHref="/">
      <div className="flex flex-1 flex-col">
        <p className="text-[13px] font-semibold tracking-tight text-primary">Volunteer</p>
        <h1 className="font-display mt-2 text-[28px] leading-[1.08] font-semibold tracking-[-0.04em]">
          Walk with someone. That’s the whole job.
        </h1>
        <p className="mt-3 text-[16px] leading-relaxed text-muted-foreground">
          You are company for a neighbourhood outing — not a nurse. Family
          Service Centre is on call if the weather turns or plans change.
        </p>
        <ul className="mt-6 space-y-3">
          {[
            {
              title: "Travel and company only",
              body: "Walks, MRT, a seat at the kopitiam. No medical care.",
            },
            {
              title: "Family already knows",
              body: `${senior.name}’s daughter sees your check-ins. You are not reporting in secret.`,
            },
            {
              title: "Addresses unlock late",
              body: "Block details appear only after you accept a request.",
            },
          ].map((item) => (
            <li key={item.title} className="lift rounded-[22px] p-4">
              <p className="font-bold">{item.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{item.body}</p>
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-8">
          <PrimaryLink href="/volunteer/requests">See open requests</PrimaryLink>
        </div>
      </div>
    </AppShell>
  );
}
