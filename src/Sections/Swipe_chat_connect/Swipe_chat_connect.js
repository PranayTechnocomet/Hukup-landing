import React from "react";
import Image from "next/image";

import circle from "../../assets/images/circle.png";
import circlegirl from "../../assets/images/circlewomen.png";
// import CloudImg from "../../assets/images/clouds.png";
import CloudImg from "../../assets/images/cloud2.png";
export default function Swipe_chat_connect() {
  return (
    <>
      <div className="relative lg:h-[560px] sm:h-[345px] h-[650px] 2xl:h-[580px] xl:h-[470px]">
        <div
          className="w-full bg-gradient-to-t from-white to-[#f7e7e8]
        overflow-hidden bg-cover bg-top md:top-[-66%] lg:bg-top 2xl:h-[900px] md:h-[575px]  xl:top-[-37%] xl:h-[700px] lg:top-[-31%] absolute top-[-16%] sm:top-[-22%] lg:h-[660px] sm:h-[525px] h-[785px]"
          style={{ backgroundImage: `url(${CloudImg.src})` }}
        >
          <div className="2xl:max-w-[1370px] xl:max-w-[1140px] mx-auto ">
            <div className="grid grid-cols-1 sm:grid-cols-6  absolute top-[38%] lg:top-[43%] md:top-[37%] sm:top-[36%]">
              <div className="col-span-3 mx-auto lg:hidden md:hidden sm:hidden block">
                <div className="relative">
                  <Image
                    src={circle}
                    alt="circle"
                    className=" w-[230px] lg:w-[410px] md:w-[325px] sm:w-[270px]"
                  />
                  <div className="absolute  md:top-[-25%] top-[-26%] left-[-13%] lg:w-[500px] lg:left-[-11%] w-[285px] sm:top-[-23%] sm:w-[325px] md:w-[400px] md:left-[-13%]">
                    <Image
                      src={circlegirl}
                      alt="circlegirl"
                      className="  w-[100%]"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-3 flex flex-col justify-center md:mx-auto md:w-[85%] xl:w-[65%] lg:w-[77%] w-[77%] mx-auto sm:mx-auto sm:w-[85%] ">
                <div className="family-reemkufi heading-howitwork font-[800] md:text-[32px] text-[25px]  lg:text-[40px]">
                  Swipe, chat & connect
                </div>
                <div className="text-[#00000080] 2xl:w-[100%] md:w-[100%] 2xl:text-[17px] family-prompt xl:w-[100%]  text-[12px] lg:text-[13px] md:text-[14px]  lg:mt-[20px] mt-[1rem]">
                  Meeting someone new should feel exciting—not overwhelming. Our
                  app keeps it simple so you can focus on what really matters:
                  connection. Create a profile in minutes, explore matches
                  instantly, and chat effortlessly. Everything is built with
                  ease in mind, no learning curve required. It’s online dating,
                  made refreshingly simple.
                </div>
                <div className="lg:mt-[25px] mt-[1.5rem]">
                  <button className="bg-[#FC7292] cursor-pointer 2xl:text-[15px] 2xl:py-[11px] text-white family-reemkufi md:text-[13px] text-[12px] px-[15px] py-[7px] font-[700] rounded-[22px]">
                    Download Now
                  </button>
                </div>
              </div>
              <div className="col-span-3 mx-auto lg:block md:block sm:block hidden">
                <div className="relative">
                  <Image
                    src={circle}
                    alt="girl"
                    className="w-[410px] 2xl:w-[410px]  md:w-[325px] sm:w-[270px]"
                  />
                  <div className="absolute top-[-25%] 2xl:w-[507px] left-[-11%] w-[500px] sm:top-[-23%] lg:top-[-26%] sm:w-[325px] md:w-[400px] md:left-[-13%]">
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
          <div className="absolute h-0 md:h-[10px] lg:p-[26px] text-[25px] w-[100%] bottom-0 bg-gradient-to-b from-transparent to-[#f7e7e8] overflow-hidden">
            
          </div>
        </div>
      </div>
    </>
  );
}
