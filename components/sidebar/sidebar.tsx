import React from 'react';
import NotificationIcon from "@/public/icons/NotificationIcon";
import Logo from "@/public/icons/Logo";
import HelpCenter from "@/components/sidebar/help-center";
import SidebarItem from "@/components/sidebar/sidebar-item";
import OverviewIcon from "@/public/icons/OverviewIcon";
import NotificationComponent from "@/components/sidebar/notification-component";
import ProfileComponent from "@/components/sidebar/profile-component";
import HamburgerMenu from "@/components/sidebar/hamburger-menu";

const sidebarItems = [
  {
    label: "Overview",
    href: "/overview",
    icon: <OverviewIcon/>
  },
  {
    label: "Task",
    href: "/task",
    icon: <NotificationIcon/>
  },
  {
    label: "Mentors",
    href: "/message",
    icon: <NotificationIcon/>
  },
  {
    label: "Message",
    href: "/message",
    icon: <NotificationIcon/>
  }, {
    label: "Settings",
    href: "/settings",
    icon: <NotificationIcon/>
  },
]

function Sidebar() {
  return (
    <aside className={"flex flex-row lg:flex-col items-center bg-white justify-between h-[108px] lg:h-screen lg:w-[252px] border-b-2 border-[#F5F5F7]"}>
      <div className={"flex items-center  justify-between  w-full h-full lg:hidden"}>
        <div className={"flex w-full h-full items-center justify-start gap-x-3 px-3 py-3"}>
          <HamburgerMenu/>
        </div>
        <div className={"flex w-full h-full items-center justify-end gap-x-3 px-3 py-3"}>
          <NotificationComponent/>
          <ProfileComponent/>
        </div>
      </div>
      <div className={"lg:flex flex-col items-center px-8 py-8 gap-y-14 hidden border-r h-full w-full"}>
        <Logo></Logo>
        <div className={"flex flex-col items-start justify-center bg-white gap-y-6 w-full"}>
          {
            sidebarItems.map((item, index) => {
              return (
                <SidebarItem key={index} label={item.label} href={item.href} icon={item.icon}/>
              )
            })
          }
        </div>
        <div className={"flex w-full h-full items-end justify-end"}>
          <HelpCenter></HelpCenter>
        </div>

      </div>
    </aside>
  );
}

export default Sidebar;