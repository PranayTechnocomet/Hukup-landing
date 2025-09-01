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
      <div className="how-it-work-bg">
        <div className="grid grid-cols-6 ">
          {/* image-iphone */}
          <div className="py-[4rem] col-span-3 mx-auto relative">
            <Image
              src={iphoneimg}
              alt="phone-image"
              className="w-[300px] h-[610px] "
            />

            <div className="absolute  bottom-[65%] right-[-19%] family-trirong flex gap-[12px] items-center gradient-button w-[45%] justify-center">
              <Image src={music} alt="Musicicon" className="w-[18%] h-[18%]" />
              <span className="text-[20px]">Music</span>
            </div>

            <div className="absolute bottom-[23%] left-[-28%] family-trirong flex gap-[12px] items-center gradient-button w-[55%] justify-center">
              <Image src={dining} alt="diningcon" className="w-[15%] h-[15%]" />
              <span className="text-[20px]">Fine Dining</span>
            </div>
          </div>
          <div className="py-[4rem] col-span-3 relative">
            <div className="family-reemkufi font-[600] text-[40px] mt-[3rem]">
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
            <div>
              <div className="absolute top-[12%] right-[10%]">
                <HowItWorkCard CardData={relatioship} customewidth={`153px`} />
              </div>
              <div className="absolute top-[34%]">
                <HowItWorkCard CardData={Benefits} customewidth={`200px`} />
              </div>
              <div className="absolute bottom-[-6%]  right-[10%]">
                <HowItWorkCard CardData={people} customewidth={`175px`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
