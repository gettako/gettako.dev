/**
 * Tako mark — a rust container box with an indigo arm arcing over it.
 * Abstract delivery, no animals.
 */
export function Mark({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" role="img" aria-label="Tako">
      <defs>
        <linearGradient id="markRust" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f2a65a" />
          <stop offset="100%" stopColor="#c96a24" />
        </linearGradient>
        <linearGradient id="markArm" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#a5b4fc" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="38" height="38" rx="9" fill="#0b101d" stroke="rgba(160,175,215,0.18)" />
      {/* arm */}
      <path
        d="M7 12 C14 6 26 6 33 12"
        fill="none"
        stroke="url(#markArm)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* box */}
      <g>
        <path d="M9 22 L13 18 L29 18 L25 22 Z" fill="#f7c489" />
        <rect x="9" y="22" width="16" height="11" fill="url(#markRust)" />
        <g stroke="#7a4a1e" strokeWidth="1.2" opacity="0.7">
          <line x1="14.3" y1="23" x2="14.3" y2="32" />
          <line x1="19.6" y1="23" x2="19.6" y2="32" />
        </g>
      </g>
      {/* motion ticks */}
      <g stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" opacity="0.85">
        <line x1="30" y1="24" x2="34" y2="24" />
        <line x1="30" y1="29" x2="33" y2="29" />
      </g>
    </svg>
  );
}
