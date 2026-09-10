import { cn } from "@/lib/utils";

function SignalIcon() {
  return (
    <svg viewBox="0 0 18 12" className="h-[11px] w-[17px]" aria-hidden>
      <rect x="0" y="7.5" width="3" height="4.5" rx="0.6" fill="currentColor" />
      <rect x="4.5" y="5.5" width="3" height="6.5" rx="0.6" fill="currentColor" />
      <rect x="9" y="3" width="3" height="9" rx="0.6" fill="currentColor" />
      <rect
        x="13.5"
        y="0.5"
        width="3"
        height="11.5"
        rx="0.6"
        fill="currentColor"
        opacity="0.35"
      />
    </svg>
  );
}

function WifiIcon() {
  return (
    <svg viewBox="0 0 16 12" className="h-[12px] w-[16px]" aria-hidden>
      <path
        d="M8 10.6a1.15 1.15 0 1 0 0-2.3 1.15 1.15 0 0 0 0 2.3Zm0-3.7c1.4 0 2.7.5 3.7 1.4l-.9.9A4.1 4.1 0 0 0 8 8.2c-1 .0-2 .4-2.8 1l-.9-.9A5.2 5.2 0 0 1 8 6.9Zm0-3.2c2.3 0 4.4.9 6 2.4l-.9.9A7.3 7.3 0 0 0 8 5.3c-2 0-3.8.8-5.1 2.1l-.9-.9A8.8 8.8 0 0 1 8 3.7Z"
        fill="currentColor"
      />
    </svg>
  );
}

function BatteryIcon() {
  return (
    <div className="flex items-center gap-[1px]" aria-hidden>
      <div className="relative h-[11px] w-[22px] rounded-[3px] border-[1.4px] border-current p-[1.5px]">
        <div className="h-full w-[70%] rounded-[1px] bg-current" />
      </div>
      <div className="h-[4px] w-[1.5px] rounded-r-full bg-current opacity-50" />
    </div>
  );
}

export function PhoneFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("phone-desk", className)}>
      <div className="phone-aurora" aria-hidden>
        <span className="blob blob-honey" />
        <span className="blob blob-sky" />
        <span className="blob blob-ink" />
        <span className="blob blob-rose" />
        <span className="blob blob-foam" />
        <svg className="phone-noise" aria-hidden>
          <filter id="phone-grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="4"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#phone-grain)" />
        </svg>
      </div>
      <div className="phone-fit">
        <div className="phone-device">
          <div className="phone-chassis">
            <span className="phone-btn phone-btn-silent" />
            <span className="phone-btn phone-btn-vol-up" />
            <span className="phone-btn phone-btn-vol-down" />
            <span className="phone-btn phone-btn-power" />
            <div className="phone-glass">
              <div className="phone-screen">
                <div className="phone-chrome-top">
                  <div className="phone-island" aria-hidden>
                    <span className="phone-sensor" />
                    <span className="phone-speaker" />
                    <span className="phone-camera" />
                  </div>
                  <div className="phone-status">
                    <span className="phone-time">9:41</span>
                    <span className="phone-status-icons">
                      <SignalIcon />
                      <WifiIcon />
                      <BatteryIcon />
                    </span>
                  </div>
                </div>
                <div className="phone-app">{children}</div>
                <div className="phone-home" aria-hidden>
                  <span />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
