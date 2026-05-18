import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import "./globals.css";
import Footer from "./components/Footer";

const pageShell = "w-full max-w-5xl mx-auto px-4 md:px-6";

export default function Home() {
  return (
    
<main className="w-full flex flex-col items-center overflow-x-hidden">
  <div className="w-full max-w-6xl px-3 md:px-6">
  <section className="w-full flex flex-col items-center justify-center min-h-screen py-12 md:py-24">
    <div className={pageShell}>
      <Navbar />
      <Hero />
    </div>
  </section>

  <section className="w-full flex justify-center py-12 md:py-24">
    <div className={pageShell}>
      <About />
    </div>
  </section>

<section className="w-full flex justify-center py-16 md:py-24 mt-8 md:mt-14 px-4" style={{marginTop: '60px'}}>
  <div className={pageShell}>
    <Experience />
  </div>
</section>

<section className="w-full flex justify-center py-16 md:py-24 overflow-x-hidden" style={{marginTop: '40px'}}>
    <div className={pageShell}>
      <Skills />
    </div>
  </section> 

  <section className="w-full flex justify-center py-16 md:py-24 mt-8 md:mt-14" style={{marginTop: '30px'}}>
    <div className={pageShell}>
      <Projects />
    </div>
  </section>

<section className="w-full flex justify-center py-8 md:py-12 mt-4 md:mt-8" style={{marginTop: '60px', marginBottom: '40px'}}>
  <div className={pageShell}>
    <Footer />
  </div>
</section>  
 </div>
</main>

  );
}
