import Dashboard from "@/Sections/Dashboard/Dashboard";
import HowItWork from "@/Sections/HowItWork/HowItWork";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="max-w-[2000px]">
        <Dashboard />
        <div className="bg-[#F7E7E8]">
           <HowItWork />
        </div>
      </div>
    </>
  );
}
// bg#F7E7E8