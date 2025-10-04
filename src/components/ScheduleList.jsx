// src/components/ScheduleList.jsx
import React from "react";
import ScheduleItem from "./ScheduleItem";

const ScheduleList = () => {
  const schedules = [
    { time: "1限", title: "授業" },
    { time: "2限", title: "ゼミ" },
  ];

  return (
    <div className="p-2">
      {schedules.map((s, i) => (
        <ScheduleItem key={i} time={s.time} title={s.title} />
      ))}
    </div>
  );
};

export default ScheduleList;
