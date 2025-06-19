import Image from "next/image";
import Header from "~/components/Header";
import Link from "next/link";

function RoleHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-header bg-gradient-to-t from-zinc-500 via-zinc-300 to-zinc-100 bg-clip-text text-4xl font-bold uppercase text-transparent lg:text-4xl">
      {children}
    </h2>
  );
}

function ProfileFrame({ photo }: { photo: string }) {
  const polygon =
    "polygon(20% 0%,100% 0,100% 20%,100% 80%,80% 100%,0 100%,0% 80%,0% 20%";
  return (
    <div
      className="relative mt-8 aspect-[3.5/4] w-64 bg-zinc-100 shadow-lg transition-transform delay-75 duration-150 ease-linear hover:z-10 lg:hover:scale-125"
      style={{ clipPath: polygon }}
    >
      <Image
        src={photo}
        fill
        alt=""
        style={{ objectFit: "cover" }}
        sizes="(max-width: 768px) 100vw,
               (max-width: 1200px) 50vw,
               33vw"
      />
    </div>
  );
}

export default function Marchendy() {
  const photoSrc = "/TD/Marchendy.jpg";
  return (
    <>
      <div className="bg-zinc-600 bg-[url(/noise.avif)] bg-blend-multiply">
        <div className="container flex items-center justify-between space-y-10 px-4 py-12">
          <div className="space-y-4">
            <div className="text-2xl font-bold uppercase text-zinc-200">
              Marchendy Nugraha Saputra
            </div>
            <div className="mt-2 text-xl font-bold text-yellow-600">
              Teknik Elektronika - 2022
            </div>
            <div className="mt-2 font-medium text-yellow-600">Programmer</div>
            <ProfileFrame photo={photoSrc} />
          </div>
        </div>
      </div>
    </>
  );
}
