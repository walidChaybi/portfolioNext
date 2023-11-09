import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Work from "@/components/Work";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { useEffect } from "react";
import StarsCanvas from "@/components/StarBackground";

export default function Home() {
  const cursorHanler = () => {
    if (typeof window !== "undefined") {
      let cursor = document.querySelector(".cursor");
      let cursor2 = document.querySelector(".cursor2");

      document.addEventListener("mousemove", (e) => {
        cursor.style.cssText =
          cursor2.style.cssText = ` left: ${e.clientX}px; top: ${e.clientY}px;
        `;
      });
    }
  };

  cursorHanler();

  return (
    <div className=" absolute scrollbar scrollbar-track-gray-800 scrollbar-thumb-blue-900 h-screen w-full overflow-x-hidden z-0 scroll-auto ">
      <Head>
        <meta property="og:title" content="Chaybi Walid's Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.chaybi.com" />
        <meta
          property="og:image"
          content="https://chaybi.com/_next/image?url=%2Fechaybi.png&w=256&q=75"
        />
        <title>Chaybi walid's Portfolio</title>
      </Head>
      <StarsCanvas />
      <Header />
      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>
      <section>
        <Experience />
      </section>
      <section>
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <div className="cursor"></div>
      <div className="cursor2"></div>
    </div>
  );
}
