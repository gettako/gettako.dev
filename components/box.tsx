/**
 * Rust container box — the Docker metaphor. Warm rust-orange, corrugated,
 * dark-ink label. Crisp geometry, no animals.
 */
export function Box({
  x,
  y,
  label,
  delay = "0s",
  scale = 1,
}: {
  x: number;
  y: number;
  label: string;
  delay?: string;
  scale?: number;
}) {
  return (
    <g transform={`translate(${x},${y}) scale(${scale})`}>
      <g className="floaty" style={{ animationDelay: delay }}>
      <defs>
        <linearGradient id="rustFace" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f2a65a" />
          <stop offset="100%" stopColor="#cf7326" />
        </linearGradient>
      </defs>
      {/* top face */}
      <path d="M0 0 L12 -12 L60 -12 L48 0 Z" fill="#f7c489" stroke="#7a4a1e" strokeWidth="1.5" />
      {/* front face */}
      <rect x="0" y="0" width="48" height="36" fill="url(#rustFace)" stroke="#7a4a1e" strokeWidth="1.5" />
      {/* corrugation */}
      <g stroke="#7a4a1e" strokeWidth="1.6" opacity="0.55">
        <line x1="12" y1="3" x2="12" y2="33" />
        <line x1="24" y1="3" x2="24" y2="33" />
        <line x1="36" y1="3" x2="36" y2="33" />
      </g>
      {/* label */}
      <text
        x="24"
        y="22"
        textAnchor="middle"
        fill="#3a1f05"
        fontSize="10"
        fontWeight="700"
        fontFamily="Iosevka, monospace"
      >
        {label}
      </text>
      </g>
    </g>
  );
}
