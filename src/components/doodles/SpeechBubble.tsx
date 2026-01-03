const SpeechBubble = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 80 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M10 10H70C73 10 75 12 75 15V40C75 43 73 45 70 45H25L15 55V45H10C7 45 5 43 5 40V15C5 12 7 10 10 10Z"
      fill="hsl(var(--background))"
      stroke="hsl(var(--foreground))"
      strokeWidth="2.5"
    />
    <text x="40" y="33" textAnchor="middle" fontFamily="Comic Sans MS, cursive" fontSize="16" fontWeight="bold" fill="hsl(var(--foreground))">
      HEY!
    </text>
  </svg>
);

export default SpeechBubble;
