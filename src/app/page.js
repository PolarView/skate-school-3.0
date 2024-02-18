import Image from "next/image";
import Navbar from "./components/Navbar";
import Preview from "./components/Preview";
import About from "./components/About";
import Values from "./components/Values";
import Banner from "./components/Banner";
import Pricing from "./components/Pricing";
import Coaches from "./components/Coaches";
import Bunker from "./components/Bunker";

export default function Home() {
  return (
    <div className=" min-h-screen flex items-center  flex-col w-[100vw]">
      <Navbar />
      <Preview />
      <About />
      <Values />
      <Banner />
      <Pricing />
      <Coaches />
      <Bunker />
    </div>
  );
}
