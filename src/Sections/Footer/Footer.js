"use client";
import Image from "next/image";
import React, { useState } from "react";
import hukuplogo from "../../assets/images/HukupLogo.png";
import { IoChevronDown } from "react-icons/io5";

import facebook from "../../assets/images/facebook.png";
import insta from "../../assets/images/insta.png";
import twitter from "../../assets/images/twitter.png";
import email from "../../assets/images/email.png";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [activeLink, setActiveLink] = useState("Home");

  const toggleDropdown = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
    setActiveLink(menu);
  };

  return (
    <div className="mx-[10px] xl:max-w-[1055px] xl:mx-auto 2xl:max-w-[1230px] 2xl:mx-auto lg:mx-[5rem] pb-[2rem] xl:pb-[1.5rem] pt-[1.5rem] flex items-center justify-between">
      {/* Logo */}
      <div>
        <Image
          src={hukuplogo}
          alt="HukupLogo"
          className="lg:w-[200px] lg:h-[57px] w-[120px] h-[32px]"
        />
      </div>

      {/* navigation */}
      <div className="hidden  md:flex text-black text-[14px] family-reemkufi xl:text-[17px] 2xl:text-[18px] font-[500]">
        <ul className="flex gap-[1.5rem] cursor-pointer">
          <a
            onClick={() => {
              setActiveLink("Home");
              setOpenMenu(null);
            }}
            className={`${activeLink === "Home" ? "text-[#EF3672]" : "text-black"}`}
          >
            Home
          </a>

          {/* Your Activity Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("activity")}
              className={`flex cursor-pointer items-center gap-1  ${
                activeLink === "activity" ? "text-[#EF3672]" : "text-black"
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
              <ul className="absolute z-10 left-0 bottom-full mb-2 text-white w-40 bg-black rounded-lg shadow-lg p-2">
                <li>
                  <button
                    className="block w-full text-left px-3 py-2 hover:bg-gray-800"
                    onClick={() => {
                      setActiveLink("Profiles");
                      setOpenMenu(null);
                    }}
                  >
                    Profiles
                  </button>
                </li>
                <li>
                  <button
                    className="block w-full text-left px-3 py-2 hover:bg-gray-800"
                    onClick={() => {
                      setActiveLink("Favorites");
                      setOpenMenu(null);
                    }}
                  >
                    Favorites
                  </button>
                </li>
              </ul>
            )}
          </div>

          {/* Saved Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("saved")}
              className={`flex cursor-pointer items-center gap-1  ${
                activeLink === "saved" ? "text-[#EF3672]" : "text-black"
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
              <ul className="absolute z-10 left-0 bottom-full mb-2 text-white w-40 bg-black rounded-lg shadow-lg p-2">
                <li>
                  <button
                    className="block w-full text-left px-3 py-2 hover:bg-gray-800"
                    onClick={() => {
                      setActiveLink("Saved Profiles");
                      setOpenMenu(null);
                    }}
                  >
                    Profiles
                  </button>
                </li>
                <li>
                  <button
                    className="block w-full text-left px-3 py-2 hover:bg-gray-800"
                    onClick={() => {
                      setActiveLink("Saved Favorites");
                      setOpenMenu(null);
                    }}
                  >
                    Favorites
                  </button>
                </li>
              </ul>
            )}
          </div>

          <a
            onClick={() => {
              setActiveLink("Favorites");
              setOpenMenu(null);
            }}
            className={`${activeLink === "Favorites" ? "text-[#EF3672]" : "text-black"}`}
          >
            Favorites
          </a>
          <a
            onClick={() => {
              setActiveLink("GroupProfiles");
              setOpenMenu(null);
            }}
            className={`${activeLink === "GroupProfiles" ? "text-[#EF3672]" : "text-black"}`}
          >
            Group Profiles
          </a>
        </ul>
      </div>

      {/* Socials */}
      <div className="flex gap-[5px] lg:gap-[12px]">
        <Image src={insta} alt="insta" className="w-[30px] cursor-pointer" />
        <Image src={twitter} alt="twitter" className="w-[30px] cursor-pointer" />
        <Image src={email} alt="email" className="w-[30px] cursor-pointer" />
        <Image src={facebook} alt="facebook" className="w-[30px] cursor-pointer" />
      </div>
    </div>
  );
}
