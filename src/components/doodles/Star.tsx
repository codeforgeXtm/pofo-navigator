const Star = ({ className = "", filled = false }: { className?: string; filled?: boolean }) => (
  <svg
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M15 3L18 12H27L20 18L23 27L15 21L7 27L10 18L3 12H12L15 3Z"
      fill={filled ? "hsl(var(--doodle-yellow))" : "none"}
      stroke="hsl(var(--foreground))"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

export default Star;
