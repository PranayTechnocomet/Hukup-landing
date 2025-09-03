import Carousel from "@/Sections/Carousel/Carousel";
import Dashboard from "@/Sections/Dashboard/Dashboard";
import HowItWork from "@/Sections/HowItWork/HowItWork";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="max-w-[2000px] Hukup-page">
        <Dashboard />
        <HowItWork />
        <Carousel/>
      </div>
    </>
  );
}
// bg#F7E7E8
