"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; // If using navigation
import "swiper/css/pagination"; // If using pagination
import Image from "next/image";
import profile1 from "../../assets/images/Profile1.png";
import profile2 from "../../assets/images/Profile2.png";
import profile3 from "../../assets/images/Profile3.png";
import profile4 from "../../assets/images/Profile4.png";
import profile5 from "../../assets/images/Profile5.jpg";
export default function Carousel() {
  const profiles = [
    {
      name: "Lina Smith",
      description: "BDMS, Kissing",
      distance: "5 km away",
      image: profile1,
      margin: `1.5rem`,
    },
    {
      name: "Ema Johnson",
      description: "Romance, Sixty Nine",
      distance: "2 km away",
      image: profile2,
    },
    {
      name: "Sofia Wilson",
      description: "Cuckolding, Role Play",
      distance: "3 km away",
      image: profile3,
    },
    {
      name: "Patricia Jack",
      description: "Give Oral, Light Kink",
      distance: "1 km away",
      image: profile4,
    },
    {
      name: "Ema Johnson",
      description: "Hotwifing, Receive Oral",
      distance: "4 km away",
      image: profile5,
    },
    {
      name: "Sofia Wilson",
      description: "Cuckolding, Role Play",
      distance: "3 km away",
      image: profile3,
    },
    {
      name: "Patricia Jack",
      description: "Give Oral, Light Kink",
      distance: "1 km away",
      image: profile4,
    },
    {
      name: "Ema Johnson",
      description: "Hotwifing, Receive Oral",
      distance: "4 km away",
      image: profile5,
    },
  ];
  return (
    <>
      <div>
        <div className="text-center family-reemkufi lg:font-[600] font-[800] md:text-[32px] text-[25px] lg:text-[40px] 2xl:text-[45px] mt-[3rem]">
          Your Perfect Match Is Just Around The Corner
        </div>
        <div className="my-[3rem]">
          <Swiper
            spaceBetween={25}
            // slidesPerView={4.5}
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
                  <div
                    // className="overflow-hidden"
                    // style={{
                    //   clipPath:
                    //     index % 2 === 0
                    //       ? "ellipse(100% 85% at 50% 0% )"
                    //       : "ellipse(100% 85% at 50% 100%)",
                    // }}
                    style={{ marginLeft: profile.margin }}
                  >
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
          </Swiper>
        </div>
      </div>
    </>
  );
}
