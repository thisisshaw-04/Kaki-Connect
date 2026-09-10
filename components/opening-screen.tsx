export function OpeningScreen() {
  return (
    <>
      <input id="opening-skip" type="checkbox" className="opening-toggle" />
      <label htmlFor="opening-skip" className="opening-screen">
        <span className="opening-glow" aria-hidden />
        <span className="opening-spark opening-spark-a" aria-hidden />
        <span className="opening-spark opening-spark-b" aria-hidden />
        <span className="opening-spark opening-spark-c" aria-hidden />
        <span className="opening-lockup">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/kakiconnect-logo.png"
            alt="KakiConnect. Good Neighbours. Warmer Tomorrows."
            className="opening-logo"
          />
          <span className="opening-steam" aria-hidden>
            <i />
            <i />
            <i />
          </span>
        </span>
        <span className="opening-hint">Tap to continue</span>
      </label>
    </>
  );
}
