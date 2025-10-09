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
      <div className="hukupChat&SmartMatch lg:mb-[4rem] ">
        <div className="family-reemkufi heading-howitwork font-[800] md:text-[32px] text-[25px]  lg:text-[40px] block text-center">
          Hukup Chat & Smart Match
        </div>
        <div className="family-reemkufi 2xl:text-[16px] mx-auto w-[98%] md:text-[17px] md:w-[80%] text-[12px] font-[500]  lg:w-[46%] text-center lg:text-[13px] mt-[8px]">
          A smart dating app that connects you with like-minded people through
          real-time chat and AI-based matching for fun and meaningful
          connections.
        </div>
        {/*  hukupChatSmartMatch-container */}
        <div className="relative max-w-[400px] xl:max-w-[1280px] sm:h-[212px] h-[195px] mx-auto md:max-w-[752px] 2xl:max-w-[1200px] md:mx-auto md:h-[450px] lg:mx-auto lg:max-w-[1050px]">
          {/* card1 */}
          <div className="absolute 2xl:left-[13%] lg:top-[25%] lg:left-[14%] left-[3%] top-[39%] md:top-[20%] md:left-[9%]">
            <Image
              src={hukupChatSmartMatchcard}
              alt="hukupChatSmartMatchcard.."
              className="xl:w-[357px] xl:h-[450px] lg:w-[315px] lg:h-[390px] w-[150px] h-[200px] md:w-[255px] md:h-[345px]"
            />
          </div>
          {/* card2 */}
          <div className="absolute lg:top-[25%] 2xl:right-[13%] top-[39%] lg:right-[14%] right-[3%] md:top-[20%] md:right-[9%] ">
            <Image
              src={hukupChatSmartMatchcard2}
              alt="hukupChatSmartMatchcard.."
              className="xl:w-[357px] xl:h-[450px] lg:w-[330px] lg:h-[420px] w-[150px] h-[200px] md:w-[255px] md:h-[345px]"
            />
          </div>
          {/* girlimg */}
          <div className="absolute 2xl:left-[16%] md:top-[22%] md:left-[13%] lg:top-[27%] lg:left-[17%] top-[40%] left-[7%]">
            <Image
              src={girl}
              alt="Girl"
              className="xl:w-[315px] xl:h-[420px] lg:w-[290px] lg:h-[390px] w-[130px] h-[205px] md:w-[215px] md:h-[320px]"
            />
          </div>
          {/* boyimg */}
          <div className="absolute 2xl:right-[12%] lg:top-[26%] lg:right-[14%] right-[3%] top-[40%] md:right-[9%] md:top-[21%]">
            <Image
              src={boy}
              alt="Boy"
              className="lg:w-[355px] lg:h-[467px] xl:w-[390px] xl:h-[495px] w-[163px] h-[250px] md:w-[260px] md:h-[355px]"
            />
          </div>
          {/* text1 */}
          <div className="absolute 2xl:left-[5%] sm:top-[31%] sm:left-[-21%]  top-[14%] lg:left-[7%]  lg:top-[25%]  md:top-[20%] md:left-[1%] left-[2%]">
            <div className="stat-card-1">
              <div className="lg:text-[13px] 2xl:w-[100%] text-center family-reemkufi text-[9px] md:w-[100%] font-[400] lg:w-[100%] md:text-[11px] 2xl:text-[15px] shadow-[0px_0px_57.7px_25px_rgba(252,114,146,0.3)] sm:w-[100%] sm:text-[11px] w-[72%] bg-white py-[14px] px-[8px] rounded-[19px]">
                Thanks! <br /> You seem really cool too😉
              </div>
            </div>
          </div>
          {/* text2 */}
          <div className="absolute 2xl:right-[6%] sm:top-[58%] sm:right-[-21%]  lg:top-[54%] lg:right-[10%] md:right-[0%]  md:top-[39%] top-[13%]   right-[0%] ">
            <div className="stat-card-2">
              <div className="text-center family-reemkufi text-[9px] 2xl:px-[17px] lg:text-[13px] px-[8px] sm:w-[100%] sm:text-[11px] font-[400] lg:w-[100%] md:text-[11px] 2xl:w-[100%] md:w-[100%] w-[72%] shadow-[0px_0px_57.7px_25px_rgba(252,114,146,0.3)]  bg-white py-[14px] rounded-[19px]">
                Hey! <br /> Your profile looks fun ☺️
              </div>
            </div>
          </div>
          <div className="heart-card-con lg:w-[20%] xl:left-[40.5%] absolute md:top-[27%] md:left-[39%] lg:top-[29%] lg:left-[40%] top-[24%] left-[37%] sm:top-[25%]">
            <Image
              src={heartcard}
              alt="heartcard"
              className="lg:w-[100%] xl:h-[220px] lg:h-[185px] md:w-[39%] w-[43%] "
            />
          </div>
        </div>
      </div>
    </>
  );
}
