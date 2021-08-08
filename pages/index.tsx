import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { heroData } from "../helper/data";

export default function Home() {
  const title = "Subham | portfolio";
  const desc = heroData.desc;

  return (
    <div className="main-body">
      <Head>
        {/* <html lang="en" /> */}
        <title>{title}</title>
        <meta name="og:title" content={title} />
        <meta name="description" content={desc} />
        <meta name="og:description" content={desc} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
