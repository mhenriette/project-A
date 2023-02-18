import React from "react";
import Navbar from "./Navbar";


export default function Hero() {
  return <div className="bg-hero-pattern h-screen bg-no-repeat bg-cover flex justify-center items-center ">
            <div className="flex flex-col mx-auto container px-32">
    
        <div className="flex text-center">
            <h1 className="mt-[100px] mb-[46px] text-start text-white text-[48px] leading-[64px] tracking-[-1.29px] font-normal w-[807px]">Investing capital and operational expertise in founders who are reshaping their industries</h1>
        </div>
        <div>
            <p className=" text-white text-[20px] leading-[32px] tracking-[-0.54px] font-normal mb-5">Project A. The Operational VC.</p>
        </div>
        </div>

 
    </div>;
}
