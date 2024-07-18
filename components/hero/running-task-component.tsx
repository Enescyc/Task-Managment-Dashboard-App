import React from 'react';

function RunningTaskComponent(props: Props) {
  return (
    <div className={"flex lg:flex-col w-full lg:w-[214px] lg:gap-y-5 text-white h-[124px] lg:h-[214px] px-5 py-5 bg-[#141522] rounded-lg"}>
      <div className={"flex flex-col  w-full h-full items-start justify-between"}>
        <h5 className={"text-lg font-semibold"}>Running Task</h5>
        <p className={"text-3xl font-semibold"}>{props.runningTaskCount}</p>
      </div>
      <div className={"flex gap-x-5 w-full h-full items-center justify-start relative"}>
        <div className={"w-20 h-20 shrink-0 rounded-full flex items-center justify-center relative"}>
          <div
            className={"w-[84px] h-[84px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2   border-[#546FFF20] border-[3px] border-r-[#546FFF] border-t-[#546FFF] rotate-[45deg] rounded-full"}></div>
          {
            props.totalTaskCount > 0 && props.runningTaskCount > 0 ? (
              <p className={"text-xl"}>{Math.floor(((props.runningTaskCount) / props.totalTaskCount) * 100)}%</p>
            ) : (
              <p className={"text-xl"}>0%</p>
            )
          }
        </div>
        <div className={"flex flex-col h-full justify-center items-center"}>
          <p className={"text-xl"}>{props.totalTaskCount}</p>
          <p className={"text-sm text-[#8E92BC]"}>Task</p>
        </div>
      </div>
    </div>
  );
}

interface Props {
  totalTaskCount: number;
  runningTaskCount: number;
}

export default RunningTaskComponent;