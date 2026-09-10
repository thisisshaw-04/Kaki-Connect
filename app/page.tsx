import Link from "next/link";
import { ArrowRight, HeartHandshake, Home, Users } from "lucide-react";
import { brand } from "@/lib/data";
import { BrandMark, SlashMark } from "@/components/brand-mark";

const roles = [
  {
    href: "/elderly",
    title: "I’m joining in",
    hint: "A walk, a table, or a quiet chat.",
    icon: Home,
    tone: "bg-[#eaf1f8] text-primary",
    tick: "bg-primary",
  },
  {
    href: "/family",
    title: "I’m family",
    hint: "See the day, without hovering.",
    icon: Users,
    tone: "bg-[#fff4c4] text-[#715c00]",
    tick: "bg-[#e4c451]",
  },
  {
    href: "/volunteer",
    title: "I’m accompanying",
    hint: "Walk with someone, then home again.",
    icon: HeartHandshake,
    tone: "bg-[#efe8ff] text-[#4a3d7a]",
    tick: "bg-[#7c6bb0]",
  },
];

export default function RolePage() {
  return (
    <div className="flex h-full min-h-0 flex-col overflow-y-auto px-6 py-7">
      <div className="mb-8 flex flex-col items-center text-center">
        <BrandMark className="mb-4" />
        <p className="text-[11px] font-semibold tracking-[0.18em] text-primary/70 uppercase">
          Neighbourhood companion
        </p>
        <h1 className="font-display mt-1 text-[34px] leading-none font-semibold tracking-[-0.04em] text-primary">
          {brand.name}
        </h1>
        <p className="mt-3 max-w-[16rem] text-[14px] leading-relaxed text-muted-foreground">
          {brand.promise}
        </p>
      </div>

      <div className="mb-3 flex items-end justify-between">
        <h2 className="text-[17px] font-semibold tracking-tight">
          Who is this for today?
        </h2>
        <SlashMark label="// 03" />
      </div>
      <div className="flex flex-col gap-2.5">
        {roles.map((role) => {
          const Icon = role.icon;
          return (
            <Link
              key={role.href}
              href={role.href}
              className="lift group relative flex items-center justify-between overflow-hidden rounded-[22px] px-3.5 py-3.5 text-left transition duration-200 hover:-translate-y-0.5"
            >
              <span
                className={`absolute inset-y-4 left-0 w-1 rounded-full ${role.tick}`}
              />
              <span className="flex items-center gap-3 pl-2">
                <span
                  className={`flex size-12 items-center justify-center rounded-[18px] ${role.tone}`}
                >
                  <Icon className="size-6" />
                </span>
                <span>
                  <span className="block text-[16px] font-bold tracking-tight text-foreground">
                    {role.title}
                  </span>
                  <span className="mt-0.5 block text-[13px] text-muted-foreground">
                    {role.hint}
                  </span>
                </span>
              </span>
              <ArrowRight className="size-5 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-primary" />
            </Link>
          );
        })}
      </div>
      <p className="mt-auto pt-7 text-center text-[11px] leading-relaxed text-muted-foreground">
        Bedok, Tampines, and the next block over.
        <br />
        Free for seniors and the people who look in.
      </p>
    </div>
  );
}
