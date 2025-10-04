import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Alarm from "./pages/Alarm";
import ScheduleInput from "./pages/ScheduleInput";
import Today from "./pages/Today";
import DayViewPage from './pages/DayViewPage';

// Components
import Navbar from "./components/Navbar";
import AddButton from './components/AddButton';
import AddScheduleModal from './components/AddScheduleModal'; // モーダルをインポート

function App() {
  // モーダルの表示状態を管理する State (true: 表示, false: 非表示)
  const [isModalOpen, setIsModalOpen] = useState(false);

  // モーダルを開く関数
  const openModal = () => setIsModalOpen(true);
  // モーダルを閉じる関数
  const closeModal = () => setIsModalOpen(false);

  return (
    <Router>
      <div className="phone-frame">
        <Navbar /> 
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/alarm" element={<Alarm />} />
            <Route path="/today" element={<Today />} />
            <Route path="/schedule" element={<ScheduleInput />} />
            <Route path="/day/:date" element={<DayViewPage />} />
          </Routes>
        </main>
        
        {/* ボタンがクリックされたら openModal を実行 */}
        <AddButton onClick={openModal} />

        {/* isModalOpen が true の場合のみモーダルを表示 */}
        {isModalOpen && <AddScheduleModal onClose={closeModal} />}
      </div>
    </Router>
  );
}

export default App;
