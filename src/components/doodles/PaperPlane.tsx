const PaperPlane = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 120 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Trailing curved line */}
    <path
      d="M5 45 Q20 35 35 40 Q50 45 65 35 Q80 25 90 30"
      stroke="hsl(var(--foreground))"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
      className="animate-trail"
    />
    {/* Paper plane */}
    <g transform="translate(85, 20)">
      <path
        d="M0 15L30 5L20 25L15 14L0 15Z"
        fill="hsl(var(--doodle-blue))"
        stroke="hsl(var(--foreground))"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M15 14L30 5"
        stroke="hsl(var(--foreground))"
        strokeWidth="2"
      />
    </g>
  </svg>
);

export default PaperPlane;
