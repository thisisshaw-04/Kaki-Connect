"use client";

import { useState } from "react";
import {
  ArrowRight,
  Camera,
  Check,
  Info,
  Play,
  Shield,
  Smile,
} from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { ListenButton } from "@/components/listen-button";
import { Card, Pill, SlashMark, UiPic, choiceClass } from "@/components/ui-bits";
import { familyMember, senior } from "@/lib/data";
import { cn } from "@/lib/utils";

const ages = [
  { id: "60", label: "60 – 64 yrs", tag: "Kaki Tier" },
  { id: "65", label: "65 – 69 yrs", tag: "Kaki Tier", selected: true },
  { id: "70", label: "70 – 74 yrs", tag: "Golden" },
  { id: "75", label: "75+ yrs & above", tag: "Golden" },
];

const estates = [
  "Bedok / East Coast",
  "Toa Payoh",
  "Ang Mo Kio",
  "Tampines",
  "Jurong East",
  "Clementi",
  "Woodlands",
];

const languages = [
  { id: "hk", code: "HK", label: "Hokkien", on: true },
  { id: "en", code: "EN", label: "English", on: true },
  { id: "cn", code: "CN", label: "Mandarin", on: true },
  { id: "tc", code: "TC", label: "Teochew", on: true },
  { id: "ct", code: "CT", label: "Cantonese", on: false },
  { id: "my", code: "MY", label: "Malay", on: false },
  { id: "tm", code: "TM", label: "Tamil", on: false },
];

const supports = [
  {
    id: "wheelchair",
    title: "Wheelchair & Ramp Assistance",
    detail: "Step-free routes, lift access, and gentle guidance",
  },
  {
    id: "arm",
    title: "Arm-Hold & Steady Walking",
    detail: "A patient buddy to walk beside you at your own pace",
    selected: true,
  },
  {
    id: "door",
    title: "Door-to-Door Transport",
    detail: "Help booking and boarding taxis or community rides",
  },
  {
    id: "dialect",
    title: "Dialect Speaking Kaki",
    detail: "Someone who speaks Hokkien, Teochew, or Cantonese comfortably",
  },
  {
    id: "none",
    title: "None needed",
    detail: "Just a friendly walking kaki",
  },
];

const activities = [
  {
    id: "kopi",
    title: "Drink Kopi & Chat",
    detail: "Warm drinks & warm talk",
    selected: true,
  },
  {
    id: "park",
    title: "Gentle Park Walk",
    detail: "Breeze, shade & stroll",
  },
  {
    id: "karaoke",
    title: "Sing Oldies & Karaoke",
    detail: "Favorite classic songs",
  },
];

const titles = ["Uncle", "Auntie", "Brother", "Sister"];
const textSizes = [
  { id: "standard", label: "Standard", hint: "Default compact layout" },
  { id: "comfortable", label: "Comfortable", hint: "Popular with most seniors", recommended: true },
  { id: "xl", label: "Extra Large", hint: "Clear, high magnification" },
];

