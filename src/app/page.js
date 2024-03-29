import { Suspense } from "react";
import Navbar from "./components/Navbar";
import Preview from "./components/Preview";
import About from "./components/About";
import Values from "./components/Values";
import Banner from "./components/Banner";
import Pricing from "./components/Pricing";
import Coaches from "./components/Coaches";
import Bunker from "./components/Bunker";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";

export default function Home() {
  return (
    <div className=" min-h-screen flex max-w-screen overflow-x-hidden flex-col w-screen">
      <Navbar />
      <Preview />
      <About />
      <Values />
      <Banner />
      <Suspense>
        <Pricing />
      </Suspense>
      <Coaches />
      <Bunker />
      <Reviews />
      <Faq />
      <Footer />
    </div>
  );
}
