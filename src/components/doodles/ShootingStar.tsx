const ShootingStar = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 80 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Trail lines */}
    <line x1="5" y1="35" x2="50" y2="12" stroke="hsl(var(--doodle-yellow))" strokeWidth="4" strokeLinecap="round" />
    <line x1="15" y1="38" x2="55" y2="18" stroke="hsl(var(--doodle-yellow))" strokeWidth="3" strokeLinecap="round" />
    {/* Star */}
    <path
      d="M65 8L68 14H75L70 18L72 25L65 21L58 25L60 18L55 14H62L65 8Z"
      fill="hsl(var(--doodle-yellow))"
      stroke="hsl(var(--foreground))"
      strokeWidth="1.5"
    />
  </svg>
);

export default ShootingStar;
