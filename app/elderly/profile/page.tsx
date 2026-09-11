import { MapPin, Phone } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { PrimaryLink } from "@/components/primary-link";
import { SosButton } from "@/components/sos-button";
import { Card, Initials, Pill, Portrait, UiPic } from "@/components/ui-bits";
import { familyMember, senior, volunteer } from "@/lib/data";

const interestArt: Record<string, string> = {
  "Kopi & chat": "/ui/icon-kopi.svg",
  "Park walks": "/ui/icon-park.svg",
  Fishing: "/ui/icon-fish.svg",
};

export default function ElderlyProfile() {
  return (
    <AppShell
      role="elderly"
      title="KakiConnect"
      subtitle="Profile"
      backHref="/elderly/home"
      action={<SosButton />}
      showNav
      current="/elderly/profile"
    >
      <div className="space-y-4">
        <Card tone="butter" className="relative overflow-hidden">
          <div className="relative z-10 max-w-[13.5rem]">
            <p className="text-[11px] font-bold tracking-[0.14em] text-[#5a3d8a] uppercase">
              Your profile
            </p>
            <h1 className="mt-1 text-[28px] leading-tight font-extrabold tracking-[-0.04em]">
              {senior.name}
            </h1>
            <p className="mt-1 text-[15px] font-semibold">{senior.fullName}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {senior.age} · {senior.estate}
            </p>
            <p className="mt-1 flex items-start gap-1.5 text-sm leading-snug text-muted-foreground">
              <MapPin className="mt-0.5 size-4 shrink-0" />
              {senior.block}
            </p>
          </div>
          <UiPic
            src="/illustrations/person-point.png"
            alt=""
            className="pointer-events-none absolute right-[-8px] bottom-[-10px] h-36 w-auto object-contain object-bottom"
          />
        </Card>

        <Card>
          <p className="font-bold">Languages</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {senior.languages.map((language) => (
              <Pill key={language}>{language}</Pill>
            ))}
          </div>
        </Card>

        <Card tone="mint">
          <p className="font-bold">I enjoy</p>
          <ul className="mt-3 space-y-2">
            {senior.interests.map((interest) => (
              <li key={interest} className="flex items-center gap-3">
                <UiPic
                  src={interestArt[interest] ?? "/ui/icon-kaki.svg"}
                  alt=""
                  className="size-11 shrink-0"
                />
                <span className="text-[15px] font-semibold">{interest}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-4">
          <p className="text-[11px] font-bold tracking-[0.12em] text-muted-foreground uppercase">
            Family
          </p>
          <a
            href={`tel:${familyMember.phone.replace(/\s/g, "")}`}
            className="mt-3 flex items-center gap-3"
          >
            <Initials name={familyMember.name} tone="lilac" />
            <div className="min-w-0 flex-1">
              <p className="font-extrabold leading-tight">{familyMember.name}</p>
              <p className="text-sm text-muted-foreground">
                {familyMember.relation} · {familyMember.phone}
              </p>
            </div>
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-lilac text-ink">
              <Phone className="size-5" />
            </span>
          </a>
        </Card>

        <Card className="flex items-center gap-3 p-4" tone="sky">
          <Portrait
            src={volunteer.photo}
            alt={volunteer.name}
            className="size-12 rounded-full ring-1 ring-ink"
          />
          <div className="min-w-0 flex-1">
            <p className="font-extrabold leading-tight">{volunteer.name}</p>
            <p className="text-sm text-muted-foreground">Verified companion · Fei Yue FSC</p>
          </div>
        </Card>

        <PrimaryLink href="/" variant="ghost">
          Switch role
        </PrimaryLink>
      </div>
    </AppShell>
  );
}
