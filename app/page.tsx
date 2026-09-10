import Link from "next/link";
import { brand } from "@/lib/data";
import { GoButton, UiPic } from "@/components/ui-bits";

const roles = [
  {
    href: "/elderly",
    title: "Elderly",
    hint: "Find activities and kakis",
    art: "/ui/icon-elderly.svg",
    tone: "bg-[#f6e79c]",
    featured: true,
  },
  {
    href: "/family",
    title: "Family",
    hint: "Stay updated when Dad goes out",
    art: "/ui/icon-family.svg",
    tone: "bg-white",
    featured: false,
  },
  {
    href: "/volunteer",
    title: "Volunteer",
    hint: "Help seniors stay connected",
    art: "/ui/icon-volunteer.svg",
    tone: "bg-white",
    featured: false,
  },
];

export default function RolePage() {
  const featured = roles[0];
  const rest = roles.slice(1);

  return (
    <div className="flex h-full min-h-0 flex-col overflow-y-auto bg-[#eef1ea] px-5 py-6">
      <div className="mb-6 flex items-center justify-between">
        <span className="flex size-14 items-center justify-center rounded-full bg-white">
          <UiPic src="/ui/icon-logo.svg" alt="" className="size-10" />
        </span>
      </div>

      <p className="text-center text-sm font-medium text-muted-foreground">{brand.shortLine}</p>
      <h1 className="mt-1 text-center text-[32px] leading-[1.05] font-extrabold tracking-[-0.045em] text-[#16181d]">
        Who do you want to signup as?
      </h1>

      <Link
        href={featured.href}
        className={`relative mt-6 block overflow-hidden rounded-[32px] ${featured.tone} p-5`}
      >
        <UiPic src={featured.art} alt="" className="absolute -right-2 -top-2 size-28" />
        <p className="text-[22px] font-extrabold tracking-[-0.03em]">{featured.title}</p>
        <p className="mt-1 max-w-[70%] text-sm text-[#5b616b]">{featured.hint}</p>
        <div className="mt-8 flex items-end justify-between">
          <p className="text-sm font-bold">Continue</p>
          <GoButton />
        </div>
      </Link>

      <div className="mt-3 grid grid-cols-2 gap-3">
        {rest.map((role) => (
          <Link
            key={role.href}
            href={role.href}
            className={`relative flex min-h-[210px] flex-col overflow-hidden rounded-[28px] ${role.tone} p-4`}
          >
            <UiPic src={role.art} alt="" className="mx-auto size-16" />
            <p className="mt-2 text-[18px] font-extrabold tracking-[-0.03em]">{role.title}</p>
            <p className="mt-1 text-[12px] leading-snug text-[#5b616b]">{role.hint}</p>
            <span className="mt-auto self-end">
              <GoButton className="size-10" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
