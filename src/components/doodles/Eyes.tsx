const Eyes = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 50 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <ellipse cx="12" cy="15" rx="10" ry="12" fill="hsl(var(--background))" stroke="hsl(var(--foreground))" strokeWidth="2" />
    <ellipse cx="38" cy="15" rx="10" ry="12" fill="hsl(var(--background))" stroke="hsl(var(--foreground))" strokeWidth="2" />
    <circle cx="14" cy="15" r="5" fill="hsl(var(--foreground))" className="animate-look" />
    <circle cx="40" cy="15" r="5" fill="hsl(var(--foreground))" className="animate-look" />
  </svg>
);

export default Eyes;
