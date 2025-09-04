import React from "react";
import Image from "next/image";
import card_bg from "../../assets/images/card-bg.png";
export default function Card({ CardData, customewidth }) {
  return (
    <div className="relative">
      <Image
        src={card_bg}
        alt="Background-card"
        className="w-[100%] h-[330px]"
      />
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
            />
          </div>
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
