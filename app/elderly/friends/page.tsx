import { AppShell } from "@/components/app-shell";
import { SosButton } from "@/components/sos-button";
import { GoButton, Portrait, StatusDot } from "@/components/ui-bits";
import { friends } from "@/lib/data";

const tones = ["bg-green-wash", "bg-beige-card", "bg-lilac-wash"];

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
      <p className="text-center text-sm leading-relaxed text-muted-foreground">
        Friendly 1-on-1 kopi chats with matched kakis. Family only sees that a chat happened.
      </p>
      <ul className="mt-5 grid grid-cols-2 gap-3">
        {friends.map((person, index) => (
          <li
            key={person.id}
            className={index === 0 ? "col-span-2" : undefined}
          >
            <a
              href={person.id === "raymond" ? "/elderly/call" : "/elderly/friends"}
              className={`relative flex min-h-[48px] rounded-[28px] p-4 ${
                index === 0 ? "flex-row items-center gap-4" : "min-h-[220px] flex-col"
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
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-extrabold leading-tight">{person.name}</p>
                  {person.online ? (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#1f5a48]">
                      <StatusDot live /> Online
                    </span>
                  ) : null}
                </div>
                <p className="mt-1 text-[13px] leading-snug text-muted-foreground">{person.shared}</p>
                <p className="mt-1 text-xs text-muted-foreground">{person.languages}</p>
              </div>
              <span className={index === 0 ? "ml-auto" : "mt-auto self-end pt-3"}>
                <GoButton />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </AppShell>
  );
}
