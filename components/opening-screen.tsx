import { withBase } from "@/lib/base-path";

export function OpeningScreen() {
  return (
    <>
      <input id="opening-skip" type="checkbox" className="opening-toggle" />
      <label htmlFor="opening-skip" className="opening-screen">
        <span className="opening-lockup">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={withBase("/brand/kakiconnect-logo.png")}
            alt="KakiConnect. Good Neighbours. Warmer Tomorrows."
            className="opening-logo"
          />
        </span>
        <span className="opening-hint">Tap to continue</span>
      </label>
    </>
  );
}
