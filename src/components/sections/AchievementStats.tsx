"use client";

import { useEffect, useState } from 'react';
import ScrollAnimationWrapper from '../ui/ScrollAnimationWrapper';

interface StatCardProps {
  icon: string;
  number: number;
  label: string;
  delay: number;
}

function StatCard({ icon, number, label, delay }: StatCardProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const increment = number / 50; 
      const interval = setInterval(() => {
        setCount(prev => {
          if (prev >= number) {
            clearInterval(interval);
            return number;
          }
          return Math.min(prev + increment, number);
        });
      }, 30); 

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [number, delay]);

  return (
    <ScrollAnimationWrapper animation="slideUp" delay={delay / 1000}>
      <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-sm border border-white/20 hover:border-accent/50 transition-all duration-300">
        <div className="relative z-10">
          <div className="text-4xl mb-3">{icon}</div>
          <div className="text-3xl font-bold text-white mb-1">
            {Math.round(count)}
          </div>
          <div className="text-sm text-gray-300 font-medium uppercase tracking-wide">
            {label}
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </ScrollAnimationWrapper>
  );
}

interface AchievementStatsProps {
  stats: {
    total: number;
    gold: number;
    silver: number;
    bronze: number;
  };
}

export default function AchievementStats({ stats }: AchievementStatsProps) {
  return (
    <section className="bg-gradient-to-br from-primary via-primary to-sky-900 py-20">
      <div className="container">
        <ScrollAnimationWrapper animation="fadeIn" delay={0.1}>
          <div className="text-center mb-12">
            <h2 className="font-header text-4xl md:text-5xl font-bold text-white mb-4">
              OUR <span className="text-accent">ACHIEVEMENTS</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Pencapaian luar biasa tim Dreamagination UNY dalam berbagai kompetisi robotika tingkat nasional dan internasional
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <StatCard
            icon="🏆"
            number={stats.total}
            label="Total Awards"
            delay={200}
          />
          <StatCard
            icon="🥇"
            number={stats.gold}
            label="Juara I"
            delay={400}
          />
          <StatCard
            icon="🥈"
            number={stats.silver}
            label="Juara II"
            delay={600}
          />
          <StatCard
            icon="🏅"
            number={stats.bronze}
            label="Juara Harapan"
            delay={800}
          />
        </div>
      </div>
    </section>
  );
}
