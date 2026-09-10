import Link from "next/link";
import { ArrowRight, HeartHandshake, Home, Users } from "lucide-react";
import { brand } from "@/lib/data";

const roles = [
  {
    href: "/elderly",
    title: "I’m joining in",
    hint: "Find a walk, a table, or a quiet chat.",
    icon: Home,
    tone: "bg-[#eaf1f8] text-primary",
  },
  {
    href: "/family",
    title: "I’m family",
    hint: "See how the day’s going, without hovering.",
    icon: Users,
    tone: "bg-[#fdf6d8] text-[#715c00]",
  },
  {
    href: "/volunteer",
    title: "I’m accompanying",
    hint: "Walk with someone to an outing, then home again.",
    icon: HeartHandshake,
    tone: "bg-[#efe8ff] text-[#4a3d7a]",
  },
];

export default function RolePage() {
  return (
    <div className="flex h-full min-h-0 flex-col overflow-y-auto bg-[var(--surface)] px-6 py-8">
        <div className="mb-10 flex flex-col items-center text-center">
          <div className="mb-4 flex size-16 items-center justify-center rounded-3xl bg-primary text-primary-foreground shadow-sm">
            <Home className="size-8" />
          </div>
          <p className="text-[11px] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
            Neighbourhood companion
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-primary">
            {brand.name}
          </h1>
          <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-muted-foreground">
            {brand.promise}
          </p>
        </div>

        <h2 className="mb-4 text-lg font-semibold text-foreground">
          Who is this for today?
        </h2>
        <div className="flex flex-col gap-3">
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <Link
                key={role.href}
                href={role.href}
                className="group flex items-center justify-between rounded-2xl border border-border bg-card px-4 py-4 text-left shadow-[0_4px_20px_-2px_rgba(47,93,151,0.06)] transition hover:border-primary/40"
              >
                <span className="flex items-center gap-3">
                  <span
                    className={`flex size-12 items-center justify-center rounded-2xl ${role.tone}`}
                  >
                    <Icon className="size-6" />
                  </span>
                  <span>
                    <span className="block text-[17px] font-bold text-foreground">
                      {role.title}
                    </span>
                    <span className="mt-0.5 block text-sm text-muted-foreground">
                      {role.hint}
                    </span>
                  </span>
                </span>
                <ArrowRight className="size-5 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-primary" />
              </Link>
            );
          })}
        </div>
        <p className="mt-auto pt-8 text-center text-xs leading-relaxed text-muted-foreground">
          Built for Bedok, Tampines, and the next block over. Free for seniors
          and the people who look in on them.
        </p>
    </div>
  );
}
