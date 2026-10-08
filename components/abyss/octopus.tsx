/**
 * Octopus — hand-drawn line-art octopus, the Tako brand mark for the
 * Abyss concept. Bioluminescent gradient strokes, glowing eyes.
 */
export function Octopus({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 600"
      className={`abyss-float ${className}`}
      style={{ filter: "drop-shadow(0 0 26px rgba(121,128,224,0.35))" }}
      role="img"
      aria-label="Tako octopus"
    >
      <defs>
        <linearGradient id="tentGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a5b4fc" />
          <stop offset="55%" stopColor="#7980e0" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
        <radialGradient id="octoHalo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7980e0" stopOpacity="0.28" />
          <stop offset="60%" stopColor="#7980e0" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#7980e0" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* halo */}
      <ellipse cx="240" cy="280" rx="195" ry="235" fill="url(#octoHalo)" />

      {/* mantle */}
      <path
        d="M240 36 C302 36 344 98 339 172 C335 226 296 268 240 273 C184 268 145 226 141 172 C136 98 178 36 240 36 Z"
        fill="rgba(121,128,224,0.07)"
        stroke="url(#tentGrad)"
        strokeWidth="3.5"
      />
      {/* mantle texture */}
      <path
        d="M192 92 C210 132 210 182 200 222"
        fill="none"
        stroke="url(#tentGrad)"
        strokeWidth="2"
        strokeOpacity="0.35"
        strokeLinecap="round"
      />
      <path
        d="M288 92 C270 132 270 182 280 222"
        fill="none"
        stroke="url(#tentGrad)"
        strokeWidth="2"
        strokeOpacity="0.35"
        strokeLinecap="round"
      />

      {/* eyes */}
      <g className="abyss-eye">
        <circle cx="203" cy="150" r="11" fill="#22d3ee" />
        <circle cx="277" cy="150" r="11" fill="#22d3ee" />
      </g>
      <circle cx="207" cy="146" r="3.5" fill="#ffffff" opacity="0.85" />
      <circle cx="281" cy="146" r="3.5" fill="#ffffff" opacity="0.85" />

      {/* tentacles */}
      <g
        fill="none"
        stroke="url(#tentGrad)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeOpacity="0.9"
      >
        <path d="M168 262 C138 330 118 400 128 478 C130 496 144 504 154 496" />
        <path d="M196 270 C182 340 174 410 186 486 C189 502 203 506 210 496" />
        <path d="M222 274 C216 348 214 420 222 492 C224 508 238 510 243 498" />
        <path d="M258 274 C264 348 266 420 258 492 C256 508 242 510 237 498" />
        <path d="M284 270 C298 340 306 410 294 486 C291 502 277 506 270 496" />
        <path d="M312 262 C342 330 362 400 352 478 C350 496 336 504 326 496" />
        <path d="M146 244 C108 306 88 376 98 452 C101 470 116 476 124 466" />
        <path d="M334 244 C372 306 392 376 382 452 C379 470 364 476 356 466" />
      </g>

      {/* suckers on the front pair */}
      <g fill="#7980e0" opacity="0.55">
        <circle cx="219" cy="345" r="2.6" />
        <circle cx="217" cy="415" r="2.6" />
        <circle cx="223" cy="475" r="2.6" />
        <circle cx="261" cy="345" r="2.6" />
        <circle cx="263" cy="415" r="2.6" />
        <circle cx="257" cy="475" r="2.6" />
      </g>
    </svg>
  );
}
