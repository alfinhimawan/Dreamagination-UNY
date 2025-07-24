import {
  Contact,
  Division,
  Gallery,
  Hero,
  Header,
  Sponsor,
  About,
} from "~/components";
import ScrollAnimationWrapper from "~/components/ui/ScrollAnimationWrapper";
import ScrollToTop from "~/components/ui/ScrollToTop";
import Footer from "~/components/layout/Footer";

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <ScrollAnimationWrapper animation="slideUp" delay={0.1}>
      <div className="flex justify-center">
        <h2 className="heading-line font-header text-center text-4xl font-bold uppercase text-sky-900">
          {children}
        </h2>
      </div>
    </ScrollAnimationWrapper>
  );
}

export default function Home() {
  return (
    <>
      <Header variant="home" />
      <div className="relative z-0 bg-white">
        <Hero />

        {/* About Section */}
        <section className="relative z-10 bg-gray-100 py-20 border-b border-zinc-200">
          <div className="container" id="about-section">
            <ScrollAnimationWrapper animation="fadeIn" delay={0.2}>
              <About />
            </ScrollAnimationWrapper>
          </div>
        </section>

        {/* Divisions Section */}
        <section className="relative z-10 bg-[#f9fafb] py-20 overflow-hidden border-b border-zinc-200">
          <div className="container relative z-10" id="divisions">
            <Heading>
              <span className="text-black">Our</span> divisions
            </Heading>
            <Division />
          </div>
        </section>

        {/* Gallery Section */}
        <section className="relative z-10 bg-gray-100 py-20 border-b border-zinc-200">
          <div className="container" id="gallery">
            <Heading>Gallery</Heading>
            <Gallery />
          </div>
        </section>

        {/* Contact Section */}
        <section className="relative z-10 bg-white py-20 border-b border-zinc-200">
          <div className="container" id="contact">
            <Heading>
              Contact <span className="text-black">Us</span>
            </Heading>
            <ScrollAnimationWrapper animation="slideUp" delay={0.3}>
              <Contact />
            </ScrollAnimationWrapper>
          </div>
        </section>

        {/* Sponsor Section */}
        <section className="relative z-10 bg-gradient-to-r from-gray-100 to-gray-100 py-12">
          <ScrollAnimationWrapper animation="slideUp" delay={0.1}>
            <div className="flex justify-center mb-2">
              <h2 className="font-header text-center text-4xl font-bold uppercase">
                <span className="text-black">SUPPORTED</span> <span className="text-sky-900">BY</span>
              </h2>
            </div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper animation="fadeIn" delay={0.2}>
            <div className="text-center mb-8">
              <p className="text-gray-600">Trusted by leading organizations</p>
            </div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper animation="slideUp" delay={0.3}>
            <Sponsor />
          </ScrollAnimationWrapper>
        </section>
      </div>
      
      {/* Footer */}
      <Footer />
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </>
  );
}
