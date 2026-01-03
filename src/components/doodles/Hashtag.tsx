const Hashtag = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 40 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <line x1="12" y1="5" x2="8" y2="40" stroke="hsl(var(--doodle-magenta))" strokeWidth="5" strokeLinecap="round" />
    <line x1="28" y1="5" x2="24" y2="40" stroke="hsl(var(--doodle-magenta))" strokeWidth="5" strokeLinecap="round" />
    <line x1="5" y1="15" x2="35" y2="15" stroke="hsl(var(--doodle-magenta))" strokeWidth="5" strokeLinecap="round" />
    <line x1="3" y1="30" x2="33" y2="30" stroke="hsl(var(--doodle-magenta))" strokeWidth="5" strokeLinecap="round" />
  </svg>
);

export default Hashtag;
