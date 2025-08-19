import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutPage from "./components/AboutPage";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
    <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[10rem] py-8">
      <AboutPage/>  
      <Services/>
      <Contact/>
      </div>

    <Footer/>
    </>
  );
}
