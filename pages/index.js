import Image from "next/image"
import { Inter } from "next/font/google"
import Head from "next/head"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Experience from "@/components/Experience"
import Work from "@/components/Work"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <div className="scrollbar scrollbar-track-gray-400 scrollbar-thumb-blue-900 h-screen overflow-x-hidden z-0 scroll-auto">
      <Head>
        <meta property="og:title" content="Chaybi Walid's Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.chaybi.com" />
        <meta property="og:image" content="https://example.com/me.jpg" />
        <title>CHAYBI walid's Portfolio</title>
      </Head>
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
    </div>
  )
}
