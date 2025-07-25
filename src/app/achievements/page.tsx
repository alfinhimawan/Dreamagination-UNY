import { GiLaurelsTrophy } from "react-icons/gi";
import AchievementStats from "~/components/sections/AchievementStats";
import TimelineSection from "~/components/sections/TimelineSection";
import ScrollAnimationWrapper from "~/components/ui/ScrollAnimationWrapper";

// Data achievements yang terstruktur
const achievementsData = {
  2023: [
    {
      rank: "Juara I",
      title: "Racing Plane Division",
      competition: "KRTI Nasional",
      category: "Racing",
      description: "Kompetisi pesawat terbang tanpa awak dengan fokus pada kecepatan dan manuver"
    },
    {
      rank: "Juara II",
      title: "Electronic Speed Controller",
      competition: "KRTI Nasional",
      category: "Technology Development",
      description: "Pengembangan sistem kontrol kecepatan elektronik untuk UAV"
    },
    {
      rank: "Juara Harapan",
      title: "Flight Controller",
      competition: "KRTI Nasional",
      category: "Technology Development",
      description: "Inovasi sistem pengontrol penerbangan otomatis"
    },
    {
      rank: "Juara Harapan",
      title: "Airframe Innovation",
      competition: "KRTI Nasional",
      category: "Technology Development",
      description: "Desain dan konstruksi badan pesawat yang inovatif"
    },
    {
      rank: "Juara Harapan",
      title: "Ground Control Station",
      competition: "KRTI Nasional",
      category: "Technology Development",
      description: "Sistem stasiun kontrol darat untuk UAV"
    }
  ],
  2022: [
    {
      rank: "Juara II",
      title: "Virtual Take-off Landing",
      competition: "FIRA RoboWorld Cup 2022 SimulCup",
      category: "Air Simulation",
      description: "Kompetisi simulasi lepas landas dan pendaratan virtual"
    }
  ],
  2021: [
    {
      rank: "Juara II",
      title: "Propulsion ESC/ECU",
      competition: "KRTI Nasional",
      category: "Technology Development",
      description: "Sistem propulsi dan kontrol mesin untuk UAV"
    },
    {
      rank: "Juara III",
      title: "Ground Control Station",
      competition: "KRTI Nasional",
      category: "Technology Development",
      description: "Pengembangan stasiun kontrol darat generasi kedua"
    }
  ]
};

// Hitung statistik
const stats = {
  total: Object.values(achievementsData).flat().length,
  gold: Object.values(achievementsData).flat().filter(a => a.rank === "Juara I").length,
  silver: Object.values(achievementsData).flat().filter(a => a.rank === "Juara II").length,
  bronze: Object.values(achievementsData).flat().filter(a => a.rank === "Juara III" || a.rank === "Juara Harapan").length,
};

export default function Achievements() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-sky-900 to-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url(/noise.avif)] opacity-20 bg-blend-multiply" />
        <div className="container relative z-10 px-4 py-20 md:py-32">
          <ScrollAnimationWrapper animation="slideUp" delay={0.1}>
            <div className="flex items-center gap-6 mb-8">
              <div className="p-4 bg-accent/20 rounded-2xl">
                <GiLaurelsTrophy size={72} className="text-accent" />
              </div>
              <div>
                <h1 className="font-header text-4xl md:text-6xl font-bold uppercase">
                  Achievements
                </h1>
                <p className="font-header text-xl md:text-2xl font-medium uppercase text-accent mt-2">
                  Dreamagination - Aerialroboticteam
                </p>
              </div>
            </div>
          </ScrollAnimationWrapper>
          
          <ScrollAnimationWrapper animation="slideUp" delay={0.3}>
            <p className="text-lg text-gray-300 max-w-3xl">
              Perjalanan prestasi tim Dreamagination UNY dalam mengharumkan nama universitas 
              melalui inovasi teknologi UAV dan kompetisi robotika tingkat nasional maupun internasional.
            </p>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Stats Section */}
      <AchievementStats stats={stats} />

      {/* Timeline Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20">
        <div className="absolute inset-0 bg-[url(/noise.avif)] opacity-10 bg-blend-multiply" />
        <div className="container relative z-10 space-y-16">
          <ScrollAnimationWrapper animation="fadeIn" delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="font-header text-3xl md:text-4xl font-bold text-white mb-4">
                TIMELINE <span className="text-accent">ACHIEVEMENTS</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Kronologi pencapaian tim dari tahun ke tahun dalam berbagai kategori kompetisi
              </p>
            </div>
          </ScrollAnimationWrapper>

          {/* Timeline items */}
          {Object.entries(achievementsData)
            .sort(([a], [b]) => parseInt(b) - parseInt(a)) // Sort by year descending
            .map(([year, achievements], index) => (
              <TimelineSection
                key={year}
                year={parseInt(year)}
                achievements={achievements}
                delay={0.2 + (index * 0.1)}
              />
            ))}
        </div>
      </section>
    </>
  );
}
