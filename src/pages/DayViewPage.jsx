// src/pages/DayViewPage.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import { ja } from 'date-fns/locale';
import { schedules } from '../data/dummySchedules'; // ダミーデータをインポート
import ScheduleItem from '../components/ScheduleItem'; // これから作るコンポーネント

function DayViewPage() {
  const { date } = useParams(); // URLから :date パラメータを取得 (例: '2025-10-05')

  const selectedDate = parseISO(date); // 'yyyy-MM-dd' 形式の文字列をDateオブジェクトに変換

  // 今日の日付に一致する予定だけをフィルタリング
  const todaysSchedules = schedules.filter(schedule => schedule.date === date);

  return (
    <div className="day-view-container">
      {/* 日付表示 */}
      <div className="day-header">
        {format(selectedDate, 'M月d日 E曜日', { locale: ja })}
      </div>

      {/* 予定リスト */}
      <div className="schedule-list">
        {todaysSchedules.length > 0 ? (
          todaysSchedules.map((schedule, index) => (
            <ScheduleItem 
              key={index}
              time={schedule.time}
              title={schedule.title}
              color={schedule.color}
            />
          ))
        ) : (
          <p className="no-schedules">予定はありません</p>
        )}
      </div>
    </div>
  );
}

export default DayViewPage;