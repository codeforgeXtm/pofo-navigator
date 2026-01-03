const Sun = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Sun rays */}
    <g className="animate-spin-slow origin-center">
      <line x1="30" y1="5" x2="30" y2="12" stroke="hsl(var(--doodle-yellow))" strokeWidth="3" strokeLinecap="round" />
      <line x1="30" y1="48" x2="30" y2="55" stroke="hsl(var(--doodle-yellow))" strokeWidth="3" strokeLinecap="round" />
      <line x1="5" y1="30" x2="12" y2="30" stroke="hsl(var(--doodle-yellow))" strokeWidth="3" strokeLinecap="round" />
      <line x1="48" y1="30" x2="55" y2="30" stroke="hsl(var(--doodle-yellow))" strokeWidth="3" strokeLinecap="round" />
      <line x1="12" y1="12" x2="17" y2="17" stroke="hsl(var(--doodle-yellow))" strokeWidth="3" strokeLinecap="round" />
      <line x1="43" y1="43" x2="48" y2="48" stroke="hsl(var(--doodle-yellow))" strokeWidth="3" strokeLinecap="round" />
      <line x1="12" y1="48" x2="17" y2="43" stroke="hsl(var(--doodle-yellow))" strokeWidth="3" strokeLinecap="round" />
      <line x1="43" y1="17" x2="48" y2="12" stroke="hsl(var(--doodle-yellow))" strokeWidth="3" strokeLinecap="round" />
    </g>
    {/* Sun face */}
    <circle cx="30" cy="30" r="12" fill="hsl(var(--doodle-yellow))" />
    <circle cx="26" cy="28" r="2" fill="hsl(var(--foreground))" />
    <circle cx="34" cy="28" r="2" fill="hsl(var(--foreground))" />
    <path d="M25 34 Q30 38 35 34" stroke="hsl(var(--foreground))" strokeWidth="2" fill="none" strokeLinecap="round" />
  </svg>
);

export default Sun;
