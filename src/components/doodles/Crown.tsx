const Crown = ({ className = "", style }: { className?: string; style?: React.CSSProperties }) => (
  <svg
    viewBox="0 0 50 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    <path
      d="M5 35L10 15L25 25L40 15L45 35Z"
      fill="hsl(var(--doodle-yellow))"
      stroke="hsl(var(--foreground))"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <circle cx="10" cy="12" r="4" fill="hsl(var(--doodle-yellow))" stroke="hsl(var(--foreground))" strokeWidth="2" />
    <circle cx="25" cy="8" r="4" fill="hsl(var(--doodle-yellow))" stroke="hsl(var(--foreground))" strokeWidth="2" />
    <circle cx="40" cy="12" r="4" fill="hsl(var(--doodle-yellow))" stroke="hsl(var(--foreground))" strokeWidth="2" />
  </svg>
);

export default Crown;
