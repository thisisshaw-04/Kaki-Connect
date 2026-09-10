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
  action,
  showNav = false,
  current,
}: {
  children: React.ReactNode;
  title?: string;
  backHref?: string;
  role: Role;
  action?: React.ReactNode;
  showNav?: boolean;
  current?: string;
}) {
  const items = nav[role];

  return (
    <div className="flex h-full min-h-0 flex-col bg-transparent">
      <header className="shrink-0">
        <div className="flex items-center gap-2 px-4 py-2">
          {backHref ? (
            <Link
              href={backHref}
              aria-label="Go back"
              className="flex size-11 items-center justify-center rounded-full bg-white/80 text-primary shadow-[0_2px_8px_rgba(47,93,151,0.08)] ring-1 ring-primary/10"
            >
              <ArrowLeft className="size-5" />
            </Link>
          ) : (
            <div className="size-11" />
          )}
          <div className="min-w-0 flex-1 text-center">
            <p className="font-display text-[13px] font-semibold tracking-[-0.02em] text-primary">
              {brand.name}
            </p>
            {title ? (
              <h1 className="truncate text-[15px] font-semibold tracking-tight text-foreground">
                {title}
              </h1>
            ) : null}
          </div>
          <div className="flex min-w-11 justify-end">{action}</div>
        </div>
      </header>
      <main className="flex min-h-0 flex-1 flex-col overflow-y-auto px-5 py-4">
        {children}
      </main>
      {showNav ? (
        <div className="shrink-0 px-4 pb-1">
          <nav className="flex items-center gap-1 rounded-full bg-white/85 p-1 shadow-[0_10px_28px_-12px_rgba(47,93,151,0.45)] ring-1 ring-primary/10 backdrop-blur-md">
            {items.map((item) => {
              const active = current === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex min-h-12 flex-1 flex-col items-center justify-center gap-0.5 rounded-full px-2 text-[11px] font-semibold tracking-tight transition",
                    active
                      ? "bg-primary text-primary-foreground shadow-[0_6px_16px_-8px_rgba(47,93,151,0.9)]"
                      : "text-muted-foreground hover:bg-muted/80"
                  )}
                >
                  <Icon className="size-[18px]" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
