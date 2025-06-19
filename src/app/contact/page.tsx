import { GrContact } from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaInstagram, FaYoutube, FaLinkedin, FaMailBulk } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <div className="bg-gradient-to-br from-zinc-950 to-zinc-950 text-zinc-300">
        <div className="container px-4 py-12">
          <GrContact size={72} />
          <div className="mt-6">
            <h1 className="font-header text-6xl font-bold uppercase text-zinc-300">
              Contact us
            </h1>
            <div className="font-header text-xl font-medium uppercase text-yellow-600">
              Dreamagination - Aerialroboticteam
            </div>
          </div>
        </div>
      </div>

      <div className="bg-zinc-600 bg-[url(/noise.avif)] py-12 bg-blend-multiply">
        <div className="container border border-zinc-500 px-4 py-12 backdrop-blur lg:rounded-3xl">
          <div className="grid grid-flow-row items-center gap-8 px-4 md:grid-cols-2 md:px-12">
            <div className="md:order-2">
              <iframe
                className="aspect-[4/3] w-full rounded-xl border-4 border-white shadow-xl"
                loading="lazy"
                title="Robotik UNY"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Robotika+UNY&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
            <div className="md:order-1">
              <div className="font-header text-4xl font-semibold uppercase text-zinc-300">
                Location
              </div>
              <div className="mt-6 text-sm text-zinc-100 md:text-base">
                Sekertariat Tim Robot Terbang UNY, Fakultas Teknik, UNY, Karang
                Gayam, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah
                Istimewa Yogyakarta 55281
              </div>
              <div className="mt-8 flex grid grid-cols-2 gap-4">
                <div className="mt-8 flex cursor-pointer rounded-full bg-pink-600 p-2 text-white">
                  <FaInstagram size={24} />
                  <span className="ml-2">dreamagination.uny</span>
                </div>
                <div className="mt-8 flex cursor-pointer rounded-full bg-red-600 p-2 text-white">
                  <FaYoutube size={24} />
                  <span className="ml-2">@TimRobotTerbangUNY</span>
                </div>
                <div className="mt-8 flex cursor-pointer rounded-full bg-blue-600 p-2 text-white">
                  <FaLinkedin size={24} />
                  <span className="ml-2">Dreamagination</span>
                </div>
                <div className="mt-8 flex cursor-pointer rounded-full bg-yellow-600 p-2 text-white">
                  <FaMailBulk size={24} />
                  <span className="ml-2">Dreamagination</span>
                </div>
                <div className="mt-8 flex cursor-pointer rounded-full bg-green-600 p-2 text-white">
                  <IoLogoWhatsapp size={24} />
                  <span className="ml-2">Dreamagination</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
