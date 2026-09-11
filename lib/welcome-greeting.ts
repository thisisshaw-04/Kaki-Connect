"use client";

import { useCallback, useEffect, useState } from "react";
import { withBase } from "@/lib/base-path";

export const WELCOME_GREETING_SRC = "/audio/welcome-greeting.mp3";

const players = new Map<string, HTMLAudioElement>();
const listenerCounts = new Map<string, number>();

function getSharedAudio(src: string) {
  let audio = players.get(src);
  if (!audio) {
    audio = new Audio(withBase(src));
    audio.preload = "auto";
    audio.setAttribute("playsinline", "true");
    players.set(src, audio);
  }
  return audio;
}

export function useSharedAudio(src: string | undefined) {
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!src) return;

    const audio = getSharedAudio(src);
    const sync = () => setPlaying(!audio.paused && !audio.ended);
    const onError = () => {
      setPlaying(false);
      setError(true);
    };

    audio.addEventListener("play", sync);
    audio.addEventListener("playing", sync);
    audio.addEventListener("pause", sync);
    audio.addEventListener("ended", sync);
    audio.addEventListener("error", onError);
    listenerCounts.set(src, (listenerCounts.get(src) ?? 0) + 1);
    sync();

    return () => {
      audio.removeEventListener("play", sync);
      audio.removeEventListener("playing", sync);
      audio.removeEventListener("pause", sync);
      audio.removeEventListener("ended", sync);
      audio.removeEventListener("error", onError);
      const remaining = (listenerCounts.get(src) ?? 1) - 1;
      if (remaining <= 0) {
        audio.pause();
        audio.currentTime = 0;
        listenerCounts.delete(src);
        setPlaying(false);
      } else {
        listenerCounts.set(src, remaining);
      }
    };
  }, [src]);

  const toggle = useCallback(() => {
    if (!src) return;
    const audio = getSharedAudio(src);
    if (!audio.paused) {
      audio.pause();
      audio.currentTime = 0;
      return;
    }
    setError(false);
    void audio.play().catch(() => {
      setPlaying(false);
      setError(true);
    });
  }, [src]);

  return { playing, error, toggle };
}
