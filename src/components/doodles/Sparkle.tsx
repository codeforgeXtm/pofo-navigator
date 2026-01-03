const Sparkle = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z"
      stroke="hsl(var(--foreground))"
      strokeWidth="1.5"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export default Sparkle;
