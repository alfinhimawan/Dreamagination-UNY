"use client";

import { useEffect, useState } from "react";
import Logo from "../ui/Logo";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center bg-primary bg-[url('/banner.avif')] bg-cover bg-center bg-blend-multiply overflow-hidden">
      {/* Animated overlay */}
      <div className="absolute inset-0 bg-primary/50 animate-fade-in" aria-hidden="true" />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-2 w-2 rounded-full bg-accent/30 animate-float-1" />
        <div className="absolute top-3/4 left-3/4 h-3 w-3 rounded-full bg-accent/20 animate-float-2" />
        <div className="absolute top-1/2 left-1/6 h-1 w-1 rounded-full bg-accent/40 animate-float-3" />
        <div className="absolute top-1/6 right-1/4 h-2 w-2 rounded-full bg-accent/25 animate-float-1" />
        <div className="absolute bottom-1/4 right-1/6 h-1 w-1 rounded-full bg-accent/35 animate-float-2" />
      </div>

      <div className="container relative z-10 flex min-h-full w-full flex-col items-center px-4 lg:flex-row">
        <div className={`order-2 w-full md:px-12 lg:order-1 lg:w-2/3 transition-all duration-1000 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="font-header text-4xl font-black uppercase text-neutral drop-shadow-white lg:text-6xl animate-slide-up">
            Fly your <span className="text-accent">dream!</span>
          </h1>
          <p className={`mt-6 text-justify text-base text-neutral/90 md:text-lg lg:max-w-[60ch] lg:text-xl transition-all duration-1000 delay-300 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
          }`}>
            Dreamagination adalah Tim Robot Terbang Divisi Robotika UKM Rekayasa
            Teknologi UNY yang berfokus pada riset wahana UAV (Unmanned Aerial
            Vehicle) atau pesawat tanpa awak. Berdiri sejak{" "}
            <span className="font-bold text-accent animate-pulse-slow">2015</span> dengan 5 divisi
            unggulan.
          </p>
          <div className={`mt-10 flex gap-4 transition-all duration-1000 delay-500 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
          }`}>
            <button className="rounded-xl bg-accent px-6 py-3 text-base font-bold uppercase text-primary shadow-lg transition-all duration-300 hover:scale-105 hover:bg-accent/90 hover:shadow-xl animate-bounce-subtle">
              Kenali Kami
            </button>
            <a
              href="#gallery"
              className="rounded-xl border-2 border-accent px-6 py-3 text-base font-bold uppercase text-accent transition-all duration-300 hover:bg-accent hover:text-primary hover:scale-105 hover:shadow-lg"
            >
              Lihat Galeri
            </a>
          </div>
        </div>
        <div className={`order-1 mx-auto mb-8 flex h-72 w-72 items-center justify-center rounded-full bg-white/80 shadow-2xl ring-4 ring-accent/30 backdrop-blur-lg md:mb-0 md:block lg:order-2 lg:h-96 lg:w-96 transition-all duration-1000 delay-200 ${
          isLoaded ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
        } animate-float-logo`}>
          <Logo />
        </div>
      </div>
      
      {/* Enhanced decorative shapes with animation */}
      <div className="absolute left-0 top-0 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/30 blur-2xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 h-32 w-32 translate-x-1/3 translate-y-1/3 rounded-full bg-accent/20 blur-2xl animate-pulse-slow" />
      <div className="absolute top-1/2 left-0 h-24 w-24 -translate-x-1/2 rounded-full bg-accent/10 blur-xl animate-ping-slow" />

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slide-up {
          from { 
            transform: translateY(30px);
            opacity: 0;
          }
          to { 
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes glow {
          0%, 100% { text-shadow: 0 0 5px #fca311, 0 0 10px #fca311, 0 0 15px #fca311; }
          50% { text-shadow: 0 0 10px #fca311, 0 0 20px #fca311, 0 0 30px #fca311; }
        }

        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-20px) translateX(10px); }
          66% { transform: translateY(10px) translateX(-5px); }
        }

        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-15px) translateX(-10px); }
        }

        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-10px) translateX(5px); }
          75% { transform: translateY(5px) translateX(-8px); }
        }

        @keyframes float-logo {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-2px); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(2); opacity: 0; }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out 0.2s both;
        }

        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }

        .animate-float-1 {
          animation: float-1 6s ease-in-out infinite;
        }

        .animate-float-2 {
          animation: float-2 8s ease-in-out infinite;
        }

        .animate-float-3 {
          animation: float-3 7s ease-in-out infinite;
        }

        .animate-float-logo {
          animation: float-logo 4s ease-in-out infinite;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-ping-slow {
          animation: ping-slow 4s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
}
