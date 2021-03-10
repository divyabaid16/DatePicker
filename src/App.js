import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import {FaCalendarAlt} from "react-icons/fa";
import './App.css';

import "react-datepicker/dist/react-datepicker.css";

function MyApp() {
  const [startDate, setStartDate] = useState(new Date());

  const CustomInput = React.forwardRef(
    (props, ref) => (
      <div className = "customDatePickDiv">
        <label onClick={props.onClick} ref={ref}>
          {props.value || props.placeholder}
        </label>
        < FaCalendarAlt onClick={props.onClick}/>
      </div>
    ),
  );

  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        customInput={<CustomInput />}
        filterDate={date => date.getDay()!==0}
      />
    </div>
  );
}

export default MyApp;