const Sparkle = ({ className = "" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 107.38 114.49"
    className={className}
  >
    <defs>
      <style>{`
        .sparkle-1 { fill: #fff; }
      `}</style>
    </defs>
    <g>
      <path className="sparkle-1" d="M43.6,46.19c14-6.07,23.22-31.63,26-46.19-7.21,38.2.2,61.8,37.81,68.34C75.62,62.82,52,78.69,44.16,114.49,55.36,68.13,49,59.51,0,46.37,15.28,51,28.56,53.71,43.6,46.19Z" />
    </g>
  </svg>
);

export default Sparkle;
