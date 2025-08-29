"use client";
import Image from "next/image";
import React, { useState } from "react";
import hukuplogo from "../../assets/images/HukupLogo.png";
import appstore from "../../assets/images/appstore.png";
import playstore from "../../assets/images/playstore.png";
import { RxHamburgerMenu } from "react-icons/rx";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="mx-[10px] lg:ml-[3rem] py-[1.5rem] flex items-center justify-between">
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
              className="hover:text-[#EF3672] text-white outline-none "
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
              className="hover:text-[#EF3672] text-white outline-none bg-transparent"
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
            <a className="hover:text-[#EF3672]">Group Profiles</a>
          </ul>
        </div>

        {/* offcanvas */}
        <div className="hidden lg:block p-[4px] rounded-4xl bg-gradient-to-br  from-[rgba(252,114,146,0.4)] to-[rgba(238,237,237,0.2)] cursor-pointer">
          <div className="text-[14px] xl:text-[16px] family-reemkufi 2xl:text-[18px] font-[500] rounded-4xl bg-gradient-to-br from-[rgba(252,114,146,0.4)] to-[rgba(238,237,237,0.2)] py-[9px] px-[10px] text-white flex items-center gap-[7px]">
            Get App
            <div className="flex items-center gap-[7px]">
              <Image
                src={appstore}
                alt="appstorelink"
                className="lg:w-[13px] lg:h-[15px] xl:w-[14px] xl:h-[18px]"
              />
              <Image
                src={playstore}
                alt="playstorelink"
                className="lg:w-[12px] lg:h-[15px] xl:w-[13px] xl:h-[18px]"
              />
            </div>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden text-white md:px-2 md:py-1 p-1 border border-white rounded"
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
          <a className="hover:text-[#EF3672]">Group Profiles</a>

          <div className="mt-6 p-[4px] rounded-4xl bg-gradient-to-br from-[rgba(252,114,146,0.4)] to-[rgba(238,237,237,0.2)] cursor-pointer w-[51%]">
            <div className="text-[13px] family-reemkufi font-[500] rounded-4xl bg-gradient-to-br from-[rgba(252,114,146,0.4)] to-[rgba(238,237,237,0.2)] py-[9px] px-[10px] text-white flex items-center gap-[7px]">
              Get App
              <div className="flex items-center gap-[7px]">
                <Image
                  src={appstore}
                  alt="appstorelink"
                  className="w-[12px] h-[15px]"
                />
                <Image
                  src={playstore}
                  alt="playstorelink"
                  className="w-[12px] h-[15px]"
                />
              </div>
            </div>
          </div>
        </ul>
      </div>
    </>
  );
}
