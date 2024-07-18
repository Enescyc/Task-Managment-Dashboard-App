import Sidebar from "@/components/sidebar/sidebar";
import HeroComponent from "@/components/hero/hero-component";
import RunningTaskComponent from "@/components/hero/running-task-component";
import ActivityComponent from "@/components/hero/activity-component";
import React from "react";
import UpcomingTaskComponent from "@/components/hero/upcoming-task/upcoming-task-component";
import MentorsComponent from "@/components/hero/mentor/mentors-component";

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row w-full h-full bg-[#FAFAFA] overflow-hidden">
      <Sidebar></Sidebar>
      <div className={"flex flex-col w-full px-6 py-6 gap-y-10 h-full overflow-y-scroll"}>
        <HeroComponent/>
        <div className={"flex flex-col lg:flex-row items-center gap-x-5"}>
          <RunningTaskComponent runningTaskCount={50} totalTaskCount={100}></RunningTaskComponent>
          <ActivityComponent/>
        </div>
        <MentorsComponent/>
        <UpcomingTaskComponent/>
      </div>
      <div className={"flex bg-white border-l  h-screen w-1/2 "}>
        Right Sidebar TODO
      </div>
    </main>
  );
}
