import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  Heart,
  Phone,
  User,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { brand } from "@/lib/data";

type Role = "elderly" | "family" | "volunteer";

const nav = {
  elderly: [
    { href: "/elderly/home", label: "Today", icon: CalendarDays },
    { href: "/elderly/friends", label: "Friends", icon: Users },
    { href: "/elderly/profile", label: "Me", icon: User },
  ],
  family: [
    { href: "/family/home", label: "Today", icon: Heart },
    { href: "/family/week", label: "This week", icon: CalendarDays },
    { href: "/family/note", label: "Note", icon: Phone },
  ],
  volunteer: [
    { href: "/volunteer/requests", label: "Requests", icon: CalendarDays },
    { href: "/volunteer/live", label: "Live", icon: Heart },
  ],
} as const;

export function AppShell({
  children,
  title,
  backHref,
  role,
  wide = false,
  action,
  showNav = false,
  current,
}: {
  children: React.ReactNode;
  title?: string;
  backHref?: string;
  role: Role;
  wide?: boolean;
  action?: React.ReactNode;
  showNav?: boolean;
  current?: string;
}) {
  const items = nav[role];

  return (
    <div className="min-h-full bg-[#dfe3eb]">
      <div
        className={cn(
          "mx-auto flex min-h-screen flex-col bg-[var(--surface)] shadow-[0_0_40px_rgba(0,0,0,0.08)]",
          wide ? "max-w-2xl" : "max-w-[420px]"
        )}
      >
        <header className="sticky top-0 z-30 border-b border-border/70 bg-[var(--surface)]/95 backdrop-blur">
          <div className="flex items-center gap-2 px-4 py-3">
            {backHref ? (
              <Link
                href={backHref}
                aria-label="Go back"
                className="flex size-11 items-center justify-center rounded-full text-primary hover:bg-muted"
              >
                <ArrowLeft className="size-5" />
              </Link>
            ) : (
              <div className="size-11" />
            )}
            <div className="min-w-0 flex-1 text-center">
              <p className="text-[11px] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                {brand.name}
              </p>
              {title ? (
                <h1 className="truncate text-base font-semibold text-foreground">
                  {title}
                </h1>
              ) : null}
            </div>
            <div className="flex min-w-11 justify-end">{action}</div>
          </div>
        </header>
        <main className="flex flex-1 flex-col px-5 py-5">{children}</main>
        {showNav ? (
          <nav className="sticky bottom-0 z-30 mt-auto border-t border-border bg-[var(--surface)] px-3 py-2">
            <ul className="flex items-center justify-around">
              {items.map((item) => {
                const active = current === item.href;
                const Icon = item.icon;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex min-h-12 min-w-[4.5rem] flex-col items-center justify-center gap-0.5 rounded-xl px-3 text-xs font-semibold",
                        active
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:bg-muted"
                      )}
                    >
                      <Icon className="size-5" />
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        ) : null}
      </div>
    </div>
  );
}
