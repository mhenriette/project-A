import Arrow from "components/ui/Arrow";
import React from "react";
import news from '../../src/data/news'

function News() {
  return <div className="text-white bg-black pb-16 ">
    <div className="mx-auto container px-32 pb-16 flex flex-col justify-center">
    {news.map((el)=>{
        return(<div key={el.id} className='text-[#8f9094] flex justify-between py-4 border-t mb-4 border-[#8f9094] hover:border-white hover:text-white '>
            <p className="text-[12px] leading-[16px]">{el.date}</p>
        <p className="text-[20px] leading-[28px] tracking-[-0.54px] ">{el.Text}</p>
        <Arrow/>
        </div>
       
        )})
    
    }
     </div>
    <div className="flex justify-center items-center">
        <button className="px-8 py-4 border border-white  hover:bg-white hover:border-black hover:text-black
        ">See all news</button>
        </div>
    
    </div>;
}

export default News;
