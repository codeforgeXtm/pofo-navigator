const CurvedLine = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 200 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M5 25 Q50 5 100 20 Q150 35 195 15"
      stroke="hsl(var(--foreground))"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

export default CurvedLine;
