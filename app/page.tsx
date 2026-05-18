import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import "./globals.css";
import Footer from "./components/Footer";

const pageShell =
  "w-full max-w-6xl mx-auto px-6 sm:px-8 md:px-10 flex flex-col items-center";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center">
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center py-16 md:py-24">
        <div className={pageShell}>
          <Navbar />
          <div className="w-full flex justify-center">
            <Hero />
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center py-16 md:py-24">
        <div className={pageShell}>
          <About />
        </div>
      </section>

      <section className="w-full flex justify-center py-20 md:py-24" style={{marginTop: "60px"}}>
        <div className={pageShell}>
          <Experience />
        </div>
      </section>

      <section className="w-full flex justify-center py-16 md:py-24 overflow-x-hidden">
        <div className={pageShell}>
          <Skills />
        </div>
      </section>

      <section className="w-full flex justify-center py-16 md:py-24" style={{marginTop: "60px"}}>
        <div className={pageShell}>
          <Projects />
        </div>
      </section>

      <section className="w-full flex justify-center pb-20 md:pb-28" style={{marginTop: "60px"}}>
        <div className={pageShell}>
          <Footer />
        </div>
      </section>
    </main>
  );
}
