import React from "react";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

const DateSelector = ({ value, onChange }) => {
  return (
    <div className="bg-white shadow p-3 rounded-xl">
      <label className="font-semibold">Select Date for Task</label>
      <DatePicker onChange={onChange} value={value} className="mt-2" />
    </div>
  );
};

export default DateSelector;
