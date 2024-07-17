import React from 'react';
import {Button} from "@/components/ui/button";

function HelpCenter() {
  return (
    <div className={"bg-[#141522] flex w-full h-[274px] rounded-xl relative"}>
      <div className={"flex w-28 h-28 bg-white opacity-10 absolute -top-12 -left-14 rounded-full"}></div>
      <div className={"flex w-28 h-28  bg-white opacity-10 absolute -bottom-12 -right-14 rounded-full"}></div>
      <div
        className={"flex w-12 h-12 text-white items-center justify-center font-bold text-3xl rounded-full bg-black ring-4 ring-white absolute backdrop-blur-xl shadow-black -top-6 left-1/2 transform -translate-x-1/2"}>
        ?
      </div>
      <div className={"flex flex-col w-full h-full items-center justify-center gap-y-3 text-white px-3 py-3 text-sm"}>
        <h1>
          Help Center
        </h1>
        <p className={"flex w-full text-center items-center justify-center text-xs"}>
          Having Trouble in Learning. Please contact us for more questions.
        </p>
        <Button className={"justify-self-end"} variant={"secondary"}>Go to Help Center</Button>
      </div>
    </div>
  );
}

export default HelpCenter;