"use client";

import { Volume2 } from "lucide-react";
import { useState } from "react";
import { useSharedAudio } from "@/lib/welcome-greeting";
import { cn } from "@/lib/utils";

export function ListenButton({
  label = "Listen",
  playingLabel = "Playing…",
  className,
  src,
}: {
  label?: string;
  playingLabel?: string;
  className?: string;
  src?: string;
}) {
  const audio = useSharedAudio(src);
  const [fakePlaying, setFakePlaying] = useState(false);
  const playing = src ? audio.playing : fakePlaying;

  return (
    <button
      type="button"
      aria-pressed={playing}
      aria-label={playing ? playingLabel : label}
      className={cn(
        "inline-flex min-h-12 shrink-0 items-center gap-1.5 rounded-full px-4 text-sm font-bold transition active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lilac focus-visible:ring-offset-2",
        className ?? "bg-lilac-wash text-[#5a3d8a]"
      )}
      onClick={() => {
        if (src) {
          audio.toggle();
          return;
        }
        setFakePlaying(true);
        window.setTimeout(() => setFakePlaying(false), 2200);
      }}
    >
      <Volume2 className="size-5" />
      {playing ? playingLabel : label}
    </button>
  );
}
