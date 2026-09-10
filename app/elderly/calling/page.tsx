"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mic, MicOff, PhoneOff, Video, VideoOff } from "lucide-react";
import { Initials } from "@/components/ui-bits";
import { friends } from "@/lib/data";

export default function CallingPage() {
  const person = friends[0];
  const router = useRouter();
  const [muted, setMuted] = useState(false);
  const [cameraOff, setCameraOff] = useState(false);

  return (
    <div className="phone-dark flex h-full min-h-0 flex-col bg-[#1b1c1a] px-6 py-8 text-white">
        <p className="text-center text-sm text-white/70">Connected · 00:12</p>
        <div className="mt-10 flex flex-1 flex-col items-center justify-center">
          <Initials name={person.name} className="size-28 text-3xl" />
          <h1 className="mt-5 text-2xl font-bold">{person.name}</h1>
          <p className="mt-1 text-white/70">Kopi chat from home</p>
        </div>
        <div className="flex items-center justify-center gap-4 pb-8">
          <button
            type="button"
            onClick={() => setMuted((value) => !value)}
            className="flex size-14 flex-col items-center justify-center rounded-full bg-white/15"
            aria-label={muted ? "Unmute" : "Mute"}
          >
            {muted ? <MicOff /> : <Mic />}
          </button>
          <button
            type="button"
            onClick={() => router.push("/elderly/friends")}
            className="flex size-16 items-center justify-center rounded-full bg-[#ba1a1a]"
            aria-label="End call"
          >
            <PhoneOff />
          </button>
          <button
            type="button"
            onClick={() => setCameraOff((value) => !value)}
            className="flex size-14 items-center justify-center rounded-full bg-white/15"
            aria-label={cameraOff ? "Turn camera on" : "Turn camera off"}
          >
            {cameraOff ? <VideoOff /> : <Video />}
          </button>
        </div>
    </div>
  );
}
