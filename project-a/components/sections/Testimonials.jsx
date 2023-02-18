import React from "react";
import Image from "next/image";

const Testimonials = () => {
  return <div className="bg-black pb-32 text-white pt-32 ">
    <div className="mx-auto container px-32" >
        <p className="text-white">Our success Stories</p>
   
    <div className="flex justify-center items-center">
    <div className="flex-1">
        <div>
            <p className="text-white ">
                <span>Andrea Althaus</span> &nbsp;
                |  &nbsp;
                <span>VP Talent Acquisition</span>  &nbsp;
                ,  &nbsp;
                <span>Project A</span>
            </p>
           <div><p className="my-8 font-normal leading-[44px] text-[32px]">"We helped Trade Republic hire over 50 talents with a dedicated team of our recruiters and sourcers selected for their ability to drive company growth."</p></div>
           <p className="my-4 leading-[24px] text-[16px]">Our Talent Acquisition team collaborated with Trade Republic on one of the most important things for a startup: hire the right bright-minded and talented people. The operational support includes the entire recruitment process from setting up the recruiting plan to sourcing and hiring.</p> 
        </div>
    </div>
    <div className="flex-1">
        <Image src='https:////images.ctfassets.net/ky20t1w4m8i5/3PFKUzOiFnt0t7dbZWAm78/27d6c5cde7976fb2e6047f7978871700/Group_5.png' width={508} height={340} />
    </div>
    </div>
    </div>
  </div>;
};

export default Testimonials;
