import Image from "next/image";
import Link from "next/link";
import { team_data } from "../../app/subteam/page";
import ScrollAnimationWrapper from "../ui/ScrollAnimationWrapper";

export default function Division() {
  return (
    <div className="mt-12 flex justify-center">
      <div className="grid w-full max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {team_data.map((team, idx) => (
          <ScrollAnimationWrapper 
            key={team.name}
            animation="slideUp" 
            delay={idx * 0.1}
            threshold={0.2}
          >
            <Link
              className="group block h-full"
              href={"subteam" + team.path}
            >
              <div className="relative flex h-full flex-col items-center rounded-2xl border border-zinc-200 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                {/* Icon dalam lingkaran accent */}
                <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-zinc-100 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:ring-4 group-hover:ring-accent/30">
                  <Image
                    className="transition-all duration-300 group-hover:scale-110 group-hover:animate-pulse"
                    src={team.icon}
                    width={60}
                    height={60}
                    alt={team.name}
                    priority={idx < 3}
                  />
                </div>
                <h3 className="mb-1 text-center text-lg font-extrabold uppercase tracking-tight text-primary transition-colors duration-200 group-hover:text-accent">
                  {team.name}
                </h3>
                {/* Deskripsi fade-in saat hover */}
                <p className="mb-2 min-h-[36px] text-center text-sm text-zinc-700 opacity-80 transition-opacity duration-300 group-hover:opacity-100 group-hover:delay-100 md:text-base">
                  {team.detail.slice(0, 100)}...
                </p>
                {/* Tombol Lihat Detail muncul saat hover */}
                <span className="pointer-events-none mt-2 inline-block scale-95 rounded-full bg-accent px-4 py-2 text-xs font-bold uppercase text-primary opacity-0 shadow transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                  Lihat Detail
                </span>
              </div>
            </Link>
          </ScrollAnimationWrapper>
        ))}
      </div>
    </div>
  );
}
