import Logo from "../Logo";

export default function Hero() {
  return (
    <div className="bg-hero flex min-h-[600px] items-center justify-start bg-blue-900 bg-[url('/banner.avif')] bg-cover bg-center pb-32 bg-blend-multiply">
      <div className="container flex min-h-full w-full flex-col items-center px-4 pt-32 lg:flex-row">
        <div className="order-2 md:px-12 lg:order-1">
          <h1 className="font-header text-4xl font-black uppercase text-white lg:text-6xl">
            Fly your dream!
          </h1>
          <p className="mt-4 text-sm text-white md:text-base lg:max-w-[60ch] lg:text-lg">
            Dreamagination adalah Tim Robot Terbang Divisi Robotika UKM Rekayasa
            Teknologi UNY yang berfokus kepada riset tentang wahana UAV
            (Unmanned Aerial Vehicle) atau pesawat tanpa awak. Terdiri dari 5
            divisi dan berdiri sejak tahun 2015 hingga sekarang.
          </p>
          <button className="mt-12 cursor-pointer rounded-xl border border-yellow-500/70 bg-gradient-to-t from-yellow-600 via-yellow-500 to-yellow-500 px-4 py-3 text-sm font-semibold uppercase text-white hover:scale-90 lg:px-6 lg:py-3">
            Let know us
          </button>
        </div>
        <div className="order-1 mx-auto hidden h-96 w-96 text-white md:block lg:order-2">
          <Logo />
        </div>
      </div>
    </div>
  );
}
