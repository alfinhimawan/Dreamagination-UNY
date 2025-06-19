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

function ProfileFrame({ photo, href }: { photo: string; href: string }) {
  const polygon =
    "polygon(20% 0%,100% 0,100% 20%,100% 80%,80% 100%,0 100%,0% 80%,0% 20%";
  return (
    <Link href={href}>
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
    </Link>
  );
}

interface IProfile {
  image: string;
  nama: string;
  prodi: string;
  link: string;
}

function ProfileGroup({ data }: { data: IProfile[] }) {
  return (
    <div className="flex flex-nowrap gap-4 overflow-x-auto lg:flex-wrap lg:overflow-visible">
      {data.map((person) => (
        <div key={person.nama}>
          <ProfileFrame photo={person.image} href={person.link} />
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
      image: "/TD/Zia Akmal.JPG",
      nama: "Zia Akmal Ahdafi",
      prodi: "Teknik Manufaktur - 2022",
      link: "",
    },
  ];

  const Manager = [
    {
      image: "/TD/Dzikra.JPG",
      nama: "Dzikra Nura Dien",
      prodi: "Pend. Teknik Elektronika - 2021",
      link: "",
    },
    {
      image: "/TD/Nurani.JPG",
      nama: "Nurani Rosyid",
      prodi: "Pend. Akuntansi - 2021",
      link: "",
    },
    {
      image: "/TD/Nayla.JPG",
      nama: "Nayla Citra Anindita",
      prodi: "Pend. Teknik Mekatronika - 2022",
      link: "",
    },
    {
      image: "/TD/Andina.JPG",
      nama: "Andina Nur Aisyah",
      prodi: "Pend. Teknik Mekatronika - 2023",
      link: "",
    },
  ];

  const Programmer = [
    {
      image: "/TD/Damar.JPG",
      nama: "Damar Albaribin Syamsu",
      prodi: "Pend. Teknik Informatika - 2021",
      link: "",
    },
    {
      image: "/TD/Rubens.JPG",
      nama: "Rubens Juristanto",
      prodi: "Teknologi Informasi - 2021",
      link: "",
    },
    {
      image: "/TD/Lizzaqi.JPG",
      nama: "Lizzaqi Faiq Hanafi",
      prodi: "Pend. Teknik Elektro - 2022",
      link: "",
    },
    {
      image: "/TD/Marchendy.jpg",
      nama: "Marchendy Nugraha Saputra",
      prodi: "Teknik Elektronika - 2022",
      link: "/",
    },
    {
      image: "/TD/Furqon.JPG",
      nama: "Furqon Taufiq Hidayat",
      prodi: "Teknik Elektro - 2022",
      link: "",
    },
    {
      image: "/TD/Rizal.JPG",
      nama: "Muhammad Rizal Nurhandaru",
      prodi: "Teknik Elektro - 2023",
      link: "",
    },
  ];

  const Mekanik = [
    {
      image: "/TD/Pius.JPG",
      nama: "Pius Calvin Alfian Nugroho",
      prodi: "Teknik Manufaktur - 2022",
      link: "",
    },
    {
      image: "/TD/Dani.JPG",
      nama: "Syahrial Dani Wibowo",
      prodi: "Teknik Elektronika - 2021",
      link: "",
    },

    {
      image: "/TD/Faldi.JPG",
      nama: "Muhamad Rifaldi",
      prodi: "Pend. Teknik Elektro - 2023",
      link: "",
    },

    {
      image: "/TD/Ican.JPG",
      nama: "Ichsan Abror",
      prodi: "Pend. Teknik Mekatronika - 2023",
      link: "",
    },
    {
      image: "/TD/Willy.JPG",
      nama: "Willy Pratama",
      prodi: "Pend. Teknik Elektro - 2023",
      link: "",
    },
    {
      image: "/TD/Ditya.JPG",
      nama: "Ditya Pratama",
      prodi: "Pend. Teknik Mekatronika - 2023",
      link: "",
    },
    {
      image: "/TD/Afwa.JPG",
      nama: "Ahmad Afwa Azmiddin",
      prodi: "Teknik Elektronika - 2023",
      link: "",
    },
    {
      image: "/TD/Hisyam.JPG",
      nama: "Hisyam Fadhila Rahman",
      prodi: "Teknik Elektronika - 2023",
      link: "",
    },
    {
      image: "/TD/Kurniawan.JPG",
      nama: "Kurniawan Sanjiwani",
      prodi: "Teknik Elektronika - 2023",
      link: "",
    },
    {
      image: "/TD/Erpan.JPG",
      nama: "Muhammad Irfan Aprianto",
      prodi: "Teknik Elektronika - 2023",
      link: "",
    },
  ];

  const Pilot = [
    {
      image: "/TD/Akbar.JPG",
      nama: "Muhammad Rizqulloh Akbar",
      prodi: "Teknik Elektro - 2021",
      link: "",
    },
  ];

  const Elektronik = [
    {
      image: "/TD/Bayu.JPG",
      nama: "Bayu Angga Rahadi",
      prodi: "Teknik Elektronika - 2021",
      link: "",
    },
    {
      image: "/TD/Aldi.JPG",
      nama: "Aldhi Febrianto",
      prodi: "Teknik Elektronika - 2021",
      link: "",
    },
    {
      image: "/TD/Bagus.JPG",
      nama: "Bagus Rian Maulana",
      prodi: "Pend. Teknik Elektronika - 2021",
      link: "",
    },
    {
      image: "/TD/Surya.jpg",
      nama: "Surya Agung Saputra",
      prodi: "Pend. Teknik Informatika - 2021",
      link: "",
    },
    {
      image: "/TD/Haikal.JPG",
      nama: "Raihan Haikal Abrar",
      prodi: "Pend. Teknik Elektronika - 2021",
      link: "",
    },
    {
      image: "/TD/Surya.jpg",
      nama: "Surya Agung Saputra",
      prodi: "Pend. Teknik Informatika - 2021",
      link: "",
    },
    {
      image: "/TD/Ahsanti.jpg",
      nama: "Ahsanti Fauzia Kamalia",
      prodi: "Pend. Teknik Mekatronika - 2022",
      link: "",
    },
    {
      image: "/TD/Haidar.JPG",
      nama: "Mohamad Haidar Syaifullah R.",
      prodi: "Teknik Elektro - 2022",
      link: "",
    },
    {
      image: "/TD/Febri.JPG",
      nama: "Febriyanisa Fitri Ilahi",
      prodi: "Pendidikan PKN - 2022",
      link: "",
    },
    {
      image: "/TD/Adit.JPG",
      nama: "Adit Setyo Nugroho",
      prodi: "Pend. Teknik Elektro - 2023",
      link: "",
    },
    {
      image: "/TD/Fahmi.JPG",
      nama: "Muh. Fahmi Eka Pramudya",
      prodi: "Teknik Elektro - 2023",
      link: "",
    },
    {
      image: "/TD/Akhdan.JPG",
      nama: "Muhammad Akhdan Nafi",
      prodi: "Pend. Teknik Elektronika - 2023",
      link: "",
    },
  ];

  const CADDesign = [
    {
      image: "/TD/Yudo.JPG",
      nama: "Raihan Yudo Haryana",
      prodi: "Teknik Manufaktur - 2022",
      link: "",
    },
    {
      image: "/TD/kent-test.jpeg",
      nama: "Kent Saintica Primasatya",
      prodi: "Pend. Teknik Mesin - 2022",
      link: "",
    },
    {
      image: "/TD/Verrel.JPG",
      nama: "Verell Jeremy Arden",
      prodi: "Teknik Manufaktur - 2022",
      link: "",
    },
  ];

  const Media = [
    {
      image: "/TD/Anggun.JPG",
      nama: "Anggun Nur Azizah",
      prodi: "Pend. Teknik Mekatronika - 2022",
      link: "",
    },
    {
      image: "/TD/Verrel.JPG",
      nama: "Verell Jeremy Arden",
      prodi: "Teknik Manufaktur - 2022",
      link: "",
    },
    {
      image: "/TD/Edward.JPG",
      nama: "Muhammad Edward Budiyono",
      prodi: "Pend. Teknik Mekatronika - 2023",
      link: "",
    },
  ];

  return (
    <>
      <div className="bg-gradient-to-br from-zinc-950 to-zinc-950 text-zinc-300">
        <div className="container px-4 py-12">
          <div className="relative h-32 w-32">
            <Image className="drop-shadow-white" src="/TD.png" fill alt="" />
          </div>
          <div className="mt-6">
            <h1 className="font-header text-6xl font-bold uppercase text-zinc-300">
              Az - Zawra Biantara
            </h1>
            <div className="font-header text-xl font-medium uppercase text-yellow-600">
              Technology Development divison
            </div>
            <div className="mt-4 lg:text-lg">
              Berkonsentrasi di bidang pengembangan teknologi UAV yang terpecah
              menjadi 4 tema pengembangan yaitu Airframe Innovation, Propulsion
              System, Flight Controller Development dan Ground Control Station.
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
            <RoleHeading>Programmer</RoleHeading>
            <ProfileGroup data={Programmer} />
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
          <div>
            <RoleHeading>CAD Design</RoleHeading>
            <ProfileGroup data={CADDesign} />
          </div>
          <div>
            <RoleHeading>Media</RoleHeading>
            <ProfileGroup data={Media} />
          </div>
        </div>
      </div>
    </>
  );
}
