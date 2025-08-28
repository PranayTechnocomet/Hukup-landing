import Image from "next/image";
import React from "react";
import Navbar from "../Navbar/Navbar";
export default function Dashboard() {
  return (
    <>
      <div>
        <div className="w-full h-[100vh] dashboard-bg-img text-white">
          <Navbar />
          <div>
            <div className="text-[35px] w-[28%] font-[600] leading-[44px] family-TwCenMT">
              When You Would Like To Go On A Date?
            </div>
            <div className="text-[13px] font-[400] mt-[1.5rem]">
              Application aimed at singles looking for a relationship.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
