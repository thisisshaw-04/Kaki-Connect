"use client";

import { useState } from "react";
import { AppShell } from "@/components/app-shell";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui-bits";
import { senior } from "@/lib/data";

export default function FamilyNote() {
  const [note, setNote] = useState("Don’t forget your cap — it’s bright out.");
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  function send() {
    if (note.trim().length < 2) {
      setStatus("error");
      return;
    }
    setStatus("sent");
  }

  return (
    <AppShell
      role="family"
      title="KakiConnect"
      subtitle="A note to Dad"
      backHref="/family/home"
      showNav
      current="/family/note"
    >
      {status === "sent" ? (
        <Card highlight>
          <h1 className="text-[26px] font-semibold tracking-[-0.02em]">
            Sent to {senior.name}
          </h1>
          <p className="mt-2 leading-relaxed text-muted-foreground">
            It’ll show on his home screen as a small card. He can heart it. You won’t get a read receipt — that’s on purpose.
          </p>
          <Button
            type="button"
            className="mt-5 h-12 w-full rounded-full"
            onClick={() => {
              setStatus("idle");
              setNote("");
            }}
          >
            Write another
          </Button>
        </Card>
      ) : (
        <div className="flex flex-1 flex-col gap-4">
          <div>
            <h1 className="text-[26px] font-semibold tracking-[-0.02em]">Keep it short</h1>
            <p className="mt-2 text-muted-foreground">
              This is a nudge, not a chat thread. He’ll see it before he leaves or when he’s next on the app.
            </p>
          </div>
          <label className="block" htmlFor="family-note">
            <span className="sr-only">Note to Dad</span>
            <Textarea
              id="family-note"
              value={note}
              onChange={(event) => {
                setNote(event.target.value);
                if (status === "error") setStatus("idle");
              }}
              rows={5}
              className="min-h-32 rounded-2xl text-base md:text-base"
              placeholder="Bring a bottle of water?"
            />
          </label>
          {status === "error" ? (
            <p className="text-sm font-medium text-destructive">
              Write a few words so he knows it’s from you.
            </p>
          ) : null}
          <Button
            type="button"
            className="mt-auto h-14 w-full rounded-full text-base"
            onClick={send}
          >
            Send note
          </Button>
        </div>
      )}
    </AppShell>
  );
}
