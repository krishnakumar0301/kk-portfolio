export default function ProjectChart({ type }) {
  if (type === 'bars') {
    return (
      <svg className="project-svg" viewBox="0 0 360 170" role="img" aria-label="Decorative sales bar chart">
        <defs>
          <linearGradient id="projectBars" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7AA7FF" />
            <stop offset="100%" stopColor="#3B6BD6" stopOpacity="0.25" />
          </linearGradient>
        </defs>
        {[34, 68, 102, 136].map((y) => (
          <line key={y} x1="12" y1={y} x2="348" y2={y} stroke="rgba(148,163,184,0.12)" strokeWidth="1" />
        ))}
        {[
          [30, 78],
          [72, 58],
          [114, 92],
          [156, 48],
          [198, 68],
          [240, 36],
          [282, 82],
          [324, 54],
        ].map(([x, height]) => (
          <rect
            key={x}
            x={x}
            y={148 - height}
            width="26"
            height={height}
            rx="6"
            fill="url(#projectBars)"
          />
        ))}
      </svg>
    )
  }

  if (type === 'inventory') {
    return (
      <svg className="project-svg" viewBox="0 0 360 170" role="img" aria-label="Decorative medicine inventory levels">
        <defs>
          <linearGradient id="projectInventory" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#A78BFA" />
            <stop offset="100%" stopColor="#6EA8FF" />
          </linearGradient>
        </defs>
        {[
          [24, 34, 248],
          [24, 76, 172],
          [24, 118, 96],
        ].map(([x, y, width]) => (
          <g key={y}>
            <rect x={x} y={y} width="260" height="14" rx="7" fill="rgba(148,163,184,0.1)" />
            <rect x={x} y={y} width={width} height="14" rx="7" fill="url(#projectInventory)" />
          </g>
        ))}
        <circle cx="304" cy="125" r="9" fill="rgba(167,139,250,0.18)" stroke="#A78BFA" strokeWidth="2" />
        <path d="M304 120 L304 127" stroke="#C9BAF9" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  }

  return (
    <svg className="project-svg" viewBox="0 0 360 170" role="img" aria-label="Decorative document management illustration">
      <defs>
        <linearGradient id="projectDocs" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6EA8FF" />
          <stop offset="100%" stopColor="#B79BFF" />
        </linearGradient>
      </defs>
      <rect x="40" y="30" width="184" height="118" rx="14" fill="rgba(110,168,255,0.08)" stroke="rgba(110,168,255,0.28)" />
      <rect x="68" y="18" width="184" height="118" rx="14" fill="rgba(14,22,38,0.92)" stroke="url(#projectDocs)" strokeWidth="2" />
      {[52, 74, 96, 118].map((y, index) => (
        <line
          key={y}
          x1="88"
          y1={y}
          x2={index === 3 ? 184 : 216}
          y2={y}
          stroke="rgba(183,155,255,0.42)"
          strokeWidth="4"
          strokeLinecap="round"
        />
      ))}
      <circle cx="272" cy="104" r="24" fill="rgba(155,107,255,0.1)" stroke="url(#projectDocs)" strokeWidth="3" />
      <path d="M290 122 L310 142" stroke="url(#projectDocs)" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}
