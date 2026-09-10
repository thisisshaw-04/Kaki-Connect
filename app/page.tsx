import { OpeningScreen } from "@/components/opening-screen";
import { brand } from "@/lib/data";
import { GoButton, UiPic } from "@/components/ui-bits";

const roles = [
  {
    href: "/elderly",
    title: "Elderly",
    hint: "Find activities and kakis",
    art: "/illustrations/person-point.png",
    tone: "bg-[#f8e56a]",
    featured: true,
  },
  {
    href: "/family",
    title: "Family",
    hint: "Stay updated when Dad goes out",
    art: "/illustrations/person-tablet.png",
    tone: "bg-[#ead9fa]",
    featured: false,
  },
  {
    href: "/volunteer",
    title: "Volunteer",
    hint: "Help seniors stay connected",
    art: "/illustrations/person-wave.png",
    tone: "bg-[#d4efe4]",
    featured: false,
  },
];

export default function RolePage() {
  const featured = roles[0];
  const rest = roles.slice(1);

  return (
    <div className="relative h-full min-h-0">
      <OpeningScreen />
      <div className="relative flex h-full min-h-0 flex-col overflow-y-auto bg-background px-5 py-6">
      <span
        aria-hidden
        className="pointer-events-none absolute -top-8 -left-10 size-40 rounded-full border-[18px] border-[#d4efe4]"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute top-36 -right-6 size-8 rotate-12 text-[#7ecdb4]"
      >
        ✦
      </span>
      <div className="relative mb-6 flex items-center justify-between">
        <span className="flex size-14 items-center justify-center overflow-hidden rounded-full bg-white">
          <UiPic src="/brand/kakiconnect-mark.png" alt="" className="size-11 object-contain" />
        </span>
      </div>

      <p className="relative text-center text-sm font-medium text-muted-foreground">{brand.shortLine}</p>
      <h1 className="relative mt-1 text-center text-[32px] leading-[1.05] font-extrabold tracking-[-0.045em] text-[#2a2218]">
        Who do you want to signup as?
      </h1>

      <a
        href={featured.href}
        className={`relative mt-6 flex items-end overflow-hidden rounded-[32px] ${featured.tone} px-5 pt-5`}
      >
        <div className="min-w-0 flex-1 pb-5">
          <p className="text-[22px] font-extrabold tracking-[-0.03em]">{featured.title}</p>
          <p className="mt-1 max-w-[11rem] text-sm text-[#6b5e52]">{featured.hint}</p>
          <div className="mt-8 flex items-center justify-between gap-3 pr-2">
            <p className="text-sm font-bold">Continue</p>
            <GoButton />
          </div>
        </div>
        <UiPic
          src={featured.art}
          alt=""
          className="-mb-1 h-44 w-auto max-w-[46%] shrink-0 object-contain object-bottom"
        />
      </a>

      <div className="relative mt-3 grid grid-cols-2 gap-3">
        {rest.map((role) => (
          <a
            key={role.href}
            href={role.href}
            className={`relative flex min-h-[240px] flex-col overflow-hidden rounded-[28px] ${role.tone} p-4 pb-3`}
          >
            <p className="text-[18px] font-extrabold tracking-[-0.03em]">{role.title}</p>
            <p className="mt-1 text-[13px] leading-snug text-[#6b5e52]">{role.hint}</p>
            <UiPic
              src={role.art}
              alt=""
              className="mx-auto mt-2 h-28 w-auto max-w-full object-contain object-bottom"
            />
            <span className="mt-auto flex items-center justify-between pt-2">
              <span className="text-sm font-bold">Continue</span>
              <GoButton />
            </span>
          </a>
        ))}
      </div>
      </div>
    </div>
  );
}
