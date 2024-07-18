import React from 'react';
import MentorHeader from "@/components/hero/mentor/mentor-header";
import MentorContent from "@/components/hero/mentor/mentor-content";

function MentorsComponent() {
  return (
    <div className={"grid grid-col-1 lg:grid-cols-2 gap-x-5 gap-y-5"}>
      <MentorHeader/>
      <MentorContent name={"Enescyc"} title={"https://github.com/Enescyc"}/>
      <MentorContent name={"Enescyc"} title={"https://github.com/Enescyc"}/>
    </div>
  );
}

export default MentorsComponent;