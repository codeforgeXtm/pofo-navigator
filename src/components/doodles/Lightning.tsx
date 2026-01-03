const Lightning = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 30 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M18 2L5 22H15L12 48L28 20H16L18 2Z"
      fill="hsl(var(--doodle-yellow))"
      stroke="hsl(var(--foreground))"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

export default Lightning;
