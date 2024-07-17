import React from 'react';
import ProfileHeroIcon from "@/public/icons/ProfileHeroIcon";

function ProfileComponent() {
  return (
    <div
      className={"flex flex-col w-11 h-11 border-[#F5F5F7] rounded-full hover:cursor-pointer items-center justify-center"}>
      <ProfileHeroIcon/>
    </div>
  );
}

export default ProfileComponent;