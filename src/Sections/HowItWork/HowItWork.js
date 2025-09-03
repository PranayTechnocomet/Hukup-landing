import React from "react";
import Image from "next/image";
import iphoneimg from "../../assets/images/iphone-img.png";
import HowItWorkCard from "../../Component/HowItWorkCard/HowItWorkCard";
import card1 from "../../assets/images/card1.png";
import card2 from "../../assets/images/card2.png";
import card3 from "../../assets/images/card3.png";
import music from "../../assets/images/Music.png";
import dining from "../../assets/images/dining.png";
export default function HowItWork() {
  const Benefits = {
    img: card1,
    heading: "Dating with benefits",
    text: "Casual, fun dating—no strings attached.",
    top: `20%`,
    left: `12%`,
    right: ` 12%`,
    margin: `2rem`,
  };
  const relatioship = {
    img: card2,
    text: "Match with people who share your goals and vibe.",
    top: `-8%`,
    heading: "Ideal Relationship",
    right: ` 22%`,
    margin: `0rem`,
    left: `22%`,
  };
  const people = {
    img: card3,
    text: "Meet and chat with attractive, verified users.",
    top: `3%`,
    left: `16%`,
    right: `16%`,
    heading: "Date Beautiful People",
    margin: `0rem`,
  };
  return (
    <>
      <div className="how-it-work-bg mb-[3rem]">
        <div className="family-reemkufi heading-howitwork font-[800] text-[25px] mt-[3rem] lg:hidden md:text-[32px] block text-center">
          How It Works
        </div>
        <div className="grid lg:grid-cols-6 2xl:grid-cols-6 grid-cols-1 howitwork-container">
          {/* image-iphone */}
          <div className="py-[2rem] lg:py-[4rem] col-span-3 lg:mx-auto 2xl:col-span-3  relative mx-auto">
            <Image
              src={iphoneimg}
              alt="phone-image"
              className="lg:w-[300px] lg:h-[610px] md:w-[300px] md:h-[610px] 2xl:w-[350px] 2xl:h-[700px] howitwork-img"
            />
             <div className="mt-6 p-[4px] rounded-2xl bg-gradient-to-br from-[#F75685] to-[#FFFFFF00] cursor-pointer w-[40%]">
                        <div className="text-[13px] family-reemkufi font-[500] rounded-xl bg-gradient-to-br from-[#F75685] to-[#FFFFFF00] py-[9px] px-[10px] text-white flex items-center gap-[7px]">
                          Get App
                          <div className="flex items-center gap-[7px]">
                            <Image
                              src={music}
                              alt="appstorelink"
                              className="w-[12px] h-[15px]"
                            />
                          </div>
                        </div>
                      </div>
            <div className="absolute lg:py-[10px] py-[6px] top-[28%] lg:right-[-19%] right-[-14%] family-trirong flex gap-[12px] items-center gradient-button lg:w-[45%] w-[40%] justify-center">
              <Image
                src={music}
                alt="Musicicon"
                className="lg:w-[18%] lg:h-[18%] w-[15%] h-[15%] "
              />
              <span className="lg:text-[20px] text-[15px] font-[600]">
                Music
              </span>
            </div>

            <div className="absolute bottom-[23%] lg:py-[10px] py-[6px]  lg:left-[-28%] left-[-17%] family-trirong flex gap-[10px] lg:gap-[12px] items-center gradient-button lg:w-[55%] w-[50%] justify-center">
              <Image
                src={dining}
                alt="diningcon"
                className="lg:w-[15%] lg:h-[15%] w-[13%] h-[13%]"
              />
              <span className="lg:text-[20px] text-[15px] font-[600]">
                Fine Dining
              </span>
            </div>
          </div>
          <div className="lg:py-[4rem] py-[2rem] col-span-3 2xl:col-span-3  lg:relative howitworkcard-container lg:mb-[3rem]">
            <div className="family-reemkufi heading-howitwork-md font-[600] text-[40px] 2xl:text-[45px] mt-[3rem] lg:block hidden ">
              How It Works
            </div>
            {/* without position */}
            {/* <div className="w-full px-6 py-10">
              <div className="family-reemkufi font-[600] text-[40px]">
                How It Works
              </div>
              <div className="flex flex-col">
                <div className="flex justify-end">
                  <HowItWorkCard CardData={relatioship} customewidth="160px" />
                </div>

                <div className="flex justify-start -mt-30">
                  <HowItWorkCard CardData={Benefits} customewidth="200px" />
                </div>

                <div className="flex justify-end -mt-30">
                  <HowItWorkCard CardData={people} customewidth="180px" />
                </div>
              </div>
            </div> */}

            {/* with position */}
            <div className="howitwork-cards ">
              <div className="lg:absolute lg:top-[12%] xl:right-[15%] lg:right-[10%] 2xl:right-[22%] first-card">
                <HowItWorkCard CardData={relatioship} customewidth={`153px`} />
              </div>
              <div className="lg:absolute lg:top-[34%] lg:left-[0%]">
                <HowItWorkCard CardData={Benefits} customewidth={`200px`} />
              </div>
              <div className="lg:absolute lg:bottom-[-6%] 2xl:bottom-[3%] xl:right-[15%] lg:right-[10%] 2xl:right-[22%] first-card">
                <HowItWorkCard CardData={people} customewidth={`175px`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
