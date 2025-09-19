import Image from "next/image";
import React from "react";
import Navbar from "../Navbar/Navbar";
import user_girl from "../../assets/images/user-img1.png";
import user_man from "../../assets/images/user-img2.png";
import user_boy from "../../assets/images/user-img3.png";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";
import insta from "../../assets/images/insta.png";
import email from "../../assets/images/email.png";
import introicon from "../../assets/images/introplay.png";
import couple_bgfir from "../../assets/images/couple_bg1.png";
import couple_bgsec from "../../assets/images/couple_bg2.png";
import couple_pic from "../../assets/images/couple_pic.png";
import heart from "../../assets/images/Heart.png";
import round_heart from "../../assets/images/round_heart.png";
export default function Dashboard() {
  return (
    <>
      <div>
        <div className="w-full lg:h-[100vh] md:h-[550px] lg:max-h-[100vh] max-h-[560px] h-[100vh] dashboard-bg-img text-white relative">
          <Navbar />
          {/* text */}
          <div className="flex absolute 2xl:left-[14%] 2xl:gap-[15%] flex-col lg:flex-row gap-[19px] lg:left-[13%] left-[3%] sm:left-[6%] sm:gap-[1rem]">
            <div className="lg:mt-[2rem] ">
              <div>
                <div
                  className="w-[100%] sm:leading-[24px] md:w-[85%] md:text-[32px] md:leading-[35px] text-[19px] lg:text-[40px] lg:w-[80%] xl:text-[40px] xl:w-[65%] 2xl:w-[70%] font-[600] lg:leading-[44px] family-TwCenMT"
                  style={{ fontFamily: "Tw Cen MT" }}
                >
                  When You Would Like To Go On A Date?
                </div>
              </div>
              <div className="text-[11px] md:text-[13px] lg:text-[13px] font-[400] mt-[10px] lg:mt-[1.5rem] family-prompt">
                Application aimed at singles looking for a relationship.
              </div>
            </div>
            <div className="flex gap-[14px] items-center 2xl:ml-[5rem]">
              <div className="family-reemkufi xl:h-[60px] 2xl:w-[12.5%] sm:w-[62px] md:w-[58px] md:h-[55px] md:text-[15px] flex items-center justify-center lg:w-[16%] w-[65px]  xl:w-[12%] bg-[#7546DC] px-[2px] lg:px-[17px] lg:text-[17px] text-[14px] text-center lg:h-[70px] h-[60px] rounded-2xl">
                <div>8.6M</div>
              </div>
              <div className="">
                <div className="flex gap-[8px] mb-[10px]">
                  <Image
                    src={user_girl}
                    alt="reviewgirl"
                    className="lg:w-[40px] md:w-[35px] md:h-[35px] lg:h-[40px] w-[30px] h-[30px]"
                  />
                  <Image
                    src={user_man}
                    alt="reviewboy"
                    className="lg:w-[40px] lg:h-[40px] md:w-[35px] md:h-[35px] w-[30px] h-[30px]"
                  />
                  <Image
                    src={user_boy}
                    alt="reviewboy"
                    className="lg:w-[40px] lg:h-[40px] md:w-[35px] md:h-[35px] w-[30px] h-[30px]"
                  />
                </div>
                <div className="family-prompt md:w-[75%] sm:w-[62%] sm:text-[12px] md:text-[10px] lg:text-[14px] text-[11px] lg:w-[80%] w-[83%] 2xl:w-[65%] xl:w-[60%]">
                  There are 8.6 million user in the world everyone is happy with
                  our services.
                </div>
              </div>
            </div>
            <div className="lg:hidden block">
              <div className="flex items-center gap-[5px] ">
                <div className="bg-[#D9D9D9] rounded-full lg:py-[13px] lg:px-[14px] py-[5px] px-[5px]">
                  <Image
                    src={introicon}
                    alt="Introvideo"
                    className="w-[24px] lg:w-[22px]"
                  />
                </div>
                <div className="family-prompt w-[100%] lg:w-[42%] lg:font-[600] text-[13px] font-[800]  lg:text-[13px]">
                  Watch Intro Video
                </div>
              </div>
            </div>
            <div className=" lg:ml-[2.5rem] flex flex-row gap-[7px] sm:hidden">
              <Image
                src={facebook}
                alt="Facebooklink"
                className="w-[22px] lg:w-[35px] xl:w-[28px] mb-[5px]"
              />
              <Image
                src={insta}
                alt="Instalink"
                className="w-[22px] lg:w-[35px] xl:w-[28px] mb-[5px]"
              />
              <Image
                src={twitter}
                alt="twitterlink"
                className="w-[22px] lg:w-[35px] xl:w-[28px] mb-[5px]"
              />
              <Image
                src={email}
                alt="emaillink"
                className="w-[22px] lg:w-[35px] xl:w-[28px] mb-[5px]"
              />
            </div>
          </div>
          {/* social-media-logos */}
          <div className="cursor-pointer lg:ml-[0] absolute bottom-[3%] left-[6%] lg:left-[5%] hidden sm:block ">
            <Image
              src={facebook}
              alt="Facebooklink"
              className="w-[22px] lg:w-[35px] xl:w-[28px] mb-[5px]"
            />
            <Image
              src={insta}
              alt="Instalink"
              className="w-[22px] lg:w-[35px] xl:w-[28px] mb-[5px]"
            />
            <Image
              src={twitter}
              alt="twitterlink"
              className="w-[22px] lg:w-[35px] xl:w-[28px] mb-[5px]"
            />
            <Image
              src={email}
              alt="emaillink"
              className="w-[22px] lg:w-[35px] xl:w-[28px] mb-[5px]"
            />
          </div>
          {/* video */}
          <div className=" hidden lg:block">
            <div className="absolute left-[4%] lg:left-[11%] 2xl:bottom-[-35%] xl:left-[13%] lg:bottom-[-32%] xl:bottom-[-22%] top-[28.5%] flex items-center gap-[5px] lg:gap-[10px]">
              <div className="bg-[#D9D9D9] rounded-full lg:py-[13px] lg:px-[14px] py-[5px] px-[5px]">
                <Image
                  src={introicon}
                  alt="Introvideo"
                  className="w-[24px] lg:w-[22px] cursor-pointer"
                />
              </div>
              <div className="family-prompt w-[100%] lg:w-[42%] lg:font-[600] text-[13px] font-[800]  lg:text-[13px]">
                Watch Intro Video
              </div>
            </div>
          </div>
          {/* couple-image */}
          {/* card */}
          <div>
            <div className="absolute card-1 xs:right-[50%] bottom-[0%] sm:right-[52%] md:right-[43%] right-[55%] lg:right-[46%] xl:right-[42%] 2xl:right-[44%]">
              <Image
                src={couple_bgsec}
                alt="bg-image"
                className="w-[140px] h-[187px] sm:w-[97%] card1-img sm:h-[225px] md:w-[173px] md:h-[233px] 2xl:w-[450px] 2xl:h-[590px] lg:w-[290px] lg:h-[395px] xl:w-[220px] xl:h-[245px]"
              />
            </div>
            {/* card */}
            <div className="absolute card-2 bottom-[0%] 2xl:right-[3%] sm:right-[4%] md:right-[5%] right-[2%]  lg:right-[2%] xl:right-[11%]">
              <Image
                src={couple_bgfir}
                alt="bg-image"
                className="w-[150px] h-[216px]  sm:w-[100%] card2-img sm:h-[255px] md:h-[262px] 2xl:w-[460px] 2xl:h-[630px] md:w-[160px] lg:w-[285px] lg:h-[440px] xl:w-[233px] xl:h-[275px]"
              />
            </div>
            {/* couple-pic */}
            <div className="absolute  dashboard-couple-pic bottom-[0%]  md:right-[8%] sm:right-[60px] right-[19px] lg:right-[4%] xl:right-[15%] 2xl:right-[5%]">
              <Image
                src={couple_pic}
                alt="couple_pic"
                className="w-[323px] sm:h-[290px] sm:w-[100%] couple-pic-img h-[240px] md:w-[430px] md:h-[300px] lg:w-[700px] lg:h-[495px] xl:w-[100%] 2xl:w-[100%] 2xl:h-[720px] xl:h-[330px]"
              />
              {/* heart */}
              <div className="absolute md:top-[10%] sm:top-[12%] sm:left-[25%] 2xl:bottom-[63%] 2xl:right-[47%] left-[25%] md:bottom-[49%] md:right-[45.5%]  top-[9%] lg:right-[52.5%] lg:bottom-[56%] xl:right-[47%] xl:bottom-[49%]">
                <Image
                  src={heart}
                  alt="heartimg"
                  className="relative heart-img lg:w-[32px] lg:h-[35px] md:w-[30px] md:h-[35px] w-[22px] h-[25px]  xl:w-[30px] xl:h-[35px] 2xl:w-[50px] 2xl:h-[55px]"
                />
              </div>
              <div className="absolute  2xl:right-[8%] right-[6%]  top-[-2%] lg:right-[9.5%] 2xl:top-[0%] xl:right-[6%] xl:top-[3%]">
                <Image
                  src={heart}
                  alt="heartimg"
                  className="lg:w-[32px] heart-img lg:h-[35px] md:w-[30px] md:h-[35px] w-[22px] h-[25px] xl:w-[30px] xl:h-[35px] 2xl:w-[50px] 2xl:h-[55px]"
                />
              </div>
              {/* matchedbtn */}
              <div className="absolute 2xl:right-[11%]  2xl:px-[20px] 2xl:py-[15px] sm:right-[12%]  bottom-[12%] right-[3%] lg:bottom-[10%] lg:right-[6%] ">
                <button
                  className="
    flex items-center lg:gap-[8px] gap-[5px] lg:px-[15px] lg:py-[8px] px-[12px] py-[6px]
    rounded-full font-semibold text-white
    [background:radial-gradient(100%_100%_at_0%_0%,rgba(247,86,133,0.25)_0%,rgba(255,255,255,0)_100%)]
    border: 6px solid;
border-image-source: linear-gradient(169.15deg, rgba(252,114,146,0.4) 0%, rgba(238,237,237,0.2) 96.79%);
    [backdrop-filter:blur(42px)]
    [box-shadow:-5px_-5px_250px_0px_#FFFFFF05_inset]
  "
                >
                  <Image
                    src={round_heart}
                    alt="round_heart"
                    className="w-[14px] lg:w-[20px] 2xl:w-[30px]"
                  />
                  <span className="text-[10px] 2xl:text-[25px] lg:text-[17px] family-reemkufi">
                    Matched
                  </span>
                </button>
              </div>
              {/* likebtn */}
              <div className="absolute 2xl:bottom-[4%] 2xl:left-[8%] 2xl:px-[20px] 2xl:py-[15px] sm:left-[11%] sm:bottom-[7%]  bottom-[5%]  lg:bottom-[3%] lg:left-[2%] ">
                <button
                  className="
    flex items-center lg:gap-[8px] gap-[5px] lg:px-[15px] lg:py-[8px] px-[12px] py-[6px]
    rounded-full font-semibold text-white
    [background:radial-gradient(100%_100%_at_0%_0%,rgba(247,86,133,0.25)_0%,rgba(255,255,255,0)_100%)]
    border: 6px solid;
border-image-source: linear-gradient(169.15deg, rgba(252,114,146,0.4) 0%, rgba(238,237,237,0.2) 96.79%);
    [backdrop-filter:blur(42px)]
    [box-shadow:-5px_-5px_250px_0px_#FFFFFF05_inset]
  "
                >
                  <Image
                    src={round_heart}
                    alt="round_heart"
                    className="w-[14px] lg:w-[20px] 2xl:w-[30px]"
                  />
                  <span className="text-[10px] 2xl:text-[25px] lg:text-[17px] family-reemkufi">
                    Liked
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* <div className=" absolute w-[15%] top-[15%] p-[6px] rounded-[1rem] bg-[linear-gradient(178deg,#FC7292,rgba(238,237,237,0.5))]">
            <div className="bg-[rgba(255,255,255,0.9)] md:py-[7px] rounded-[11px] lg:py-[10px] py-[10px] px-[5px] text-center">
              <div className="flex items-center gap-[4px] sm:gap-3">
                <Image
                  src={couple_pic}
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
        </div>
      </div>
    </>
  );
}
//  <button
//                 className="
//     flex items-center gap-3 px-6 py-3
//     rounded-full font-semibold text-white
//     [background:radial-gradient(100%_100%_at_0%_0%,rgba(247,86,133,0.25)_0%,rgba(255,255,255,0)_100%)]
//     border: 6px solid;
// border-image-source: linear-gradient(169.15deg, rgba(252,114,146,0.4) 0%, rgba(238,237,237,0.2) 96.79%);
//     [backdrop-filter:blur(42px)]
//     [box-shadow:-5px_-5px_250px_0px_#FFFFFF05_inset]
//   "
//               >
//                 {/* Pink circle with heart */}
//                 <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#F75685]">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 24 24"
//                     fill="black"
//                     className="w-5 h-5"
//                   >
//                     <path
//                       d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
//         2 6 3.99 4 6.5 4c1.74 0 3.41 1.01
//         4.22 2.61h.56C14.09 5.01 15.76 4
//         17.5 4 20.01 4 22 6 22 8.5c0 3.78-3.4
//         6.86-8.55 11.54L12 21.35z"
//                     />
//                   </svg>
//                 </span>

//                 <span className="text-lg">Liked</span>
//               </button>
// <div>
//           <button
//             className="
//             flex items-center gap-3 px-6 py-3
//             rounded-full font-semibold text-white
//             [background:radial-gradient(100%_100%_at_0%_0%,rgba(247,86,133,0.25)_0%,rgba(255,255,255,0)_100%)]
//             [border:6px_solid_transparent]
//             [border-image:linear-gradient(169.15deg,rgba(252,114,146,0.4)_0%,rgba(238,237,237,0.2)_96.79%)_1]
//             [backdrop-filter:blur(42px)]
//             [box-shadow:-5px_-5px_250px_0px_#FFFFFF05_inset]
//           "
//           >
//             <span className="text-lg">Liked</span>
//           </button>
//         </div>
