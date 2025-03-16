import Head from "next/head";
import Header from "../components/Header";
import Services from "../components/Services";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Image from "next/image"; // Import next/image for optimized images
import Testimonials from "@/components/Testimonials";
import Hero from "@/components/Hero";
import Blog from "@/components/Blog";
import ProjectCount from "@/components/ProjectCount";

const Home: React.FC = () => (
  <>
    <Head>
      <title>Skode Labs - AI & Software Development Company</title>
      {/* Meta tags */}
    </Head>

    <main className="min-h-screen relative">
      {/* Background SVG */}
      <div className="absolute top-0 left-0 w-full h-full z-[-1]">
        <Image
          src="/images/bgSvg.svg" // Using the imported SVG as the source
          alt="Background"
          fill
          style={{ objectFit: "cover" }}
          className="object-cover w-full h-full"
        />
      </div>

      <Header />
      <Hero />
      <About />
      <ProjectCount />
      <Services />
      <Testimonials />
      <Contact />
      <Blog />
      <Footer />
    </main>
  </>
);

export default Home;
