import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";

const footer_menu = [
  { name: "Division", path: "/subteam" },
  { name: "Achievement", path: "/achievements" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 bg-zinc-800">
      <div className="mx-auto max-w-screen-xl px-4 py-12">
        <div className="grid gap-8 space-y-8 md:grid-cols-3 md:space-y-0">
          <div>
            <div className="w-32 text-zinc-300">
              <Logo />
            </div>
            <div className="mt-8 text-sm text-zinc-200">
              Divisi Robotika UNY yang fokus kepada riset tentang wahana UAV
              (Unmanned Aerial Vehicle) atau pesawat tanpa awak.
            </div>
          </div>
          <ul className="space-y-2 text-zinc-200">
            {footer_menu.map((menu) => (
              <li key={menu.name}>
                <Link className="hover:text-yellow-600" href={menu.path}>
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
          <div>
            <div className="font-header text-xl font-semibold uppercase text-zinc-200">
              Community <span className="text-yellow-600">partner</span>
            </div>
            <div className="mt-6 flex shrink-0 gap-4">
              <Image src="/infinite.png" width={64} height={64} alt="" />
              <Image src="/robotika.svg" width={64} height={64} alt="" />
              <Image src="/restek.png" width={75} height={30} alt="" />
              <Image
                className="self-center"
                src="/uny.png"
                width={72}
                height={72}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl border-t border-zinc-700 p-4 text-sm text-zinc-300">
        Dreamagination UNY a part of Robotic UNY | Copyright{" "}
        {new Date().getFullYear()}
      </div>
    </footer>
  );
}
