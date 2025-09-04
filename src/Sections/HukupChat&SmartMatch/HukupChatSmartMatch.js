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
        <div className="family-reemkufi heading-howitwork font-[800] text-[25px] mt-[3rem] lg:text-[40px] block text-center">
          Hukup Chat & Smart Match
        </div>
        <div className="family-reemkufi mx-auto w-[98%] text-[12px] font-[600]  lg:w-[46%] text-center lg:text-[13px] mt-[8px]">
          A smart dating app that connects you with like-minded people through
          real-time chat and AI-based matching for fun and meaningful
          connections.
        </div>
        {/*  hukupChatSmartMatch-container */}
        <div className="relative">
          <div className="absolute lg:top-[30%] lg:left-[16%] left-[3%]">
            <Image
              src={hukupChatSmartMatchcard}
              alt="hukupChatSmartMatchcard.."
              className="lg:w-[357px] lg:h-[450px] w-[150px] h-[270px]"
            />
          </div>
          <div className="absolute lg:top-[30%] lg:right-[16%] right-[3%] ">
            <Image
              src={hukupChatSmartMatchcard2}
              alt="hukupChatSmartMatchcard.."
              className="lg:w-[357px] lg:h-[450px] w-[150px] h-[270px]"
            />
          </div>
          <div className="absolute lg:top-[35%] lg:left-[18%] top-[11%] left-[6%]">
            <Image src={girl} alt="Girl" className="lg:w-[315px] lg:h-[420px] w-[130px] h-[240px]" />
          </div>
          <div className="absolute lg:top-[33%] lg:right-[16%] right-[1%] top-[13%]">
            <Image src={boy} alt="Boy" className="lg:w-[390px] lg:h-[495px] w-[165px] h-[245px]" />
          </div>
          {/* <div
            className="absolute top-[37%] left-[9%] shadow-[0px_0px_57.7px_25px_rgba(252,114,146,0.3)] 
             text-center family-reemkufi text-[15px] w-[15%] bg-white py-[14px] px-[5px] rounded-[19px]"
          >
            Thanks! <br /> You seem really cool too😉
          </div> */}
          {/* <div
            className="absolute top-[74%] right-[10%] shadow-[0px_0px_57.7px_25px_rgba(252,114,146,0.3)] 
             text-center family-reemkufi text-[15px] w-[15%] bg-white py-[14px] px-[5px] rounded-[19px]"
          >
            Hey! <br /> Your profile looks fun ☺️
          </div> */}
          <div className="">
            <Image
              src={heartcard}
              alt="heartcard"
              className="lg:w-[20%] lg:h-[250px] mx-auto w-[20%] h-[150px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
// box-shadow: 0px 0px 57.7px 25px #FC72924D;
