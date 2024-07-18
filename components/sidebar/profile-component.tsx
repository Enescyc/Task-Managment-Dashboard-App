import React from 'react';
import Image from "next/image";

function ProfileComponent() {
  return (
    <div
      className={"flex flex-col w-11 h-11 border-[#F5F5F7] rounded-full hover:cursor-pointer items-center justify-center"}>
      <Image src={"/images/img_1.png"} alt={"profile"} height={100} width={100}/>
    </div>
  );
}

export default ProfileComponent;