import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { SosButton } from "@/components/sos-button";
import { Portrait, StatusDot } from "@/components/ui-bits";
import { friends } from "@/lib/data";

const tones = ["bg-[#dff5e8]", "bg-[#d7f0f7]", "bg-[#ece7ff]"];

export default function BuddiesPage() {
  return (
    <AppShell
      role="elderly"
      title="KakiConnect"
      backHref="/elderly/home"
      action={<SosButton />}
      showNav
      current="/elderly/friends"
    >
      <h1 className="text-[30px] font-extrabold tracking-[-0.04em]">Call Your Kaki</h1>
      <p className="mt-2 text-muted-foreground">
        Friendly 1-on-1 kopi chats with matched kakis. Family only sees that a chat happened.
      </p>
      <ul className="mt-5 space-y-3">
        {friends.map((person, index) => (
          <li key={person.id}>
            <Link
              href={person.id === "raymond" ? "/elderly/call" : "/elderly/friends"}
              className={`flex items-center gap-3 rounded-[28px] p-4 ${tones[index % tones.length]}`}
            >
              {"photo" in person && person.photo ? (
                <Portrait
                  src={person.photo}
                  alt={person.name}
                  className="size-14 rounded-full"
                />
              ) : (
                <div className="flex size-14 items-center justify-center rounded-full bg-white font-bold">
                  {person.name[0]}
                </div>
              )}
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className="font-bold">{person.name}</p>
                  {person.online ? (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#1b5e20]">
                      <StatusDot live /> Online
                    </span>
                  ) : null}
                </div>
                <p className="truncate text-sm text-muted-foreground">{person.shared}</p>
                <p className="text-xs text-muted-foreground">{person.languages}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </AppShell>
  );
}
