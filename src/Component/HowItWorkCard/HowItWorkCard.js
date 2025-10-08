import React from "react";
import Image from "next/image";
import card_bg from "../../assets/images/card-bg.png";
export default function Card({ CardData, customewidth, heartimg }) {
  return (
    // bg-gradient-to-t from-white to-transparent
    <div
      className="relative feature-block
        bg-gradient-to-t from-[#fefcfd] via-[#fbf3f3] to-[rgba(255,255,255,0)]/50
   background-[linear-gradient(180deg, #F7E7E8 0%, #FFFFFF 100%)]

  rounded-[130px] overflow-hidden
  p-4 w-[270px] md:w-[260px] h-[345px] md:h-[330px] z-50"
    >
     
      {/* <Image
        src={card_bg}
        alt="Background-card"
        className="w-[100%] h-[330px]"
      /> */}
      <div className="">
        <div
          className="absolute"
          style={{
            top: CardData.top,
            left: CardData.left,
            right: CardData.right,
          }}
        >
          <div>
            <Image
              src={CardData.img}
              alt="CasualDating..."
              style={{ width: customewidth }}
              className="feature-card-img"
            />
          </div>
          {heartimg && (
            <Image
              src={heartimg}
              alt="heart"
              className="absolute top-[16%] right-2 w-[40px] h-auto"
            />
          )}

          <div style={{ marginTop: CardData.margin }}>
            <div className="family-reemkufi font-[600] xl:text-[16px] text-[15px] text-center">
              {CardData.heading}
            </div>
            <div className="text-center w-[100%] family-prompt xl:text-[14px] text-[13px]">
              {CardData.text}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
