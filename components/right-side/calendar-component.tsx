'use client';
import React, {useEffect} from 'react';
import {Calendar} from "@/components/ui/calendar";

function CalendarComponent() {
  const [date, setDate] = React.useState<Date>(new Date());
  useEffect(() => {
    const date = new Date().setDate(4);
    setDate(new Date(date))
  }, []);
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={(date) => setDate((date as Date))}
      className="rounded-md border bg-white"
    />
  );
}

export default CalendarComponent;