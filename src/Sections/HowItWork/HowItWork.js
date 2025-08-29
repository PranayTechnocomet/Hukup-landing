import React from "react";
import Image from "next/image";
import iphoneimg from "../../assets/images/iphone-img.png";
import card_bg from "../../assets/images/card-bg.png";
export default function HowItWork() {
  return (
    <>
      <div className="grid grid-cols-6">
        {/* image-iphone */}
        <div className="py-[4rem] col-span-2">
          <Image
            src={iphoneimg}
            alt="phone-image"
            className="w-[300px] h-[610px]"
          />
        </div>
        <div className="py-[4rem] col-span-4">
          <div className="family-reemkufi font-[600] text-[40px]">
            How It Works
          </div>
          <div className="flex flex-wrap gap-[15px]">
            <div>
              <Image
                src={card_bg}
                alt="Background-card"
                className="w-[100%] h-[330px]"
              />
            </div>
            <div>
              <Image
                src={card_bg}
                alt="Background-card"
                className="w-[100%] h-[330px]"
              />
            </div>
            <div>
              <Image
                src={card_bg}
                alt="Background-card"
                className="w-[100%] h-[330px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
