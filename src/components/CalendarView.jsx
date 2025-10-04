// src/components/calendar/CalendarView.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  format, 
  startOfMonth, 
  endOfMonth, 
  eachDayOfInterval, 
  getDay,
  addMonths,
  subMonths
} from 'date-fns';
import { ja } from 'date-fns/locale';

function CalendarView() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const navigate = useNavigate();

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });
  const startingDayOfWeek = getDay(monthStart);

  const goToNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const goToPrevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const handleDateClick = (day) => {
    const formattedDate = format(day, 'yyyy-MM-dd');
    navigate(`/day/${formattedDate}`);
  };
  
  const daysOfWeek = ['日', '月', '火', '水', '木', '金', '土'];

  return (
    <div className="calendar-container">
      <div className="calendar-header-group">
        <div className="year-display">
          {format(currentMonth, 'yyyy年')}
        </div>
        <div className="month-changer">
          <button onClick={goToPrevMonth}>&lt;</button>
          <div className="month-name">
            {format(currentMonth, 'M月', { locale: ja })}
          </div>
          <button onClick={goToNextMonth}>&gt;</button>
        </div>
      </div>
      
      <div className="calendar-grid">
        {daysOfWeek.map(day => (
          <div key={day} className="calendar-day day-header">{day}</div>
        ))}
        {Array.from({ length: startingDayOfWeek }).map((_, index) => (
          <div key={`empty-${index}`} className="calendar-day empty"></div>
        ))}
        
        {/* --- 👇 ここからが修正箇所 --- */}
        {daysInMonth.map(day => {
          const date = format(day, 'd');
          const hasEvent = date === '7' || date === '9'; // 仮のロジック

          return (
            <div 
              key={day.toString()} 
              className="calendar-day date-cell"
              onClick={() => handleDateClick(day)}
            >
              {date}
              {/* 予定がある場合に点を表示 */}
              {hasEvent && <div className="event-dot" style={{ backgroundColor: date === '7' ? '#FF8C42' : '#E5E7EB' }}></div>}
            </div>
          );
        })}
        {/* --- 👆 ここまで --- */}

      </div>
    </div>
  );
}

export default CalendarView;