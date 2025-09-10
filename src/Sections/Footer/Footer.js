"use client";
import Image from "next/image";
import React, { useState } from "react";
import hukuplogo from "../../assets/images/HukupLogo.png";
import appstore from "../../assets/images/appstore.png";
import playstore from "../../assets/images/playstore.png";
import { RxHamburgerMenu } from "react-icons/rx";
import facebook from "../../assets/images/facebook.png";
import insta from "../../assets/images/insta.png";
import twitter from "../../assets/images/twitter.png";
import email from "../../assets/images/email.png";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="mx-[10px] lg:mx-[5rem] py-[1.5rem] flex items-center justify-between">
        {/* Logo */}
        <div>
          <Image
            src={hukuplogo}
            alt="HukupLogo"
            className="lg:w-[200px] lg:h-[57px] w-[120px] h-[32px]"
          />
        </div>
        {/* navigation */}
        <div className="hidden lg:flex text-white text-[14px] family-reemkufi xl:text-[17px] 2xl:text-[18px] font-[500]">
          <ul className="flex gap-[1.5rem] cursor-pointer">
            <a className="lg:text-[#EF3672] text-white">Home</a>
            <select
              name="activity"
              id="activity"
              className="hover:text-[#EF3672] text-black outline-none "
            >
              <option value="activity" className="text-black bg-white">
                Your Activity
              </option>
              <option value="activity" className="text-black bg-white">
                Saab
              </option>
              <option value="activity" className="text-black bg-white">
                Mercedes
              </option>
              <option value="activity" className="text-black bg-white">
                Audi
              </option>
            </select>
            <select
              name="saved"
              id="saved"
              className="hover:text-[#EF3672] text-black outline-none bg-transparent"
            >
              <option value="activity" className="text-black bg-white">
                Saved
              </option>
              <option value="activity" className="text-black bg-white">
                Saab
              </option>
              <option value="activity" className="text-black bg-white">
                Mercedes
              </option>
              <option value="activity" className="text-black bg-white">
                Audi
              </option>
            </select>
            <a className="hover:text-[#EF3672] text-black">Favorites</a>
            <a className="hover:text-[#EF3672] text-black">Group Profiles</a>
          </ul>
        </div>

        {/* offcanvas */}
        <div className="hidden lg:flex  gap-[12px]">
          <Image src={insta} alt="insta" className="w-[30px]" />
          <Image src={twitter} alt="twitter" className="w-[30px]" />
          <Image src={email} alt="email" className="w-[30px]" />
          <Image src={facebook} alt="facebook" className="w-[30px]" />
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden text-black md:px-2 md:py-1 p-1 border border-white rounded"
        >
          <RxHamburgerMenu className="md:w-[32px] md:h-[32px] w-[20px] h-[20px]" />
        </button>
      </div>
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black text-white-500 transform transition-transform duration-300 ease-in-out z-50 
        ${isOpen ? "translate-x-0" : "translate-x-full"} lg:hidden`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <div className="">
            <Image
              src={hukuplogo}
              alt="HukupLogo"
              className="w-[120px] h-[32px]"
            />
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white px-2 py-1 "
          >
            ✕
          </button>
        </div>
        <ul className="flex flex-col gap-4 p-4 text-white family-reemkufi">
          <a className="hover:text-[#EF3672]">Home</a>
          <select
            name="activity"
            id="activity"
            className="hover:text-[#EF3672] text-white outline-none bg-transparent"
          >
            <option value="activity" className="text-white bg-black">
              Your Activity
            </option>
            <option value="activity" className="text-white bg-black">
              Saab
            </option>
            <option value="activity" className="text-white bg-black">
              Mercedes
            </option>
            <option value="activity" className="text-white bg-black">
              Audi
            </option>
          </select>
          <select
            name="saved"
            id="saved"
            className="hover:text-[#EF3672] text-white  outline-none bg-black"
          >
            <option value="activity" className="text-white bg-black">
              Saved
            </option>
            <option value="activity" className="text-white bg-black">
              Saab
            </option>
            <option value="activity" className="text-white bg-black">
              Mercedes
            </option>
            <option value="activity" className="text-white bg-black">
              Audi
            </option>
          </select>
          <a className="hover:text-[#EF3672]">Favorites</a>
          <a className="hover:text-[rgb(239,54,114)]">Group Profiles</a>
          <div className="flex lg:hidden gap-[12px]">
          <Image src={insta} alt="insta" className="w-[30px] " />
          <Image src={twitter} alt="twitter" className="w-[30px] " />
          <Image src={email} alt="email" className="w-[30px] " />
          <Image src={facebook} alt="facebook" className="w-[30px]" />
        </div>
        </ul>
      </div>
    </>
  );
}
