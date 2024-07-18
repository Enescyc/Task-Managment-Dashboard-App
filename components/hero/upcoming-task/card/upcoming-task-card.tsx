import React from 'react';
import {Slider} from "@/components/ui/slider";
import Image from "next/image";
import {Clock} from "lucide-react";

function UpcomingTaskCard() {
  return (
    <div className={"flex flex-col px-6 py-6 gap-y-4 bg-white rounded-lg"}>
      <div className={"flex w-full h-full"}>
        <Image width={1000} height={200} className={"flex w-full h-full"} src={"/images/img.png"} alt={"hero image"}/>
      </div>
      <div className={"flex flex-col w-full"}>
        <h3 className={"text-[#141522] font-semibold"}>Creating Mobile App Design</h3>
        <h5 className={"text-[#54577A] text-xs"}>UI/UX Design</h5>
      </div>
      <div className={"flex flex-col gap-y-2"}>
        <div className={"flex w-full items-center justify-between"}>
          <p>Progress</p>
          <p className={"text-[#546FFF]"}>75%</p>
        </div>
        <div>
          <Slider defaultValue={[75]} max={100} step={1}/>
        </div>
      </div>
      <div className={"flex items-center justify-between"}>
        <div className={"flex gap-x-2"}>
          <Clock/>
          <p className={"text-[#141522]"}>3 Days Left</p>
        </div>
        <div className={"flex items-center -space-x-1"}>
          <div className={"flex text-white text-[9px] shrink-0 w-6 h-6 items-center justify-center rounded-full ring-2 ring-white bg-slate-800 "}>
            EŞ
          </div>
          <div className={"flex text-white text-[9px] shrink-0 w-6 h-6 items-center justify-center rounded-full ring-2 ring-white bg-slate-700 "}>
            ME
          </div>
          <div className={"flex text-white text-[9px] shrink-0 w-6 h-6 items-center justify-center rounded-full ring-2 ring-white bg-slate-600 "}>
            AL
          </div>
          <div className={"flex text-white text-[9px] shrink-0 w-6 h-6 items-center justify-center rounded-full ring-2 ring-white bg-slate-500 "}>
            SK
          </div>
          <div className={"flex text-white text-[9px] shrink-0 w-6 h-6 items-center justify-center rounded-full ring-2 ring-white bg-slate-400 "}>
            MC
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpcomingTaskCard;