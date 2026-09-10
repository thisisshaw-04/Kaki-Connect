"use client";

import { Volume2 } from "lucide-react";
import { useState } from "react";

export function ListenButton({
  label = "Listen",
  playingLabel = "Playing…",
}: {
  label?: string;
  playingLabel?: string;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <button
      type="button"
      aria-pressed={playing}
      aria-label={playing ? playingLabel : label}
      className="inline-flex min-h-12 shrink-0 items-center gap-1.5 rounded-full bg-lilac-wash px-4 text-sm font-bold text-[#5a3d8a] transition active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
      onClick={() => {
        setPlaying(true);
        window.setTimeout(() => setPlaying(false), 2200);
      }}
    >
      <Volume2 className="size-5" />
      {playing ? playingLabel : label}
    </button>
  );
}
