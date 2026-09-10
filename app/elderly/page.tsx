import { ArrowRight, Coffee, Heart, Smile } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { ListenButton } from "@/components/listen-button";
import { PrimaryLink } from "@/components/primary-link";
import { SlashMark } from "@/components/brand-mark";
import { brand, senior } from "@/lib/data";

export default function ElderlyWelcome() {
  return (
    <AppShell role="elderly" backHref="/" action={<ListenButton />}>
      <div className="flex flex-1 flex-col">
        <div className="lift relative overflow-hidden rounded-[28px] p-6 text-center">
          <p className="absolute top-4 right-5">
            <SlashMark label="// 01" />
          </p>
          <div className="mb-5 flex items-end justify-center gap-2">
            <div className="flex size-14 flex-col items-center justify-center rounded-[18px] bg-[#fff4c4] text-[#715c00] shadow-[0_3px_0_#e4c451]">
              <Coffee className="size-5" />
              <span className="text-[10px] font-bold">Kopi</span>
            </div>
            <div className="flex h-[4.5rem] w-[4.5rem] flex-col items-center justify-center rounded-full bg-[#d4e3ff] text-primary ring-4 ring-white">
              <Smile className="size-8" strokeWidth={2.2} />
            </div>
            <div className="flex size-14 flex-col items-center justify-center rounded-[18px] bg-[#ffdad6] text-[#93000a]">
              <Heart className="size-5" />
              <span className="text-[10px] font-bold">Care</span>
            </div>
          </div>
          <h1 className="font-display text-[30px] leading-[1.05] font-semibold tracking-[-0.04em]">
            Good to see you.
          </h1>
          <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
            {brand.promise} No rush. Neighbours at your pace.
          </p>
        </div>

        <div className="mt-4 rounded-full bg-[#fff4c4] px-4 py-2.5 text-center text-[13px] font-semibold text-[#554500] ring-1 ring-[#e4c451]/50">
          Free — family only sees what you allow
        </div>

        <div className="mt-auto pt-8">
          <PrimaryLink href="/elderly/setup" className="h-16 text-lg">
            Continue
            <ArrowRight className="size-5" />
          </PrimaryLink>
          <p className="mt-3 text-center text-sm text-muted-foreground">
            About a minute. We’ll call you {senior.name}.
          </p>
        </div>
      </div>
    </AppShell>
  );
}
