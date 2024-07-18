import React from 'react';

function UpcomingTaskHeader() {
  return (
    <div className={"flex col-span-1 lg:col-span-2 w-full items-center justify-between font-semibold text-[#141522]"}>
      <h3 className={"text-xl"}>Upcoming Tasks</h3>
      <div className={"flex gap-x-5"}>
        <svg width="58" height="24" viewBox="0 0 58 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 19.92L8.47997 13.4C7.70997 12.63 7.70997 11.37 8.47997 10.6L15 4.08002" stroke="#54577A" stroke-width="1.5"
                stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M42.91 19.92L49.43 13.4C50.2 12.63 50.2 11.37 49.43 10.6L42.91 4.08002" stroke="#141522" stroke-width="1.5"
                stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

      </div>
    </div>
  );
}

export default UpcomingTaskHeader;