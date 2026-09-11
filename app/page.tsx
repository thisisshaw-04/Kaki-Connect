import { OpeningScreen } from "@/components/opening-screen";
import { brand } from "@/lib/data";
import { GoButton, UiPic } from "@/components/ui-bits";

const roles = [
  {
    href: "/elderly",
    title: "Elderly",
    hint: "Find activities and kakis",
    art: "/illustrations/person-point.png",
    tone: "bg-green-wash",
    featured: true,
  },
  {
    href: "/family",
    title: "Family",
    hint: "Stay updated when Dad goes out",
    art: "/illustrations/person-tablet.png",
    tone: "bg-lilac-wash",
    featured: false,
  },
  {
    href: "/volunteer",
    title: "Volunteer",
    hint: "Help seniors stay connected",
    art: "/illustrations/person-wave.png",
    tone: "bg-beige-card",
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
      <div className="relative mb-6 inline-grid size-[72px] place-items-center">
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full border-[6px] border-green-wash"
        />
        <UiPic
          src="/brand/kakiconnect-mark.png"
          alt=""
          className="relative h-10 w-10 object-contain"
        />
      </div>

      <p className="relative text-center text-sm font-medium text-muted-foreground">{brand.shortLine}</p>
      <h1 className="relative mt-1 text-center text-[32px] leading-[1.05] font-extrabold tracking-[-0.045em] text-ink">
        Who do you want to signup as?
      </h1>

      <a
        href={featured.href}
        className={`relative mt-6 flex flex-col overflow-hidden rounded-[32px] border-2 border-ink ${featured.tone} px-5 pt-5 pb-3`}
      >
        <div className="flex min-h-0 flex-1 items-end gap-2">
          <div className="min-w-0 flex-1 pb-1">
            <p className="text-[22px] font-extrabold tracking-[-0.03em]">{featured.title}</p>
            <p className="mt-1 max-w-[11rem] text-sm text-[#7a6c60]">{featured.hint}</p>
          </div>
          <UiPic
            src={featured.art}
            alt=""
            className="-mb-1 h-40 w-auto max-w-[46%] shrink-0 object-contain object-bottom"
          />
        </div>
        <span className="relative z-10 mt-auto flex items-center justify-between pt-2">
          <span className="text-sm font-bold">Continue</span>
          <GoButton />
        </span>
      </a>

      <div className="relative mt-3 grid grid-cols-2 gap-3">
        {rest.map((role) => (
          <a
            key={role.href}
            href={role.href}
            className={`relative flex min-h-[240px] flex-col overflow-hidden rounded-[28px] border-2 border-ink ${role.tone} p-4 pb-3`}
          >
            <p className="text-[18px] font-extrabold tracking-[-0.03em]">{role.title}</p>
            <p className="mt-1 text-[13px] leading-snug text-[#7a6c60]">{role.hint}</p>
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
