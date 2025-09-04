import React from "react";
import Image from "next/image";
import clouds from "../../assets/images/clouds.png";
export default function Swipe_chat_connect() {
  return (
    <>
      <div className="relative">
        <div className="absolute top-[-8px] w-full">
          <Image src={clouds} alt="clouds.." className="w-[100%]" />
          <div className="grid grid-cols-6">
            <div className="col-span-3">
              <div className="family-reemkufi heading-howitwork font-[800] text-[25px] mt-[3rem] lg:text-[40px] block text-center">
                Swipe, chat & connect
              </div>

              <div>
                Meeting someone new should feel exciting—not overwhelming. Our
                app keeps it simple so you can focus on what really matters:
                connection. Create a profile in minutes, explore matches
                instantly, and chat effortlessly. Everything is built with ease
                in mind, no learning curve required. It’s online dating, made
                refreshingly simple.
              </div>
            </div>
            <div className="col-span-3">
              <div>Swipe, chat & connect</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
