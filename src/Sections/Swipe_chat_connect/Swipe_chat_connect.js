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
          <div className="flex flex-col justify-center items-center lg:grid lg:grid-cols-6 absolute lg:top-[42%] top-[34%]">
              <div className="col-span-3 mx-auto lg:hidden block">
              <div className="relative">
                <Image src={circle} alt="circle..." className="lg:w-[410px] w-[270px]" />
                <div className="absolute top-[-25%] left-[-12%] lg:top-[-25%] lg:left-[-11%] lg:w-[500px] w-[330px] ">
                  <Image
                    src={circlegirl}
                    alt="circlegirl"
                    className="  w-[100%]"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-3  w-[80%] lg:w-[100%] lg:text-left sm:w-[50%] md:w-[50%] mx-auto text-center ">   
              <div className="family-reemkufi heading-howitwork font-[800] md:text-[32px]  text-[25px] mt-[1rem] lg:mt-[3rem] lg:text-[40px]  lg:text-center">
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
