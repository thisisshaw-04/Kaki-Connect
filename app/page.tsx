import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { brand } from "@/lib/data";
import { UiPic } from "@/components/ui-bits";

const roles = [
  {
    href: "/elderly",
    title: "Elderly",
    hint: "Find activities and kakis",
    art: "/ui/icon-elderly.svg",
    tone: "bg-[#dff5e8]",
  },
  {
    href: "/family",
    title: "Family",
    hint: "Stay updated when Dad goes out",
    art: "/ui/icon-family.svg",
    tone: "bg-[#ffe4e2]",
  },
  {
    href: "/volunteer",
    title: "Volunteer",
    hint: "Help seniors stay connected",
    art: "/ui/icon-volunteer.svg",
    tone: "bg-[#d7f0f7]",
  },
];

export default function RolePage() {
  return (
    <div className="flex h-full min-h-0 flex-col overflow-y-auto px-6 py-8">
      <div className="mb-8 flex items-center gap-3">
        <UiPic src="/ui/icon-logo.svg" alt="" className="size-14" />
        <div>
          <h1 className="text-[28px] leading-none font-extrabold tracking-[-0.04em] text-[#16181d]">
            {brand.name}
          </h1>
          <p className="mt-1 text-sm font-medium text-muted-foreground">
            {brand.shortLine}
          </p>
        </div>
      </div>

      <h2 className="mb-5 text-[32px] leading-[1.05] font-extrabold tracking-[-0.04em] text-[#16181d]">
        Who do you want to signup as?
      </h2>
      <div className="flex flex-col gap-3">
        {roles.map((role) => (
          <Link
            key={role.href}
            href={role.href}
            className={`group flex w-full items-center justify-between overflow-hidden rounded-[32px] ${role.tone} px-5 py-4 text-left transition active:scale-[0.99]`}
          >
            <span className="min-w-0 flex-1 pr-2">
              <span className="block text-[22px] font-extrabold tracking-[-0.03em] text-[#16181d]">
                {role.title}
              </span>
              <span className="mt-1 block text-sm text-[#5b616b]">
                {role.hint}
              </span>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-[#16181d]">
                Continue <ArrowRight className="size-4" />
              </span>
            </span>
            <UiPic src={role.art} alt="" className="size-24 shrink-0" />
          </Link>
        ))}
      </div>
    </div>
  );
}
