// src/components/schedule/ScheduleItem.jsx

import React from 'react';

function ScheduleItem({ time, title, color }) {
  return (
    <div className="schedule-item">
      <span className="schedule-time">{time}</span>
      <div className="schedule-decorator">
        <div className="schedule-dot" style={{ backgroundColor: color }}></div>
        <div className="schedule-line"></div>
      </div>
      <span className="schedule-title">{title}</span>
    </div>
  );
}

export default ScheduleItem;