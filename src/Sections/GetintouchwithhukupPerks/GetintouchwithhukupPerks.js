import React from "react";
import Image from "next/image";
import Getintouchiphone from "../../assets/images/GetintouchIphone.png";
import phoneheart from "../../assets/images/phoneheart.png";
import yourprofile from "../../assets/images/yourprofile.png";
import MarkuserasFavourite from "../../assets/images/Mark userasFavourite.png";
import Blockusers from "../../assets/images/Blockusers.png";
import messageandgifts from "../../assets/images/messageandgifts.png";
import Viewandshare from "../../assets/images/Viewandshare.png";
export default function GetintouchwithhukupPerks() {
  return (
    <div className="my-20">
      <div className="family-reemkufi heading-howitwork font-[800] md:text-[32px] text-center text-[25px] lg:text-[40px]">
        Get In Touch With Hukup Perks
      </div>
      <div className="flex justify-center mt-22">
        <Image
          src={Getintouchiphone}
          alt="Getintouchiphone"
          className="w-[370px] h-[565px]"
        />
        <Image
          src={phoneheart}
          alt="phoneheart"
          className="w-[100px] h-[100px]"
        />
        <Image
          src={yourprofile}
          alt="phoneheart"
          className="w-[100px] h-[100px]"
        />
        <Image
          src={MarkuserasFavourite}
          alt="phoneheart"
          className="w-[100px] h-[100px]"
        />
        <Image
          src={Blockusers}
          alt="phoneheart"
          className="w-[100px] h-[100px]"
        />
        <Image
          src={messageandgifts}
          alt="phoneheart"
          className="w-[100px] h-[100px]"
        />
         <Image
          src={Viewandshare}
          alt="phoneheart"
          className="w-[100px] h-[100px]"
        />
      </div>
    </div>
  );
}
