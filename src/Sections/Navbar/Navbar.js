"use client";
import Image from "next/image";
import { IoChevronDown } from "react-icons/io5";
import React, { useState } from "react";
import hukuplogo from "../../assets/images/HukupLogo.png";
import appstore from "../../assets/images/appstore.png";
import playstore from "../../assets/images/playstore.png";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [openMenu, setOpenMenu] = useState(null); // dropdowns
  const [activeLink, setActiveLink] = useState("Home");

  // ✅ Helper function to close dropdowns + set active link
  const handleNavClick = (link) => {
    setActiveLink(link);
    setOpenMenu(null); // close any dropdown
    setIsOpen(false); // also close mobile menu after click
  };

  const toggleDropdown = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
    setActiveLink(menu);
  };

  return (
    <>
      {/* Top Navbar */}
      <div className="mx-[10px] sm:mx-[17px] 2xl:mr-[2rem] 2xl:ml-[6rem] lg:ml-[3rem] pt-[20px] py-[1.5rem] flex items-center justify-between">
        {/* Logo */}
        <div>
          <Image
            src={hukuplogo}
            alt="HukupLogo"
            className="lg:w-[200px] lg:h-[57px] md:h-[45px] md:w-[145px] w-[120px] h-[32px]"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex text-white text-[14px] family-reemkufi xl:text-[17px] 2xl:text-[18px] font-[500]">
          <ul className="flex gap-[1.5rem] cursor-pointer">
            <a
              onClick={() => handleNavClick("Home")}
              className={`${activeLink === "Home" ? "text-[#EF3672]" : "text-white"}`}
            >
              Home
            </a>

            {/* Your Activity Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("activity")}
                className={`flex cursor-pointer items-center gap-1 ${
                  activeLink === "activity" ? "text-[#EF3672]" : "text-white"
                }`}
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
                <ul className="absolute left-0 text-white mb-2 w-48 bg-black rounded-lg shadow-lg p-2">
                  <li>
                    <button
                      onClick={() => handleNavClick("Recent Activity")}
                      className="block w-full text-left px-3 py-2 hover:bg-gray-800"
                    >
                      Recent Activity
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleNavClick("Profile Views")}
                      className="block w-full text-left px-3 py-2 hover:bg-gray-800"
                    >
                      Profile Views
                    </button>
                  </li>
                </ul>
              )}
            </div>

            {/* Saved Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("saved")}
                className={`flex cursor-pointer items-center gap-1 ${
                  activeLink === "saved" ? "text-[#EF3672]" : "text-white"
                }`}
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
                <ul className="absolute left-0 text-white mb-2 w-40 bg-black rounded-lg shadow-lg p-2">
                  <li>
                    <button
                      onClick={() => handleNavClick("Saved Profiles")}
                      className="block w-full text-left px-3 py-2 hover:bg-gray-800"
                    >
                      Saved Profiles
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleNavClick("Favorites")}
                      className="block w-full text-left px-3 py-2 hover:bg-gray-800"
                    >
                      Favorites
                    </button>
                  </li>
                </ul>
              )}
            </div>

            <a
              onClick={() => handleNavClick("Favorites")}
              className={`${activeLink === "Favorites" ? "text-[#EF3672]" : "text-white"}`}
            >
              Favorites
            </a>
            <a
              onClick={() => handleNavClick("GroupProfiles")}
              className={`${activeLink === "GroupProfiles" ? "text-[#EF3672]" : "text-white"}`}
            >
              Group Profiles
            </a>
          </ul>
        </div>

        {/* Get App button (desktop) */}
        <div className="hidden lg:block -translate-x-1/2 md:translate-x-0 z-30 ">
          <div
            className="p-[5px] rounded-full backdrop-blur-[4px] cursor-pointer"
            style={{
              background:
                "linear-gradient(169.15deg, rgba(252, 114, 146, 0.4) 0%, rgba(238, 237, 237, 0.2) 96.79%)",
            }}
          >
            <button
              className="flex family-reemkufi items-center gap-2 lg:px-[10px] px-[11px] py-[6px] rounded-full text-white font-medium text-sm md:text-base backdrop-blur-lg"
              style={{
                background:
                  "radial-gradient(100% 100% at 0% 0%, rgb(237 81 126 / 8%) 0%, rgb(8 4 4 / 88%) 100%)",
              }}
            >
              Get App
              <div className="flex items-center gap-[7px]">
                <Image src={appstore} alt="appstorelink" className="lg:w-[13px] lg:h-[15px] xl:w-[14px] xl:h-[18px]" />
                <Image src={playstore} alt="playstorelink" className="lg:w-[12px] lg:h-[15px] xl:w-[13px] xl:h-[18px]" />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden text-white md:px-2 md:py-1 p-1 border border-white rounded"
        >
          <RxHamburgerMenu className="md:w-[32px] md:h-[32px] w-[20px] h-[20px]" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black text-white transform transition-transform duration-300 ease-in-out z-50 
        ${isOpen ? "translate-x-0" : "translate-x-full"} lg:hidden`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <Image src={hukuplogo} alt="HukupLogo" className="w-[120px] h-[32px]" />
          <button onClick={() => setIsOpen(false)} className="text-white px-2 py-1 ">✕</button>
        </div>
        <ul className="flex flex-col gap-4 p-4 text-white family-reemkufi">
          <a
            onClick={() => handleNavClick("Home")}
            className={`${activeLink === "Home" ? "text-[#EF3672]" : "text-white"}`}
          >
            Home
          </a>

          {/* Mobile Activity Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("activity")}
              className={`flex cursor-pointer items-center gap-1 ${
                activeLink === "activity" ? "text-[#EF3672]" : "text-white"
              }`}
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
              <ul className="relative left-0 text-white mb-2 w-40 bg-black rounded-lg shadow-lg p-2">
                <li>
                  <button
                    onClick={() => handleNavClick("Profiles")}
                    className="block w-full text-left px-3 py-2 hover:bg-gray-800"
                  >
                    Profiles
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick("Favorites")}
                    className="block w-full text-left px-3 py-2 hover:bg-gray-800"
                  >
                    Favorites
                  </button>
                </li>
              </ul>
            )}
          </div>

          {/* Mobile Saved Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("saved")}
              className={`flex cursor-pointer items-center gap-1 ${
                activeLink === "saved" ? "text-[#EF3672]" : "text-white"
              }`}
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
              <ul className="relative left-0 text-white mb-2 w-40 bg-black rounded-lg shadow-lg p-2">
                <li>
                  <button
                    onClick={() => handleNavClick("Saved Profiles")}
                    className="block w-full text-left px-3 py-2 hover:bg-gray-800"
                  >
                    Saved Profiles
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick("Favorites")}
                    className="block w-full text-left px-3 py-2 hover:bg-gray-800"
                  >
                    Favorites
                  </button>
                </li>
              </ul>
            )}
          </div>

          <a
            onClick={() => handleNavClick("Favorites")}
            className={`${activeLink === "Favorites" ? "text-[#EF3672]" : "text-white"}`}
          >
            Favorites
          </a>
          <a
            onClick={() => handleNavClick("GroupProfiles")}
            className={`${activeLink === "GroupProfiles" ? "text-[#EF3672]" : "text-white"}`}
          >
            Group Profiles
          </a>

          {/* Mobile Get App Button */}
          <div className="block lg:hidden">
            <div
              className="p-[5px] w-[58%] sm:w-[61%] rounded-full backdrop-blur-[4px] cursor-pointer"
              style={{
                background:
                  "linear-gradient(169.15deg, rgba(252, 114, 146, 0.4) 0%, rgba(238, 237, 237, 0.2) 96.79%)",
              }}
            >
              <button
                className="flex w-full family-reemkufi items-center gap-2 px-[11px] py-[6px] rounded-full text-white font-medium text-sm md:text-base backdrop-blur-lg"
                style={{
                  background:
                    "radial-gradient(100% 100% at 0% 0%, rgb(237 81 126 / 8%) 0%, rgb(8 4 4 / 88%) 100%)",
                }}
              >
                Get App
                <div className="flex items-center gap-[7px]">
                  <Image src={appstore} alt="appstorelink" className="w-[13px] h-[15px]" />
                  <Image src={playstore} alt="playstorelink" className="w-[13px] h-[15px]" />
                </div>
              </button>
            </div>
          </div>
        </ul>
      </div>
    </>
  );
}
