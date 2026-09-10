"use client";

import { Volume2 } from "lucide-react";
import { useState } from "react";

export function ListenButton({ label = "Listen" }: { label?: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <button
      type="button"
      className="inline-flex min-h-10 items-center gap-1.5 rounded-full bg-[#ffdd67] px-3 text-sm font-bold text-[#3d3200]"
      onClick={() => {
        setPlaying(true);
        window.setTimeout(() => setPlaying(false), 1800);
      }}
    >
      <Volume2 className="size-4" />
      {playing ? "Playing…" : label}
    </button>
  );
}
