const Cloud = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 120 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M20 45C10 45 5 38 5 30C5 22 12 16 22 16C24 8 32 3 45 3C60 3 70 12 72 22C85 22 95 30 95 40C95 48 88 53 78 53C75 57 68 60 58 60C45 60 38 55 35 50C28 52 22 50 20 45Z"
      fill="hsl(var(--doodle-cloud))"
      stroke="hsl(var(--doodle-cloud-stroke))"
      strokeWidth="2"
    />
  </svg>
);

export default Cloud;
