import Image from "next/image";
import Navbar from "./components/Navbar";
import Preview from "./components/Preview";

export default function Home() {
  return (
    <div className=" min-h-screen flex items-center  flex-col w-[100vw]">
      <Navbar />
      <Preview />
    </div>
  );
}
