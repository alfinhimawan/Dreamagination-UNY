import { GrContact } from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io5";

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
              <button className="mt-8 flex cursor-pointer items-center gap-2 rounded-xl border border-yellow-500/70 bg-gradient-to-t from-yellow-600 via-yellow-500 to-yellow-500 px-4 py-3 text-sm font-semibold uppercase text-white hover:scale-90 md:mt-12 lg:px-6 lg:py-3">
                <IoLogoWhatsapp size={24} />
                <span>Contact Us</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
