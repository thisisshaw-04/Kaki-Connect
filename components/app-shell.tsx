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

const circleBtn =
  "flex size-12 shrink-0 items-center justify-center rounded-full bg-white text-foreground transition active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16181d] focus-visible:ring-offset-2";

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
    <div className={cn("relative flex h-full min-h-0 flex-col bg-[#eef1ea]", className)}>
      <header className="shrink-0 bg-[#eef1ea]">
        <div className="flex items-center justify-between px-5 pt-3 pb-1">
          {onBack ? (
            <button type="button" aria-label="Go back" onClick={onBack} className={circleBtn}>
              <ArrowLeft className="size-5" />
            </button>
          ) : backHref ? (
            <Link href={backHref} aria-label="Go back" className={circleBtn}>
              <ArrowLeft className="size-5" />
            </Link>
          ) : (
            <div className="size-12 shrink-0" />
          )}
          <div className="flex min-w-12 justify-end">{action}</div>
        </div>
        {title || subtitle ? (
          <div className="px-6 pb-2 text-center">
            {title ? (
              <p className="text-[24px] leading-[1.15] font-extrabold tracking-[-0.04em] text-foreground">
                {title ?? brand.name}
              </p>
            ) : null}
            {subtitle ? (
              <p className="mt-1 text-[13px] font-medium text-muted-foreground">{subtitle}</p>
            ) : null}
          </div>
        ) : null}
        {typeof progress === "number" ? (
          <div
            className="kaki-progress-track mx-6 mb-2"
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
        ) : null}
      </header>
      <main className="flex min-h-0 flex-1 flex-col overflow-y-auto px-5 py-3">
        {children}
      </main>
      {footer ? (
        <div className="relative z-20 shrink-0 bg-[#eef1ea] px-5 pt-1 pb-3">{footer}</div>
      ) : null}
      {showNav ? (
        <nav aria-label="Main navigation" className="shrink-0 bg-[#eef1ea] px-4 pt-1 pb-2">
          <div className="flex items-end justify-between gap-1">
            {items.map((item) => {
              const active = current === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className="flex min-h-16 min-w-[64px] flex-1 flex-col items-center justify-center gap-1 rounded-2xl px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16181d]"
                >
                  <span
                    className={cn(
                      "flex size-12 items-center justify-center rounded-full",
                      active ? "bg-[#16181d] text-white" : "bg-white text-[#5c6370]"
                    )}
                  >
                    <Icon className="size-5" strokeWidth={active ? 2.4 : 1.8} />
                  </span>
                  <span
                    className={cn(
                      "text-center text-xs leading-tight font-semibold",
                      active ? "text-[#16181d]" : "text-muted-foreground"
                    )}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </nav>
      ) : null}
    </div>
  );
}
