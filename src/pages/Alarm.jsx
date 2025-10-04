import React, { useState, useEffect } from 'react';

// アラームの目標時刻を仮で設定（90秒後）
const TARGET_TIME = new Date(new Date().getTime() + 90 * 1000);

function Alarm() {
  // 残り時間をミリ秒で管理
  const [timeLeft, setTimeLeft] = useState(TARGET_TIME - new Date());

  useEffect(() => {
    // 1秒ごとに残り時間を更新するタイマー
    const timer = setInterval(() => {
      const remaining = TARGET_TIME - new Date();
      setTimeLeft(remaining > 0 ? remaining : 0);
    }, 1000);

    // クリーンアップ関数
    return () => clearInterval(timer);
  }, []); // 最初の一度だけ実行

  // 時間切れになったら音を鳴らす
  useEffect(() => {
    if (timeLeft <= 0) {
      const audio = new Audio("https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg");
      audio.play();
    }
  }, [timeLeft]);


  // 残り時間を分と秒にフォーマットする関数
  const formatTime = (milliseconds) => {
    if (milliseconds <= 0) return '00:00';
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className="alarm-container">
      <div className="alarm-card">
        {/* 目標時刻の表示 */}
        <div className="alarm-target-time">
          {TARGET_TIME.getHours()}:{String(TARGET_TIME.getMinutes()).padStart(2, '0')}
        </div>
        
        {/* 残り時間の表示 */}
        <div className="alarm-countdown">
          予定まで {formatTime(timeLeft)}
        </div>

        {/* ボタン */}
        <div className="alarm-actions">
          <button className="button-primary">停止</button>
          <button className="button-secondary">スヌーズ</button>
        </div>
      </div>
    </div>
  );
}

export default Alarm;