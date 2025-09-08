import Carousel from "@/Sections/Carousel/Carousel";
import Dashboard from "@/Sections/Dashboard/Dashboard";
import HowItWork from "@/Sections/HowItWork/HowItWork";
import HukupChatSmartMatch from "@/Sections/HukupChat&SmartMatch/HukupChatSmartMatch";
import Swipe_chat_connect from "@/Sections/Swipe_chat_connect/Swipe_chat_connect";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="max-w-[2000px] Hukup-page">
        {/* <Dashboard /> */}
        <HowItWork />
        <Carousel/>
        <HukupChatSmartMatch />
        <Swipe_chat_connect />
      </div>
    </>
  );
}
// bg#F7E7E8
