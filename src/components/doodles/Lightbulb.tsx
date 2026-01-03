const Lightbulb = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 40 55"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Bulb */}
    <path
      d="M20 5C10 5 5 12 5 22C5 30 12 35 14 40H26C28 35 35 30 35 22C35 12 30 5 20 5Z"
      fill="hsl(var(--doodle-yellow))"
      stroke="hsl(var(--foreground))"
      strokeWidth="2"
    />
    {/* Base */}
    <rect x="14" y="40" width="12" height="4" fill="hsl(var(--doodle-orange))" stroke="hsl(var(--foreground))" strokeWidth="2" />
    <rect x="14" y="44" width="12" height="4" fill="hsl(var(--doodle-orange))" stroke="hsl(var(--foreground))" strokeWidth="2" />
    <path d="M16 48L20 52L24 48" stroke="hsl(var(--foreground))" strokeWidth="2" />
    {/* Shine lines */}
    <line x1="8" y1="8" x2="4" y2="4" stroke="hsl(var(--doodle-yellow))" strokeWidth="2" strokeLinecap="round" />
    <line x1="32" y1="8" x2="36" y2="4" stroke="hsl(var(--doodle-yellow))" strokeWidth="2" strokeLinecap="round" />
    <line x1="20" y1="0" x2="20" y2="-4" stroke="hsl(var(--doodle-yellow))" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default Lightbulb;
