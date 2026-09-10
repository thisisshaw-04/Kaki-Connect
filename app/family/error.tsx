"use client";

import { useEffect } from "react";
import { PrimaryLink } from "@/components/primary-link";

export default function FamilyError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-full bg-[#dfe3eb]">
      <div className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center bg-[var(--surface)] px-6">
        <h1 className="text-2xl font-bold">Something went wrong</h1>
        <p className="mt-2 text-muted-foreground">
          We couldn’t open the family view. Dad’s last updates are not lost —
          just try again.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-6 h-12 rounded-full bg-primary px-4 font-semibold text-primary-foreground"
        >
          Retry
        </button>
        <PrimaryLink href="/family/home" variant="outline" className="mt-3">
          Back to today
        </PrimaryLink>
      </div>
    </div>
  );
}
