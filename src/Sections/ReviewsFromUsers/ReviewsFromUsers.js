"use client";
import React from "react";
import Image from "next/image";
import women from "../../assets/images/Women2.png";
import quote from "../../assets/images/quote.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function ReviewsFromUsers() {
  const review = [{
    id:1,
    img:women,
  }]
  return (
    <>
      <div className="bg-[#1E1F28] text-white pt-[10px] pb-[10px] sm:pb-0 sm:rounded-[36px] rounded-[25px] lg:rounded-[40px]">
        <div className="text-[22px] lg:text-[30px] family-reemkufi font-[800] lg:font-[700] text-center">
          Reviews From Users
        </div>
        <div className="text-[#FFFFFF80] px-[10px] family-prompt text-[11px] lg:text-[13px] text-center">
          Best Some Profile | Find Near You Create Account & Start Dating With
          Them
        </div>
        <div className="relative">
          <Image
            src={women}
            alt="women"
            className="xl:w-[365px] mx-auto sm:mx-0 xl:h-[360px] sm:w-[260px] md:w-[335px] w-[170px] h-auto"
          />
          <Image
            src={quote}
            alt="quote"
            className="w-[55px] xl:w-[11%] quote lg:w-[13%] xl:left-[31%] 2xl:left-[29%] 2xl:w-[12%] lg:top-[4%] md:left-[37%] sm:left-[35%] sm:w-[60px] md:w-[60px] absolute top-[1%] lg:left-[33%] left-[80%] "
          />
          <div className="block sm:hidden w-[87%] mx-auto mt-[1rem]  ">
            <div className="family-reemkufi text-[19px] font-[600]">
              Bella Sangawan
            </div>
            <div className="family-prompt my-[5px] text-[13px] text-[#FFFFFF80]">
              Australia
            </div>
            <div className="family-prompt w-[100%] text-[11px]  text-[#FFFFFF80]">
              I’ve tried so many dating apps, but HukUp truly stands out. The
              Smart Match feature introduced me to people who actually matched
              my vibe and interests. Within days, I was having genuine
              conversations and even went on a few amazing dates. I love how
              easy the app is to use, and the community feels real and safe. I
              wasn’t just swiping—I was actually connecting.
            </div>
          </div>
          {/* lg */}
          <div className="absolute left-[47%] top-[14%] sm:block hidden">
            <div className="family-reemkufi text-[19px] font-[600]">
              Bella Sangawan
            </div>
            <div className="family-prompt my-[12px] text-[13px] text-[#FFFFFF80]">
              Australia
            </div>
            <div className="family-prompt w-[57%] md:text-[12px] sm:text-[9px] text-[#FFFFFF80]">
              I’ve tried so many dating apps, but HukUp truly stands out. The
              Smart Match feature introduced me to people who actually matched
              my vibe and interests. Within days, I was having genuine
              conversations and even went on a few amazing dates. I love how
              easy the app is to use, and the community feels real and safe. I
              wasn’t just swiping—I was actually connecting.
            </div>
          </div>
          {/* <Swiper
            spaceBetween={25}
          
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              375: {
                slidesPerView: 1.4,
                spaceBetween: 10,
              },

              576: {
                slidesPerView: 2,
                spaceBetween: 20,
              },

              768: {
                slidesPerView: 3,
                spaceBetween: 25,
              },

              1024: {
                slidesPerView: 4,
                spaceBetween: 25,
              },
              1280: {
                slidesPerView: 4.1,
                spaceBetween: 20,
              },
              1536: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
          >
            <div>
              {profiles.map((profile, index) => (
                <SwiperSlide key={index}>
                  <div style={{ marginLeft: profile.margin }}>
                    <Image
                      src={profile.image}
                      alt="profile1"
                      className="w-[90%] md:w-[100%] object-cover h-[385px] xl:w-[100%] 2xl:w-[100%]"
                    />
                  </div>

                  <div className="text-center ">
                    <div className="text-[#564F4F] text-[16px] font-[800] 2xl:text-[19px] lg:text-[17px] lg:font-[600]">
                      {profile.name}
                    </div>
                    <div className="leading-[12px] 2xl:leading-[16px]">
                      <div className="text-[#ADADAD] text-[11px] 2xl:text-[13px] font-[400] lg:font-[100]">
                        {profile.description}
                      </div>
                      <span className="text-[#ADADAD] text-[11px] 2xl:text-[13px] font-[400] lg:font-[100]">
                        {profile.distance}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper> */}
          {/* mobile screen */}
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
          {/* sm */}
          <div className="absolute sm:block hidden xl:top-[12%] users sm:w-[24%] sm:top-[13%] xl:right-[-6%] top-[1%] right-[-5%] md:top-[14%] md:w-[24%] w-[40%] xl:w-[21%]">
            <div>
              <div className="lg:text-[28px] text-[20px] font-[700] family-reemkufi">
                15k<span className="text-[#FC7292]">+</span>
              </div>
              <div className="family-prompt md:text-[13px] text-[11px] text-[#FFFFFF80] md:w-[73%] w-[83%] lg:w-[58%]">
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
              <div className="family-prompt md:text-[13px] text-[11px] text-[#FFFFFF80] w-[80%] lg:w-[60%]">
                Member From Around The World
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
