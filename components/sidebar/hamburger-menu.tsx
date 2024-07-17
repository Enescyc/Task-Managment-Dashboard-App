import React from 'react';

function HamburgerMenu() {
  return (
    <div
      className={"flex flex-col gap-y-1 w-11 h-11 border-[#F5F5F7] px-2.5 py-3 rounded-full px border-[1px] hover:cursor-pointer items-center justify-center"}>
      <section className={"flex w-full h-[1px] shrink-0 bg-[#8E92BC] rounded-2xl"}></section>
      <section className={"flex w-full h-[1px] shrink-0 bg-[#8E92BC] rounded-2xl"}></section>
      <section className={"flex w-full h-[1px] shrink-0 bg-[#8E92BC] rounded-2xl"}></section>
    </div>
  );
}

export default HamburgerMenu;