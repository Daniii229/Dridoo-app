import React, { useState, useRef, useEffect } from 'react';
import '../component/ReactDatepicker.css';

const DatePicker = ({ label, selectedDate, onDateChange }) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const dateInputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dateInputRef.current && !dateInputRef.current.contains(e.target)) {
        setShowCalendar(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const generateCalendar = () => {
    const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const daysInMonth = [];
    const firstDayIndex = startOfMonth.getDay();

    for (let i = 0; i < firstDayIndex; i++) {
      daysInMonth.push(null); // Padding empty days
    }

    for (let day = 1; day <= endOfMonth.getDate(); day++) {
      daysInMonth.push(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
    }

    return daysInMonth;
  };

  const selectDate = (date) => {
    setShowCalendar(false);
    onDateChange(date);
  };

  const formatDate = (date) => {
    return date ? `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}` : '';
  };

  return (
    <div className="date-picker" ref={dateInputRef}>
      <label>{label}</label>
      <input
        type="text"
        readOnly
        value={formatDate(selectedDate)}
        onClick={() => setShowCalendar(!showCalendar)}
        placeholder="Select Date"
      />
      {showCalendar && (
        <div className="calendar">
          <div className="header">
            <span>
              {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
            </span>
          </div>
          <div className="days">
            {daysOfWeek.map((day, index) => (
              <div key={index} className="day-name">
                {day}
              </div>
            ))}
            {generateCalendar().map((date, index) => (
              <div
                key={index}
                className={`day ${date && selectedDate && date.toDateString() === selectedDate.toDateString() ? 'selected' : ''}`}
                onClick={() => date && selectDate(date)}
              >
                {date ? date.getDate() : ''}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DatePicker;
