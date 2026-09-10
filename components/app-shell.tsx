import {
  ArrowLeft,
  CalendarDays,
  HeartHandshake,
  Shield,
  User,
  Users,
  Heart,
  Phone,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { brand } from "@/lib/data";

type Role = "elderly" | "family" | "volunteer";

const nav = {
  elderly: [
    { href: "/elderly/home", label: "Activities", icon: CalendarDays },
    { href: "/elderly/friends", label: "Buddies", icon: Users },
    { href: "/elderly/care", label: "Care Hub", icon: Shield },
    { href: "/elderly/profile", label: "Profile", icon: User },
  ],
  family: [
    { href: "/family/home", label: "Today", icon: Heart },
    { href: "/family/week", label: "This week", icon: CalendarDays },
    { href: "/family/note", label: "Note", icon: Phone },
  ],
  volunteer: [
    { href: "/volunteer/requests", label: "Missions", icon: HeartHandshake },
    { href: "/volunteer/live", label: "Check-in", icon: Shield },
    { href: "/volunteer/community", label: "Community", icon: Users },
    { href: "/volunteer/profile", label: "Profile", icon: User },
  ],
} as const;

const circleBtn =
  "flex size-10 shrink-0 items-center justify-center rounded-full bg-lilac-wash text-[#5a3d8a] ring-1 ring-lilac transition active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lilac focus-visible:ring-offset-2";

export function AppShell({
  children,
  title,
  subtitle,
  backHref,
  onBack,
  role,
  action,
  showNav = false,
  current,
  progress,
  footer,
  className,
}: {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  backHref?: string;
  onBack?: () => void;
  role: Role;
  action?: React.ReactNode;
  showNav?: boolean;
  current?: string;
  progress?: number;
  footer?: React.ReactNode;
  className?: string;
}) {
  const items = nav[role];
  const heading = title ?? brand.name;

  return (
    <div className={cn("relative flex h-full min-h-0 flex-col bg-background", className)}>
      <header className="shrink-0 bg-background">
        <div className="flex items-center justify-between gap-2 px-4 py-3">
          {onBack ? (
            <button type="button" aria-label="Go back" onClick={onBack} className={circleBtn}>
              <ArrowLeft className="size-5" />
            </button>
          ) : backHref ? (
            <a href={backHref} aria-label="Go back" className={circleBtn}>
              <ArrowLeft className="size-5" />
            </a>
          ) : (
            <div className="size-10 shrink-0" />
          )}
          <div className="min-w-0 flex-1 text-center">
            <p className="text-[18px] leading-tight font-bold tracking-tight text-ink">{heading}</p>
            {subtitle ? (
              <p className="mt-0.5 text-[11px] font-medium text-muted-foreground">{subtitle}</p>
            ) : null}
          </div>
          <div className="flex min-w-10 shrink-0 justify-end">{action}</div>
        </div>
        {typeof progress === "number" ? (
          <div className="px-5 pb-2">
            <div
              className="kaki-progress-track"
              role="progressbar"
              aria-label="Setup progress"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(Math.min(100, Math.max(0, progress)))}
            >
              <span
                className="kaki-progress-fill"
                style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
              />
            </div>
          </div>
        ) : null}
      </header>
      <main className="flex min-h-0 flex-1 flex-col overflow-y-auto px-5 py-3">
        {children}
      </main>
      {footer ? (
        <div className="relative z-20 shrink-0 bg-background px-5 pt-1 pb-3">{footer}</div>
      ) : null}
      {showNav ? (
        <nav
          aria-label="Main navigation"
          className="shrink-0 border-t border-lilac bg-background px-2 pt-1 pb-2"
        >
          <div className="flex items-end justify-around">
            {items.map((item) => {
              const active = current === item.href;
              const Icon = item.icon;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex min-h-[52px] min-w-[64px] flex-1 flex-col items-center justify-center gap-0.5 rounded-xl px-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lilac",
                    active ? "text-[#5a3d8a]" : "text-muted-foreground"
                  )}
                >
                  <Icon className="size-6" strokeWidth={active ? 2.3 : 1.7} />
                  <span className="text-center text-[11px] leading-tight font-semibold">
                    {item.label}
                  </span>
                </a>
              );
            })}
          </div>
        </nav>
      ) : null}
    </div>
  );
}
