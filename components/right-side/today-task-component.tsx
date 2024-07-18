import React from 'react';
import Image from "next/image";
import UpcomingTaskCard from "@/components/hero/upcoming-task/card/upcoming-task-card";
import {Button} from "@/components/ui/button";

function TodayTaskComponent() {
  return (
    <div className={"flex flex-col gap-y-5 w-full h-full bg-white rounded-lg p-6 text-[#141522]"}>
      <div className={"flex w-full items-center justify-between"}>
        <p>Task Today</p>
        <span className={"text-2xl"}>...</span>
      </div>
      <div className={"flex w-full justify-center border-b"}>
        <UpcomingTaskCard/>
      </div>
      <div className={"flex w-full items-center justify-between"}>
        <p>Detail Task</p>
        <p>UI/UX Designer</p>
      </div>
      <div className={"flex flex-col items-center  gap-y-5  justify-start w-full h-full bg-white"}>
        <div className={"flex items-center justify-start w-full gap-x-5"}>
          <div className={"bg-[#F5F5F7] w-9 h-9 rounded-lg flex items-center justify-center "}>1</div>
          <p className={"w-full text-xs"}>Understanding the tools in Figma</p>
        </div>
        <div className={"flex items-center justify-start w-full gap-x-5"}>
          <div className={"bg-[#F5F5F7] w-9 h-9 rounded-lg flex items-center justify-center "}>2</div>
          <p className={"w-full text-xs"}>Understand the basics of making designs</p>
        </div>
        <div className={"flex items-center justify-start w-full gap-x-5"}>
          <div className={"bg-[#F5F5F7] w-9 h-9 rounded-lg flex items-center justify-center "}>3</div>
          <p className={"w-full text-xs"}>Design a mobile application with figma</p>
        </div>
      </div>
      <Button variant={"default"}>Go to the detail</Button>

    </div>
  );
}

export default TodayTaskComponent;