const Bus = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 80 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Bus body */}
    <rect x="5" y="10" width="60" height="28" rx="5" fill="hsl(var(--doodle-orange))" stroke="hsl(var(--foreground))" strokeWidth="2" />
    {/* Windows */}
    <rect x="12" y="15" width="10" height="10" rx="2" fill="hsl(var(--doodle-cloud))" stroke="hsl(var(--foreground))" strokeWidth="1.5" />
    <rect x="26" y="15" width="10" height="10" rx="2" fill="hsl(var(--doodle-cloud))" stroke="hsl(var(--foreground))" strokeWidth="1.5" />
    <rect x="40" y="15" width="10" height="10" rx="2" fill="hsl(var(--doodle-cloud))" stroke="hsl(var(--foreground))" strokeWidth="1.5" />
    {/* Front window */}
    <rect x="52" y="14" width="10" height="12" rx="2" fill="hsl(var(--doodle-cloud))" stroke="hsl(var(--foreground))" strokeWidth="1.5" />
    {/* Wheels */}
    <circle cx="20" cy="40" r="7" fill="hsl(var(--foreground))" />
    <circle cx="20" cy="40" r="3" fill="hsl(var(--background))" />
    <circle cx="50" cy="40" r="7" fill="hsl(var(--foreground))" />
    <circle cx="50" cy="40" r="3" fill="hsl(var(--background))" />
    {/* Motion lines */}
    <line x1="70" y1="20" x2="78" y2="20" stroke="hsl(var(--foreground))" strokeWidth="2" strokeLinecap="round" />
    <line x1="72" y1="28" x2="78" y2="28" stroke="hsl(var(--foreground))" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default Bus;
