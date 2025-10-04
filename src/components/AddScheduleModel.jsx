import React, { useState } from 'react';

function AddScheduleModal({ onClose }) {
  const [title, setTitle] = useState('');
  const [hasAlarm, setHasAlarm] = useState(false);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleSubmit = () => {
    const newSchedule = { title, hasAlarm, startTime, endTime, date: '2025-10-05', color: '#6EC5FF' };
    console.log('New Schedule Data:', newSchedule);
    onClose(); 
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>予定を追加</h3>
        <div className="form-group">
          <input 
            type="text" 
            placeholder="タイトル" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group alarm-toggle">
          <label htmlFor="alarm-checkbox">アラームなし</label>
          <input 
            id="alarm-checkbox"
            type="checkbox" 
            checked={hasAlarm}
            onChange={(e) => setHasAlarm(e.target.checked)}
          />
          <label htmlFor="alarm-checkbox">アラームあり</label>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>開始時刻</label>
            <input 
              type="time" 
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>終了時刻</label>
            <input 
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            />
          </div>
        </div>
        <div className="modal-actions">
          <button className="button-secondary" onClick={onClose}>戻る</button>
          <button className="button-primary" onClick={handleSubmit}>確定</button>
        </div>
      </div>
    </div>
  );
}

export default AddScheduleModal;

