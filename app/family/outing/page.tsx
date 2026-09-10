import { AppShell } from "@/components/app-shell";
import { PrimaryLink } from "@/components/primary-link";
import { StatusDot } from "@/components/ui-bits";
import { checkIns, outing, senior } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function FamilyOuting() {
  const done = checkIns.filter((item) => item.done).length;

  return (
    <AppShell
      role="family"
      title="This outing"
      backHref="/family/home"
      showNav
      current="/family/home"
    >
      <div className="space-y-5">
        <div>
          <div className="flex items-center gap-2 text-sm font-semibold text-[#1b5e20]">
            <StatusDot live />
            {senior.name} is still out
          </div>
          <h1 className="mt-2 text-2xl font-bold">{outing.title}</h1>
          <p className="text-muted-foreground">{outing.place}</p>
        </div>

        <div>
          <p className="mb-2 text-sm font-semibold">
            {done} of {checkIns.length} check-ins
          </p>
          <div className="h-2 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-primary"
              style={{ width: `${(done / checkIns.length) * 100}%` }}
            />
          </div>
        </div>

        <ol className="space-y-4">
          {checkIns.map((item) => (
            <li key={item.id} className="flex gap-3">
              <span
                className={cn(
                  "mt-1 size-3 shrink-0 rounded-full",
                  item.done ? "bg-[#2e7d32]" : "bg-border"
                )}
              />
              <div>
                <p className="font-semibold">
                  {item.label}
                  <span className="ml-2 text-sm font-medium text-muted-foreground">
                    {item.time}
                  </span>
                </p>
                <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                  {item.detail}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <p className="rounded-2xl bg-muted px-4 py-3 text-sm leading-relaxed">
          Wei Ming taps these. You are not watching a map — just the moments
          Dad agreed to share.
        </p>

        <PrimaryLink href="/family/note" variant="outline">
          Send “don’t forget your cap”
        </PrimaryLink>
      </div>
    </AppShell>
  );
}
