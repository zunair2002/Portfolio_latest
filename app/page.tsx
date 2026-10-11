"use client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ReflectBackground from "./demoprojects/wave";

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 -z-10 bg-[#06080d]" />

      <div className="fixed inset-0 -z-10 pointer-events-none">
        <ReflectBackground />
      </div>

      <main className="relative z-10 w-full overflow-x-hidden">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Footer />
      </main>
    </>
  );
}
