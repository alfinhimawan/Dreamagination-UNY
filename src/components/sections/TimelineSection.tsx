import ScrollAnimationWrapper from '../ui/ScrollAnimationWrapper';
import AchievementCard from './AchievementCard';

interface Achievement {
  rank: string;
  title: string;
  competition: string;
  category?: string;
  description?: string;
}

interface TimelineSectionProps {
  year: number;
  achievements: Achievement[];
  delay: number;
}

export default function TimelineSection({ year, achievements, delay }: TimelineSectionProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-accent to-accent/30" />
      
      {/* Year marker */}
      <ScrollAnimationWrapper animation="slideRight" delay={delay}>
        <div className="relative flex items-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center shadow-lg shadow-accent/25">
            <span className="text-white font-bold text-lg">{year}</span>
          </div>
          <div className="ml-6">
            <h2 className="font-header text-3xl md:text-4xl font-bold text-white">
              {year}
            </h2>
            <p className="text-gray-400 text-sm">
              {achievements.length} {achievements.length === 1 ? 'achievement' : 'achievements'}
            </p>
          </div>
        </div>
      </ScrollAnimationWrapper>

      {/* Achievements grid */}
      <div className="ml-24 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {achievements.map((achievement, index) => (
          <AchievementCard
            key={`${year}-${index}`}
            rank={achievement.rank}
            title={achievement.title}
            competition={achievement.competition}
            year={year}
            category={achievement.category}
            description={achievement.description}
            delay={delay + 0.1 + (index * 0.1)}
          />
        ))}
      </div>
    </div>
  );
}
