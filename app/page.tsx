import Sidebar from "@/components/sidebar/sidebar";
import HeroComponent from "@/components/hero/hero-component";
import RunningTaskComponent from "@/components/hero/running-task-component";
import ActivityComponent from "@/components/hero/activity-component";
import MentorsComponent from "@/components/hero/mentors-component";

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row w-full h-full bg-[#FAFAFA]">
      <Sidebar></Sidebar>
      <div className={"flex flex-col lg:flex-row px-6 py-6 gap-y-10"}>
        <HeroComponent/>
        <RunningTaskComponent runningTaskCount={50} totalTaskCount={100}></RunningTaskComponent>
        <ActivityComponent/>
        <MentorsComponent/>
      </div>
      <div className={"flex w-1/3 h-full"}>
        Right Sidebar TODO
      </div>
    </main>
  );
}
