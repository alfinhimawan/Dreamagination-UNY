"use client";

import { FaTrophy, FaMedal, FaCalendarAlt, FaStar } from "react-icons/fa";
import { HiArrowRight, HiOutlineAcademicCap } from "react-icons/hi2";
import { RiAwardLine } from "react-icons/ri";
import Link from "next/link";
import ScrollAnimationWrapper from "~/components/ui/ScrollAnimationWrapper";

interface Achievement {
  rank: string;
  title: string;
  competition: string;  
  category: string;
  description: string;
  year?: number;
}

interface AchievementCardProps {
  achievement: Achievement;
  delay: number;
}

function AchievementCard({ achievement, delay }: AchievementCardProps) {
  const getRankStyle = (rank: string) => {
    if (rank.includes("Juara I")) {
      return {
        gradient: "from-accent via-yellow-500 to-accent",
        border: "border-accent/30",
        iconBg: "bg-accent",
        icon: <FaTrophy className="text-white" size={20} />,
        badge: "bg-accent/10 text-accent border-accent/20",
        glow: "hover:shadow-accent/20"
      };
    } else if (rank.includes("Juara II")) {
      return {
        gradient: "from-gray-400 via-gray-500 to-gray-600",
        border: "border-gray-300/30",
        iconBg: "bg-gray-500",
        icon: <FaMedal className="text-white" size={20} />,
        badge: "bg-gray-100 text-gray-700 border-gray-200",
        glow: "hover:shadow-gray-200"
      };
    } else {
      return {
        gradient: "from-orange-400 via-red-500 to-orange-600",
        border: "border-orange-300/30",
        iconBg: "bg-orange-500",
        icon: <FaMedal className="text-white" size={20} />,
        badge: "bg-orange-100 text-orange-700 border-orange-200",
        glow: "hover:shadow-orange-200"
      };
    }
  };

  const rankStyle = getRankStyle(achievement.rank);

  return (
    <ScrollAnimationWrapper animation="slideUp" delay={delay}>
      <div className={`group relative bg-white rounded-2xl border-2 ${rankStyle.border} 
                     overflow-hidden transition-all duration-500 
                     hover:border-primary/30 hover:-translate-y-2 ${rankStyle.glow} hover:shadow-2xl`}>
        
        {/* Header with gradient */}
        <div className={`h-2 bg-gradient-to-r ${rankStyle.gradient}`} />
        
        <div className="p-6 space-y-4">
          {/* Top Section */}
          <div className="flex items-start justify-between">
            {/* Rank Icon */}
            <div className={`${rankStyle.iconBg} w-12 h-12 rounded-xl flex items-center justify-center 
                           shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              {rankStyle.icon}
            </div>
            
            {/* Year */}
            {achievement.year && (
              <div className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                <FaCalendarAlt size={12} />
                {achievement.year}
              </div>
            )}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300 line-clamp-2">
            {achievement.title}
          </h3>

          {/* Rank Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border ${rankStyle.badge}`}>
            <FaStar size={12} />
            {achievement.rank}
          </div>

          {/* Competition */}
          <div className="flex items-start gap-3">
            <HiOutlineAcademicCap className="text-primary flex-shrink-0 mt-0.5" size={18} />
            <span className="text-primary font-semibold text-sm leading-relaxed">{achievement.competition}</span>
          </div>

          {/* Category */}
          <div className="inline-block bg-primary/5 text-primary px-3 py-1 rounded-full text-sm font-medium border border-primary/10">
            {achievement.category}
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed text-sm line-clamp-3">
            {achievement.description}
          </p>

          {/* Hover Effect Line */}
          <div className={`h-1 rounded-full bg-gradient-to-r ${rankStyle.gradient} 
                         opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-4`} />
        </div>
      </div>
    </ScrollAnimationWrapper>
  );
}

// Featured achievements data
const featuredAchievements: Achievement[] = [
  {
    rank: "Juara I",
    title: "Racing Plane Division",
    competition: "KRTI Nasional 2023",
    category: "Racing",
    description: "Kompetisi pesawat terbang tanpa awak dengan fokus pada kecepatan dan manuver yang menantang.",
    year: 2023
  },
  {
    rank: "Juara II",
    title: "Electronic Speed Controller",
    competition: "KRTI Nasional 2023",
    category: "Technology Development",
    description: "Pengembangan sistem kontrol kecepatan elektronik inovatif untuk UAV generasi terbaru.",
    year: 2023
  },
  {
    rank: "Juara II",
    title: "Virtual Take-off Landing",
    competition: "FIRA RoboWorld Cup 2022",
    category: "Air Simulation",
    description: "Simulasi virtual lepas landas dan pendaratan otomatis dengan teknologi AI terdepan.",
    year: 2022
  }
];

export default function Achievements() {
  return (
    <div className="relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-accent/5" />
      
      <div className="relative z-10 space-y-12">
        {/* Header */}
        <ScrollAnimationWrapper animation="fadeIn" delay={0.1}>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="heading-line font-header text-5xl font-bold uppercase text-primary mb-6">
              Our <span className="text-accent">Achievements</span>
            </h2>
            
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              Prestasi gemilang tim{" "}
              <span className="font-bold text-primary">Dreamagination UNY</span>{" "}
              dalam mengharumkan nama universitas
            </p>
            <p className="text-lg text-gray-600">
              Melalui inovasi teknologi UAV dan kompetisi robotika tingkat nasional maupun internasional
            </p>
          </div>
        </ScrollAnimationWrapper>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredAchievements.map((achievement, index) => (
            <AchievementCard
              key={`${achievement.title}-${index}`}
              achievement={achievement}
              delay={0.3 + (index * 0.2)}
            />
          ))}
        </div>

        {/* View All Button */}
        <ScrollAnimationWrapper animation="slideUp" delay={0.9}>
          <div className="text-center">
            <Link
              href="/achievements"
              className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-primary to-primary/90 
                       text-white px-8 py-4 rounded-xl font-bold text-lg uppercase
                       hover:from-accent hover:to-accent/90 hover:text-primary
                       transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/20
                       border-2 border-transparent hover:border-accent/30"
            >
              <RiAwardLine size={24} className="group-hover:rotate-12 transition-transform duration-300" />
              View All Achievements
              <HiArrowRight 
                size={24} 
                className="group-hover:translate-x-2 transition-transform duration-300" 
              />
            </Link>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
}
