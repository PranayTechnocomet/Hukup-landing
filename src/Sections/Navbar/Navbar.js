"use client";
import Image from "next/image";
import Link from "next/link";
import { IoChevronDown } from "react-icons/io5";
import React, { useState } from "react";
import hukuplogo from "../../assets/images/HukupLogo.png";
import appstore from "../../assets/images/appstore.png";
import playstore from "../../assets/images/playstore.png";
import { RxHamburgerMenu } from "react-icons/rx";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [openMenu, setOpenMenu] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <>
      <div className="mx-[10px] sm:mx-[17px] 2xl:mr-[2rem] 2xl:ml-[6rem] lg:ml-[3rem] pt-[20px] py-[1.5rem] flex items-center justify-between">
        {/* Logo */}
        <div>
          <Image
            src={hukuplogo}
            alt="HukupLogo"
            className="lg:w-[200px] lg:h-[57px] md:h-[45px] md:w-[145px] w-[120px] h-[32px]"
          />
        </div>
        {/* navigation */}
        <div className="hidden lg:flex text-white text-[14px] family-reemkufi xl:text-[17px] 2xl:text-[18px] font-[500]">
          <ul className="flex gap-[1.5rem] cursor-pointer">
            <a className="lg:text-[#EF3672] text-white">Home</a>

            <div className="relative">
              <button
                onClick={() => toggleDropdown("activity")}
                className="flex items-center gap-1 hover:text-[#EF3672]"
              >
                Your Activity
                <IoChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    openMenu === "activity" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openMenu === "activity" && (
                <ul className="absolute left-0 mt-2 w-48 bg-black rounded-lg shadow-lg p-2">
                  <li>
                    <Link
                      href="#"
                      className="block px-3 py-2 hover:bg-gray-800"
                    >
                      Recent Activity
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-3 py-2 hover:bg-gray-800"
                    >
                      Profile Views
                    </Link>
                  </li>
                </ul>
              )}
            </div>

            {/* Saved Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("saved")}
                className="flex items-center gap-1 hover:text-[#EF3672]"
              >
                Saved
                <IoChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    openMenu === "saved" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openMenu === "saved" && (
                <ul className="absolute left-0 mt-2 w-40 bg-black rounded-lg shadow-lg p-2">
                  <li>
                    <Link
                      href="#"
                      className="block px-3 py-2 hover:bg-gray-800"
                    >
                      Saved Profiles
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-3 py-2 hover:bg-gray-800"
                    >
                      Favorites
                    </Link>
                  </li>
                </ul>
              )}
            </div>
            {/* <select
              name="activity"
              id="activity"
              className="hover:text-[#EF3672] text-white outline-none "
            >
              <option value="activity" className="text-white bg-black">
                Your Activity
              </option>
              <option value="activity" className="text-white bg-black">
                Recent Activity
              </option>
              <option value="activity" className="text-white bg-black">
                Profile Views
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
               Saved Profiles
              </option>
              <option value="activity" className="text-white bg-black">
                Favorites
              </option>
              
            </select> */}
            <a className="hover:text-[#EF3672]">Favorites</a>
            <a className="hover:text-[#EF3672]">Group Profiles</a>
          </ul>
        </div>
        {/* getapp */}
        <div className="hidden lg:block ">
          <button
            className="flex items-center cursor-pointer gap-3 px-6 py-3
            rounded-full font-semibold text-white
            [background:radial-gradient(100%_100%_at_0%_0%,rgba(247,86,133,0.25)_0%,rgba(255,255,255,0)_100%)]
            border: 6px solid;
        border-image-source: linear-gradient(169.15deg, rgba(252,114,146,0.4) 0%, rgba(238,237,237,0.2) 96.79%);
            [backdrop-filter:blur(42px)]
            [box-shadow:-5px_-5px_250px_0px_#FFFFFF05_inset]
          "
          >
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
          </button>
        </div>

        {/* offcanvasbtn */}
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
          <div className="relative">
            <button
              onClick={() => toggleDropdown("activity")}
              className="flex items-center text-white  gap-1 hover:text-[#EF3672]"
            >
              Your Activity
              <IoChevronDown
                size={16}
                className={`transition-transform duration-300 ${
                  openMenu === "activity" ? "rotate-180" : ""
                }`}
              />
            </button>

            {openMenu === "activity" && (
              <ul className="relative mt-2 w-48 bg-black rounded-lg shadow-lg p-2">
                <li>
                  <Link href="#" className="block px-3 py-2 hover:bg-gray-800">
                    Recent Activity
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block px-3 py-2 hover:bg-gray-800">
                    Profile Views
                  </Link>
                </li>
              </ul>
            )}
          </div>

          {/* Saved Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("saved")}
              className="flex items-center text-white gap-1 hover:text-[#EF3672]"
            >
              Saved
              <IoChevronDown
                size={16}
                className={`transition-transform duration-300 ${
                  openMenu === "saved" ? "rotate-180" : ""
                }`}
              />
            </button>

            {openMenu === "saved" && (
              <ul className="relative mt-2 w-40 bg-black rounded-lg shadow-lg p-2">
                <li>
                  <Link href="#" className="block px-3 py-2 hover:bg-gray-800">
                    Saved Profiles
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block px-3 py-2 hover:bg-gray-800">
                    Favorites
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <a className="hover:text-[#EF3672]">Favorites</a>
          <a className="hover:text-[rgb(239,54,114)]">Group Profiles</a>
          <div className="block lg:hidden">
            <button
              className="flex items-center  gap-3 px-6 py-3 cursor-pointer
            rounded-full font-semibold text-white
            [background:radial-gradient(100%_100%_at_0%_0%,rgba(247,86,133,0.25)_0%,rgba(255,255,255,0)_100%)]
            border: 6px solid;
        border-image-source: linear-gradient(169.15deg, rgba(252,114,146,0.4) 0%, rgba(238,237,237,0.2) 96.79%);
            [backdrop-filter:blur(42px)]
            [box-shadow:-5px_-5px_250px_0px_#FFFFFF05_inset]
          "
            >
              Get App
              <div className="flex items-center gap-[7px]">
                <Image
                  src={appstore}
                  alt="appstorelink"
                  className="lg:w-[13px] lg:h-[15px] w-[15px] xl:w-[14px] xl:h-[18px]"
                />
                <Image
                  src={playstore}
                  alt="playstorelink"
                  className="lg:w-[12px] lg:h-[15px] w-[15px] xl:w-[13px] xl:h-[18px]"
                />
              </div>
            </button>
          </div>

          {/* <div className="mt-6 p-[4px] rounded-4xl bg-gradient-to-br from-[rgba(252,114,146,0.4)] to-[rgba(238,237,237,0.2)] cursor-pointer w-[51%]">
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
          </div> */}
        </ul>
      </div>
    </>
  );
}
