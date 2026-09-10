"use client";

import { useState } from "react";
import { ArrowRight, Coffee, Heart, Play, Shield, Smile, Volume2 } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { ListenButton } from "@/components/listen-button";
import { PrimaryLink } from "@/components/primary-link";
import { SlashMark } from "@/components/ui-bits";
import { brand } from "@/lib/data";

export default function ElderlyWelcome() {
  const [playing, setPlaying] = useState(false);

  return (
    <AppShell role="elderly" backHref="/" action={<ListenButton />}>
      <div className="flex flex-1 flex-col">
        <div className="relative overflow-hidden rounded-[28px] border border-[#d4e3ff]/60 bg-white p-6 text-center shadow-[0_8px_30px_-4px_rgba(99,142,203,0.12)]">
          <p className="absolute top-4 right-5">
            <SlashMark label="// 01" />
          </p>
          <div className="mb-5 mt-2 flex items-end justify-center gap-4">
            <div className="flex size-16 flex-col items-center justify-center rounded-2xl border border-[#ffdd67] bg-[#ffdd67]/50 text-[#766100] shadow-sm">
              <Coffee className="size-6" />
              <span className="mt-0.5 text-[11px] font-semibold">Kopi</span>
            </div>
            <div className="flex size-20 flex-col items-center justify-center rounded-full bg-[#d4e3ff] text-primary ring-4 ring-white">
              <Smile className="size-9" />
              <span className="mt-0.5 text-[11px] font-bold">Kaki</span>
            </div>
            <div className="flex size-16 flex-col items-center justify-center rounded-2xl border border-[#ffdad6] bg-[#ffdcd9] text-[#ba1a1a] shadow-sm">
              <Heart className="size-6 fill-current" />
              <span className="mt-0.5 text-[11px] font-semibold">Care</span>
            </div>
          </div>
          <h1 className="text-[28px] leading-9 font-semibold tracking-[-0.02em]">
            Welcome to KakiConnect! ☕
          </h1>
          <p className="mt-2 text-[10px] tracking-[0.12em] text-[#737781] uppercase">
            {brand.hangul}
          </p>
          <p className="mx-auto mt-3 max-w-sm text-[16px] leading-[26px] text-muted-foreground">
            {brand.promise}
          </p>
          <button
            type="button"
            className="mt-6 flex w-full items-center gap-3 rounded-xl border border-[#e4e2de] bg-[#f0eeea] px-4 py-3.5 text-left"
            onClick={() => {
              setPlaying(true);
              window.setTimeout(() => setPlaying(false), 3200);
            }}
          >
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-sm">
              <Volume2 className="size-5" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="flex items-center gap-1.5 text-[13px] font-semibold text-primary">
                Tap to listen to greeting
                <span className="rounded bg-[#d4e3ff] px-1.5 py-0.5 text-xs text-[#001c3a]">
                  Voice
                </span>
              </span>
              <span className="block truncate text-[12px] text-muted-foreground">
                Hokkien • English • Mandarin • Malay
              </span>
            </span>
            <Play className="size-5 shrink-0 text-muted-foreground" />
          </button>
        </div>

        <div className="mt-4 flex items-center justify-center gap-2 rounded-full border border-[#ffdd67]/60 bg-[#f5f3ef] px-4 py-2.5 text-center text-[13px] font-semibold shadow-sm">
          <Shield className="size-4 text-[#715c00]" />
          100% Free & Safe for seniors and families
        </div>

        <div className="mt-auto pt-8">
          <PrimaryLink href="/elderly/setup" className="h-16 text-lg">
            Get Started
            <ArrowRight className="size-5" />
          </PrimaryLink>
          <p className="mt-3 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            Takes only 1 minute • Very easy step-by-step
          </p>
        </div>
        {playing ? (
          <p className="mt-3 rounded-full bg-[#30312e] px-4 py-2 text-center text-[13px] font-semibold text-[#f2f0ec]">
            Playing greeting in English & Hokkien...
          </p>
        ) : null}
      </div>
    </AppShell>
  );
}
