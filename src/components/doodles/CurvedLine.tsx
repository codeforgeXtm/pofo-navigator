const CurvedLine = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 100 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M5 15 Q 25 5, 50 15 T 95 15"
      stroke="hsl(var(--doodle-line))"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);

export default CurvedLine;
