const Clapperboard = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Main board */}
    <rect x="5" y="20" width="40" height="25" rx="2" fill="hsl(var(--foreground))" stroke="hsl(var(--foreground))" strokeWidth="2" />
    
    {/* Animated clapper top - pivots from left */}
    <g className="origin-bottom-left animate-clap" style={{ transformOrigin: '5px 20px' }}>
      <path d="M5 20L10 8H45L40 20H5Z" fill="hsl(var(--foreground))" stroke="hsl(var(--foreground))" strokeWidth="2" />
      {/* Stripes on clapper */}
      <path d="M14 8L9 20" stroke="hsl(var(--background))" strokeWidth="3" />
      <path d="M24 8L19 20" stroke="hsl(var(--background))" strokeWidth="3" />
      <path d="M34 8L29 20" stroke="hsl(var(--background))" strokeWidth="3" />
      <path d="M44 8L39 20" stroke="hsl(var(--background))" strokeWidth="3" />
    </g>
    
    {/* Screen lines */}
    <line x1="10" y1="30" x2="40" y2="30" stroke="hsl(var(--background))" strokeWidth="2" />
    <line x1="10" y1="37" x2="30" y2="37" stroke="hsl(var(--background))" strokeWidth="2" />
  </svg>
);

export default Clapperboard;
