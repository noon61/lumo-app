import React from 'react';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';
import { schedules } from '../data/dummySchedules'; // ダミーデータをインポート
import ScheduleItem from '../components/ScheduleItem'; // 作成済みのコンポーネントを再利用

function Today() {
  // 1. 今日（現在）の日付を取得
  const today = new Date();
  // 'yyyy-MM-dd' 形式 (例: '2025-10-05') に整形して、データを探すためのキーにする
  const formattedTodayKey = format(today, 'yyyy-MM-dd');

  // 2. ダミーデータの中から、今日の日付に一致する予定だけを絞り込む
  const todaysSchedules = schedules.filter(schedule => schedule.date === formattedTodayKey);

  return (
    // DayViewPageと同じクラス名を使うことで、同じスタイルを適用する
    <div className="day-view-container">
      {/* 日付表示 */}
      <div className="day-header">
        {format(today, 'M月d日 E曜日', { locale: ja })}
      </div>

      {/* 予定リスト */}
      <div className="schedule-list">
        {todaysSchedules.length > 0 ? (
          // 絞り込んだ予定を一つずつ ScheduleItem コンポーネントで表示
          todaysSchedules.map((schedule, index) => (
            <ScheduleItem 
              key={index}
              time={schedule.time}
              title={schedule.title}
              color={schedule.color}
            />
          ))
        ) : (
          // 予定がなければメッセージを表示
          <p className="no-schedules">今日の予定はありません</p>
        )}
      </div>
    </div>
  );
}

export default Today;
