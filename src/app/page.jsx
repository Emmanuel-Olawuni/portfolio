import About from "@/components/About";
import AnchorBtn from "@/components/AnchorBtn";
import Contact from "@/components/Contact";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <section>
          <Hero />
        </section>
        <AnchorBtn />
        <section id="about">
          <About />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
      {/* <CustomCursor /> */}
    </>
  );
}
