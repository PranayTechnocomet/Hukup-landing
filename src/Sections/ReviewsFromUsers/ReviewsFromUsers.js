import React from "react";
import Image from "next/image";
import women from "../../assets/images/Women2.png";
import quote from "../../assets/images/quote.png";
export default function ReviewsFromUsers() {
  return (
    <>
      <div className="bg-[#1E1F28] text-white pt-[10px] rounded-[17px]">
        <div className="text-[30px] family-reemkufi font-[700] text-center">
          Reviews From Users
        </div>
        <div className="text-[#FFFFFF80] family-prompt text-[13px] text-center">
          Best Some Profile | Find Near You Create Account & Start Dating With
          Them
        </div>
        <div className="relative">
          <Image src={women} alt="women" className="w-[365px] h-[360px]" />
          <Image
            src={quote}
            alt="quote"
            className="w-[110px] absolute top-[1%] left-[33%]"
          />
          <div className="absolute left-[47%] top-[14%]">
            <div className="family-reemkufi text-[19px] font-[600]">
              Bella Sangawan
            </div>
            <div className="family-prompt my-[12px] text-[13px] text-[#FFFFFF80]">
              Australia
            </div>
            <div className="family-prompt w-[57%] text-[12px] text-[#FFFFFF80]">
              I’ve tried so many dating apps, but HukUp truly stands out. The
              Smart Match feature introduced me to people who actually matched
              my vibe and interests. Within days, I was having genuine
              conversations and even went on a few amazing dates. I love how
              easy the app is to use, and the community feels real and safe. I
              wasn’t just swiping—I was actually connecting.
            </div>
          </div>
          <div className="absolute top-[12%] right-[-6%]">
            <div>
              <div className="text-[28px] font-[700] family-reemkufi">
                15k<span className="text-[#FC7292]">+</span>
              </div>
              <div className="family-prompt text-[13px] text-[#FFFFFF80] w-[58%]">
                Dates And Matches Everyday
              </div>
            </div>
            <div className="my-[10px]">
              <div className="text-[28px] font-[700] family-reemkufi">1458</div>
              <div className="family-prompt text-[13px] text-[#FFFFFF80] w-[45%]">
                New Member Signup Everyday
              </div>
            </div>
            <div>
              <div className="text-[28px] font-[700] family-reemkufi">
                30k<span className="text-[#FC7292]">+</span>
              </div>
              <div className="family-prompt text-[13px] text-[#FFFFFF80] w-[60%]">
                Member From Around The World
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
