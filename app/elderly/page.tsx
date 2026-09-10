import { ArrowRight, Coffee, Heart, Smile } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { ListenButton } from "@/components/listen-button";
import { PrimaryLink } from "@/components/primary-link";
import { brand, senior } from "@/lib/data";

export default function ElderlyWelcome() {
  return (
    <AppShell
      role="elderly"
      backHref="/"
      action={<ListenButton />}
    >
      <div className="flex flex-1 flex-col">
        <div className="relative overflow-hidden rounded-[28px] border border-[#d4e3ff] bg-card p-6 text-center shadow-[0_4px_20px_-2px_rgba(47,93,151,0.08)]">
          <p className="absolute top-4 right-5 text-xs tracking-widest text-muted-foreground">
            {"// 01"}
          </p>
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="flex size-14 flex-col items-center justify-center rounded-2xl bg-[#fff4c4] text-[#715c00]">
              <Coffee className="size-6" />
              <span className="text-[10px] font-semibold">Kopi</span>
            </div>
            <div className="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-[#d4e3ff] text-primary ring-4 ring-card">
              <Smile className="size-8" />
            </div>
            <div className="flex size-14 flex-col items-center justify-center rounded-2xl bg-[#ffdad6] text-[#93000a]">
              <Heart className="size-6" />
              <span className="text-[10px] font-semibold">Care</span>
            </div>
          </div>
          <h1 className="text-[28px] leading-tight font-bold tracking-tight">
            Good to see you.
          </h1>
          <p className="mt-3 text-[16px] leading-relaxed text-muted-foreground">
            {brand.promise} No rush. No crowd. Neighbours at your pace.
          </p>
        </div>

        <div className="mt-4 rounded-full border border-[#ffe17a] bg-[#fff8dc] px-4 py-2.5 text-center text-sm font-semibold text-[#554500]">
          Free, and your family only sees what you allow
        </div>

        <div className="mt-auto pt-8">
          <PrimaryLink href="/elderly/setup" className="h-16 text-lg">
            Continue
            <ArrowRight className="size-5" />
          </PrimaryLink>
          <p className="mt-3 text-center text-sm text-muted-foreground">
            About a minute. We’ll call you {senior.name} unless you change it.
          </p>
        </div>
      </div>
    </AppShell>
  );
}
