"use client";

export function DNAHelixVisual({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 320"
      className={className}
      fill="none"
      aria-hidden
    >
      <path
        d="M60 20 Q100 40 140 60 Q100 80 60 100 Q100 120 140 140 Q100 160 60 180 Q100 200 140 220 Q100 240 60 260 Q100 280 140 300"
        stroke="currentColor"
        strokeOpacity="0.35"
        strokeWidth="2"
      />
      <path
        d="M140 20 Q100 40 60 60 Q100 80 140 100 Q100 120 60 140 Q100 160 140 180 Q100 200 60 220 Q100 240 140 260 Q100 280 60 300"
        stroke="currentColor"
        strokeOpacity="0.35"
        strokeWidth="2"
      />
      {Array.from({ length: 14 }).map((_, i) => {
        const y = 20 + i * 20;
        return (
          <line
            key={i}
            x1="60"
            y1={y + (i % 2 === 0 ? 0 : 20)}
            x2="140"
            y2={y + (i % 2 === 0 ? 20 : 0)}
            stroke="currentColor"
            strokeOpacity="0.2"
            strokeWidth="1"
          />
        );
      })}
      {Array.from({ length: 8 }).map((_, i) => (
        <circle
          key={`a-${i}`}
          cx={i % 2 === 0 ? 60 : 140}
          cy={40 + i * 35}
          r="3"
          fill="currentColor"
          fillOpacity="0.5"
        />
      ))}
    </svg>
  );
}

export function MoleculePattern({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" className={className} fill="none" aria-hidden>
      {[
        [80, 100], [200, 60], [320, 120], [150, 220], [280, 280], [100, 300],
      ].map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="4" fill="currentColor" fillOpacity="0.25" />
          {i < 5 && (
            <line
              x1={cx}
              y1={cy}
              x2={[80, 200, 320, 150, 280, 100][i + 1]}
              y2={[100, 60, 120, 220, 280, 300][i + 1]}
              stroke="currentColor"
              strokeOpacity="0.12"
            />
          )}
        </g>
      ))}
    </svg>
  );
}
