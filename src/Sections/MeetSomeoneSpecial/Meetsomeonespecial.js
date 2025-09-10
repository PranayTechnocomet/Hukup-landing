import React from "react";
import Image from "next/image";
import halfcircle from "../../assets/images/halfround.png";
import shadow from "../../assets/images/shadow_halfcircle.png";
import group from "../../assets/images/group.png";
import girl from "../../assets/images/user-img1.png";
import ReviewsFromUsers from "../ReviewsFromUsers/ReviewsFromUsers";
export default function Meetsomeonespecial() {
  return (
    <>
      <div className="lg:max-w-[1140px] w-[90%] mx-auto">
        <div className="rounded-[1rem] w-[15%] overflow-hidden">
          {/* <div className="flex items-center gap-3 px-7 py-3 rounded-2xl w-[100%] bg-white/50 border-[6px] [border-image-source:linear-gradient(178.15deg,#FC7292_0%,rgba(238,237,237,0.5)_96.79%)] [border-image-slice:1] cursor-pointer">
            <div className="text-left">
              <span className="block text-sm text-gray-700">
                Download it for
              </span>
              <span className="block text-2xl font-semibold text-black">
                ios
              </span>
            </div>
          </div> */}
        </div>
        <div className="lg:text-[24px] font-[800] lg:font-[700] family-reemkufi xl:w-[40%] w-[100%] text-[19px]">
          Meet Someone Special — Download HukUp Today!
        </div>
        <div className="relative h-[740px]">
          <div className="relative lg:w-[70%] max-w-[300px] lg:max-w-[100%] w-[100%] mx-auto mt-[4rem]">
            <Image src={halfcircle} alt="..." className="lg:w-[800px] w-[900px] h-[170px] lg:h-auto" />
            <Image
              src={shadow}
              alt="shadow"
              className="absolute top-[0%] lg:w-[800px] w-[900px] h-[170px] lg:h-auto"
            />
            <Image
              src={group}
              alt="group"
              className="lg:w-[685px] lg:h-[460px] w-[260px] h-[220px] lg:top-[-32%] top-[-23%] left-[9%] absolute"
            />
            <div className="bg-white p-[3px] shadow-[0px_0px_57.7px_25px_#FC72924D] w-[25%] absolute top-[19%] rounded-[17px] right-[-11%]">
              <div className=" text-[16px] w-[65%] font-[700] text-center mx-auto">
                <span className="family-reemkufi">
                  Hello, How Are You?? Sweet
                </span>
                ❤️
              </div>
              <div className="border-1 my-[3px] w-[88%] border-indigo mx-auto"></div>
              <div className="flex justify-center items-center ">
                <Image src={girl} alt="girl" className="w-[40px]" />
                <div className="text-[#00000080] text-center w-[50%] family-prompt text-[12px]">
                  Bella Sangawan 27 km Away
                </div>
              </div>
            </div>
          </div>
          <div className="w-[85%] mx-auto absolute top-[40%] left-[7.5%]">
            {/* <ReviewsFromUsers /> */}
          </div>
        </div>
      </div>
    </>
  );
}
