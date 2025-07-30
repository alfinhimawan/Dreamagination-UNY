"use client";

import { useState, useEffect } from "react";
import { FaTrophy, FaMedal, FaCalendarAlt, FaStar, FaTimes } from "react-icons/fa";
import { HiArrowRight, HiSparkles, HiXMark } from "react-icons/hi2";
import { RiFlightTakeoffLine, RiAwardLine } from "react-icons/ri";
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
  index: number;
}

function ElegantAchievementCard({
  achievement,
  delay,
  index,
}: AchievementCardProps) {
  const getRankData = (rank: string, cardIndex: number) => {
    // Dynamic rank number based on card position (1-based index)
    const rankNum = String(cardIndex + 1).padStart(2, "0");

    if (rank.includes("Juara I")) {
      return {
        accentColor: "accent",
        gradientBg: "bg-gradient-to-br from-accent/20 via-accent/10 to-white",
        borderGradient: "border-gradient-to-r from-accent to-accent/50",
        glowColor: "shadow-accent/20",
        icon: <FaTrophy className="text-accent" size={28} />,
        rankNum,
        medal: "🏆",
        rankDisplay: "CHAMPION",
      };
    } else if (rank.includes("Juara II")) {
      return {
        accentColor: "slate-600",
        gradientBg:
          "bg-gradient-to-br from-slate-200/30 via-slate-100/20 to-white",
        borderGradient: "border-gradient-to-r from-slate-400 to-slate-300",
        glowColor: "shadow-slate-400/20",
        icon: <FaMedal className="text-slate-600" size={28} />,
        rankNum,
        medal: "🥈",
        rankDisplay: "RUNNER UP",
      };
    } else if (rank.includes("Juara III")) {
      return {
        accentColor: "amber-600",
        gradientBg:
          "bg-gradient-to-br from-amber-200/30 via-amber-100/20 to-white",
        borderGradient: "border-gradient-to-r from-amber-400 to-amber-300",
        glowColor: "shadow-amber-400/20",
        icon: <FaMedal className="text-amber-600" size={28} />,
        rankNum,
        medal: "🥉",
        rankDisplay: "3RD PLACE",
      };
    } else {
      // Default for other achievements (finalist, etc.)
      return {
        accentColor: "blue-600",
        gradientBg:
          "bg-gradient-to-br from-blue-100/30 via-blue-50/20 to-white",
        borderGradient: "border-gradient-to-r from-blue-300 to-blue-200",
        glowColor: "shadow-blue-300/20",
        icon: <FaMedal className="text-blue-600" size={28} />,
        rankNum,
        medal: "🎖️",
        rankDisplay: "ACHIEVEMENT",
      };
    }
  };

  const rankData = getRankData(achievement.rank, index);

  return (
    <ScrollAnimationWrapper animation="fadeIn" delay={delay}>
      <div
        className={`group relative overflow-hidden rounded-3xl border-2 border-gray-200/50
                    ${rankData.gradientBg} backdrop-blur-sm
                    hover:border-gray-300/80 hover:${rankData.glowColor}
                    transform cursor-pointer transition-all duration-500 hover:-translate-y-4
                    hover:scale-105 hover:shadow-2xl h-[520px] flex flex-col`}
      >
        {/* Floating Rank Badge */}
        <div className="absolute -right-4 -top-4 z-20">
          <div
            className={`rounded-full bg-gradient-to-br from-${rankData.accentColor} to-${rankData.accentColor}/80 
                         rotate-12 transform p-6 text-white shadow-xl transition-transform duration-500 group-hover:rotate-0`}
          >
            <div className="text-center">
              <div className="text-2xl font-black">{rankData.rankNum}</div>
            </div>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute right-0 top-0 h-full w-full">
            <RiFlightTakeoffLine
              size={200}
              className="absolute right-[-50px] top-[-20px] rotate-12 text-primary"
            />
          </div>
        </div>

        <div className="relative z-10 p-8 flex-1 flex flex-col">
          {/* Header with Medal & Icon */}
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div
                className={`rounded-2xl bg-white p-4 shadow-lg transition-shadow duration-300 group-hover:shadow-xl`}
              >
                {rankData.icon}
              </div>
              <div className="transform text-4xl transition-transform duration-300 group-hover:scale-110">
                {rankData.medal}
              </div>
            </div>

            {achievement.year && (
              <div className="rounded-xl bg-white/90 px-4 py-2 text-sm font-bold text-gray-700 shadow-md backdrop-blur-sm">
                {achievement.year}
              </div>
            )}
          </div>

          {/* Rank Display */}
          <div
            className={`mb-4 text-xs font-black tracking-[0.2em] text-${rankData.accentColor} uppercase`}
          >
            {rankData.rankDisplay}
          </div>

          {/* Title */}
          <h3 className="mb-6 text-2xl font-black leading-tight text-primary transition-colors duration-300 group-hover:text-accent">
            {achievement.title}
          </h3>

          {/* Competition */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-xl bg-primary/15 px-4 py-2 text-sm font-bold text-primary">
            <HiSparkles size={16} />
            {achievement.competition}
          </div>

          {/* Category */}
          <div className="mb-6 text-sm font-semibold uppercase tracking-wide text-gray-600">
            {achievement.category}
          </div>

          {/* Description - Fixed height container */}
          <div className="mb-8 flex-1 flex flex-col">
            <p className="line-clamp-3 text-base leading-relaxed text-gray-700">
              {achievement.description}
            </p>
          </div>

          {/* Footer - Rank Display Only */}
          <div className="flex items-center gap-2 mt-auto">
            <FaStar className={`text-${rankData.accentColor}`} size={16} />
            <span className="text-sm font-medium text-gray-600">
              {achievement.rank}
            </span>
          </div>
        </div>
      </div>
    </ScrollAnimationWrapper>
  );
}

const achievements: Achievement[] = [
  // 2023 - KRTI Nasional
  {
    rank: "Juara I",
    title: "Racing Plane Division",
    competition: "KRTI Nasional 2023",
    category: "Racing",
    description:
      "Kompetisi pesawat terbang tanpa awak dengan fokus pada kecepatan dan manuver di arena balap nasional.",
    year: 2023,
  },
  {
    rank: "Juara II",
    title: "Electronic Speed Controller",
    competition: "KRTI Nasional 2023",
    category: "Technology Development",
    description:
      "Pengembangan sistem kontrol kecepatan elektronik untuk UAV yang inovatif dan efisien.",
    year: 2023,
  },
  {
    rank: "Juara Harapan",
    title: "Flight Controller",
    competition: "KRTI Nasional 2023",
    category: "Technology Development",
    description:
      "Inovasi sistem pengontrol penerbangan otomatis untuk navigasi UAV yang presisi.",
    year: 2023,
  },
  // 2022 - FIRA RoboWorld Cup
  {
    rank: "Juara II",
    title: "Virtual Take-off Landing",
    competition: "FIRA RoboWorld Cup 2022 SimulCup",
    category: "Air Simulation",
    description:
      "Kompetisi simulasi lepas landas dan pendaratan virtual menggunakan teknologi AI.",
    year: 2022,
  },
  // Additional 2023 achievements
  {
    rank: "Juara Harapan",
    title: "Airframe Innovation",
    competition: "KRTI Nasional 2023",
    category: "Technology Development",
    description:
      "Desain dan konstruksi badan pesawat yang inovatif dengan material ringan namun kuat.",
    year: 2023,
  },
  {
    rank: "Juara Harapan",
    title: "Ground Control Station",
    competition: "KRTI Nasional 2023",
    category: "Technology Development",
    description:
      "Sistem stasiun kontrol darat untuk UAV dengan interface yang user-friendly.",
    year: 2023,
  },
  // 2021 achievements
  {
    rank: "Juara II",
    title: "Propulsion ESC/ECU",
    competition: "KRTI Nasional 2021",
    category: "Technology Development",
    description:
      "Sistem propulsi dan kontrol mesin untuk UAV dengan efisiensi tinggi.",
    year: 2021,
  },
  {
    rank: "Juara III",
    title: "Ground Control Station",
    competition: "KRTI Nasional 2021",
    category: "Technology Development",
    description:
      "Pengembangan stasiun kontrol darat generasi kedua dengan fitur monitoring real-time.",
    year: 2021,
  },
];

export default function AchievementsElegant() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  
  // Featured achievements (first 3)
  const featuredAchievements = achievements.slice(0, 3);
  
  const openModal = () => {
    // Save current scroll position
    const currentScrollY = window.scrollY;
    setScrollY(currentScrollY);
    
    setIsModalOpen(true);
    
    // Completely prevent scrolling
    document.body.style.position = 'fixed';
    document.body.style.top = `-${currentScrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.overflow = 'hidden';
    document.body.style.width = '100%';
    
    // Add class to hide header and scroll-to-top button
    document.body.classList.add('modal-open');
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    
    // Remove all body styles
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.overflow = '';
    document.body.style.width = '';
    
    // Remove class to show header and scroll-to-top button
    document.body.classList.remove('modal-open');
    
    // Restore scroll position without animation
    window.scrollTo(0, scrollY);
  };
  
  // Cleanup on component unmount
  useEffect(() => {
    return () => {
      // Reset all body styles on cleanup
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
      document.body.style.width = '';
      // Remove modal class
      document.body.classList.remove('modal-open');
    };
  }, []);
  
  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };
    
    if (isModalOpen) {
      document.addEventListener('keydown', handleEscKey);
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isModalOpen]);
  return (
    <div className="bg-gradient-to-b from-white via-gray-50/50 to-white py-20">
      {/* Header */}
      <ScrollAnimationWrapper animation="slideUp" delay={0.1}>
        <div className="mb-16 flex justify-center">
          <h2
            className="heading-line font-header bg-gradient-to-r from-primary via-primary to-accent 
                        bg-clip-text text-center text-5xl font-bold leading-tight tracking-tight 
                        text-transparent lg:text-6xl"
          >
            Our Achievements
          </h2>
        </div>
      </ScrollAnimationWrapper>

      {/* Achievement Grid - Featured Only */}
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {featuredAchievements.map((achievement, index) => (
            <ElegantAchievementCard
              key={`${achievement.title}-${index}`}
              achievement={achievement}
              delay={0.3 + index * 0.15}
              index={index}
            />
          ))}
        </div>
        
        {/* View All Button */}
        <div className="mt-12 text-center">
          <button
            onClick={openModal}
            className="group inline-flex transform items-center gap-4 rounded-2xl 
                     bg-gradient-to-r from-primary to-accent px-8 py-4 text-lg font-bold
                     text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl
                     focus:outline-none focus:ring-4 focus:ring-accent/20"
          >
            <RiAwardLine size={20} />
            <span>Jelajahi Semua Prestasi ({achievements.length})</span>
            <HiArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-2"
            />
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mx-auto mt-20 max-w-6xl space-y-16 px-8">
        {/* Elegant Quote Card */}
        <ScrollAnimationWrapper animation="fadeIn" delay={0.8}>
          <div className="relative rounded-2xl bg-white border border-gray-200 p-10 text-center shadow-lg 
                         hover:shadow-xl transition-shadow duration-300">
            
            {/* Quote Icon */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-accent text-white p-3 rounded-full shadow-lg">
                <HiSparkles size={24} />
              </div>
            </div>
            
            {/* Quote Content */}
            <div className="pt-6">
              <blockquote className="text-xl lg:text-2xl font-medium text-gray-700 leading-relaxed mb-6 italic">
                "Setiap prestasi adalah hasil dari kerja keras, dedikasi, dan semangat pantang menyerah 
                dalam mengembangkan teknologi UAV terdepan."
              </blockquote>
              
              {/* Author with Line */}
              <div className="flex items-center justify-center gap-4">
                <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary"></div>
                <div className="text-sm font-bold text-primary px-4">
                  Tim Dreamagination UNY
                </div>
                <div className="h-px w-8 bg-gradient-to-r from-primary to-transparent"></div>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* Enhanced Stats - Achievement Showcase */}
        <ScrollAnimationWrapper animation="slideUp" delay={1.0}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Total Prestasi */}
            <div
              className="group relative transform overflow-hidden rounded-3xl border-2 border-accent/20 bg-gradient-to-br 
                          from-accent/20 via-accent/10 to-white p-8 text-center 
                          transition-all duration-500 hover:-translate-y-2 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/20"
            >
              {/* Background Icon */}
              <div className="absolute right-4 top-4 opacity-10 transition-opacity duration-300 group-hover:opacity-20">
                <FaTrophy size={60} className="text-accent" />
              </div>

              {/* Progress Circle Background */}
              <div className="relative mx-auto mb-6 h-24 w-24">
                <div className="absolute inset-0 rounded-full bg-accent/20"></div>
                <div className="absolute inset-2 flex items-center justify-center rounded-full bg-white shadow-inner">
                  <FaTrophy size={24} className="text-accent" />
                </div>
              </div>

              <div className="relative z-10">
                <div className="mb-2 bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-5xl font-black text-transparent">
                  8
                </div>
                <div className="mb-2 text-sm font-bold uppercase tracking-wider text-accent/80">
                  Total Prestasi
                </div>
                <div className="text-xs leading-relaxed text-gray-600">
                  Pencapaian gemilang dalam berbagai kompetisi UAV
                </div>
              </div>
            </div>

            {/* Juara I & II */}
            <div
              className="group relative transform overflow-hidden rounded-3xl border-2 border-primary/20 bg-gradient-to-br 
                          from-primary/20 via-primary/10 to-white p-8 text-center 
                          transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/20"
            >
              {/* Background Icon */}
              <div className="absolute right-4 top-4 opacity-10 transition-opacity duration-300 group-hover:opacity-20">
                <FaMedal size={60} className="text-primary" />
              </div>

              {/* Progress Circle Background */}
              <div className="relative mx-auto mb-6 h-24 w-24">
                <div className="absolute inset-0 rounded-full bg-primary/20"></div>
                <div className="absolute inset-2 flex items-center justify-center rounded-full bg-white shadow-inner">
                  <FaMedal size={24} className="text-primary" />
                </div>
              </div>

              <div className="relative z-10">
                <div className="mb-2 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-5xl font-black text-transparent">
                  4
                </div>
                <div className="mb-2 text-sm font-bold uppercase tracking-wider text-primary/80">
                  Juara I & II
                </div>
                <div className="text-xs leading-relaxed text-gray-600">
                  Prestasi tingkat nasional dan internasional
                </div>
              </div>
            </div>

            {/* Kompetisi Bergengsi */}
            <div
              className="group relative transform overflow-hidden rounded-3xl border-2 border-purple-500/20 bg-gradient-to-br 
                          from-purple-500/20 via-purple-500/10 to-white p-8 text-center 
                          transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              {/* Background Icon */}
              <div className="absolute right-4 top-4 opacity-10 transition-opacity duration-300 group-hover:opacity-20">
                <HiSparkles size={60} className="text-purple-500" />
              </div>

              {/* Progress Circle Background */}
              <div className="relative mx-auto mb-6 h-24 w-24">
                <div className="absolute inset-0 rounded-full bg-purple-500/20"></div>
                <div className="absolute inset-2 flex items-center justify-center rounded-full bg-white shadow-inner">
                  <HiSparkles size={24} className="text-purple-500" />
                </div>
              </div>

              <div className="relative z-10">
                <div className="mb-2 bg-gradient-to-r from-purple-500 to-purple-500/80 bg-clip-text text-5xl font-black text-transparent">
                  2021-2023
                </div>
                <div className="mb-2 text-sm font-bold uppercase tracking-wider text-purple-500/80">
                  Periode Aktif
                </div>
                <div className="text-xs leading-relaxed text-gray-600">
                  Konsistensi prestasi selama 3 tahun berturut-turut
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
      
      {/* Advanced Full Screen Modal with Dynamic Background */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 flex items-center justify-center backdrop-blur-xl"
          style={{ 
            zIndex: 999999,
            background: `
              radial-gradient(circle at 20% 80%, rgba(20, 33, 61, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(252, 163, 17, 0.15) 0%, transparent 50%),
              linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(249,250,251,0.8) 50%, rgba(255,255,255,0.9) 100%)
            `
          }}
          onClick={closeModal}
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-primary/5 animate-pulse"></div>
            <div className="absolute top-20 right-20 h-32 w-32 rounded-full bg-accent/5 animate-bounce"></div>
            <div className="absolute bottom-20 left-20 h-24 w-24 rounded-full bg-primary/5 animate-ping"></div>
            <div className="absolute bottom-40 right-40 h-16 w-16 rounded-full bg-accent/5 animate-pulse"></div>
          </div>

          {/* Main Modal Container with Glass Effect */}
          <div 
            className="relative mx-4 h-[95vh] w-full max-w-7xl overflow-hidden rounded-3xl 
                       bg-white/80 backdrop-blur-2xl shadow-2xl border border-white/20
                       transform transition-all duration-700 ease-out"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: `
                linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.9) 100%)
              `,
              boxShadow: `
                0 25px 50px -12px rgba(0, 0, 0, 0.25),
                0 0 0 1px rgba(255, 255, 255, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.4)
              `
            }}
          >
            
            {/* Gradient Header with Floating Elements */}
            <div className="sticky top-0 z-10 px-8 py-6 bg-gradient-to-r from-primary/10 via-white/95 to-accent/10 backdrop-blur-sm border-b border-gray-200/50">
              <div className="flex items-center justify-between">
                <div className="relative">
                  {/* Floating Trophy Icon */}
                  <div className="absolute -left-12 -top-2 transform rotate-12 animate-bounce">
                    <FaTrophy className="text-accent text-3xl opacity-30" />
                  </div>
                  
                  <h3 className="text-4xl font-black bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
                    Gallery Prestasi
                  </h3>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="h-1 w-16 bg-gradient-to-r from-accent to-primary rounded-full"></div>
                    <p className="text-gray-600 font-medium">
                      {achievements.length} pencapaian luar biasa tim Dreamagination UNY
                    </p>
                    <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                  </div>
                </div>
                
                {/* Enhanced Close Button */}
                <div className="relative">
                  <button
                    onClick={closeModal}
                    className="group relative flex h-14 w-14 items-center justify-center rounded-2xl 
                             bg-gradient-to-br from-red-50 to-red-100 text-red-600 
                             transition-all duration-300 hover:from-red-100 hover:to-red-200 
                             hover:scale-110 hover:shadow-xl hover:shadow-red-200/50
                             focus:outline-none focus:ring-4 focus:ring-red-200/50 transform"
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/50 to-transparent"></div>
                    <HiXMark size={28} className="relative z-10 transition-transform duration-300 group-hover:rotate-90" />
                  </button>
                  <div className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-400 animate-ping"></div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Modal Content with Parallax Effect */}
            <div className="relative h-full overflow-y-auto px-8 py-6">
              {/* Floating Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10">
                  <RiFlightTakeoffLine size={120} className="text-primary transform rotate-12" />
                </div>
                <div className="absolute top-32 right-20">
                  <FaMedal size={100} className="text-accent transform -rotate-12" />
                </div>
                <div className="absolute bottom-20 left-32">
                  <FaTrophy size={90} className="text-primary transform rotate-45" />
                </div>
                <div className="absolute bottom-40 right-10">
                  <RiAwardLine size={110} className="text-accent transform -rotate-45" />
                </div>
              </div>

              {/* Achievement Cards Grid with Clean Animation */}
              <div className="relative z-10 grid grid-cols-1 gap-8 pb-20 md:grid-cols-2 lg:grid-cols-3">
                {achievements.map((achievement, index) => (
                  <div 
                    key={`modal-${achievement.title}-${index}`}
                    className="transform transition-all duration-500 ease-out"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: `fadeInUp 0.8s ease-out forwards`
                    }}
                  >
                    <ElegantAchievementCard
                      achievement={achievement}
                      delay={0}
                      index={index}
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Clean Status Footer */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white/95 via-white/90 to-transparent backdrop-blur-sm px-8 py-6">
              <div className="flex items-center justify-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">
                    {achievements.length} prestasi berhasil dimuat
                  </span>
                </div>
                <div className="h-6 w-px bg-gray-300"></div>
                <div className="text-xs text-gray-500">
                  Pencapaian 2021-2023
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
