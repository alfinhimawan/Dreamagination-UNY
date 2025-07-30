import {
  Contact,
  Division,
  Gallery,
  Hero,
  Header,
  Sponsor,
  About,
  Achievements,
  AchievementsElegant,
} from "~/components";
import ScrollAnimationWrapper from "~/components/ui/ScrollAnimationWrapper";
import ScrollToTop from "~/components/ui/ScrollToTop";
import Footer from "~/components/layout/Footer";

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <ScrollAnimationWrapper animation="slideUp" delay={0.1}>
      <div className="mb-16 flex justify-center">
        <h2
          className="heading-line font-header bg-gradient-to-r from-primary via-primary to-accent 
                      bg-clip-text text-center text-5xl font-bold leading-tight tracking-tight 
                      text-transparent lg:text-6xl"
        >
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
        <section className="relative z-10 border-b border-zinc-200 bg-gray-100 py-20">
          <div className="container" id="about-section">
            <Heading>About Us</Heading>
            <ScrollAnimationWrapper animation="fadeIn" delay={0.2}>
              <About />
            </ScrollAnimationWrapper>
          </div>
        </section>

        {/* Divisions Section */}
        <section className="relative z-10 overflow-hidden border-b border-zinc-200 bg-[#f9fafb] py-20">
          <div className="container relative z-10" id="divisions">
            <Heading>Our Divisions</Heading>
            <Division />
          </div>
        </section>

        {/* Achievements Section */}
        <section
          className="relative z-10 border-b border-zinc-200 bg-white py-20"
          id="achievements"
        >
          <AchievementsElegant />
        </section>

        {/* Gallery Section */}
        <section className="relative z-10 border-b border-zinc-200 bg-gray-100 py-20">
          <div className="container" id="gallery">
            <Heading>Gallery</Heading>
            <Gallery />
          </div>
        </section>

        {/* Contact Section */}
        <section className="relative z-10 border-b border-zinc-200 bg-white py-20">
          <div className="container" id="contact">
            <Heading>Contact Us</Heading>
            <ScrollAnimationWrapper animation="slideUp" delay={0.3}>
              <Contact />
            </ScrollAnimationWrapper>
          </div>
        </section>

        {/* Sponsor Section */}
        <section className="relative z-10 bg-gradient-to-r from-gray-100 to-gray-100 py-12">
          <Heading>Supported By</Heading>
          <ScrollAnimationWrapper animation="fadeIn" delay={0.2}>
            <div className="mb-8 text-center">
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
