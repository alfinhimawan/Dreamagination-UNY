import Image from "next/image";
import Header from "~/components/Header";

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

interface IProfile {
  image: string;
  nama: string;
  prodi: string;
}

function ProfileGroup({ data }: { data: IProfile[] }) {
  return (
    <div className="flex flex-nowrap gap-4 overflow-x-auto lg:flex-wrap lg:overflow-visible">
      {data.map((person) => (
        <div key={person.nama}>
          <ProfileFrame photo={person.image} />
          <div className="mt-2 text-xl font-bold uppercase text-zinc-200">
            {person.nama}
          </div>
          <div className="font-medium text-yellow-600">{person.prodi}</div>
        </div>
      ))}
    </div>
  );
}

export default function Subteam({ params }: { params: { team: string } }) {
  const Ketua = [
    {
      image: "/RJ/Evandra A.JPG",
      nama: "Evandra Aryadinatha",
      prodi: "Pend. Teknik Mekatronika - 2022",
    },
  ];

  const Manager = [
    {
      image: "/",
      nama: "Sema Auria Amanda Saputri",
      prodi: "Pend. Teknik Elektro - 2022",
    },
    {
      image: "/RJ/Rahmania.JPG",
      nama: "Rahmania Putri Nabila",
      prodi: "Kimia - 2023",
    },
  ];

  const Mekanik = [
    {
      image: "/RJ/Nuru Afifah.JPG",
      nama: "Nurul Afifah",
      prodi: "Teknik Elektronika - 2021",
    },
    {
      image: "/RJ/Garan.JPG",
      nama: "Muhammad Garan Prakoso",
      prodi: "Teknik Elektronika - 2022",
    },

    {
      image: "/RJ/Agam Faulana.JPG",
      nama: "Agam Faulana",
      prodi: "Teknik Elektronika - 2022",
    },

    {
      image: "/",
      nama: "Bagas Ramadhan",
      prodi: "Pend. Teknik Mekatronika - 2022",
    },
    {
      image: "/",
      nama: "Reza Aldi Wibowo",
      prodi: "Pend. Teknik Elektro - 2022",
    },
    {
      image: "/",
      nama: "Rizki Farhan Firmansyah",
      prodi: "Pend. Teknik Mekatronika - 2023",
    },
    {
      image: "/",
      nama: "Faidhullah",
      prodi: "Teknik Elektro - 2023",
    },
    {
      image: "/RJ/Muhammad Emilul.JPG",
      nama: "Muhammad Emilul Fata",
      prodi: "Teknik Elektro - 2023",
    },
    {
      image: "/RJ/Bimo.JPG",
      nama: "Aryo Bimo Pamungkas",
      prodi: "Teknologi Informasi - 2023",
    },
  ];

  const Pilot = [
    {
      image: "/RJ/M Arya.JPG",
      nama: "Muhammad Arya Widiantoro",
      prodi: "Teknik Elektronika - 2021",
    },
    {
      image: "/",
      nama: "Hafidz Rafli Fadhlillah",
      prodi: "Pend. Teknik Mekatronika - 2021",
    },
    {
      image: "/RJ/Ibrahim.jpeg",
      nama: "Muhammad Ibrahim Musyaffa",
      prodi: "Teknik Elektronika - 2022",
    },
  ];

  const Elektronik = [
    {
      image: "/RJ/Zaid.JPG",
      nama: "Abdul Zaid Fatullah",
      prodi: "Pend. Teknik Mekatronika - 2021",
    },
    {
      image: "/RJ/Singgih.JPG",
      nama: "Singgih Yogo Pamungkas",
      prodi: "Teknik Elektro - 2023",
    },
    {
      image: "/",
      nama: "Calvin Andra Maulana",
      prodi: "Teknik Elektronika - 2023",
    },
  ];

  return (
    <>
      <div className="bg-gradient-to-br from-zinc-950 to-zinc-950 text-zinc-300">
        <div className="container px-4 py-12">
          <div className="relative h-32 w-32">
            <Image className="drop-shadow-white" src="/RJ.png" fill alt="" />
          </div>
          <div className="mt-6">
            <h1 className="font-header text-6xl font-bold uppercase text-zinc-300">
              Rejection
            </h1>
            <div className="font-header text-xl font-medium uppercase text-yellow-600">
              Racing Plane divison
            </div>
            <div className="mt-4 lg:text-lg">
              Berkonsentrasi pada misi Fast and On Track yaitu cepat dan tetap
              pada lintasan secara autonomus dan manual.
            </div>
          </div>
        </div>
      </div>

      <div className="bg-zinc-600 bg-[url(/noise.avif)] bg-blend-multiply">
        <div className="container space-y-10 px-4 py-12">
          <div>
            <RoleHeading>Ketua</RoleHeading>
            <ProfileGroup data={Ketua} />
          </div>
          <div>
            <RoleHeading>Manager</RoleHeading>
            <ProfileGroup data={Manager} />
          </div>
          <div>
            <RoleHeading>Mekanik</RoleHeading>
            <ProfileGroup data={Mekanik} />
          </div>
          <div>
            <RoleHeading>Pilot</RoleHeading>
            <ProfileGroup data={Pilot} />
          </div>
          <div>
            <RoleHeading>Elektronik</RoleHeading>
            <ProfileGroup data={Elektronik} />
          </div>
        </div>
      </div>
    </>
  );
}
