/**
 * ContainerBox — a crisp geometric shipping container: front face with
 * corrugation lines, top face, corner rivets. The Docker metaphor.
 */
export function ContainerBox({
  x,
  y,
  label,
  accent = "#7980e0",
  delay = "0s",
}: {
  x: number;
  y: number;
  label: string;
  accent?: string;
  delay?: string;
}) {
  return (
    <g transform={`translate(${x},${y})`} className="reach-box" style={{ animationDelay: delay }}>
      {/* top face */}
      <path d="M0 0 L11 -11 L57 -11 L46 0 Z" fill="#1b2542" stroke={accent} strokeOpacity="0.7" strokeWidth="1.5" />
      {/* front face */}
      <rect x="0" y="0" width="46" height="34" fill="#121a30" stroke={accent} strokeOpacity="0.85" strokeWidth="1.5" />
      {/* corrugation */}
      <g stroke={accent} strokeOpacity="0.28" strokeWidth="1.5">
        <line x1="11.5" y1="2" x2="11.5" y2="32" />
        <line x1="23" y1="2" x2="23" y2="32" />
        <line x1="34.5" y1="2" x2="34.5" y2="32" />
      </g>
      {/* rivets */}
      <g fill={accent} opacity="0.8">
        <circle cx="4" cy="4" r="1.4" />
        <circle cx="42" cy="4" r="1.4" />
        <circle cx="4" cy="30" r="1.4" />
        <circle cx="42" cy="30" r="1.4" />
      </g>
      {/* label */}
      <text
        x="23"
        y="21"
        textAnchor="middle"
        fill="#dfe4f5"
        fontSize="10"
        fontFamily="Iosevka, monospace"
        fontWeight="600"
      >
        {label}
      </text>
    </g>
  );
}
