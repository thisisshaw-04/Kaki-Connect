import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { SosButton } from "@/components/sos-button";
import { GoButton, Portrait, StatusDot } from "@/components/ui-bits";
import { friends } from "@/lib/data";

const tones = ["bg-[#f6e79c]", "bg-white", "bg-[#d5ebf5]"];

export default function BuddiesPage() {
  return (
    <AppShell
      role="elderly"
      title="Call Your Kaki"
      backHref="/elderly/home"
      action={<SosButton />}
      showNav
      current="/elderly/friends"
    >
      <p className="text-center text-sm text-muted-foreground">
        Friendly 1-on-1 kopi chats with matched kakis. Family only sees that a chat happened.
      </p>
      <div className="mt-5 grid grid-cols-2 gap-3">
        {friends.map((person, index) => (
          <Link
            key={person.id}
            href={person.id === "raymond" ? "/elderly/call" : "/elderly/friends"}
            className={`relative flex min-h-[220px] flex-col rounded-[28px] p-4 ${
              index === 0 ? "col-span-2 min-h-[180px] flex-row items-center gap-4" : ""
            } ${tones[index % tones.length]}`}
          >
            {"photo" in person && person.photo ? (
              <Portrait
                src={person.photo}
                alt={person.name}
                className={index === 0 ? "size-16 rounded-full" : "mx-auto size-16 rounded-full"}
              />
            ) : (
              <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-white font-bold">
                {person.name[0]}
              </div>
            )}
            <div className={index === 0 ? "min-w-0 flex-1" : "mt-3 min-w-0"}>
              <div className="flex items-center gap-2">
                <p className="truncate font-extrabold">{person.name}</p>
                {person.online ? (
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#1b5e20]">
                    <StatusDot live /> Online
                  </span>
                ) : null}
              </div>
              <p className="mt-1 text-[12px] leading-snug text-muted-foreground">{person.shared}</p>
              <p className="mt-1 text-[11px] text-muted-foreground">{person.languages}</p>
            </div>
            <span className={index === 0 ? "ml-auto" : "mt-auto self-end"}>
              <GoButton className="size-10" />
            </span>
          </Link>
        ))}
      </div>
    </AppShell>
  );
}
