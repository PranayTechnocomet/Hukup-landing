import React from "react";
import Image from "next/image";
import Getintouchiphone from "../../assets/images/GetintouchIphone.png";
import phoneheart from "../../assets/images/phoneheart.png";
import yourprofile from "../../assets/images/yourprofile.png";
import MarkuserasFavourite from "../../assets/images/Mark userasFavourite.png";
import Blockusers from "../../assets/images/Blockusers.png";
import messageandgifts from "../../assets/images/messageandgifts.png";
import Viewandshare from "../../assets/images/Viewandshare.png";
import { LuDot } from "react-icons/lu";
export default function GetintouchwithhukupPerks() {
  return (
    <div className="xl:mt-[4rem] lg:mt-[-4rem] 2xl:mt-[7rem] xl:mb-25 mb-15 mt-[15%] sm:mt-[6rem] md:mt-[2rem]">
      <div className="family-reemkufi heading-howitwork font-[800] md:text-[32px] text-center text-[25px] lg:text-[40px]">
        Get In Touch With Hukup Perks
      </div>
      <div className="flex justify-center mt-12 md:mt-15 lg:mt-22 relative max-w-[345px] md:max-w-[768px] lg:max-w-[1070px] mx-auto">
        <Image
          src={Getintouchiphone}
          alt="Getintouchiphone"
          className="md:w-[370px] md:h-[565px] w-[200px] h-[300px]"
        />
        <Image
          src={phoneheart}
          alt="phoneheart"
          className="lg:w-[170px] lg:h-[145px] md:w-[180px] md:h-[130px] md:left-[12%] md:top-[-6%] w-[120px] h-[100px] absolute lg:top-[-7%] lg:left-[22%] top-[-13%] left-[-2%]"
        />
        <Image
          src={yourprofile}
          alt="yourprofile"
          className="lg:w-[155px] md:left-[12%] md:h-[65px] md:w-[115px] sm:left-[-2%] sm:h-[42px] sm:w-[80px] lg:h-[76px] w-[55px] h-[36px] absolute top-[24%] left-[8%] lg:top-[22%] lg:left-[18%]"
        />
        <div className="text-[#FC7292]  lg:text-[19px] md:w-[25%] md:text-[20px] md:left-[3%] md:top-[37%] sm:top-[40%] text-[10px] sm:left-[-25%] sm:w-[46%] sm:text-[14px] w-[30%] lg:w-[30%] flex lg:items-center left-[-2%] family-reemkufi absolute top-[37%] lg:left-[9%] font-[800] md:font-[700]">
          <span className="text-[30px]">
            <LuDot />
          </span>
          See who visited your profile.
        </div>
        <Image
          src={MarkuserasFavourite}
          alt="MarkuserasFavourite"
          className="lg:w-[90px] md:w-[75px] md:h-[30px] md:right-[26%] lg:h-[40px] absolute top-[28%] lg:right-[30%] h-[16px] w-[45px] right-[18%]"
        />
        <div className="text-[#FC7292] md:right-[2%] lg:text-[19px] md:w-[33%] md:text-[20px] sm:right-[-36%] sm:w-[65%] sm:text-[14px] flex lg:items-center family-reemkufi font-[800] text-[10px] w-[30%] lg:font-[700] absolute lg:top-[36%] lg:right-[3%] right-[2%]  top-[35%]">
          <span className="text-[30px]">
            <LuDot />
          </span>
          Mark user as Favourite.
        </div>
        <Image
          src={Blockusers}
          alt="Blockusers"
          className="lg:w-[150px] items-center md:top-[1%] md:right-[22%] md:h-[60px] md:w-[130px] lg:h-[70px] w-[80px] h-[40px] absolute lg:right-[27%] lg:top-[1%] right-[10%] top-[-1%]"
        />
        <div className="text-[#FC7292]  lg:text-[19px] md:text-[20px] md:right-[15%] sm:text-[14px] sm:right-[-1%] flex items-center text-[10px] family-reemkufi font-[700] absolute top-[12%] lg:right-[22%] right-[5%]">
          <span className="text-[30px]">
            <LuDot />
          </span>
          Block users.
        </div>
        <Image
          src={messageandgifts}
          alt="messageandgifts"
          className="lg:w-[180px] md:h-[45px] md:w-[120px] md:left-[17%] sm:left-[3%] sm:top-[58%] sm:h-[30px] sm:w-[80px] lg:h-[65px] w-[63px] h-[25px] absolute top-[56%] lg:left-[20%] left-[10%]"
        />
        <div className="text-[#FC7292] md:w-[34%] lg:text-[19px] md:left-[2%] md:text-[20px] md:top-[67%] sm:left-[-26%] sm:top-[70%] sm:w-[60%] sm:text-[14px] flex lg:items-center text-[10px]  family-reemkufi font-[800] lg:font-[700] absolute top-[66%] left-[-2%] w-[38%] lg:left-[6%] lg:w-[35%] lg:top-[70%]">
          <span className="text-[30px]">
            <LuDot />
          </span>
          Send unlimited message and gifts
        </div>
        <Image
          src={Viewandshare}
          alt="Viewandshare"
          className="lg:w-[160px] md:h-[130px] md:w-[135px] md:right-[13%] sm:right-[4%] sm:h-[72px] sm:w-[75px] lg:h-[150px] w-[50px] h-[65px] absolute bottom-[6%] lg:right-[20%] right-[10%]"
        />
        <div className="text-[#FC7292]  lg:text-[19px] sm:w-[65%] md:w-[30%] md:right-[1%] md:text-[20px] sm:bottom-[31%] sm:right-[-38%] sm:text-[14px] flex  family-reemkufi lg:font-[700] absolute text-[9px] bottom-[29%] lg:bottom-[33%] right-[2%] font-[800]  lg:right-[5%]  w-[26%]">
          <span className="text-[30px]">
            <LuDot />
          </span>
          View and share Public and Private Photos
        </div>
      </div>
    </div>
  );
}
