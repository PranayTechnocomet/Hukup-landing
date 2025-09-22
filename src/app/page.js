import Carousel from "@/Sections/Carousel/Carousel";
import Dashboard from "@/Sections/Dashboard/Dashboard";
import Footer from "@/Sections/Footer/Footer";
import GetintouchwithhukupPerks from "@/Sections/GetintouchwithhukupPerks/GetintouchwithhukupPerks";
import HowItWork from "@/Sections/HowItWork/HowItWork";
import HukupChatSmartMatch from "@/Sections/HukupChat&SmartMatch/HukupChatSmartMatch";
import Meetsomeonespecial from "@/Sections/MeetSomeoneSpecial/Meetsomeonespecial";
import Swipe_chat_connect from "@/Sections/Swipe_chat_connect/Swipe_chat_connect";
import YourPerfectMatch from "@/Sections/YourPerfectMatch/YourPerfectMatch";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="max-w-[2000px] Hukup-page">
        <Dashboard />
        <HowItWork />
        <YourPerfectMatch />
        {/* <Carousel/> */}
        <HukupChatSmartMatch />
        <Swipe_chat_connect />
        <GetintouchwithhukupPerks/>
        <Meetsomeonespecial />
        <Footer/>
      </div>
    </>
  );
}
// bg#F7E7E8
