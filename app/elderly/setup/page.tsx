import { SetupFlow } from "./setup-flow";

export default async function ElderlySetupPage({
  searchParams,
}: {
  searchParams: Promise<{ step?: string }>;
}) {
  const { step: raw } = await searchParams;
  const step = Math.min(9, Math.max(0, Number.parseInt(raw ?? "0", 10) || 0));
  return <SetupFlow step={step} />;
}
