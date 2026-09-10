"use client";

import { Volume2 } from "lucide-react";
import { useState } from "react";

export function ListenButton({ label = "Listen" }: { label?: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <button
      type="button"
      className="inline-flex min-h-10 items-center gap-1.5 rounded-full bg-[#ffdd67] px-3 text-[12px] font-bold tracking-tight text-[#3d3200] shadow-[0_4px_0_#e4c451] active:translate-y-px active:shadow-none"
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
