import React, { useState } from 'react';
import './Search.css';
import 'react-date-range/dist/styles.css'; 
import { DateRangePicker } from "react-date-range";

//Date Picker Component
function Search() {
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    
    return (
      <DatePicker
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => {
          setDateRange(update);
        }}
        withPortal
      />
    )
  }

  export default Search;