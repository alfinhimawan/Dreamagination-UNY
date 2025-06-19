import {
  Contact,
  Division,
  Gallery,
  Hero,
  Header,
  Sponsor,
} from "~/components/home";

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center">
      <h2 className="heading-line font-header text-center text-4xl font-bold uppercase text-sky-900">
        {children}
      </h2>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />

      <div className="relative z-0 bg-zinc-400 bg-[url(/noise.avif)] bg-blend-multiply">
        <Hero />

        <div className="container -mt-20 space-y-32 rounded-t-3xl border bg-zinc-200 py-16 shadow-xl">
          <div className="px-4" id="divisons">
            <Heading>
              <span className="text-black">Our</span> divisions
            </Heading>
            <Division />
          </div>

          <div className="px-2" id="gallery">
            <Heading>Gallery</Heading>
            <Gallery />
          </div>
          <div className="  " id="sponsor">
            <Heading>
              Supported <span className="text-black">BY</span>
            </Heading>
            <Sponsor />
          </div>

          <div className="bg-robot" id="contact">
            <Heading>
              Contact <span className="text-black">Us</span>
            </Heading>
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
}
