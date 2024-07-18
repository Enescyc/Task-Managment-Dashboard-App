import React from 'react';
import NotificationComponent from "@/components/sidebar/notification-component";
import ProfileComponent from "@/components/sidebar/profile-component";

function HeroComponent() {
  return (
    <div className={"flex flex-col lg:flex-row lg:items-center lg:justify-between gap-y-2"}>
      <div>
        <h3 className={"text-[#141522] text-2xl font-semibold"}>Hi, Skylar Dias</h3>
        <h5 className={"text-[#54577A]"}>Lets finish your task today!</h5>
      </div>
      <div className={"lg:flex gap-x-2 hidden"}>
        <NotificationComponent/>
        <ProfileComponent/>
      </div>
    </div>
  );
}

export default HeroComponent;