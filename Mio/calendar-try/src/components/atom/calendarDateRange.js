import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Component, useState } from "react";

export const CalendarDateRange = (props) => {
  const [secondDate, setSecondDate] = useState(new Date());
  const [firstDate, setfirstDate] = useState(new Date());

  /**
   * The action which execute when you clic some dates, defaultly dont found, that are my changes
   * I don't like it too much, you have two options ahead of the calendar,
   *    1- first option of the range, reset the second
   */
  const handleSelect = (range) => {
    setfirstDate(range.selection.startDate);
    setSecondDate(range.selection.endDate);
  };

  /**
   * The selection range is the data you recolect
   */
  const selectionRange = {
    startDate: firstDate, //First date of the range
    endDate: secondDate, //Second date of the range
    key: "selection", //Indentificator
  };
  return (
    <DateRangePicker
      ranges={[selectionRange]}
      onChange={handleSelect}
      maxDate={new Date()}
    />
  );
};
