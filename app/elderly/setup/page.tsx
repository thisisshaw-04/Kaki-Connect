"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { SetupFlow } from "./setup-flow";

function SetupFromQuery() {
  const params = useSearchParams();
  const step = Math.min(9, Math.max(0, Number.parseInt(params.get("step") ?? "0", 10) || 0));
  return <SetupFlow step={step} />;
}

export default function ElderlySetupPage() {
  return (
    <Suspense fallback={null}>
      <SetupFromQuery />
    </Suspense>
  );
}
