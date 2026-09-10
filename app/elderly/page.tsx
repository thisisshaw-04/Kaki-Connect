"use client";

import { useState } from "react";
import { ArrowRight, Heart, Play, Shield, Smile, Volume2 } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { ListenButton } from "@/components/listen-button";
import { PrimaryLink } from "@/components/primary-link";
import { brand } from "@/lib/data";

export default function ElderlyWelcome() {
  const [playing, setPlaying] = useState(false);

  return (
    <AppShell
      role="elderly"
      title="KakiConnect"
      backHref="/"
      action={<ListenButton />}
    >
      <div className="flex flex-1 flex-col">
        <div className="relative overflow-hidden rounded-[28px] border border-[#eadfce] bg-white px-5 py-6 text-center">
          <p className="absolute top-4 right-5 text-[11px] tracking-[0.16em] text-muted-foreground">
            {"// 01"}
          </p>
          <div className="flex items-end justify-center gap-3">
            <div className="flex size-16 flex-col items-center justify-center rounded-2xl bg-[#f6ede3] text-ink">
              <span className="text-xl">☕</span>
              <span className="text-[11px] font-semibold">Kopi</span>
            </div>
            <div className="flex size-20 flex-col items-center justify-center rounded-full bg-green-wash text-[#1f5a48] ring-4 ring-white">
              <Smile className="size-8" strokeWidth={2.2} />
              <span className="text-[11px] font-bold">Kaki</span>
            </div>
            <div className="flex size-16 flex-col items-center justify-center rounded-2xl bg-crimson-wash text-[#8f2428]">
              <Heart className="size-6 fill-current" />
              <span className="text-[11px] font-semibold">Care</span>
            </div>
          </div>
          <h1 className="mt-5 text-[28px] leading-9 font-semibold tracking-[-0.02em]">
            Welcome to KakiConnect! ☕
          </h1>
          <p className="mt-2 text-[11px] font-medium tracking-[0.12em] text-muted-foreground uppercase">
            Kampung Companions
          </p>
          <p className="mx-auto mt-3 max-w-sm text-[16px] leading-[26px] text-muted-foreground">
            {brand.promise}
          </p>
          <button
            type="button"
            aria-label="Listen to voice greeting"
            className="mt-6 flex w-full items-center gap-3 rounded-xl border border-[#eadfce] bg-[#fbf6f0] px-4 py-3.5 text-left"
            onClick={() => {
              setPlaying(true);
              window.setTimeout(() => setPlaying(false), 3200);
            }}
          >
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-ink text-white">
              <Volume2 className="size-5" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="flex flex-wrap items-center gap-1.5 text-[13px] font-semibold">
                Tap to listen to greeting
                <span className="rounded bg-[#f6ede3] px-1.5 py-0.5 text-xs text-ink">Voice</span>
              </span>
              <span className="mt-0.5 block text-[13px] text-muted-foreground">
                Hokkien • English • Mandarin • Malay
              </span>
            </span>
            <Play className="size-5 shrink-0 text-muted-foreground" />
          </button>
        </div>

        <div className="mt-4 flex items-center justify-center gap-2 rounded-full border border-[#eadfce] bg-[#fbf6f0] px-4 py-2.5 text-center text-[13px] font-semibold">
          <Shield className="size-4 text-ink" />
          100% Free & Safe for seniors and families
        </div>

        <div className="mt-auto pt-8">
          <PrimaryLink href="/elderly/setup" className="h-16 text-lg">
            Get Started
            <ArrowRight className="size-5" />
          </PrimaryLink>
        </div>
        {playing ? (
          <p className="mt-3 rounded-full bg-ink px-4 py-2 text-center text-[13px] font-semibold text-white">
            Playing greeting in English & Hokkien...
          </p>
        ) : null}
      </div>
    </AppShell>
  );
}
