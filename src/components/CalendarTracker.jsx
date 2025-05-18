import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function CalendarTracker() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="mt-4">
      <Calendar onChange={setDate} value={date} />
      <p className="mt-2">Selected Date: {date.toDateString()}</p>
    </div>
  );
}
