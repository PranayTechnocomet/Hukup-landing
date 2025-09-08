import React from "react";
import Image from "next/image";

import circle from "../../assets/images/circle.png";
import circlegirl from "../../assets/images/circlewomen.png";
import CloudImg from "../../assets/images/clouds.png";

export default function Swipe_chat_connect() {
  return (
    <>
      <div className="relative h-[650px] ">
        <div
          className="w-full bg-cover bg-center lg:bg-top lg:top-[-27%] absolute top-[-40%] lg:h-[800px] h-[900px]"
          style={{ backgroundImage: `url(${CloudImg.src})` }}
        >
           {/* <Image src={clouds} alt="clouds.." className="w-[100%]" /> */}
          <div className="grid grid-cols-6 absolute top-[43%]">
            <div className="col-span-3 ">
              <div className="family-reemkufi heading-howitwork font-[800] text-[25px] mt-[3rem] lg:text-[40px] block text-center">
                Swipe, chat & connect
              </div>
              <div className="text-[#00000080] xl:w-[54%] family-prompt text-[13px] md:text-[14px] lg:w-[72%] lg:mx-auto lg:mt-[2rem] mt-[1rem]">
                Meeting someone new should feel exciting—not overwhelming. Our
                app keeps it simple so you can focus on what really matters:
                connection. Create a profile in minutes, explore matches
                instantly, and chat effortlessly. Everything is built with ease
                in mind, no learning curve required. It’s online dating, made
                refreshingly simple.
              </div>
              <div className="lg:w-[72%] xl:w-[54%] lg:mx-auto lg:mt-[2.5rem] mt-[1.5rem]">
                <button className="bg-[#FC7292] text-white family-reemkufi md:text-[13px] text-[12px] px-[15px] py-[7px] font-[700] rounded-[22px]">
                  Download Now
                </button>
              </div>
            </div>
            <div className="col-span-3 mx-auto lg:block hidden">
              <div className="relative">
                <Image src={circle} alt="" className="w-[410px]" />
                <div className="absolute top-[-25%] left-[-11%] w-[500px]">
                  <Image
                    src={circlegirl}
                    alt="circlegirl"
                    className="  w-[100%]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
