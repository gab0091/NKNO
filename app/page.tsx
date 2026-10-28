import { CallingCard } from '@/components/calling-card'

export default function Page() {
  return (
    <main className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-background px-4 py-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,oklch(0.32_0.13_300/0.55),transparent_70%),radial-gradient(ellipse_50%_40%_at_50%_100%,oklch(0.25_0.1_300/0.4),transparent_70%)]"
      />
      <CallingCard />
    </main>
  )
}
