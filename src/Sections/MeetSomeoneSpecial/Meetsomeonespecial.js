import React from "react";
import Image from "next/image";
import halfcircle from "../../assets/images/halfround.png";
import shadow from "../../assets/images/shadow_halfcircle.png";
import group from "../../assets/images/group.png";
import girl from "../../assets/images/user-img1.png";
import ReviewsFromUsers from "../ReviewsFromUsers/ReviewsFromUsers";
import footer_appstore from "../../assets/images/footer_apple.png";
import footer_playstore from "../../assets/images/footer_store.png";
export default function Meetsomeonespecial() {
  return (
    <>
      <div className="xl:max-w-[1140px] 2xl:max-w-[1400px] w-[90%] mx-auto">
        <div className="lg:text-[24px] mb-[7rem] md:mb-0 2xl:text-[34px] font-[800] md:w-[65%] lg:font-[700] md:text-[25px] sm:w-[50%] family-reemkufi lg:w-[40%] w-[75%] text-[19px]">
          Meet Someone Special — Download HukUp Today!
        </div>
        <div className="relative h-[700px] md:h-[630px] lg:h-[740px]">
          <div className="relative xl:w-[70%] 2xl:w-[65%] max-w-[300px] md:max-w-[605px] sm:max-w-[410px] lg:max-w-[730px] xl:max-w-[100%] w-[100%] mx-auto mt-[4rem]">
            <Image
              src={halfcircle}
              alt="..."
              className="lg:w-[800px] 2xl:w-[900px] md:h-[300px] sm:h-[200px] w-[900px] h-[170px] lg:h-auto"
            />
            <Image
              src={shadow}
              alt="shadow"
              className="absolute top-[0%] lg:w-[800px] w-[900px] 2xl:w-[900px] h-[170px] md:h-[300px] sm:h-[200px] lg:h-auto"
            />
            <Image
              src={group}
              alt="group"
              className="xl:w-[685px] md:top-[-17%] md:left-[16%] lg:h-[383px] lg:w-[570px] lg:left-[12%] md:h-[293px] md:w-[430px] sm:left-[6%] sm:h-[260px] sm:w-[380px] xl:h-[460px] w-[260px] h-[220px] lg:top-[-27%] top-[-23%] left-[9%] absolute 2xl:left-[11%] 2xl:h-[476px] 2xl:w-[730px]"
            />
            <div className="bg-white p-[3px] sm:block hidden md:right-[-13%] md:w-[30%] md:top-[16%] sm:right-[-21%] sm:top-[7%] lg:right-[-16%] xl:right-[-10%] sm:w-[36%] shadow-[0px_0px_57.7px_25px_#FC72924D] w-[60%] lg:w-[30%] xl:w-[25%] absolute top-[19%] rounded-[17px] right-[-11%]">
              <div className="text-[12px] 2xl:text-[20px] lg:text-[16px] sm:w-[60%] w-[54%] lg:w-[75%] xl:w-[65%] font-[700] text-center mx-auto">
                <span className="family-reemkufi">
                  Hello, How Are You?? Sweet
                </span>
                ❤️
              </div>
              <div className="border-1 my-[3px] w-[88%]  border-indigo mx-auto"></div>
              <div className="flex justify-center items-center ">
                <Image
                  src={girl}
                  alt="girl"
                  className="w-[30px] md:w-[40px] sm:w-[35px] lg:w-[40px]"
                />

                <div className="text-[#00000080] 2xl:text-[15px] md:text-[11px] text-center sm:w-[55%] w-[50%] family-prompt lg:text-[12px] text-[10px]">
                  Bella Sangawan 27 km Away
                </div>
              </div>
            </div>
          </div>
          <div
            className='absolute md:w-[22%] md:top-[-9%] w-[51%] top-[-13%] lg:top-[-3%] xl:top-[-2%] rounded-[1rem] lg:w-[20%] xl:w-[15%] sm:w-[27%] overflow-hidden'
          >
            <div className="flex items-center gap-3 px-[7px] pt-[3px] pb-[7px] rounded-2xl w-[100%] bg-white/50 border-[6px] [border-image-source:linear-gradient(176.15deg,#FC7292_0%,rgba(238,237,237,0.5)_96.79%)] [border-image-slice:1] cursor-pointer">
              <div>
                <Image
                  src={footer_appstore}
                  alt="appstore"
                  className="w-[27px]"
                />
              </div>
              <div className="leading-[19px]">
                <span className="family-reemkufi block text-[12px] text-gray-700">
                  Download it for
                </span>
                <span className="family-reemkufi block text-black text-[21px] lg:text-[24px] font-[700]">
                  ios
                </span>
              </div>
            </div>
          </div>
          <div className="md:w-[22%] md:top-[2%] md:left-0 absolute top-[-13%] right-[-5%] lg:top-[7%] xl:top-[8%] rounded-[1rem] sm:w-[27%] lg:w-[20%] xl:w-[15%] overflow-hidden">
            <div className="flex items-center gap-3 px-[7px] pt-[3px] pb-[7px] rounded-2xl w-[100%] bg-white/50 border-[6px] [border-image-source:linear-gradient(176.15deg,#FC7292_0%,rgba(238,237,237,0.5)_96.79%)] [border-image-slice:1] cursor-pointer">
              <div>
                <Image
                  src={footer_playstore}
                  alt="appstore"
                  className="w-[27px]"
                />
              </div>
              <div className="leading-[19px]">
                <span className="family-reemkufi block text-[12px] text-gray-700">
                  Download it for
                </span>
                <span className="family-reemkufi block text-[21px] lg:text-[24px] font-[700] text-black">
                  Android
                </span>
              </div>
            </div>
          </div>

          <div className="w-[100%] lg:w-[90%] lg:top-[34%] lg:left-[4.5%] xl:w-[85%] md:top-[33%] sm:top-[25%] mx-auto absolute top-[21%] left-[0.5%] xl:top-[40%] xl:left-[7.5%]">
            <ReviewsFromUsers />
          </div>
        </div>
      </div>
    </>
  );
}
