"use client";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import "./globals.css";
import Footer from "./components/Footer";
import ReflectBackground  from "./demoprojects/wave";

const pageShell = "w-full max-w-5xl mx-auto px-4 md:px-6";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* Fallback bg before canvas mounts */}
      <div className="fixed inset-0 -z-10"/>

      {/* Wave background — fixed behind everything, no children */}
      {mounted && (
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <ReflectBackground />
        </div>
      )}

      {/* Scrollable content — completely separate from background */}
      <main className="relative z-10 w-full flex flex-col items-center overflow-x-hidden">
        <div className="w-full max-w-6xl px-3 md:px-6">

          <section className="w-full flex flex-col items-center justify-center min-h-screen py-12 md:py-24">
            <div className={pageShell}>
              <Navbar />
              <Hero />
            </div>
          </section>

          <section className="w-full flex justify-center py-12 md:py-24">
            <div className={pageShell} style={{ marginTop: "60px" }}>
              <About />
            </div>
          </section>

          <section
            className="w-full flex justify-center py-16 md:py-24 px-4"
            style={{ marginTop: "60px" }}
          >
            <div className={pageShell}>
              <Experience />
            </div>
          </section>

          <section
            className="w-full flex justify-center py-16 md:py-24 overflow-x-hidden"
            style={{ marginTop: "60px" }}
          >
            <div className={pageShell}>
              <Skills />
            </div>
          </section>

          <section
            className="w-full flex justify-center py-16 md:py-24"
            style={{ marginTop: "100px" }}
          >
            <div className={pageShell}>
              <Projects />
            </div>
          </section>

          <section
            className="w-full flex justify-center py-8 md:py-12"
            style={{ marginTop: "60px", marginBottom: "40px" }}
          >
            <div className={pageShell}>
              <Footer />
            </div>
          </section>

        </div>
      </main>
    </>
  );
}