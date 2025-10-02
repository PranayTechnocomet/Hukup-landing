"use client";
import Carousel from "@/Sections/Carousel/Carousel";
import Dashboard from "@/Sections/Dashboard/Dashboard";
import { FadeInSection } from "@/Sections/FadeInSection/FadeInSection";
import Footer from "@/Sections/Footer/Footer";
import GetintouchwithhukupPerks from "@/Sections/GetintouchwithhukupPerks/GetintouchwithhukupPerks";
import HowItWork from "@/Sections/HowItWork/HowItWork";
import HukupChatSmartMatch from "@/Sections/HukupChat&SmartMatch/HukupChatSmartMatch";
import Meetsomeonespecial from "@/Sections/MeetSomeoneSpecial/Meetsomeonespecial";
import Swipe_chat_connect from "@/Sections/Swipe_chat_connect/Swipe_chat_connect";
import YourPerfectMatch from "@/Sections/YourPerfectMatch/YourPerfectMatch";
import Image from "next/image";

export default function Home() {
  // const containerRef = useRef(null);

  return (
    <>
      <div className="max-w-[2000px] Hukup-page">
        <Dashboard />
        <FadeInSection>
          <HowItWork />
        </FadeInSection>
        {/* <FadeInSection>
          <YourPerfectMatch />
        </FadeInSection> */}
        {/* <Carousel/> */}
        <FadeInSection>
          <HukupChatSmartMatch />
        </FadeInSection>
        <FadeInSection>
          <Swipe_chat_connect />
        </FadeInSection>
        <FadeInSection>
          <GetintouchwithhukupPerks />
        </FadeInSection>
        <FadeInSection>
          <Meetsomeonespecial />
        </FadeInSection>
        <Footer />
      </div>
    </>
  );
}
// bg#F7E7E8
