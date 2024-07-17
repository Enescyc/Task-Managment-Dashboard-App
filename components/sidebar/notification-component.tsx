import React from 'react';
import NotificationIcon from "@/public/icons/NotificationIcon";

function NotificationComponent() {
  return (
    <div
      className={"flex flex-col gap-y-1 w-11 h-11 border-[#F5F5F7] px-2.5 py-3 rounded-full px border-[1px] hover:cursor-pointer items-center justify-center"}>
      <div className={"relative"}>
        <NotificationIcon></NotificationIcon>
        <div className={"bg-[#FF4D5E] w-1.5 h-1.5 rounded-full absolute top-0 right-0"}></div>
      </div>
    </div>
  );
}

export default NotificationComponent;