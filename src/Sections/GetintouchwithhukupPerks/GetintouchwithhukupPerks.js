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
      <div className="flex justify-center mt-22 relative">
        <Image
          src={Getintouchiphone}
          alt="Getintouchiphone"
          className="w-[370px] h-[565px]"
        />
        <Image
          src={phoneheart}
          alt="phoneheart"
          className="w-[170px] h-[145px] absolute top-[-7%] left-[28%]"
        />
        <Image
          src={yourprofile}
          alt="yourprofile"
          className="w-[105px] h-[65px] absolute top-[22%] left-[27%]"
        />
        <div className="text-[#FC7292] family-reemkufi absolute top-[37%] left-[19%] font-[700]">
          See who visited your profile.
        </div>
        <Image
          src={MarkuserasFavourite}
          alt="MarkuserasFavourite"
          className="w-[75px] h-[40px] absolute top-[28%] right-[35%]"
        />
        <div className="text-[#FC7292] family-reemkufi font-[700] absolute top-[37%] right-[24%]">
          Mark user as Favourite.
        </div>
        <Image
          src={Blockusers}
          alt="Blockusers"
          className="w-[120px] h-[60px] absolute right-[34%] top-[1%]"
        />
        <div className="text-[#FC7292] family-reemkufi font-[700] absolute top-[12%] right-[31%]">
          Block users.
        </div>
        <Image
          src={messageandgifts}
          alt="messageandgifts"
          className="w-[120px] h-[48px] absolute top-[56%] left-[30%]"
        />
        <div className="text-[#FC7292] family-reemkufi font-[700] absolute top-[66%] left-[21%]">
          Send unlimited message and gifts
        </div>
        <Image
          src={Viewandshare}
          alt="Viewandshare"
          className="w-[140px] h-[130px] absolute bottom-[6%] right-[26%]"
        />
        <div
          className="text-[#FC7292] family-reemkufi font-[700] absolute bottom-[31%] right-[18%] w-[15%]"
        >
          View and share Public and Private Photos
        </div>
      </div>
    </div>
  );
}
