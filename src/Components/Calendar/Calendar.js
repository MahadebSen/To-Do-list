import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Calendar1 = () => {
  const [value, onChange] = useState(new Date());

  return (
    <section className="flex justify-center items-center my-20">
      <Calendar onChange={onChange} value={value} />
    </section>
  );
};

export default Calendar1;
