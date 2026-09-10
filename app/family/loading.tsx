export default function FamilyLoading() {
  return (
    <div className="flex h-full min-h-0 flex-col bg-[var(--surface)] px-5 py-8">
      <div className="h-4 w-24 animate-pulse rounded bg-muted" />
      <div className="mt-4 h-28 animate-pulse rounded-[24px] bg-muted" />
      <div className="mt-4 h-40 animate-pulse rounded-2xl bg-muted" />
      <p className="mt-6 text-sm text-muted-foreground">Loading Dad’s day…</p>
    </div>
  );
}
