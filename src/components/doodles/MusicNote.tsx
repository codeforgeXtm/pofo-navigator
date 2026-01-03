const MusicNote = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 40 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <ellipse cx="10" cy="42" rx="8" ry="6" fill="hsl(var(--doodle-magenta))" stroke="hsl(var(--foreground))" strokeWidth="2" />
    <line x1="18" y1="42" x2="18" y2="8" stroke="hsl(var(--foreground))" strokeWidth="3" />
    <path d="M18 8Q28 5 35 12Q30 18 18 15" fill="hsl(var(--doodle-magenta))" stroke="hsl(var(--foreground))" strokeWidth="2" />
  </svg>
);

export default MusicNote;
