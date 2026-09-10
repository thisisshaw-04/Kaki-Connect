import Link from "next/link";
import { ArrowRight, Heart, HeartHandshake, Users } from "lucide-react";
import { brand } from "@/lib/data";

const roles = [
  {
    href: "/elderly",
    title: "Elderly",
    hint: "Find activities and kakis",
    icon: Users,
    tone: "bg-[#eaf1f8] text-primary",
    hover: "hover:border-primary",
  },
  {
    href: "/family",
    title: "Family",
    hint: "Stay updated when Dad goes out",
    icon: Heart,
    tone: "bg-[#ffdad6] text-[#93000a]",
    hover: "hover:border-[#ba1a1a]/40",
  },
  {
    href: "/volunteer",
    title: "Volunteer",
    hint: "Help seniors stay connected",
    icon: HeartHandshake,
    tone: "bg-[#fdf8e6] text-[#715c00]",
    hover: "hover:border-[#715c00]",
  },
];

export default function RolePage() {
  return (
    <div className="flex h-full min-h-0 flex-col overflow-y-auto px-6 py-10">
      <div className="mb-10 flex flex-col items-center text-center">
        <div className="mb-4 flex size-16 items-center justify-center rounded-2xl bg-primary text-white shadow-md">
          <Heart className="size-8 fill-current" />
        </div>
        <h1 className="text-[30px] leading-none font-bold tracking-tight text-primary">
          {brand.name}
        </h1>
        <p className="mt-2 text-sm font-medium tracking-wide text-gray-500 uppercase">
          {brand.shortLine}
        </p>
      </div>

      <h2 className="mb-6 w-full text-center text-xl font-bold text-gray-800">
        Who do you want to signup as?
      </h2>
      <div className="flex flex-col gap-4">
        {roles.map((role) => {
          const Icon = role.icon;
          return (
            <Link
              key={role.href}
              href={role.href}
              className={`group flex w-full items-center justify-between rounded-2xl border border-gray-200 bg-white px-5 py-5 text-left transition-all hover:shadow-lg ${role.hover}`}
            >
              <span className="flex items-center gap-4">
                <span
                  className={`flex size-12 shrink-0 items-center justify-center rounded-full ${role.tone}`}
                >
                  <Icon className="size-6" />
                </span>
                <span>
                  <span className="block text-lg font-bold text-gray-800">
                    {role.title}
                  </span>
                  <span className="mt-0.5 block text-sm text-gray-500">
                    {role.hint}
                  </span>
                </span>
              </span>
              <ArrowRight className="size-5 text-gray-400 transition group-hover:translate-x-1 group-hover:text-primary" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
