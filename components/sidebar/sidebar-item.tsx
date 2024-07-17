import React from 'react';
import Link from "next/link";

function SidebarItem(props: Props) {
  const {href, label, icon} = props;
  return (
    <Link className={"flex first:bg-[#F5F5F7] first:text-[#141522] h-full w-full gap-x-3 rounded-lg items-center justify-start px-5 py-2.5 hover:bg-[#F5F5F7] hover:text-[#141522] text-[#8E92BC]"} href={href}>
      {icon}
      {label}
    </Link>
  );
}

interface Props {
  label: string;
  href: string;
  icon: React.ReactNode;
}

export default SidebarItem;