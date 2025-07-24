"use client";
import { FaTrophy, FaUsers, FaCalendarAlt, FaImages } from "react-icons/fa";
import ScrollAnimationWrapper from "../ui/ScrollAnimationWrapper";

export default function About() {
  return (
    <ScrollAnimationWrapper animation="slideUp" threshold={0.2}>
      <section
        id="about-section"
        className="relative z-10 w-full overflow-hidden py-24"
      >
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
          {/* Kiri: Logo, judul, subheadline, deskripsi */}
          <ScrollAnimationWrapper animation="slideUp" delay={0.1}>
            <div className="animate-fade-in flex h-full flex-col items-start justify-center">
              <h2 className="font-header mb-2 text-left text-4xl font-black uppercase tracking-tight md:text-5xl">
                <span className="text-sky-900">About</span> <span className="text-black">Dreamagination</span>
              </h2>
              <div className="mb-3 text-lg font-semibold text-gray-600">
                Tim UAV UNY | Inovasi & Prestasi Sejak 2015
              </div>
              <div className="mb-6 h-1 w-16 rounded-full bg-accent" />
              <p className="mb-0 max-w-xl text-justify text-lg leading-relaxed text-zinc-700 md:text-xl">
                Sejak <span className="font-bold text-accent">2015</span>,
                DREAMAGINATION telah menjadi rumah bagi mahasiswa UNY yang
                berkomitmen dalam riset dan pengembangan UAV (Unmanned Aerial
                Vehicle). Tim ini terdiri dari
                <span className="font-bold text-accent"> 5 divisi unggulan</span> yang saling berkolaborasi: riset, desain, mekanik, avionik, dan
                pilot. Berkat kerja sama dan inovasi, DREAMAGINATION telah meraih
                <span className="font-bold text-accent"> 20+ prestasi</span> di
                tingkat nasional maupun internasional, membuktikan eksistensi
                sebagai salah satu tim UAV terbaik di Indonesia.
              </p>
            </div>
          </ScrollAnimationWrapper>
          {/* Kanan: Highlight angka/fakta + tombol */}
          <ScrollAnimationWrapper animation="slideUp" delay={0.1}>
            <div className="animate-fade-in flex flex-col items-end">
              <div className="mb-8 flex w-full max-w-md flex-row justify-end gap-6">
                <div className="hover:shadow-3xl flex flex-1 flex-col items-center rounded-2xl bg-primary/95 p-6 text-center text-white shadow-2xl transition-transform duration-200 hover:scale-105">
                  <FaCalendarAlt size={36} className="mb-2 text-accent" />
                  <div className="text-4xl font-extrabold md:text-5xl">2015</div>
                  <div className="mt-1 text-xs uppercase tracking-widest md:text-sm">
                    Berdiri
                  </div>
                </div>
                <div className="hover:shadow-3xl flex flex-1 flex-col items-center rounded-2xl bg-accent/95 p-6 text-center text-primary shadow-2xl transition-transform duration-200 hover:scale-105">
                  <FaUsers size={36} className="mb-2 text-primary" />
                  <div className="text-4xl font-extrabold md:text-5xl">5</div>
                  <div className="mt-1 text-xs uppercase tracking-widest md:text-sm">
                    Divisi
                  </div>
                </div>
                <div className="hover:shadow-3xl flex flex-1 flex-col items-center rounded-2xl bg-primary/95 p-6 text-center text-white shadow-2xl transition-transform duration-200 hover:scale-105">
                  <FaTrophy size={36} className="mb-2 text-accent" />
                  <div className="text-4xl font-extrabold md:text-5xl">20+</div>
                  <div className="mt-1 text-xs uppercase tracking-widest md:text-sm">
                    Prestasi
                  </div>
                </div>
              </div>
              <a
                href="#gallery"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-yellow-400 px-8 py-3 text-base font-bold uppercase text-primary shadow-lg transition hover:scale-105 hover:from-yellow-400 hover:to-accent focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <FaImages className="text-xl text-primary" />
                Jelajahi Galeri
              </a>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>
    </ScrollAnimationWrapper>
  );
}
