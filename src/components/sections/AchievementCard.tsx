import ScrollAnimationWrapper from '../ui/ScrollAnimationWrapper';

interface AchievementCardProps {
  rank: string;
  title: string;
  competition: string;
  year: number;
  category?: string;
  description?: string;
  delay: number;
}

const rankIcons = {
  "Juara I": "🥇",
  "Juara II": "🥈", 
  "Juara III": "🥉",
  "Juara Harapan": "🏅",
} as const;

const rankColors = {
  "Juara I": "from-yellow-500/20 to-yellow-600/10 border-yellow-500/30",
  "Juara II": "from-gray-400/20 to-gray-500/10 border-gray-400/30",
  "Juara III": "from-amber-600/20 to-amber-700/10 border-amber-600/30",
  "Juara Harapan": "from-blue-500/20 to-blue-600/10 border-blue-500/30",
} as const;

export default function AchievementCard({ 
  rank, 
  title, 
  competition, 
  year, 
  category,
  description,
  delay 
}: AchievementCardProps) {
  const icon = rankIcons[rank as keyof typeof rankIcons] || "🏆";
  const colorClass = rankColors[rank as keyof typeof rankColors] || "from-accent/20 to-accent/10 border-accent/30";

  return (
    <ScrollAnimationWrapper animation="slideUp" delay={delay}>
      <div className={`group relative overflow-hidden rounded-xl bg-gradient-to-br ${colorClass} p-6 backdrop-blur-sm border hover:scale-105 transition-all duration-300 cursor-pointer`}>
        <div className="flex items-start gap-4">
          <div className="text-3xl flex-shrink-0">
            {icon}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-lg font-bold text-white">{rank}</h3>
              <span className="px-2 py-1 text-xs font-medium bg-accent/20 text-accent rounded-full">
                {year}
              </span>
            </div>
            <h4 className="text-white font-semibold mb-2">{title}</h4>
            <p className="text-gray-300 text-sm mb-3">{competition}</p>
            {category && (
              <div className="inline-block px-2 py-1 text-xs bg-white/10 text-gray-200 rounded-full">
                {category}
              </div>
            )}
            {description && (
              <p className="text-gray-400 text-xs mt-3 line-clamp-2">
                {description}
              </p>
            )}
          </div>
        </div>
        
        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </ScrollAnimationWrapper>
  );
}
