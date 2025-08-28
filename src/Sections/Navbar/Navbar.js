'use client';
import Image from "next/image";
import React, { useState } from "react";
import hukuplogo from "../../assets/images/HukupLogo.png";
import appstore from "../../assets/images/appstore.png";
import playstore from "../../assets/images/playstore.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="ml-[1rem] mr-[1rem] py-[1.5rem] flex items-center justify-between">
        {/* Logo */}
        <div>
          <Image
            src={hukuplogo}
            alt="HukupLogo"
            className="w-[200px] h-[57px]"
          />
        </div>

        {/* Desktop Menu (Visible only on lg and above) */}
        <div className="hidden lg:flex text-white text-[14px] font-[500]">
          <ul className="flex gap-[1.5rem] cursor-pointer">
            <a className="text-[#EF3672]">Home</a>
            <select
              name="activity"
              id="activity"
              className="hover:text-[#EF3672] text-white outline-none bg-transparent"
            >
              <option value="activity" className="text-black">Your Activity</option>
              <option value="activity" className="text-black">Saab</option>
              <option value="activity" className="text-black">Mercedes</option>
              <option value="activity" className="text-black">Audi</option>
            </select>
            <select
              name="saved"
              id="saved"
              className="hover:text-[#EF3672] text-white outline-none bg-transparent"
            >
              <option value="saved" className="text-black">Saved</option>
              <option value="saved" className="text-black">Saab</option>
              <option value="saved" className="text-black">Mercedes</option>
              <option value="saved" className="text-black">Audi</option>
            </select>
            <a className="hover:text-[#EF3672]">Favorites</a>
            <a className="hover:text-[#EF3672]">Group Profiles</a>
          </ul>
        </div>

        {/* Desktop Get App Button (lg and above) */}
        <div className="hidden lg:block p-[4px] rounded-4xl bg-gradient-to-br from-[rgba(252,114,146,0.4)] to-[rgba(238,237,237,0.2)] cursor-pointer">
          <div className="text-[13px] font-[500] rounded-4xl bg-gradient-to-br from-[rgba(252,114,146,0.4)] to-[rgba(238,237,237,0.2)] py-[9px] px-[10px] text-white flex items-center gap-[7px]">
            Get App
            <div className="flex items-center gap-[7px]">
              <Image src={appstore} alt="appstorelink" className="w-[12px] h-[15px]" />
              <Image src={playstore} alt="playstorelink" className="w-[12px] h-[15px]" />
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Menu Button (hidden on lg and above) */}
        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden text-white px-3 py-2 border border-white rounded"
        >
          ☰
        </button>
      </div>

      {/* Offcanvas Drawer (only for < lg screens) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 
        ${isOpen ? "translate-x-0" : "translate-x-full"} lg:hidden`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-black px-2 py-1 border rounded"
          >
            ✕
          </button>
        </div>

        <ul className="flex flex-col gap-4 p-4 text-black">
          <a className="hover:text-[#EF3672]">Home</a>
          <a className="hover:text-[#EF3672]">Your Activity</a>
          <a className="hover:text-[#EF3672]">Saved</a>
          <a className="hover:text-[#EF3672]">Favorites</a>
          <a className="hover:text-[#EF3672]">Group Profiles</a>

          <div className="mt-6 p-[4px] rounded-4xl bg-gradient-to-br from-[rgba(252,114,146,0.4)] to-[rgba(238,237,237,0.2)] cursor-pointer">
            <div className="text-[13px] font-[500] rounded-4xl bg-gradient-to-br from-[rgba(252,114,146,0.4)] to-[rgba(238,237,237,0.2)] py-[9px] px-[10px] text-black flex items-center gap-[7px]">
              Get App
              <div className="flex items-center gap-[7px]">
                <Image src={appstore} alt="appstorelink" className="w-[12px] h-[15px]" />
                <Image src={playstore} alt="playstorelink" className="w-[12px] h-[15px]" />
              </div>
            </div>
          </div>
        </ul>
      </div>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
        ></div>
      )}
    </>
  );
}
