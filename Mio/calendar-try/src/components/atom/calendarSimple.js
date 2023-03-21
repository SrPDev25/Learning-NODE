import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Component, useState } from "react";
import { Calendar } from "react-date-range";
import { setDate } from "date-fns";

/**
 * Just the calendar, print at the console when you choose a date
 */

export const CalendarSimple = (props) => {
  const [newDate,setNewDate]=useState(new Date())
  const handleSelect = (date) => {
    setNewDate(date)
    console.log(typeof date)
  };
  return <Calendar date={newDate} onChange={handleSelect} />;
};
