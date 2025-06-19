import Image from "next/image";
import { PiGooglePhotosLogo } from "react-icons/pi";

interface Gallery {
  image: string;
  year: string;
  title: string;
}

function GalleryGroup({ data }: { data: Gallery[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {data.map((gallery) => (
        <div
          key={gallery.title}
          className="group relative aspect-[4/3] overflow-hidden shadow-lg"
        >
          <div className="relative h-full w-full bg-zinc-100">
            <Image
              className="h-auto w-auto scale-110 transition-transform duration-200 ease-in-out group-hover:scale-100"
              src={gallery.image}
              fill
              alt=""
            />
          </div>
          <div className="absolute bottom-0 hidden w-full bg-black/70 p-4 group-hover:block">
            <span className="text-sm font-semibold text-yellow-500">
              {gallery.year}
            </span>
            <h3 className="text-white">{gallery.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Gallery() {
  const data = [
    {
      image: "/gallery/1.jpg",
      year: "2024",
      title: "Dreamagination - Seleksi Wilayah KRTI 2024",
    },
    {
      image: "/gallery/2.jpeg",
      year: "2024",
      title: "TD Division - Seleksi Wilayah KRTI 2024",
    },
    {
      image: "/gallery/3.jpeg",
      year: "2024",
      title: "LELA Division - Seleksi Wilayah KRTI 2024",
    },
    {
      image: "/gallery/4.jpg",
      year: "2024",
      title: "LELA Division - Seleksi Wilayah KRTI 2024",
    },
    {
      image: "/gallery/5.jpg",
      year: "2024",
      title: "TD Division - Seleksi Wilayah KRTI 2024",
    },
    {
      image: "/gallery/6.jpg",
      year: "2024",
      title: "TD Division - Seleksi Wilayah KRTI 2024",
    },
    {
      image: "/gallery/7.jpg",
      year: "2024",
      title: "TD Division - Seleksi Wilayah KRTI 2024",
    },
  ];

  return (
    <>
      <div className="bg-gradient-to-br from-zinc-950 to-zinc-950 text-zinc-300">
        <div className="container px-4 py-12">
          <PiGooglePhotosLogo size={72} />
          <div className="mt-6">
            <h1 className="font-header text-6xl font-bold uppercase text-zinc-300">
              Gallery
            </h1>
            <div className="font-header text-xl font-medium uppercase text-yellow-600">
              Dreamagination - Photo collections
            </div>
          </div>
        </div>
      </div>

      <div className="bg-zinc-600 bg-[url(/noise.avif)] py-12 bg-blend-multiply">
        <div className="container px-4 py-12">
          <GalleryGroup data={data} />
        </div>
      </div>
    </>
  );
}
