import React from "react";
import Link from "next/link";


export default function Navbar() {
  return<div className="mx-auto container absolute">
    <div className="bg-gradient-to-r from-[#ff0d4f] to-black w-full">

        <div className="py-3 px-32 text-start">
        <p className="font-normal text-base text-white ">Project A leads the seed funding round for <span className="font-bold">Growblocks </span>. More 
        <Link className="underline" href='/#'>here</Link>
        </p>

    </div>
    </div>
    <div className="p-8 px-32">
    <div className="flex justify-between items-center">
    <button className="text-[16px] font-bold px-[14px] py-[4px] border-solid border-[2px] text-white border-white
    ">Project A</button>
    <ul className="text-white flex items-center">
        <li className="mx-[28px] text-[16px] leading-[24px]">Portfolio</li>
        <li className="mx-[28px] text-[16px] leading-[24px]">Portfolio</li>
        <li className="mx-[28px] text-[16px] leading-[24px]">Portfolio</li>
        <li className="mx-[28px] text-[16px] leading-[24px]">Portfolio</li>
        <li className="mx-[28px] text-[16px] leading-[24px]">Portfolio</li>
        <li className="mx-[28px] text-[16px] leading-[24px]">Portfolio</li>
    </ul>

  </div>
  </div>
  </div>; 
}
