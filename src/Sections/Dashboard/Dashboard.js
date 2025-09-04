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
export default function Dashboard() {
  return (
    <>
      <div>
        <div className="w-full lg:h-[100vh] h-[265px] dashboard-bg-img text-white relative">
          {/* <Navbar /> */}
          {/* text */}
          <div className="flex absolute lg:left-[13%] left-[3%]">
            <div className="lg:mt-[2rem] ">
              <button
                className="
    flex items-center gap-3 px-6 py-3
    rounded-full font-semibold text-white
    [background:radial-gradient(100%_100%_at_0%_0%,rgba(247,86,133,0.25)_0%,rgba(255,255,255,0)_100%)]
    border: 6px solid;
border-image-source: linear-gradient(169.15deg, rgba(252,114,146,0.4) 0%, rgba(238,237,237,0.2) 96.79%);
    [backdrop-filter:blur(42px)]
    [box-shadow:-5px_-5px_250px_0px_#FFFFFF05_inset]
  "
              >
                {/* Pink circle with heart */}
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#F75685]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="black"
                    className="w-5 h-5"
                  >
                    <path
                      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
        2 6 3.99 4 6.5 4c1.74 0 3.41 1.01 
        4.22 2.61h.56C14.09 5.01 15.76 4 
        17.5 4 20.01 4 22 6 22 8.5c0 3.78-3.4 
        6.86-8.55 11.54L12 21.35z"
                    />
                  </svg>
                </span>

                <span className="text-lg">Liked</span>
              </button>

              <div>
                <div className="w-[100%] text-[19px] lg:text-[35px] lg:w-[55%] xl:text-[45px] xl:w-[65%] font-[600] lg:leading-[44px] family-TwCenMT">
                  When You Would Like To Go On A Date?
                </div>
              </div>
              <div className="text-[13px] font-[400] mt-[1.5rem] family-prompt">
                Application aimed at singles looking for a relationship.
              </div>
            </div>
            <div className="flex gap-[14px] items-center">
              <div className="family-reemkufi flex items-center justify-center lg:w-[13%] w-[40%] xl:w-[16%] bg-[#7546DC] px-[2px] lg:px-[17px] lg:text-[17px] text-[11px] text-center lg:h-[70px] h-[40px] rounded-2xl">
                <div>8.6M</div>
              </div>
              <div className="">
                <div className="flex gap-[8px] mb-[10px]">
                  <Image
                    src={user_girl}
                    alt="reviewgirl"
                    className="lg:w-[35px] lg:h-[35px] w-[30px] h-[30px]"
                  />
                  <Image
                    src={user_man}
                    alt="reviewboy"
                    className="lg:w-[35px] lg:h-[35px] w-[30px] h-[30px]"
                  />
                  <Image
                    src={user_boy}
                    alt="reviewboy"
                    className="lg:w-[35px] lg:h-[35px] w-[30px] h-[30px]"
                  />
                </div>
                <div className="family-prompt lg:text-[12px] text-[9px] lg:w-[51%] w-[100%] xl:w-[60%]">
                  There are 8.6 million user in the world everyone is happy with
                  our services.
                </div>
              </div>
            </div>
          </div>
          {/* social-media-logos */}
          {/* <div className="ml-[2.5rem] absolute bottom-[3%]">
            <Image
              src={facebook}
              alt="Facebooklink"
              className="w-[22px] xl:w-[28px] mb-[5px]"
            />
            <Image
              src={insta}
              alt="Instalink"
              className="w-[22px] xl:w-[28px] mb-[5px]"
            />
            <Image
              src={twitter}
              alt="twitterlink"
              className="w-[22px] xl:w-[28px] mb-[5px]"
            />
            <Image
              src={email}
              alt="emaillink"
              className="w-[22px] xl:w-[28px] mb-[5px]"
            />
          </div> */}
          {/* video */}
          {/* <div className="absolute left-[10%] xl:bottom-[15%] bottom-[18%] flex items-center gap-[10px]">
            <div className="bg-[#D9D9D9] rounded-full py-[13px] px-[14px] ">
              <Image src={introicon} alt="Introvideo" className="w-[22px]" />
            </div>
            <div className="family-prompt w-[42%] font-[600] text-[13px]">
              Watch Intro Video
            </div>
          </div> */}
          {/* couple-image-bg */}
          {/* <div className="absolute bottom-[0%] right-[46%]">
            <Image
              src={couple_bgsec}
              alt="bg-image"
              className="w-[250px] h-[238px] xl:w-[350px] xl:h-[441px]"
            />
          </div>
          <div className="absolute bottom-[0%] right-[17%] xl:right-[3%]">
            <Image
              src={couple_bgfir}
              alt="bg-image"
              className="w-[250px] h-[280px] xl:w-[350px] xl:h-[500px]"
            />
          </div> */}
          {/* couple-pic */}
          {/* <div className="absolute bottom-[0%] right-[2px] xl:right-[1%]">
            <Image src={couple_pic} alt="couple_pic" className="w-[500px] xl:w-[90%] xl:h-[560px]" />
          </div> */}
          {/* heart */}
          {/* <div className="absolute right-[46.5%] bottom-[44%] xl:left-[45%] xl:bottom-[54%]">
            <Image src={heart} alt="heartimg" className="w-[32px] h-[35px] xl:w-[40px] xl:h-[46px]" />
          </div>
          <div className="absolute right-[21.5%] bottom-[51%] xl:right-[12%] xl:bottom-[61%]">
            <Image src={heart} alt="heartimg" className="w-[32px] h-[35px]  xl:w-[40px] xl:h-[46px]" />
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