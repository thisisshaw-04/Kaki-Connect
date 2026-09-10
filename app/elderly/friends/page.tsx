import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { Initials, StatusDot } from "@/components/ui-bits";
import { friends } from "@/lib/data";

export default function FriendsPage() {
  return (
    <AppShell
      role="elderly"
      title="Friends"
      backHref="/elderly/home"
      showNav
      current="/elderly/friends"
    >
      <h1 className="text-[24px] font-bold">People you already know</h1>
      <p className="mt-2 text-muted-foreground">
        A short video call, or sit together at the next outing. No swiping.
      </p>
      <ul className="mt-5 space-y-3">
        {friends.map((person) => (
          <li key={person.id}>
            <Link
              href={person.id === "raymond" ? "/elderly/call" : "/elderly/friends"}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4"
            >
              <Initials name={person.name} />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className="font-bold">{person.name}</p>
                  {person.online ? (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#1b5e20]">
                      <StatusDot live /> Online
                    </span>
                  ) : null}
                </div>
                <p className="truncate text-sm text-muted-foreground">
                  {person.shared}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </AppShell>
  );
}
