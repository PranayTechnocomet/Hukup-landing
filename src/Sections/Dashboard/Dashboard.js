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
        <div className="w-full h-[100vh] dashboard-bg-img text-white relative">
          <Navbar />
          {/* text */}
          <div className="flex absolute left-[13%]">
            <div className=" mt-[2rem] ">
              <div>
                <div className="text-[35px] w-[55%] xl:text-[45px] xl:w-[65%] font-[600] leading-[44px] family-TwCenMT">
                  When You Would Like To Go On A Date?
                </div>
              </div>
              <div className="text-[13px] font-[400] mt-[1.5rem] family-prompt">
                Application aimed at singles looking for a relationship.
              </div>
            </div>
            <div className="flex gap-[14px] items-center">
              <div className="family-reemkufi flex items-center justify-center w-[13%] xl:w-[16%] bg-[#7546DC] px-[17px] text-[17px] text-center h-[70px] rounded-2xl">
                <div>8.6M</div>
              </div>
              <div className="">
                <div className="flex gap-[8px] mb-[10px]">
                  <Image
                    src={user_girl}
                    alt="reviewgirl"
                    className="w-[35px] h-[35px]"
                  />
                  <Image
                    src={user_man}
                    alt="reviewboy"
                    className="w-[35px] h-[35px]"
                  />
                  <Image
                    src={user_boy}
                    alt="reviewboy"
                    className="w-[35px] h-[35px]"
                  />
                </div>
                <div className="family-prompt text-[12px] w-[51%] xl:w-[60%]">
                  There are 8.6 million user in the world everyone is happy with
                  our services.
                </div>
              </div>
            </div>
          </div>
          {/* social-media-logos */}
          <div className="ml-[2.5rem] absolute bottom-[3%]">
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
          </div>
          {/* video */}
          <div className="absolute left-[10%] xl:bottom-[15%] bottom-[18%] flex items-center gap-[10px]">
            <div className="bg-[#D9D9D9] rounded-full py-[13px] px-[14px] ">
              <Image src={introicon} alt="Introvideo" className="w-[22px]" />
            </div>
            <div className="family-prompt w-[42%] font-[600] text-[13px]">
              Watch Intro Video
            </div>
          </div>
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
