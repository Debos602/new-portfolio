// ── ExperienceSkeleton.tsx ────────────────────────────────────────────────────
// Mirrors the exact DOM structure of <Experience /> so the layout doesn't jump
// when real data arrives.  Pass `rows` to control how many timeline entries are
// shown (default: 3).
// ─────────────────────────────────────────────────────────────────────────────

import bgShape from "@/assets/Background Wave Shape.png";

// ── Primitive ─────────────────────────────────────────────────────────────────

type ShimmerProps = {
  className?: string;
  style?: React.CSSProperties;
};

/** A single shimmer bar. All colours stay on-brand with the Experience palette. */
const Shimmer = ({ className = "", style }: ShimmerProps) => (
  <div
    className={`relative overflow-hidden rounded-md bg-slate-200 ${className}`}
    style={style}
    aria-hidden="true"
  >
    {/* Travelling highlight */}
    <span
      className="absolute inset-0 -translate-x-full"
      style={{
        background:
          "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.55) 50%, transparent 100%)",
        animation: "shimmer-sweep 1.6s ease-in-out infinite",
      }}
    />
  </div>
);

// ── Per-row card skeleton ──────────────────────────────────────────────────────

const CardSkeleton = () => (
  <div className="bg-white rounded-2xl border border-slate-100 p-4 md:p-[32px] shadow-sm">
    {/* 3 highlight rows */}
    {[0, 1, 2].map((i) => (
      <div key={i} className="flex gap-2.5 md:gap-[10px] items-start mb-3 md:mb-[16px] last:mb-0">
        {/* Icon badge */}
        <Shimmer className="w-7 h-7 md:w-8 md:h-8 shrink-0 rounded-md mt-0.5" />
        {/* Text lines */}
        <div className="flex-1 flex flex-col gap-1.5 pt-0.5">
          <Shimmer className="h-3.5 md:h-4 w-full" />
          <Shimmer className="h-3.5 md:h-4" style={{ width: `${68 + i * 8}%` }} />
        </div>
      </div>
    ))}

    {/* Tag strip */}
    <div className="flex flex-wrap gap-1.5 mt-4 md:mt-[18px] pt-3 md:pt-3.5 border-t border-slate-100">
      {[52, 72, 60, 44, 80].map((w, i) => (
        <Shimmer
          key={i}
          className="h-6 rounded-full"
          style={{ width: `${w}px` }}
        />
      ))}
    </div>
  </div>
);

// ── Per-row meta skeleton ──────────────────────────────────────────────────────

const MetaSkeleton = ({ align }: { align: "left" | "right" }) => (
  <div
    className={`flex flex-col gap-2 pt-2.5 ${
      align === "right" ? "pr-9 items-end" : "pl-9 items-start"
    }`}
  >
    {/* Period */}
    <Shimmer className="h-3 w-28" />
    {/* Role */}
    <Shimmer className="h-6 w-48" />
    {/* Company */}
    <Shimmer className="h-5 w-36" />
  </div>
);

// ── Full skeleton ─────────────────────────────────────────────────────────────

type ExperienceSkeletonProps = {
  /** Number of timeline rows to render (default: 3) */
  rows?: number;
};

