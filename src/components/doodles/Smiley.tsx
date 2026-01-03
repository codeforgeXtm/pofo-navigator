const Smiley = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="20" cy="20" r="18" fill="hsl(var(--doodle-green))" stroke="hsl(var(--foreground))" strokeWidth="2" />
    {/* Animated eyes that look around */}
    <g className="animate-look-around">
      <circle cx="13" cy="16" r="3" fill="hsl(var(--foreground))" />
      <circle cx="27" cy="16" r="3" fill="hsl(var(--foreground))" />
    </g>
    <path d="M12 26Q20 34 28 26" stroke="hsl(var(--foreground))" strokeWidth="2.5" fill="none" strokeLinecap="round" />
  </svg>
);

export default Smiley;
