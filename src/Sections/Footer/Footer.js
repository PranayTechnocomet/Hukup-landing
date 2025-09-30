"use client";
import Image from "next/image";
import React, { useState } from "react";
import hukuplogo from "../../assets/images/HukupLogo.png";
import { IoChevronDown } from "react-icons/io5";
import Link from "next/link";

import appstore from "../../assets/images/appstore.png";
import playstore from "../../assets/images/playstore.png";
import { RxHamburgerMenu } from "react-icons/rx";
import facebook from "../../assets/images/facebook.png";
import insta from "../../assets/images/insta.png";
import twitter from "../../assets/images/twitter.png";
import email from "../../assets/images/email.png";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [openMenu, setOpenMenu] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <>
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
            <a className="lg:text-[#EF3672] text-black">Home</a>
            <div className="relative">
              <button
                onClick={() => toggleDropdown("activity")}
                className="flex items-center text-black  gap-1 hover:text-[#EF3672]"
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
                <ul className="absolute z-1 left-0 bottom-full text-white mb-2 w-48 bg-black rounded-lg shadow-lg p-2">
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
                className="flex items-center text-black gap-1 hover:text-[#EF3672]"
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
                <ul className="absolute z-1 left-0 bottom-full text-white mb-2 w-40 bg-black rounded-lg shadow-lg p-2">
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
            <a className="hover:text-[#EF3672] text-black">Favorites</a>
            <a className="hover:text-[#EF3672] text-black">Group Profiles</a>
          </ul>
        </div>

        {/* offcanvas */}
        <div className="flex gap-[5px] lg:gap-[12px]">
          <Image src={insta} alt="insta" className="w-[30px]" />
          <Image src={twitter} alt="twitter" className="w-[30px]" />
          <Image src={email} alt="email" className="w-[30px]" />
          <Image src={facebook} alt="facebook" className="w-[30px]" />
        </div>
      </div>
    </>
  );
}
