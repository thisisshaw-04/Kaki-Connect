"use client";

import { useState } from "react";
import { Mic, MicOff, PhoneOff, Subtitles, Users, Volume2 } from "lucide-react";
import { SosButton } from "@/components/sos-button";
import { Portrait } from "@/components/ui-bits";
import { photos } from "@/lib/data";

export default function CallingPage() {
  const [muted, setMuted] = useState(false);

  return (
    <div className="phone-dark relative flex h-full min-h-0 flex-col bg-[#1b1c1a] text-white">
      <div className="pointer-events-none absolute inset-0 z-0">
        <Portrait
          src={photos.raymondCall}
          alt="Uncle Raymond on a video call"
          className="h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/40" />
      </div>
      <div className="relative z-10 flex items-center justify-between px-5 pt-4">
        <div>
          <p className="font-bold">Uncle Raymond</p>
          <p className="text-xs text-white/80">04:15 • Good Signal</p>
        </div>
        <SosButton />
      </div>
      <div className="relative z-10 mx-4 mt-auto mb-3 overflow-hidden rounded-2xl border border-white/20">
        <Portrait
          src={photos.uncleSelfie}
          alt="You on camera"
          className="pointer-events-none ml-auto h-28 w-24"
        />
      </div>
      <div className="relative z-10 mx-4 mb-3 rounded-2xl bg-black/55 p-3 backdrop-blur">
        <p className="text-[11px] font-bold tracking-wide text-[#ffdd67] uppercase">
          Conversation Starter
        </p>
        <p className="mt-1 text-sm">Ask Uncle Raymond about his home garden plants!</p>
        <p className="mt-3 flex items-center gap-1 text-xs font-semibold">
          <Subtitles className="size-3.5" /> Live Subtitles (English / Singlish)
        </p>
        <p className="mt-1 text-sm leading-relaxed">
          <span className="font-bold">Raymond:</span> “Wah, today the weather very good ah! Did you water your plants already?”
        </p>
      </div>
      <div className="relative z-20 flex items-center justify-around px-4 pb-4">
        <button
          type="button"
          aria-pressed={muted}
          aria-label={muted ? "Unmute microphone" : "Mute microphone"}
          onClick={() => setMuted((value) => !value)}
          className="flex min-w-14 flex-col items-center gap-1 text-xs"
        >
          <span className="flex size-14 items-center justify-center rounded-full bg-white/15">
            {muted ? <MicOff /> : <Mic />}
          </span>
          Mic {muted ? "Off" : "On"}
        </button>
        <button
          type="button"
          aria-label="Speaker"
          className="flex min-w-14 flex-col items-center gap-1 text-xs"
        >
          <span className="flex size-14 items-center justify-center rounded-full bg-white/15">
            <Volume2 />
          </span>
          Speaker
        </button>
        <button
          type="button"
          aria-label="Add family member"
          className="flex min-w-14 flex-col items-center gap-1 text-xs"
        >
          <span className="flex size-14 items-center justify-center rounded-full bg-white/15">
            <Users />
          </span>
          Add Kin
        </button>
        <a
          href="/elderly/wrapup"
          aria-label="End call"
          className="flex min-w-14 flex-col items-center gap-1 text-xs"
        >
          <span className="flex size-16 items-center justify-center rounded-full bg-[#ba1a1a]">
            <PhoneOff />
          </span>
          End Call
        </a>
      </div>
    </div>
  );
}
