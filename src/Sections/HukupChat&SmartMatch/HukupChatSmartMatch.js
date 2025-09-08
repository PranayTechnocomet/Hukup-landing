import React from "react";
import Image from "next/image";
import hukupChatSmartMatchcard from "../../assets/images/hukupChat&SmartMatchcard.png";
import hukupChatSmartMatchcard2 from "../../assets/images/hukupChat&SmartMatchcard2.png";
import heartcard from "../../assets/images/heartcard.png";
import boy from "../../assets/images/hukupChat&SmartMatchboy.png";
import girl from "../../assets/images/hukupChat&SmartMatchgirl.png";

export default function HukupChatSmartMatch() {
  return (
    <>
      <div className="hukupChat&SmartMatch lg:my-[4rem] my-[2rem]">
        <div className="family-reemkufi heading-howitwork font-[800] md:text-[32px] text-[25px] mt-[3rem] lg:text-[40px] block text-center">
          Hukup Chat & Smart Match
        </div>
        <div className="family-reemkufi 2xl:text-[16px] mx-auto w-[98%] md:text-[17px] md:w-[80%] text-[12px] font-[600]  lg:w-[46%] text-center lg:text-[13px] mt-[8px]">
          A smart dating app that connects you with like-minded people through
          real-time chat and AI-based matching for fun and meaningful
          connections.
        </div>
        {/*  hukupChatSmartMatch-container */}
        <div className="relative max-w-[400px] xl:max-w-[1280px] h-[335px] mx-auto md:max-w-[752px] 2xl:max-w-[1200px] md:mx-auto md:h-[450px] lg:mx-auto lg:max-w-[1050px]">
          {/* card1 */}
          <div className="absolute 2xl:left-[13%] lg:top-[25%] lg:left-[14%] left-[3%] top-[20%] md:top-[20%] md:left-[9%]">
            <Image
              src={hukupChatSmartMatchcard}
              alt="hukupChatSmartMatchcard.."
              className="xl:w-[357px] xl:h-[450px] lg:w-[315px] lg:h-[390px] w-[150px] h-[270px] md:w-[255px] md:h-[345px]"
            />
          </div>
          {/* card2 */}
          <div className="absolute lg:top-[25%] 2xl:right-[13%] top-[20%] lg:right-[14%] right-[3%] md:top-[20%] md:right-[9%] ">
            <Image
              src={hukupChatSmartMatchcard2}
              alt="hukupChatSmartMatchcard.."
              className="xl:w-[357px] xl:h-[450px] lg:w-[330px] lg:h-[420px] w-[150px] h-[270px] md:w-[255px] md:h-[345px]"
            />
          </div>
          {/* girlimg */}
          <div className="absolute 2xl:left-[16%] md:top-[22%] md:left-[13%] lg:top-[27%] lg:left-[17%] top-[27%] left-[7%]">
            <Image
              src={girl}
              alt="Girl"
              className="xl:w-[315px] xl:h-[420px] lg:w-[290px] lg:h-[390px] w-[130px] h-[240px] md:w-[215px] md:h-[320px]"
            />
          </div>
          {/* boyimg */}
          <div className="absolute 2xl:right-[12%] lg:top-[26%] lg:right-[14%] right-[2%] top-[23%] md:right-[9%] md:top-[21%]">
            <Image
              src={boy}
              alt="Boy"
              className="lg:w-[355px] lg:h-[467px] xl:w-[390px] xl:h-[495px] w-[165px] h-[285px] md:w-[260px] md:h-[355px]"
            />
          </div>
          {/* text1 */}
          <div
            className="absolute 2xl:left-[7%] 2xl:w-[14%] sm:top-[17%] sm:left-[-21%] sm:w-[37%] sm:text-[11px] top-[17%] lg:left-[7%] font-[700] lg:top-[25%] lg:w-[15%] md:text-[11px] md:top-[20%] md:left-[1%] left-[1%] shadow-[0px_0px_57.7px_25px_rgba(252,114,146,0.3)] 
             text-center family-reemkufi text-[9px] md:w-[20%] w-[14%] bg-white py-[14px] px-[5px] rounded-[19px]"
          >
            Thanks! <br /> You seem really cool too😉
          </div>
          {/* text2 */}
          <div
            className="absolute 2xl:right-[8%] sm:top-[41%] sm:right-[-21%] sm:w-[37%] sm:text-[11px] font-[700] lg:top-[54%] lg:right-[9%] md:right-[0%] lg:w-[15%] md:text-[11px] md:top-[39%] top-[36%] md:w-[20%]  right-[1%] shadow-[0px_0px_57.7px_25px_rgba(252,114,146,0.3)] 
             text-center family-reemkufi text-[9px] w-[15%] bg-white py-[14px] px-[5px] rounded-[19px]"
          >
            Hey! <br /> Your profile looks fun ☺️
          </div>
          <div className="heart-card-con lg:w-[20%] xl:left-[40.5%] absolute md:top-[27%] md:left-[39%] lg:top-[29%] lg:left-[40%] top-[6%] left-[37%] sm:top-[25%]">
            <Image
              src={heartcard}
              alt="heartcard"
              className="lg:w-[100%] xl:h-[210px] lg:h-[185px] md:w-[39%] w-[43%] "
            />
          </div>
        </div>
      </div>
    </>
  );
}
