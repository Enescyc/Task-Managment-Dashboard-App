import React from 'react';
import UpcomingTaskHeader from "@/components/hero/upcoming-task/upcoming-task-header";
import UpcomingTaskCard from "@/components/hero/upcoming-task/card/upcoming-task-card";

function UpcomingTaskComponent() {
  return (
    <div className={"flex flex-col gap-y-5"}>
      <UpcomingTaskHeader/>
      <div className={"grid grid-cols-1 lg:grid-cols-2"}>
        <UpcomingTaskCard/>
        <UpcomingTaskCard/>
      </div>
    </div>
  );
}

export default UpcomingTaskComponent;