export function SetupFlow({ step }: { step: number }) {
  const [name, setName] = useState(senior.name);
  const [title, setTitle] = useState("Uncle");
  const [age, setAge] = useState("65");
  const [estate, setEstate] = useState("Bedok / East Coast");
  const [langs, setLangs] = useState(languages.filter((l) => l.on).map((l) => l.id));
  const [mobility, setMobility] = useState("help");
  const [support, setSupport] = useState("arm");
  const [activity, setActivity] = useState("kopi");
  const [relation, setRelation] = useState("Daughter");
  const [contactName, setContactName] = useState(familyMember.name);
  const [phone, setPhone] = useState("9123 4567");
  const [fscEscalation, setFscEscalation] = useState(true);
  const [textSize, setTextSize] = useState("comfortable");

  const total = 10;
  const progress = ((step + 1) / total) * 100;
  const nextHref = step >= total - 1 ? "/elderly/home" : `/elderly/setup?step=${step + 1}`;
  const backHref = step === 0 ? "/elderly" : `/elderly/setup?step=${step - 1}`;

  return (
    <AppShell
      role="elderly"
      backHref={backHref}
      action={<ListenButton />}
      progress={progress}
      footer={
        <div>
          <a
            href={nextHref}
            className="relative z-20 inline-flex min-h-16 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#3a322c] text-base font-bold text-white shadow-[0_10px_24px_-12px_rgba(22,24,29,0.55)] active:scale-[0.98]"
          >
            {step === 6
              ? "Confirm & Continue"
              : step === 7
                ? "Complete"
                : step === 9
                  ? "Get Started"
                  : "Continue"}
            <ArrowRight className="size-5" />
          </a>
          {step === 7 ? (
            <a
              href={nextHref}
              className="mt-2 flex min-h-12 w-full items-center justify-center py-2 text-center text-sm font-semibold text-muted-foreground"
            >
              Skip voice greeting for now
            </a>
          ) : null}
        </div>
      }
    >
      {step === 0 ? (
        <div className="space-y-5">
          <div>
            <h1 className="text-[28px] leading-9 font-semibold tracking-[-0.02em]">
              What should we call you?
            </h1>
            <p className="mt-2 text-[16px] leading-[26px] text-muted-foreground">
              Use your friendly nickname, English name, or casual senior address so nearby Kakis know what to call you.
            </p>
          </div>
          <Card tone="sky" className="flex items-center gap-4">
            <UiPic src="/ui/icon-elderly.svg" alt="" className="size-16" />
            <div className="flex-1">
              <p className="flex items-center gap-1 text-sm font-semibold text-primary">
                <Check className="size-4" /> Using Uncle Joy avatar
              </p>
              <div className="mt-2 flex gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold">
                  <Camera className="size-3.5" /> Take Photo
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold">
                  <Smile className="size-3.5" /> Choose Avatar
                </span>
              </div>
            </div>
          </Card>
          <label className="kc-display-name" htmlFor="display-name">
            <span className="kc-display-name-label">Your Display Name</span>
            <div className="kc-display-name-field">
              <input
                id="display-name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                autoComplete="name"
                enterKeyHint="next"
              />
              <span className="kc-display-name-mic" aria-hidden>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                  <line x1="12" x2="12" y1="19" y2="22" />
                </svg>
              </span>
            </div>
            <p className="kc-display-name-hint">
              <Info className="mt-0.5 size-3.5 shrink-0" />
              Tap the mic icon anytime to speak instead of typing.
            </p>
          </label>
          <div>
            <p className="mb-2 text-sm font-semibold">Quick Title Shortcut (Tap to add):</p>
            <div className="flex flex-wrap gap-2">
              {titles.map((item) => (
                <button
                  key={item}
                  type="button"
                  aria-pressed={title === item}
                  onClick={() => setTitle(item)}
                  className={cn(
                    "min-h-11 rounded-full border border-[#3a322c] px-4 text-sm font-semibold",
                    title === item
                      ? "bg-[#3a322c] text-white"
                      : "bg-white text-foreground"
                  )}
                >
                  {item}
                  {title === item ? " · Selected" : " · + Add"}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      {step === 1 ? (
        <div className="space-y-5">
          <div>
            <h1 className="text-[28px] leading-9 font-semibold tracking-[-0.02em]">
              Where do you live & your age group?
            </h1>
            <p className="mt-2 text-[16px] leading-[26px] text-muted-foreground">
              This helps find friendly Kakis within walking distance or a short bus ride.
            </p>
          </div>
          <div>
            <div className="mb-2 flex items-center justify-between">
              <p className="font-semibold">Your Age Group</p>
              <span className="text-xs font-semibold text-primary">Confidential & safe</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {ages.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={age === item.id}
                  onClick={() => setAge(item.id)}
                  className={cn(
                    choiceClass(age === item.id)
                  )}
                >
                  <p className="text-[11px] font-semibold tracking-wide text-primary uppercase">
                    {item.tag}
                  </p>
                  <p className="mt-1 font-bold">{item.label}</p>
                  {age === item.id ? (
                    <p className="mt-1 text-xs font-semibold text-primary">Selected</p>
                  ) : null}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-2 font-semibold">Your Estate / Town</p>
            <p className="mb-2 text-xs font-semibold text-primary">East Region · Selected Location</p>
            <select
              value={estate}
              onChange={(event) => setEstate(event.target.value)}
              aria-label="Your estate or town"
              className="h-14 w-full rounded-full border border-[#3a322c] bg-white px-5 text-base"
            >
              {estates.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
            <p className="mt-3 text-sm font-semibold">Tap to pick popular estates:</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {["Bedok", "Toa Payoh", "Ang Mo Kio", "Tampines", "Jurong East"].map((item) => (
                <button
                  key={item}
                  type="button"
                  aria-pressed={estate.startsWith(item)}
                  onClick={() =>
                    setEstate(item === "Bedok" ? "Bedok / East Coast" : item)
                  }
                  className={cn(
                    "min-h-11 rounded-full border border-[#3a322c] px-3 text-sm font-semibold",
                    estate.startsWith(item) ? "bg-[#3a322c] text-white" : "bg-white"
                  )}
                >
                  {item}
                </button>
              ))}
            </div>
            <Card tone="sky" className="mt-4 p-4">
              <p className="font-bold text-primary">14 Kakis are active in Bedok!</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Morning tai chi, coffee chats, and supermarket buddies are looking for new friends nearby.
              </p>
            </Card>
          </div>
        </div>
      ) : null}

      {step === 2 ? (
        <div className="space-y-5">
          <div>
            <h1 className="text-[28px] leading-9 font-semibold tracking-[-0.02em]">
              What languages do you speak?
            </h1>
            <p className="mt-2 text-[16px] leading-[26px] text-muted-foreground">
              Select all that you feel comfortable chatting, joking, or having kopi with.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {languages.map((item) => {
              const on = langs.includes(item.id);
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={on}
                  onClick={() =>
                    setLangs((current) =>
                      current.includes(item.id)
                        ? current.filter((id) => id !== item.id)
                        : [...current, item.id]
                    )
                  }
                  className={cn(
                    "flex items-center gap-3",
                    choiceClass(on)
                  )}
                >
                  <span className="flex size-9 items-center justify-center rounded-full bg-white text-xs font-bold text-primary">
                    {item.code}
                  </span>
                  <span className="font-bold">{item.label}</span>
                  {on ? <Check className="ml-auto size-4 text-primary" /> : null}
                </button>
              );
            })}
          </div>
          <Card tone="butter">
            <p className="font-bold">Helpful Tip · No worries!</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Speaking local dialects helps us pair you with Kakis who love the same banter!
            </p>
          </Card>
        </div>
      ) : null}

      {step === 3 ? (
        <div className="space-y-4">
          <div>
            <h1 className="text-[28px] leading-9 font-semibold tracking-[-0.02em]">
              Do you need help to walk or go out?
            </h1>
            <p className="mt-2 text-[16px] leading-[26px] text-muted-foreground">
              Pick the one that fits you best today.
            </p>
          </div>
          {[
            {
              id: "own",
              mark: "// 01",
              title: "I can walk on my own",
              detail: "I can take MRT, bus, or walk to the coffee shop myself.",
            },
            {
              id: "help",
              mark: "// 02",
              title: "I need a helping hand",
              detail:
                "I use a wheelchair or walking stick. Please pair me with a kind volunteer companion.",
            },
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={mobility === item.id}
              onClick={() => setMobility(item.id)}
              className={cn(
                choiceClass(mobility === item.id)
              )}
            >
              <SlashMark label={item.mark} />
              <p className="mt-2 text-lg font-bold">{item.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {item.detail}
              </p>
            </button>
          ))}
          <p className="text-sm text-muted-foreground">
            Don’t worry! You can change this anytime with your volunteer.
          </p>
        </div>
      ) : null}

      {step === 4 ? (
        <div className="space-y-4">
          <Pill>Your Comfort Matters</Pill>
          <h1 className="text-[28px] leading-9 font-semibold tracking-[-0.02em]">
            What kind of support is most helpful?
          </h1>
          <p className="text-[16px] leading-[26px] text-muted-foreground">
            Choose what feels right for you. We will match you with a friendly kaki or volunteer who understands.
          </p>
          <div className="space-y-2">
            {supports.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-pressed={support === item.id}
                onClick={() => setSupport(item.id)}
                className={cn(
                  choiceClass(support === item.id)
                )}
              >
                <p className="font-bold">{item.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
              </button>
            ))}
          </div>
          <p className="flex items-start gap-1 text-xs text-muted-foreground">
            <Info className="mt-0.5 size-3.5" />
            You can change your support preferences at any time.
          </p>
        </div>
      ) : null}

      {step === 5 ? (
        <div className="space-y-4">
          <h1 className="text-[28px] leading-9 font-semibold tracking-[-0.02em]">
            What sounds fun to you?
          </h1>
          <p className="text-[16px] leading-[26px] text-muted-foreground">
            Tap what you&apos;d like to do with your new kaki.
          </p>
          {activities.map((item) => {
            return (
            <button
              key={item.id}
              type="button"
              aria-pressed={activity === item.id}
              onClick={() => setActivity(item.id)}
              className={cn(
                "flex items-center justify-between gap-3",
                choiceClass(activity === item.id)
              )}
            >
              <span className="min-w-0">
                <span className="block font-bold">{item.title}</span>
                <span className="mt-1 block text-sm text-muted-foreground">
                  {item.detail}
                </span>
              </span>
              {activity === item.id ? <Check className="size-5 shrink-0" /> : null}
            </button>
            );
          })}
          <p className="text-sm text-muted-foreground">
            No rush! You can always change activities later or invite family along.
          </p>
        </div>
      ) : null}

      {step === 6 ? (
        <div className="space-y-4">
          <Pill>Caregiver Safety Network</Pill>
          <h1 className="text-[28px] leading-9 font-semibold tracking-[-0.02em]">
            Family Peace of Mind
          </h1>
          <p className="text-[16px] leading-[26px] text-muted-foreground">
            Link a trusted family member or caregiver so they stay updated whenever you go on an outing.
          </p>
          <Card tone="mint">
            <p className="flex items-center gap-2 text-sm font-bold text-primary">
              <Shield className="size-4" /> Protected by Fei Yue Community Care
            </p>
            <p className="mt-1 text-[11px] font-semibold tracking-wide uppercase">
              SG GOV SECURE
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Your emergency contact only receives automated check-in and return alerts when an outing begins. Your private details stay confidential.
            </p>
          </Card>
          <Card>
            <div className="flex items-center justify-between">
              <p className="font-bold">Primary Emergency Contact</p>
              <span className="rounded-full bg-[#d5efe6] px-2 py-0.5 text-[11px] font-bold text-[#1f5a48]">
                Verified · Active
              </span>
            </div>
            <div className="mt-3 flex gap-2">
              {["Daughter", "Son", "Caregiver"].map((item) => (
                <button
                  key={item}
                  type="button"
                  aria-pressed={relation === item}
                  onClick={() => setRelation(item)}
                  className={cn(
                    "min-h-11 rounded-full border border-[#3a322c] px-3 text-sm font-semibold",
                    relation === item ? "bg-[#3a322c] text-white" : "bg-white"
                  )}
                >
                  {item}
                </button>
              ))}
            </div>
            <label className="mt-3 block text-sm font-semibold" htmlFor="contact-name">
              Contact Name
            </label>
            <input
              id="contact-name"
              value={contactName}
              onChange={(event) => setContactName(event.target.value)}
              autoComplete="name"
              className="mt-1 h-12 w-full rounded-full border border-[#3a322c] bg-white px-5 text-base"
            />
            <label className="mt-3 block text-sm font-semibold" htmlFor="contact-phone">
              Mobile Phone Number
            </label>
            <div className="mt-1 flex gap-2">
              <span className="flex h-12 items-center rounded-full border border-[#3a322c] bg-white px-4 text-sm">
                🇸🇬 +65
              </span>
              <input
                id="contact-phone"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                type="tel"
                inputMode="numeric"
                autoComplete="tel-national"
                className="h-12 flex-1 rounded-full border border-[#3a322c] bg-white px-5 text-base"
              />
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              SMS alert with live tracking will be sent to this number.
            </p>
          </Card>
          <Card tone="blush">
            <p className="font-bold">Automatic Safety Escalation · 60 Min Guarantee</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              If no check-in or reply is received within 60 minutes after an outing begins, an urgent alert and live GPS location will be automatically escalated to your family contact (+65 9123 4567) and the community care center.
            </p>
          </Card>
          <button
            type="button"
            role="checkbox"
            aria-checked={fscEscalation}
            onClick={() => setFscEscalation((value) => !value)}
            className={cn("flex items-start gap-3", choiceClass(fscEscalation))}
          >
            <span
              className={cn(
                "mt-0.5 flex size-5 items-center justify-center rounded-[6px]",
                fscEscalation ? "bg-[#3a322c] text-white" : "border border-[#eadfce] bg-white"
              )}
            >
              {fscEscalation ? <Check className="size-3.5" /> : null}
            </span>
            <span>
              <span className="block font-bold">
                Allow FSC Social Worker escalation if family is unreachable
              </span>
              <span className="mt-1 block text-sm text-muted-foreground">
                Family Service Centre (FSC) community buddy will receive an automated follow-up ticket only after 60 minutes of no response.
              </span>
            </span>
          </button>
          <p className="text-center text-xs text-muted-foreground">
            You can update your emergency contact anytime in Settings
          </p>
        </div>
      ) : null}

      {step === 7 ? (
        <div className="space-y-4">
          <h1 className="text-[28px] leading-9 font-semibold tracking-[-0.02em]">
            Say a quick hello! <span className="text-base font-medium text-muted-foreground">(Optional)</span>
          </h1>
          <p className="text-[16px] leading-[26px] text-muted-foreground">
            A short 10-second voice note makes fellow Kakis feel welcome and at ease.
          </p>
          <Card highlight>
            <p className="font-bold">Voice Note Recorded</p>
            <p className="mt-1 text-sm text-muted-foreground">0:10 / 0:10</p>
            <button
              type="button"
              className="mt-3 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#3a322c] px-4 text-sm font-bold text-white"
            >
              <Play className="size-4" /> Play My Greeting
            </button>
          </Card>
          <Card tone="butter">
            <p className="font-semibold">Example prompt to say:</p>
            <p className="mt-1 text-sm italic">
              “Hello! I am Uncle Tan, love morning kopi and brisk walks!”
            </p>
          </Card>
          <Card>
            <p className="flex items-center gap-2 font-bold">
              <Shield className="size-4 text-primary" /> Privacy & Dignity Guarantee
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Your phone number and exact address remain <strong>100% private</strong>. Only your call name and estate are visible to fellow seniors.
            </p>
          </Card>
        </div>
      ) : null}

      {step === 8 ? (
        <div className="space-y-4">
          <h1 className="text-[28px] leading-9 font-semibold tracking-[-0.02em]">
            Make text comfortable to read
          </h1>
          <p className="text-[16px] leading-[26px] text-muted-foreground">
            Choose the size that feels easiest on your eyes. You can always change this later in settings.
          </p>
          {textSizes.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={textSize === item.id}
              onClick={() => setTextSize(item.id)}
              className={cn(
                "flex items-center justify-between",
                choiceClass(textSize === item.id)
              )}
            >
              <span>
                <span className="block font-bold">
                  {item.id === "standard" ? "Aa" : item.id === "comfortable" ? "A+" : "A++"} {item.label}
                </span>
                <span className="mt-1 block text-sm text-muted-foreground">{item.hint}</span>
              </span>
              {item.recommended ? (
                <span className="rounded-full bg-[#f6ede3] px-2 py-0.5 text-[10px] font-bold uppercase">
                  Recommended
                </span>
              ) : null}
            </button>
          ))}
          <Card>
            <p className="text-[11px] font-bold tracking-wide text-primary uppercase">
              Live Preview · Comfortable Size
            </p>
            <p className={cn("mt-2 font-semibold", textSize === "xl" ? "text-2xl" : textSize === "comfortable" ? "text-xl" : "text-base")}>
              Hello! Today is a bright day for a walk.
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Your neighborhood kakis are ready to join you for kopi and a gentle stroll.
            </p>
          </Card>
        </div>
      ) : null}

      {step === 9 ? (
        <div className="flex flex-1 flex-col items-center pt-8 text-center">
          <div className="flex size-24 items-center justify-center rounded-full bg-[#d5efe6]">
            <UiPic src="/ui/icon-kaki.svg" alt="" className="size-20" />
          </div>
          <p className="mt-4 text-[11px] font-bold tracking-[0.12em] text-primary uppercase">
            Profile Activated
          </p>
          <h1 className="mt-2 text-[28px] leading-9 font-semibold tracking-[-0.02em]">
            You&apos;re all set, Uncle Tan!
          </h1>
          <p className="mt-3 max-w-sm text-[16px] leading-[26px] text-muted-foreground">
            Your profile is ready. Friendly Kakis in Bedok are excited to meet you!
          </p>
        </div>
      ) : null}
    </AppShell>
  );
}
