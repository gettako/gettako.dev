"use client";

/**
 * MarineSnow — tiny particles drifting down the page like marine snow
 * in the deep ocean. Pure CSS animation, deterministic positions.
 */
const DOTS = Array.from({ length: 26 }, (_, i) => {
  const left = (i * 37.7 + 11) % 100;
  const size = 2 + ((i * 13) % 3);
  const duration = 22 + ((i * 7) % 18);
  const delay = -((i * 3.3) % 30);
  const drift = ((i * 17) % 9) - 4;
  const opacity = 0.18 + ((i * 11) % 30) / 100;
  return { left, size, duration, delay, drift, opacity, key: i };
});

export function MarineSnow() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {DOTS.map((d) => (
        <span
          key={d.key}
          className="marine-snow-dot absolute top-0 rounded-full bg-[#a5b4fc]"
          style={{
            left: `${d.left}%`,
            width: d.size,
            height: d.size,
            animationDuration: `${d.duration}s`,
            animationDelay: `${d.delay}s`,
            ["--snow-drift" as string]: `${d.drift}vw`,
            ["--snow-opacity" as string]: d.opacity,
          }}
        />
      ))}
    </div>
  );
}
