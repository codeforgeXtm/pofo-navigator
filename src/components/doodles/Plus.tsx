const Plus = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 35 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="12" y="2" width="11" height="31" rx="3" fill="hsl(var(--doodle-blue))" stroke="hsl(var(--foreground))" strokeWidth="2" />
    <rect x="2" y="12" width="31" height="11" rx="3" fill="hsl(var(--doodle-blue))" stroke="hsl(var(--foreground))" strokeWidth="2" />
  </svg>
);

export default Plus;
