"use client";
import React from "react";
import Image from "next/image";
import women from "../../assets/images/Women2.png";
import quote from "../../assets/images/quote.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function ReviewsFromUsers() {
  const review = [
    {
      id: 1,
      img: women,
      name: " Sangawan Bella",
      city: "Australia",
      reviewtext: `I’ve tried so many dating apps, but HukUp truly stands out.
  The Smart Match feature introduced me to people who actually matched my vibe and interests.
  Within days, I was having genuine conversations and even went on a few amazing dates.
  I love how easy the app is to use, and the community feels real and safe.
  I wasn't just swiping—I was actually connecting.`,
    },
    {
      id: 2,
      img: women,
      name: "Bella Sangawan ",
      city: "London",
      reviewtext: `I’ve tried so many dating apps, but HukUp truly stands out.
  The Smart Match feature introduced me to people who actually matched my vibe and interests.
  Within days, I was having genuine conversations and even went on a few amazing dates.
  I love how easy the app is to use, and the community feels real and safe.
  I wasn't just swiping—I was actually connecting.`,
    },
  ];
  return (
    <>
      <div className="bg-[#1E1F28] text-white py-[18px]  sm:pb-0 sm:rounded-[36px] rounded-[25px] lg:rounded-[40px]">
        <div className="text-[22px] lg:text-[30px] family-reemkufi font-[800] lg:font-[700] text-center">
          Reviews From Users
        </div>
        <div className="text-[#FFFFFF80] px-[20px] family-prompt text-[11px] lg:text-[13px] text-center">
          Best Some Profile | Find Near You Create Account & Start Dating With
          Them
        </div>
        <div className="relative">
          {/* slider */}
          <Swiper
            className="sm:max-w-[77%]"
            // spaceBetween={50}
            modules={[Autoplay]}
            slidesPerView={1}
            autoplay={{
              delay: 20000,
              disableOnInteraction: false,
            }}
            loop={true}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <div className="">
              {review.map((data, index) => (
                <SwiperSlide key={index}>
                  <div>
                    <Image
                      src={data.img}
                      alt="women"
                      className="xl:w-[365px] mx-auto sm:mx-0 xl:h-[360px] sm:w-[260px] md:w-[335px] w-[170px] mt-[10px] md:mt-0 h-auto"
                    />
                    <Image
                      src={quote}
                      alt="quote"
                      className="w-[55px] xl:w-[11%] quote lg:w-[13%] xl:left-[42%] 2xl:left-[36%] 2xl:w-[12%] lg:top-[4%] md:left-[48%] sm:left-[46%] sm:top-[9%] sm:w-[60px] md:w-[60px] absolute top-[1%] lg:left-[42%] left-[74%] "
                    />
                    {/* mobilescreen text */}
                    <div className="block sm:hidden w-[87%] mx-auto mt-[1rem]  ">
                      <div className="family-reemkufi text-[19px] font-[600]">
                        {data.name}
                      </div>
                      <div className="family-prompt my-[1px] text-[13px] text-[#FFFFFF80]">
                        {data.city}
                      </div>
                      <div className="family-prompt w-[100%] text-[11px]  text-[#FFFFFF80]">
                        {data.reviewtext}
                      </div>
                    </div>
                    {/* lg */}
                    <div className="absolute  2xl:left-[55%] left-[63%] top-[14%] sm:block hidden">
                      <div className="family-reemkufi sm:text-[17px] md:text-[19px] font-[600]">
                        {data.name}
                      </div>
                      <div className="family-prompt my-[3px] lg:my-[12px] text-[13px] text-[#FFFFFF80]">
                        {data.city}
                      </div>
                      <div
                        className="family-prompt sm:w-[82%] md:w-[85%] lg:w-[85%] xl:w-[100%] 2xl:w-[80%] md:text-[13px] sm:text-[12px] text-[#FFFFFF80]"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 8, // number of lines
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {data.reviewtext}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
          {/* mobile screen  review*/}
          <div className=" sm:hidden block users sm:w-[24%] mt-[10px] md:w-[24%] mx-auto w-[87%] xl:w-[21%]">
            <div>
              <div className="lg:text-[28px] text-[20px] font-[700] family-reemkufi">
                15k<span className="text-[#FC7292]">+</span>
              </div>
              <div className="family-prompt md:text-[13px] text-[11px] text-[#FFFFFF80] md:w-[73%] w-[100%] lg:w-[58%]">
                Dates And Matches Everyday
              </div>
            </div>
            <div className="my-[5px] sm:my-[10px]">
              <div className="lg:text-[28px] text-[20px]  font-[700] family-reemkufi">
                1458
              </div>
              <div className="family-prompt md:text-[13px] text-[11px] text-[#FFFFFF80] w-[100%] lg:w-[45%]">
                New Member Signup Everyday
              </div>
            </div>
            <div>
              <div className="lg:text-[28px] text-[20px]  font-[700] family-reemkufi">
                30k<span className="text-[#FC7292]">+</span>
              </div>
              <div className="family-prompt md:text-[13px] text-[11px] text-[#FFFFFF80] w-[100%] lg:w-[60%]">
                Member From Around The World
              </div>
            </div>
          </div>
          {/* lg */}
          <div className="absolute sm:block hidden xl:top-[12%] users sm:w-[24%] sm:top-[13%] xl:right-[-6%] top-[1%] right-[-3%] lg:top-[9%] md:top-[14%] md:w-[24%] w-[40%] xl:w-[21%]">
            <div>
              <div className="lg:text-[28px] text-[20px] font-[700] family-reemkufi">
                15k<span className="text-[#FC7292]">+</span>
              </div>
              <div className="family-prompt md:text-[13px] text-[11px] text-[#FFFFFF80] md:w-[73%] w-[71%] lg:w-[58%]">
                Dates And Matches Everyday
              </div>
            </div>
            <div className="my-[5px] sm:my-[10px]">
              <div className="lg:text-[28px] text-[20px]  font-[700] family-reemkufi">
                1458
              </div>
              <div className="family-prompt md:text-[13px] text-[11px] text-[#FFFFFF80] w-[75%] lg:w-[45%]">
                New Member Signup Everyday
              </div>
            </div>
            <div>
              <div className="lg:text-[28px] text-[20px]  font-[700] family-reemkufi">
                30k<span className="text-[#FC7292]">+</span>
              </div>
              <div className="family-prompt md:text-[13px] text-[11px] text-[#FFFFFF80] w-[78%] lg:w-[60%]">
                Member From Around The World
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
