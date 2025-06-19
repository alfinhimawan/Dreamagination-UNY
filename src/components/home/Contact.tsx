import { IoLogoWhatsapp } from "react-icons/io5";
import { FaInstagram, FaYoutube, FaLinkedin, FaMailBulk } from "react-icons/fa"; // Import ikon sosial media

export default function Contact() {
  return (
    <div className="mt-16 grid grid-flow-row items-center gap-8 px-4 md:grid-cols-2 md:px-12">
      <div className="md:order-2">
        <iframe
          className="aspect-[4/3] w-full rounded-xl border-4 border-white shadow-xl"
          loading="lazy"
          title="Robotik UNY"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Robotika+UNY&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
      <div className="md:order-1">
        <div className="text-sm md:text-base">
          Sekertariat Tim Robot Terbang UNY, Fakultas Teknik, UNY, Karang Gayam,
          Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta
          55281
        </div>

        <div className="mt-8 flex grid grid-cols-2 gap-4">
          
          <div className="mt-8 flex cursor-pointer rounded-full bg-green-600 p-2 text-white">
            <IoLogoWhatsapp size={24} />
            <span className="ml-2">Dreamagination</span>
          </div>
        </div>
      </div>
    </div>
  );
}
