"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import iphoneimg from "../../assets/images/iphone-img.png";
import HowItWorkCard from "../../Component/HowItWorkCard/HowItWorkCard";
import card1 from "../../assets/images/card1.png";
import card2 from "../../assets/images/card2.png";
import card3 from "../../assets/images/card3.png";
import music from "../../assets/images/Music.png";
import dining from "../../assets/images/dining.png";
import heart from "../../assets/images/card_heart.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; // If using navigation
import "swiper/css/pagination"; // If using pagination
export default function HowItWork() {
  const Benefits = {
    img: card1,
    heading: "Dating with benefits",
    text: "Casual, fun dating—no strings attached.",
    top: `20%`,
    left: `12%`,
    right: ` 12%`,
    margin: `2rem`,
  };
  const relatioship = {
    img: card2,
    text: "Match with people who share your goals and vibe.",
    top: `-8%`,
    heading: "Ideal Relationship",
    right: ` 22%`,
    margin: `0rem`,
    left: `22%`,
  };
  const people = {
    img: card3,
    text: "Meet and chat with attractive, verified users.",
    top: `3%`,
    left: `16%`,
    right: `16%`,
    heading: "Date Beautiful People",
    margin: `0rem`,
  };

  return (
    <>
      <div className="how-it-work-bg mb-[3rem]">
        <div className="family-reemkufi heading-howitwork font-[800] text-[25px] mt-[3rem] lg:hidden md:text-[32px] block text-center">
          How It Works
        </div>
        <div className="grid lg:grid-cols-6 2xl:grid-cols-6 grid-cols-1 howitwork-container lg:h-[800px] xl:max-w-[1140px] 2xl:max-w-[1530px] xl:mx-auto">
          {/* image-iphone */}
          <div className="py-[2rem] lg:py-[4rem] col-span-3 lg:mx-auto 2xl:col-span-3  relative mx-auto">
            <Image
              src={iphoneimg}
              alt="phone-image"
              className="lg:w-[300px] lg:h-[610px] md:w-[300px] md:h-[610px] 2xl:w-[350px] 2xl:h-[700px] howitwork-img"
            />
            {/* new */}
            {/* <div
              className="w-[50%] absolute lg:py-[7px]  top-[28%] lg:right-[-26%] right-[-14%] family-trirong  
    inline-block p-[6px] rounded-[12px]
   background: radial-gradient(100% 268.25% at 0% 0%, rgba(247, 86, 133, 0.25) 0%, rgba(255, 255, 255, 0) 100%) 

    backdrop-blur-[12px]"
            >
              <div
                className=" 
      flex items-center gap-[12px] px-[10px] py-[4px]
      rounded-[7px]
      font-semibold text-black

    background: radial-gradient(100% 268.25% at 0% 0%, rgba(247, 86, 133, 0.25) 0%, rgba(255, 255, 255, 0) 100%) 

      backdrop-blur-[42px]
      shadow-[inset_-5px_-5px_250px_0px_rgba(255,255,255,0.05)]
    "
              >
                <Image
                  src={music}
                  alt="Musicicon"
                  className="lg:w-[18%] lg:h-[18%] w-[15%] h-[15%] "
                />
                <span className="lg:text-[20px] text-[15px] font-[600]">
                  Music
                </span>
              </div>
            </div> */}

            {/* <div className="absolute lg:py-[10px] py-[6px] top-[28%] lg:right-[-19%] right-[-14%] family-trirong flex gap-[12px] items-center gradient-button lg:w-[45%] w-[40%] justify-center">
              <Image
                src={music}
                alt="Musicicon"
                className="lg:w-[18%] lg:h-[18%] w-[15%] h-[15%] "
              />
              <span className="lg:text-[20px] text-[15px] font-[600]">
                Music
              </span>
            </div> */}
            {/* first btn */}
            <div className="absolute top-[25%] right-[-16%]">
              <div className="stat-card-1">
                <div className="rounded-[12px]   overflow-hidden">
                  <div
                    className="inline-block rounded-[20px] 
    [background:radial-gradient(100%_268.25%_at_0%_0%,rgba(247,86,133,0.25)_0%,rgba(255,255,255,0)100%)]
    backdrop-blur-[42px] 
    shadow-[inset-5px_-5px_250px_rgba(255,255,255,0.05)]
    "
                    style={{
                      border: "6px solid transparent",
                      borderImage:
                        "linear-gradient(169.15deg, rgba(252,114,146,0.4) 0%, rgba(238,237,237,0.2) 96.79%) 1",
                      borderRadius: "20px",
                      boxShadow:
                        "0 0 25px rgba(252,114,146,0.35), inset -5px -5px 250px rgba(255,255,255,0.05)",
                    }}
                  >
                    <div className="flex items-center gap-3 px-[10px] py-[5px] rounded-[16px] font-semibold text-black family-trirong">
                      <Image src={music} alt="music" className="w-[20px]" />
                      <span className="text-[18px]">Music</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* second btn */}
            <div className="absolute bottom-[28%] left-[-23%]">
              <div className="stat-card-1">
                <div className="rounded-[12px] w-[79%]  overflow-hidden">
                  <div
                    className="inline-block rounded-[20px] 
    [background:radial-gradient(100%_268.25%_at_0%_0%,rgba(247,86,133,0.25)_0%,rgba(255,255,255,0)100%)]
    backdrop-blur-[42px] 
    shadow-[inset-5px_-5px_250px_rgba(255,255,255,0.05)]
    "
                    style={{
                      border: "6px solid transparent",
                      borderImage:
                        "linear-gradient(169.15deg, rgba(252,114,146,0.4) 0%, rgba(238,237,237,0.2) 96.79%) 1",
                      borderRadius: "20px",
                      boxShadow:
                        "0 0 25px rgba(252,114,146,0.35), inset -5px -5px 250px rgba(255,255,255,0.05)",
                    }}
                  >
                    <div className="flex items-center gap-3 px-[10px] py-[5px] rounded-[16px] font-semibold text-black family-trirong">
                      <Image
                        src={dining}
                        alt="diningcon"
                        className="lg:w-[12%] lg:h-[15%] w-[13%] h-[13%]"
                      />
                      <span className="lg:text-[17px] text-[15px] font-[600]">
                        Fine Dining
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:py-[4rem] lg:max-w-[520px] xl:max-w-[100%] py-[2rem] col-span-3 2xl:col-span-3  lg:relative howitworkcard-container lg:mb-[3rem]">
            <div className="family-reemkufi heading-howitwork-md font-[600] text-[40px] 2xl:text-[45px] mt-[3rem] lg:block hidden ">
              How It Works
            </div>
            {/* <div
              className="howitwork-cards flex lg:hidden overflow-auto gap-[25px] ml-[1rem] md:justify-evenly"
              ref={containerRef}
            >
              {repeatedCards.map((card, idx) => (
                <div key={idx} className="lg:absolute mt-[10px] md:mt-0">
                  <HowItWorkCard
                    CardData={card}
                    customewidth={
                      card === Benefits
                        ? "200px"
                        : card === relatioship
                        ? "153px"
                        : "175px"
                    }
                    heartimg={card.heartimg}
                  />
                </div>
              ))}
            </div> */}

            <div className="howitwork-cards flex lg:block overflow-auto gap-[25px] ml-[1rem] md:justify-evenly ">
              <div className="lg:absolute mt-[10px] md:mt-0 lg:top-[12%] xl:right-[9%] z-10 lg:right-[4%] 2xl:right-[22%] first-card">
                <HowItWorkCard CardData={relatioship} customewidth={`153px`} />
              </div>
              <div className="lg:absolute lg:top-[34%] mt-[10px] md:mt-0 lg:left-[-8%] z-10  2xl:left-[0%]">
                <HowItWorkCard CardData={Benefits} customewidth={`200px`} />
              </div>
              <div className="mr-[17px] lg:mr-0 mt-[10px] md:mt-0 lg:absolute lg:bottom-[-6%] 2xl:bottom-[-2%] xl:right-[9%] lg:right-[4%] 2xl:right-[22%] first-card">
                <HowItWorkCard
                  CardData={people}
                  customewidth={`175px`}
                  heartimg={heart}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
