"use client";
import React from "react";
import Image from "next/image";
import iphoneimg from "../../assets/images/iphone-img.png";
import HowItWorkCard from "../../Component/HowItWorkCard/HowItWorkCard";
import card1 from "../../assets/images/card1.png";
import card2 from "../../assets/images/card2.png";
import card3 from "../../assets/images/card3.png";
import music from "../../assets/images/Music.png";
import dining from "../../assets/images/dining.png";
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
            <div className="rounded-[12px] absolute top-[25%] right-[-16%] overflow-hidden">
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
            {/* <div className="app-btn absolute w-[48%] top-[35%] 2xl:w-[14%] xl:w-[50%] xl:top-[-1%] md:top-[-8%] md:w-[22%] lg:w-[20%] lg:top-[-6%] sm:top-[-14%] sm:w-[28%] p-[6px] rounded-[1rem] bg-[linear-gradient(169.15deg,rgba(252,114,146,0.4) 0%, rgba(238,237,237,0.2) 96.79%)]">
                       <div className="bg-[radial-gradient(100% 268.25% at 0% 0%, rgba(247,86,133,0.25)0%, rgba(255,255,255,0)100%)] rounded-[11px] p-[5px] text-center">
                         <div className="flex items-center gap-[4px] sm:gap-3">
                           <Image
                             src={music}
                             alt="appstore"
                             className="w-[27px]"
                           />
                           <div className="text-left leading-[18px]">
                             <span className="app-text block family-reemkufi text-[12px] sm:text-[13px] text-gray-600">
                               Download it for
                             </span>
                             <span className="block family-reemkufi sm:text-[22px] font-bold text-black">
                               ios
                             </span>
                           </div>
                         </div>
                       </div>
                     </div> */}
            {/* <div className="app-btn absolute w-[48%] top-[35%] 2xl:w-[14%] xl:w-[50%] xl:top-[-1%] md:top-[-8%] md:w-[22%] lg:w-[20%] lg:top-[-6%] sm:top-[-14%] sm:w-[28%] 
                px-4 py-2 rounded-[1rem] 
                bg-gradient-to-r from-pink-300/40 to-gray-200/30 
                backdrop-blur-md shadow-md">
  <div className="flex items-center gap-[4px] sm:gap-3">
    <Image
      src={music}
      alt="appstore"
      className="w-[27px]"
    />
    <div className="text-left leading-[18px]">
      <span className="app-text block family-reemkufi text-[12px] sm:text-[13px] text-gray-600">
        Download it for
      </span>
      <span className="block family-reemkufi sm:text-[22px] font-bold text-black">
        ios
      </span>
    </div>
  </div>
</div> */}

            {/* <div
              className=" absolute w-[48%] top-[35%] right-[-26%]   
                p-[2px] rounded-[1rem] 
                bg-gradient-to-r from-pink-400/30 to-gray-200/20"
            >
              <div className="bg-white/30 backdrop-blur-md rounded-[1rem] p-[6px] text-center">
                <div className="flex items-center gap-[4px] sm:gap-3">
                  <Image src={music} alt="Music" className="w-[27px]" />
                  <div className="text-left leading-[18px]">
                    <span className="app-text block family-reemkufi text-[12px] sm:text-[13px] text-gray-600">
                      Download it for
                    </span>
                    <span className="block family-reemkufi sm:text-[22px] font-bold text-black">
                      ios
                    </span>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="absolute 2xl:bottom-[23%] bottom-[23%] xl:bottom-[29%] lg:py-[10px] py-[6px]  lg:left-[-28%] left-[-15%] family-trirong flex gap-[10px] lg:gap-[12px] items-center gradient-button lg:w-[55%] w-[50%] justify-center">
              <Image
                src={dining}
                alt="diningcon"
                className="lg:w-[15%] lg:h-[15%] w-[13%] h-[13%]"
              />
              <span className="lg:text-[20px] text-[15px] font-[600]">
                Fine Dining
              </span>
            </div>
          </div>
          <div className="lg:py-[4rem] lg:max-w-[520px] xl:max-w-[100%] py-[2rem] col-span-3 2xl:col-span-3  lg:relative howitworkcard-container lg:mb-[3rem]">
            <div className="family-reemkufi heading-howitwork-md font-[600] text-[40px] 2xl:text-[45px] mt-[3rem] lg:block hidden ">
              How It Works
            </div>

            <div className="howitwork-cards flex lg:block overflow-auto gap-[25px] ml-[1rem] md:justify-evenly ">
              <div className="lg:absolute lg:top-[12%] xl:right-[9%] z-10 lg:right-[4%] 2xl:right-[22%] first-card">
                <HowItWorkCard CardData={relatioship} customewidth={`153px`} />
              </div>
              <div className="lg:absolute lg:top-[34%] lg:left-[-8%] z-10  2xl:left-[0%]">
                <HowItWorkCard CardData={Benefits} customewidth={`200px`} />
              </div>
              <div className="lg:absolute lg:bottom-[-6%] 2xl:bottom-[-2%] xl:right-[9%] lg:right-[4%] 2xl:right-[22%] first-card">
                <HowItWorkCard CardData={people} customewidth={`175px`} />
              </div>
            </div>
            {/*small screen */}
            {/* <div className=" lg:hidden ml-[1rem]">
              <Swiper
                slidesPerView={3}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                breakpoints={{
                  0: {
                    slidesPerView: 1.3,
                    spaceBetween: 23,
                  },
                  375: {
                    slidesPerView: 1.4,
                    spaceBetween: 25,
                  },
                  426: {
                    slidesPerView: 1.6,
                    spaceBetween: 30,
                  },
                  520: {
                    slidesPerView: 1.7,
                    spaceBetween: 30,
                  },
                  575: {
                    slidesPerView: 2.2,
                    spaceBetween: 25,
                  },

                  690: {
                    spaceBetween: 25,
                    slidesPerView: 2.5,
                  },
                  768: {
                    spaceBetween: 25,
                    slidesPerView: 2.7,
                  },
                  820: {
                    spaceBetween: 25,
                    slidesPerView: 2.9,
                  },
                  900: {
                    spaceBetween: 20,
                    slidesPerView: 3.1,
                  },
                  920: {
                    spaceBetween: 25,
                    slidesPerView: 3.2,
                  },
                  991: {
                    spaceBetween: 25,
                    slidesPerView: 3.5,
                  },
                }}
              >
                <SwiperSlide>
                  <HowItWorkCard
                    CardData={relatioship}
                    customewidth={`153px`}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <HowItWorkCard CardData={Benefits} customewidth={`200px`} />
                </SwiperSlide>
                <SwiperSlide>
                  <HowItWorkCard CardData={people} customewidth={`175px`} />
                </SwiperSlide>
              </Swiper>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
