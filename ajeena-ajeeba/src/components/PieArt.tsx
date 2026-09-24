// Stylised cut-pie cross-section (the brand's hero visual) — placeholder until real photography is added.
const fillings: Record<string, string> = {
  breakfast: "#CA472E",
  premium: "#8A4A22",
  dessert: "#6B3A1E",
};

export default function PieArt({ category, className = "" }: { category: string; className?: string }) {
  const fill = fillings[category] ?? "#CA472E";
  return (
    <svg viewBox="0 0 120 80" className={className} aria-hidden="true">
      <ellipse cx="60" cy="70" rx="50" ry="6" fill="#301D10" opacity="0.12" />
      <path d="M10 60 Q10 18 60 14 Q110 18 110 60 Z" fill="#E7A95A" />
      <path d="M18 60 Q20 30 60 27 Q100 30 102 60 Z" fill="#FFE9C9" />
      <path d="M26 60 Q30 38 60 36 Q90 38 94 60 Z" fill={fill} />
      <path d="M34 60 Q40 46 60 45 Q80 46 86 60 Z" fill="#F6D27A" />
      <rect x="8" y="58" width="104" height="6" rx="3" fill="#D98624" />
      {[[30, 24], [45, 18], [62, 17], [78, 19], [92, 26], [52, 21], [70, 21]].map(([x, y], i) => (
        <ellipse key={i} cx={x} cy={y} rx="1.8" ry="1" fill={i % 2 ? "#301D10" : "#FFF3DC"} />
      ))}
    </svg>
  );
}
