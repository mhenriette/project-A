import React from "react";
import Image from "next/image";
import logos from "../../src/data/logos"
function Footer() {
  return <div className="bg-[#1717e5] text-white py-6 px-8 flex justify-between">
    <div className="mx-auto container flex gap-32 px-32">
        <ul className="flex items-center text-base">
            <li className="p-3">Contact</li>
            <li className="p-3">Press</li>
            <li className="p-3">Privacy Policy</li>
            <li className="p-3">Imprit</li>
            <li className="p-3">FAQ</li>
            <li className="p-3">Investor Portal</li>
            <li className="p-3">SFDR</li>
        </ul>
        <div className="flex gap-8 items-center">
          {
            logos.map((el)=>
              <Image src={el.url} key={el.id} width={el.width} height={el.height}/>
            )
          }
        </div>

    </div>

  </div>;
}

export default Footer;
