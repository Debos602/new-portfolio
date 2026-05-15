// ProjectsSkeleton.tsx
// Drop-in loading skeleton for the Projects section.
// Mirrors the exact layout of Projects.tsx – header, filter tabs, and 3 cards.

const shimmer = `
  @keyframes shimmer {
    0%   { background-position: -800px 0; }
    100% { background-position:  800px 0; }
  }
  .skeleton-box {
    background: linear-gradient(
      90deg,
      #e8ecf4 25%,
      #f4f7ff 50%,
      #e8ecf4 75%
    );
    background-size: 800px 100%;
    animation: shimmer 1.6s infinite linear;
    border-radius: 8px;
  }
`;

export const ProjectsSkeleton = () => {
  return (
    <div className="bg-[#F4F7FF]">
      {/* inject keyframes once */}
      <style>{shimmer}</style>

      <div className="container mx-auto px-4 sm:px-6 pb-14 md:pb-[128px]">

        {/* ── Header skeleton ──────────────────────────────────── */}
        <div className="text-center max-w-[672px] pt-8 pb-8 md:pt-[91px] md:py-[64px] mx-auto">
          {/* Title bar */}
          <div
            className="skeleton-box mx-auto mb-4"
            style={{ height: 40, width: "55%", borderRadius: 10 }}
          />
          {/* Subtitle lines */}
          <div
            className="skeleton-box mx-auto mb-2"
            style={{ height: 18, width: "80%", borderRadius: 6 }}
          />
          <div
            className="skeleton-box mx-auto mb-8 md:mb-16"
            style={{ height: 18, width: "60%", borderRadius: 6 }}
          />
        </div>

        {/* ── Filter tabs skeleton ──────────────────────────────── */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-10 md:mb-16 px-2">
          {["All", "Full Stack", "Frontend", "Backend"].map((_, i) => (
            <div
              key={i}
              className="skeleton-box"
              style={{
                height: 44,
                width: i === 0 ? 64 : i === 1 ? 110 : i === 2 ? 96 : 94,
                borderRadius: 9999,
              }}
            />
          ))}
        </div>

        {/* ── Project cards skeleton ────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="rounded-[16px] border border-[#E5E9F2] bg-white overflow-hidden"
            >
              {/* Card image */}
              <div
                className="skeleton-box w-full"
                style={{ height: 200, borderRadius: 0 }}
              />

              {/* Card body */}
              <div className="p-5 md:p-8">
                {/* Title */}
                <div
                  className="skeleton-box mb-3"
                  style={{ height: 26, width: "70%", borderRadius: 8 }}
                />

                {/* Description lines */}
                <div
                  className="skeleton-box mb-2"
                  style={{ height: 14, width: "100%", borderRadius: 5 }}
                />
                <div
                  className="skeleton-box mb-2"
                  style={{ height: 14, width: "90%", borderRadius: 5 }}
                />
                <div
                  className="skeleton-box mb-4"
                  style={{ height: 14, width: "75%", borderRadius: 5 }}
                />

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {[60, 72, 54].map((w, j) => (
                    <div
                      key={j}
                      className="skeleton-box"
                      style={{ height: 24, width: w, borderRadius: 9999 }}
                    />
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-3 mt-4 md:mt-5">
                  {/* Live demo */}
                  <div
                    className="skeleton-box w-full"
                    style={{ height: 44, borderRadius: 20 }}
                  />

                  {/* GitHub row */}
                  <div className="flex items-center gap-3">
                    <div
                      className="skeleton-box flex-1"
                      style={{ height: 44, borderRadius: 20 }}
                    />
                    <div
                      className="skeleton-box flex-1"
                      style={{ height: 44, borderRadius: 20 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ProjectsSkeleton;