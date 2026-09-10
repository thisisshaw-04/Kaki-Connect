import { Check, Shield } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { PrimaryLink } from "@/components/primary-link";
import { SosButton } from "@/components/sos-button";
import { Card, Pill, Portrait } from "@/components/ui-bits";
import { familyMember, friends, photos } from "@/lib/data";

export default function CallSetup() {
  const person = friends[0];

  return (
    <AppShell
      role="elderly"
      title="KakiConnect"
      subtitle="Video Call Setup"
      backHref="/elderly/friends"
      action={<SosButton />}
      showNav
      current="/elderly/friends"
    >
      <div className="space-y-4">
        <Pill>Friendly Connection · Call Your Kaki</Pill>
        <p className="text-sm font-semibold text-[#1b5e20]">Online & Ready for Kopi Chat</p>
        <Card className="overflow-hidden p-0">
          <Portrait
            src={photos.raymond}
            alt="Uncle Raymond Tan"
            className="h-44 w-full rounded-none"
          />
          <div className="p-5">
            <h1 className="text-[22px] font-bold">Uncle Raymond Tan</h1>
            <p className="text-sm text-muted-foreground">
              Age {person.age} • {person.neighbourhood}
            </p>
            <p className="mt-1 text-sm">{person.languages}</p>
            <button
              type="button"
              className="mt-3 w-full rounded-full bg-[#fff3c9] py-3 text-sm font-bold"
            >
              10s Voice Greeting · Tap to hear Uncle Raymond&apos;s warm hello
            </button>
          </div>
        </Card>
        <Card>
          <p className="font-bold">Conversation Starters · Easy Topics</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Things both of you love to talk about:
          </p>
          <ul className="mt-3 space-y-3">
            {person.topics.map((topic) => (
              <li key={topic.title}>
                <p className="font-semibold">{topic.title}</p>
                <p className="text-sm text-muted-foreground">{topic.detail}</p>
              </li>
            ))}
          </ul>
        </Card>
        <Card>
          <p className="font-bold">Quick Comfort Check</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Everything is preset so you don&apos;t have to fiddle:
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {[
              "Loud speaker turned ON",
              "Camera ready & centered",
              "Wi-Fi Connection Strong · 100% Ready",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Check className="size-4 text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </Card>
        <p className="flex items-start gap-2 text-sm leading-relaxed">
          <Shield className="mt-0.5 size-4 shrink-0 text-primary" />
          Safe & Protected: Your family contact {familyMember.name.split(" ")[0]} will know you are having a safe chat.
        </p>
        <PrimaryLink href="/elderly/calling" className="h-16 text-lg">
          Start Video Call Now
        </PrimaryLink>
        <PrimaryLink href="/elderly/calling" variant="outline">
          Call Voice Only
        </PrimaryLink>
        <PrimaryLink href="/elderly/friends" variant="ghost">
          Choose Later
        </PrimaryLink>
      </div>
    </AppShell>
  );
}