export const ExperienceSkeleton = ({ rows = 3 }: ExperienceSkeletonProps) => {
  const items = Array.from({ length: rows });

  return (
    <>
      {/* Keyframe injected once */}
      <style>{`
        @keyframes shimmer-sweep {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>

      <div
        className="relative min-h-screen w-full flex flex-col items-center px-4 sm:px-6 pt-14 md:pt-[83px] pb-16 md:pb-[120px] overflow-hidden bg-[#F4FAFF]"
        style={{
          backgroundImage: `url('${bgShape}')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        aria-busy="true"
        aria-label="Loading experience section"
      >
        {/* Background glows (identical to real component) */}
        <div className="pointer-events-none absolute left-[-80px] top-[440px] w-[520px] h-[520px] rounded-full bg-[#006A71] opacity-[0.05] blur-[90px]" />
        <div className="pointer-events-none absolute right-[-60px] top-[820px] w-[420px] h-[420px] rounded-full bg-[#8E33E4] opacity-[0.05] blur-[90px]" />

        {/* ── Header skeleton ──────────────────────────────────────────── */}
        <div className="text-center mb-12 md:mb-[96px] max-w-[768px] w-full flex flex-col items-center gap-4">
          {/* "Experience" heading */}
          <Shimmer className="h-12 sm:h-14 md:h-[72px] w-64 sm:w-80 md:w-96 rounded-xl mx-auto" />
          {/* Sub-paragraph — two lines */}
          <div className="flex flex-col gap-2 w-full max-w-[520px] items-center">
            <Shimmer className="h-4 md:h-5 w-full" />
            <Shimmer className="h-4 md:h-5 w-[80%]" />
            <Shimmer className="h-4 md:h-5 w-[60%]" />
          </div>
        </div>

        {/* ── Timeline skeleton ─────────────────────────────────────────── */}
        <div className="w-full md:container mx-auto relative">
          {items.map((_, idx) => {
            const isEven     = idx % 2 === 0;
            const isLastItem = idx === items.length - 1;

            return (
              <div key={idx}>
                {/* ════ MOBILE (< md) ════ */}
                <div className="flex md:hidden gap-4 pb-2">
                  <div className="flex flex-col items-center ml-1 shrink-0">
                    {/* Dot */}
                    <div
                      className="w-3 h-3 rounded-full bg-slate-300 mt-1.5 z-10 shrink-0"
                      style={{ border: "2.5px solid #fff", boxShadow: "0 0 0 2px #cbd5e1" }}
                    />
                    {/* Connector line */}
                    {!isLastItem && (
                      <div
                        className="w-px flex-1 min-h-[12px]"
                        style={{ background: "linear-gradient(to bottom, #cbd5e1 0%, transparent 100%)" }}
                      />
                    )}
                  </div>

                  <div className="flex-1 pb-8">
                    {/* Meta */}
                    <div className="mb-3 flex flex-col gap-1.5">
                      <Shimmer className="h-3 w-28" />
                      <Shimmer className="h-5 w-44" />
                      <Shimmer className="h-4 w-32" />
                    </div>
                    {/* Card */}
                    <CardSkeleton />
                  </div>
                </div>

                {/* ════ DESKTOP (md+) ════ */}
                <div
                  className="hidden md:grid items-center"
                  style={{ gridTemplateColumns: "1fr 40px 1fr" }}
                >
                  {isEven ? (
                    <>
                      {/* Left — meta */}
                      <MetaSkeleton align="right" />

                      {/* Centre — dot + line */}
                      <div className="flex flex-col items-center">
                        <div
                          className="w-3 h-3 rounded-full bg-slate-300 mt-3.5 z-10 shrink-0"
                          style={{ border: "2.5px solid #fff", boxShadow: "0 0 0 2px #cbd5e1" }}
                        />
                        {!isLastItem && (
                          <div
                            className="w-px flex-1 min-h-[160px]"
                            style={{ background: "linear-gradient(to bottom, #cbd5e1 0%, transparent 100%)" }}
                          />
                        )}
                      </div>

                      {/* Right — card */}
                      <div className="md:pt-1 pl-9">
                        <CardSkeleton />
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Left — card */}
                      <div className="md:pt-1 pr-9">
                        <CardSkeleton />
                      </div>

                      {/* Centre */}
                      <div className="flex flex-col items-center">
                        <div
                          className="w-3 h-3 rounded-full bg-slate-300 mt-3.5 z-10 shrink-0"
                          style={{ border: "2.5px solid #fff", boxShadow: "0 0 0 2px #cbd5e1" }}
                        />
                        {!isLastItem && (
                          <div
                            className="w-px flex-1 min-h-[160px]"
                            style={{ background: "linear-gradient(to bottom, #cbd5e1 0%, transparent 100%)" }}
                          />
                        )}
                      </div>

                      {/* Right — meta */}
                      <MetaSkeleton align="left" />
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};