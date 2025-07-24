import { IoLogoWhatsapp } from "react-icons/io5";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaMailBulk,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  return (
    <div className="mt-16 grid grid-flow-row items-center gap-8 px-4 md:grid-cols-2 md:px-12">
      <div className="md:order-2">
        <iframe
          className="aspect-[4/3] w-full rounded-xl border-4 border-gray-200 shadow-xl"
          loading="lazy"
          title="Robotik UNY"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Robotika+UNY&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
      <div className="md:order-1">
        <div className="mb-6">
          <h3 className="mb-2 flex items-center text-2xl font-bold text-primary">
            <FaMapMarkerAlt className="mr-2 text-accent" />
            Our Location
          </h3>
          <div className="text-sm leading-relaxed text-gray-600 md:text-base">
            Sekertariat Tim Robot Terbang UNY, Fakultas Teknik, UNY, Karang
            Gayam, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa
            Yogyakarta 55281
          </div>
        </div>

        <div className="mb-6">
          <h4 className="mb-4 text-lg font-semibold text-primary">
            Connect With Us
          </h4>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <a
              href="https://instagram.com/dreamagination.uny"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center rounded-full bg-gradient-to-r from-pink-500 to-pink-600 p-3 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <FaInstagram size={20} />
              <span className="ml-2 text-sm font-medium">
                dreamagination.uny
              </span>
            </a>
            <a
              href="https://youtube.com/@TimRobotTerbangUNY"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center rounded-full bg-gradient-to-r from-red-500 to-red-600 p-3 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <FaYoutube size={20} />
              <span className="ml-2 text-sm font-medium">
                TimRobotTerbangUNY
              </span>
            </a>
            <a
              href="https://linkedin.com/company/dreamagination"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center rounded-full bg-gradient-to-r from-blue-600 to-blue-700 p-3 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <FaLinkedin size={20} />
              <span className="ml-2 text-sm font-medium">Dreamagination</span>
            </a>
            <a
              href="mailto:dreamagination@uny.ac.id"
              className="flex items-center rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 p-3 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <FaMailBulk size={20} />
              <span className="ml-2 text-sm font-medium">Email Us</span>
            </a>
            <a
              href="https://wa.me/+6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-1 flex items-center rounded-full bg-gradient-to-r from-green-500 to-green-600 p-3 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg sm:col-span-2"
            >
              <IoLogoWhatsapp size={20} />
              <span className="ml-2 text-sm font-medium">
                WhatsApp Dreamagination
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
