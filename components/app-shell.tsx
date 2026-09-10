import Link from "next/link";
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

  return (
    <div className={cn("relative flex h-full min-h-0 flex-col bg-transparent", className)}>
      <header className="shrink-0 border-b border-[#c2c6d1]/30 bg-[#fbf9f5]">
        <div className="flex items-center gap-2 px-4 py-3">
          {onBack ? (
            <button
              type="button"
              aria-label="Go back"
              onClick={onBack}
              className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#f0eeea] text-foreground shadow-xs active:scale-95"
            >
              <ArrowLeft className="size-5" />
            </button>
          ) : backHref ? (
            <Link
              href={backHref}
              aria-label="Go back"
              className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#f0eeea] text-foreground shadow-xs active:scale-95"
            >
              <ArrowLeft className="size-5" />
            </Link>
          ) : (
            <div className="size-10 shrink-0" />
          )}
          <div className="min-w-0 flex-1 text-center">
            <p className="text-[18px] leading-6 font-bold tracking-[-0.01em] text-foreground">
              {title ?? brand.name}
            </p>
            {subtitle ? (
              <p className="mt-0.5 flex items-center justify-center gap-1 text-[11px] font-medium tracking-[0.04em] text-muted-foreground">
                {subtitle}
              </p>
            ) : null}
          </div>
          <div className="flex min-w-10 justify-end">{action}</div>
        </div>
        {typeof progress === "number" ? (
          <div className="kaki-progress-track mx-4 mb-3">
            <span
              className="kaki-progress-fill"
              style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
            />
          </div>
        ) : null}
      </header>
      <main className="flex min-h-0 flex-1 flex-col overflow-y-auto px-5 py-4">
        {children}
      </main>
      {footer ? (
        <div className="shrink-0 px-5 pb-3 pt-1">{footer}</div>
      ) : null}
      {showNav ? (
        <nav
          aria-label="Main navigation"
          className="shrink-0 border-t border-[#c2c6d1]/30 bg-white px-2 py-1.5"
        >
          <div className="flex items-center justify-around">
            {items.map((item) => {
              const active = current === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex min-h-[52px] min-w-[64px] flex-1 flex-col items-center justify-center gap-0.5 rounded-xl px-2 text-[11px] font-semibold transition",
                    active
                      ? "text-primary"
                      : "text-muted-foreground hover:bg-[#f0eeea]"
                  )}
                >
                  <Icon
                    className="size-6"
                    strokeWidth={active ? 2.4 : 1.8}
                    fill={active ? "currentColor" : "none"}
                  />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      ) : null}
    </div>
  );
}
