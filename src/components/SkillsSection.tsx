// src/components/ui/skillSkeleton.tsx

import { cn } from "@/lib/utils";

/* ─── Primitive ──────────────────────────────────────────────────────────── */
// Mirrors shadcn's <Skeleton /> so you can swap it for the real one if needed.
function Sk({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-[#cde8ea]",
        className
      )}
      {...props}
    />
  );
}

// Dark variant for the teal stats card
function SkDark({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-[#005c63]",
        className
      )}
      {...props}
    />
  );
}

/* ─── Header ─────────────────────────────────────────────────────────────── */
function HeaderSkeleton() {
  return (
    <div className="mb-10 md:mb-16">
      <div className="flex items-center gap-3 mb-4">
        <Sk className="h-[2px] w-12 rounded-none" />
        <Sk className="h-3 w-40" />
      </div>
      <Sk className="h-14 w-[52%] rounded-xl mb-4" />
      <Sk className="h-4 w-[78%] mb-2" />
      <Sk className="h-4 w-[58%]" />
    </div>
  );
}

/* ─── Card 1 — Languages ─────────────────────────────────────────────────── */
function LanguagesCardSkeleton() {
  const rows: { pct: number }[] = [{ pct: 95 }, { pct: 90 }, { pct: 75 }];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6">
      {/* card header */}
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        <div className="flex items-center gap-3">
          <Sk className="h-4 w-5" />
          <Sk className="h-5 w-24" />
        </div>
        <Sk className="h-[22px] w-7 rounded-lg" />
      </div>

      {/* language rows */}
      {rows.map(({ pct }, i) => (
        <div key={i} className="mb-5 last:mb-0">
          <div className="flex justify-between items-end mb-2">
            <div className="space-y-1.5">
              <Sk className="h-3.5 w-36" />
              <Sk className="h-2.5 w-24" />
            </div>
            <Sk className="h-3.5 w-9" />
          </div>
          <div className="h-[5px] bg-slate-100 rounded-full overflow-hidden">
            <Sk
              className="h-[8px] rounded-full"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── Card 2 — Frameworks ────────────────────────────────────────────────── */
function FrameworksCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6">
      {/* card header */}
      <div className="flex items-center justify-between mb-5 sm:mb-6">
        <div className="flex items-center gap-3">
          <Sk className="h-6 w-6 rounded-md" />
          <Sk className="h-5 w-28" />
        </div>
        <Sk className="h-[22px] w-7 rounded-lg" />
      </div>

      {/* 2 × 2 framework cards */}
      <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="border border-slate-200 rounded-[16px] p-3 sm:p-4 flex flex-col gap-2"
          >
            <Sk className="h-5 w-5 rounded-md" />
            <Sk className="h-3.5 w-[70%] mb-1" />
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, b) => (
                <div key={b} className="flex-1 h-[3px] rounded-full bg-slate-200" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Card 3 — Persistence ───────────────────────────────────────────────── */
function PersistenceCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:col-span-2 lg:col-span-1">
      {/* card header */}
      <div className="flex items-center justify-between mb-5 sm:mb-6">
        <div className="flex items-center gap-3">
          <Sk className="h-[18px] w-[18px] rounded-md" />
          <Sk className="h-5 w-24" />
        </div>
        <Sk className="h-[22px] w-7 rounded-lg" />
      </div>

      {/* 3 DB rows */}
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="mb-5 sm:mb-6 last:mb-0">
          <div className="flex justify-between items-center mb-1.5 gap-2">
            <Sk className="h-3.5 w-[55%]" />
            <Sk className="h-4 w-16 rounded-md" />
          </div>
          <div className="flex gap-1">
            {Array.from({ length: 4 }).map((_, b) => (
              <div key={b} className="flex-1 h-[6px] rounded-full bg-slate-200" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── Stats dark card ────────────────────────────────────────────────────── */
function StatsCardSkeleton() {
  return (
    <div className="bg-[#006A71] rounded-2xl p-6 sm:p-8 relative overflow-hidden">
      {/* subtle texture overlay */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)",
          backgroundSize: "6px 6px",
        }}
      />

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 gap-x-4 gap-y-6 sm:gap-y-4 md:gap-y-8 relative z-10">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="space-y-2.5">
            <SkDark className="h-2.5 w-20" />
            <SkDark className="h-9 w-[70px] rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── DevOps card ────────────────────────────────────────────────────────── */
const TAG_WIDTHS: number[] = [88, 104, 140, 112, 96, 80, 92];

function DevOpsCardSkeleton() {
  return (
    <div className="bg-white/70 rounded-2xl border border-[#006A71]/10 p-6 sm:p-8 md:col-span-2">
      {/* card header */}
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        <div className="flex items-center gap-2">
          <Sk className="h-[18px] w-[18px] rounded-md" />
          <Sk className="h-5 w-40" />
        </div>
        <Sk className="h-[22px] w-7 rounded-lg" />
      </div>

      {/* tag pills */}
      <div className="flex flex-wrap gap-2">
        {TAG_WIDTHS.map((w, i) => (
          <Sk
            key={i}
            className="h-10 rounded-[24px]"
            style={{ width: w }}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Composed export ────────────────────────────────────────────────────── */
export function SkillSkeleton() {
  return (
    <section className="bg-[#F4FAFF] pt-10 pb-16 md:pt-[59px] md:pb-[72px] lg:py-[72px]">
      <div className="container px-4 sm:px-6 lg:px-8">
        <HeaderSkeleton />

        {/* top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8 mb-5 md:mb-6 lg:mb-8">
          <LanguagesCardSkeleton />
          <FrameworksCardSkeleton />
          <PersistenceCardSkeleton />
        </div>

        {/* bottom row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
          <StatsCardSkeleton />
          <DevOpsCardSkeleton />
        </div>
      </div>
    </section>
  );
}