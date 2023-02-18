import React from "react";
import Image from "next/image";
import image from '../../src/assets/arrow.svg'

function Arrow() {
  return <div className="py-[14px] px-4">
    <Image src={image} width={51} height={15}/>
  </div>;
}

export default Arrow;
