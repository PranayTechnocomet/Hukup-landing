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
        <div className="w-full lg:h-[100vh] md:h-[460px] h-[360px] dashboard-bg-img text-white relative">
          <Navbar />
          {/* text */}

          <div className="flex absolute lg:left-[13%] left-[3%]">
            <div className="lg:mt-[2rem] ">
              <div>
                <div className="w-[100%] md:w-[85%] md:text-[32px] md:leading-[35px] text-[19px] lg:text-[40px] lg:w-[80%] xl:text-[40px] xl:w-[65%] font-[600] lg:leading-[44px] family-TwCenMT">
                  When You Would Like To Go On A Date?
                </div>
              </div>
              <div className="text-[9px] md:text-[13px] lg:text-[13px] font-[400] mt-[10px] lg:mt-[1.5rem] family-prompt">
                Application aimed at singles looking for a relationship.
              </div>
            </div>
            <div className="flex gap-[14px] items-center">
              <div className="family-reemkufi md:h-[55px] md:text-[15px] flex items-center justify-center lg:w-[16%] w-[75px]  xl:w-[13%] bg-[#7546DC] px-[2px] lg:px-[17px] lg:text-[17px] text-[11px] text-center lg:h-[70px] h-[40px] rounded-2xl">
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
                <div className="family-prompt md:w-[75%] md:text-[10px] lg:text-[14px] text-[9px] lg:w-[80%] w-[100%] xl:w-[60%]">
                  There are 8.6 million user in the world everyone is happy with
                  our services.
                </div>
              </div>
            </div>
          </div>
          {/* social-media-logos */}
          <div className="ml-[0.5rem] lg:ml-[2.5rem] absolute bottom-[3%]">
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
          <div className="absolute left-[2%] lg:left-[9%] lg:bottom-[14%] xl:bottom-[15%] bottom-[36%] flex items-center gap-[5px] lg:gap-[10px]">
            <div className="bg-[#D9D9D9] rounded-full lg:py-[13px] lg:px-[14px] py-[5px] px-[5px]">
              <Image
                src={introicon}
                alt="Introvideo"
                className="w-[15px] lg:w-[22px]"
              />
            </div>
            <div className="family-prompt w-[46%] lg:w-[42%] lg:font-[600] text-[9px] font-[800]  lg:text-[13px]">
              Watch Intro Video
            </div>
          </div>
          {/* couple-image */}

          {/* card */}
          <div className="absolute bottom-[0%] md:right-[43%] right-[46%] lg:right-[46%] 2xl:right-[44%]">
            <Image
              src={couple_bgsec}
              alt="bg-image"
              className="w-[113px] h-[140px] md:w-[173px] md:h-[233px] 2xl:w-[450px] 2xl:h-[590px] lg:w-[290px] lg:h-[395px] xl:w-[265px] xl:h-[255px]"
            />
          </div>
          {/* card */}
          <div className="absolute bottom-[0%] md:right-[5%] right-[2%]  lg:right-[2%] xl:right-[11%]">
            <Image
              src={couple_bgfir}
              alt="bg-image"
              className="w-[113px] h-[160px] md:h-[262px] 2xl:w-[460px] 2xl:h-[630px] md:w-[160px] lg:w-[285px] lg:h-[440px] xl:w-[280px] xl:h-[295px]"
            />
          </div>
          {/* couple-pic */}
          <div className="absolute bottom-[0%] md:right-[8%] right-[19px] lg:right-[4%] xl:right-[17%] 2xl:left-[29%]">
            <Image
              src={couple_pic}
              alt="couple_pic"
              className="w-[272px] h-[172px] md:w-[430px] md:h-[300px] lg:w-[700px] lg:h-[495px] xl:w-[100%] 2xl:w-[100%] 2xl:h-[720px] xl:h-[349px]"
            />
          </div>
          {/* heart */}
          <div className="absolute 2xl:bottom-[63%] 2xl:right-[47%] right-[48.5%] md:bottom-[49%] md:right-[45.5%]  bottom-[40%] lg:right-[52.5%] lg:bottom-[56%] xl:right-[47%] xl:bottom-[49%]">
            <Image
              src={heart}
              alt="heartimg"
              className="lg:w-[32px] lg:h-[35px] md:w-[30px] md:h-[35px] w-[20px] h-[25px]  xl:w-[30px] xl:h-[35px] 2xl:w-[65px] 2xl:h-[75px]"
            />
          </div>
          <div className="absolute md:bottom-[55%] 2xl:bottom-[69%] 2xl:right-[8%] right-[10.5%]  bottom-[46%] lg:right-[9.5%] lg:bottom-[62%] xl:right-[19%] xl:bottom-[55%]">
            <Image
              src={heart}
              alt="heartimg"
              className="lg:w-[32px] lg:h-[35px] md:w-[30px] md:h-[35px] w-[20px] h-[25px] xl:w-[30px] xl:h-[35px] 2xl:w-[65px] 2xl:h-[75px]"
            />
          </div>

          {/* button */}
          {/* matchedbtn */}
          <div className="absolute 2xl:bottom-[5%] bottom-[3%] right-[4%] 2xl:right-[12%]">
            <button
              className="
    flex items-center lg:gap-3 gap-[5px] lg:px-6 lg:py-3 px-[12px] py-[6px]
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
                className="w-[14px] lg:w-[27px]"
              />
              <span className="text-[10px] lg:text-[15px]">Matched</span>
            </button>
          </div>
          {/* likebtn */}
          <div className="absolute 2xl:bottom-[2%] bottom-[1%] left-[33%] 2xl:left-[43%]">
            <button
              className="
    flex items-center lg:gap-3 gap-[5px] lg:px-6 lg:py-3 px-[12px] py-[6px]
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
                className="w-[14px] lg:w-[27px]"
              />
              <span className="text-[10px] lg:text-[15px]">Liked</span>
            </button>
          </div>
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
