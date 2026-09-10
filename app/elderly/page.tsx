"use client";

import { useState } from "react";
import { ArrowRight, Play, Shield, Volume2 } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { ListenButton } from "@/components/listen-button";
import { PrimaryLink } from "@/components/primary-link";
import { SlashMark, UiPic } from "@/components/ui-bits";
import { brand } from "@/lib/data";

export default function ElderlyWelcome() {
  const [playing, setPlaying] = useState(false);

  return (
    <AppShell role="elderly" backHref="/" action={<ListenButton />}>
      <div className="flex flex-1 flex-col">
        <p className="text-sm font-medium text-muted-foreground">Hello there</p>
        <h1 className="mt-1 text-[34px] leading-[1.05] font-extrabold tracking-[-0.045em]">
          Welcome to KakiConnect! ☕
        </h1>
        <p className="mt-2 text-xs tracking-[0.12em] text-muted-foreground uppercase">
          {brand.hangul}
        </p>
        <p className="mt-3 max-w-sm text-[16px] leading-[26px] text-muted-foreground">
          {brand.promise}
        </p>

        <div className="mt-5 grid grid-cols-3 gap-2">
          <div className="flex flex-col items-center rounded-[28px] bg-lilac-wash px-2 py-5">
            <UiPic src="/ui/icon-kopi.svg" alt="" className="h-14 w-14" />
            <span className="mt-2 text-[12px] font-bold">Kopi</span>
          </div>
          <div className="flex flex-col items-center rounded-[28px] bg-green-wash px-2 py-5">
            <UiPic src="/ui/icon-kaki.svg" alt="" className="h-14 w-14" />
            <span className="mt-2 text-[12px] font-bold">Kaki</span>
          </div>
          <div className="flex flex-col items-center rounded-[28px] bg-crimson-wash px-2 py-5">
            <UiPic src="/ui/icon-care.svg" alt="" className="h-14 w-14" />
            <span className="mt-2 text-[12px] font-bold">Care</span>
          </div>
        </div>
        <p className="mt-2 text-right">
          <SlashMark label="// 01" />
        </p>

        <button
          type="button"
          aria-pressed={playing}
          className="mt-2 flex min-h-14 w-full items-center gap-3 rounded-[28px] bg-white px-4 py-3.5 text-left"
          onClick={() => {
            setPlaying(true);
            window.setTimeout(() => setPlaying(false), 3200);
          }}
        >
          <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#3a322c] text-white">
            <Volume2 className="size-5" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="flex flex-wrap items-center gap-1.5 text-[13px] font-semibold">
              Tap to listen to greeting
              <span className="rounded-full bg-[#ede0fa] px-1.5 py-0.5 text-xs text-[#5a3d8a]">
                Voice
              </span>
            </span>
            <span className="mt-0.5 block text-[13px] leading-snug text-muted-foreground">
              Hokkien • English • Mandarin • Malay
            </span>
          </span>
          <Play className="size-5 shrink-0 text-muted-foreground" />
        </button>

        <div className="mt-3 flex items-center justify-center gap-2 rounded-full bg-green-wash px-4 py-2.5 text-center text-[13px] font-semibold">
          <Shield className="size-4 text-[#1f5a48]" />
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
          <p className="mt-3 rounded-full bg-[#3a322c] px-4 py-2 text-center text-[13px] font-semibold text-white">
            Playing greeting in English & Hokkien...
          </p>
        ) : null}
      </div>
    </AppShell>
  );
}
