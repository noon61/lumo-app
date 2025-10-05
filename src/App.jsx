import React, { useState } from 'react';
// 👇 useLocation を追加でインポートします
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from "./pages/Home";
import Alarm from "./pages/Alarm";
import Navbar from "./components/Navbar";
import AddButton from './components/AddButton';
import Today from "./pages/Today";
import DayViewPage from './pages/DayViewPage';
import SplashPage from './pages/SplashPage';
import AddScheduleModal from './components/AddScheduleModal';

// Appの内容を別のコンポーネントに分離し、フックを使えるようにします
function AppContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation(); // 現在のURLの情報を取得

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // もしURLが'/'（最初のページ）なら、スプラッシュ画面だけを表示
  if (location.pathname === '/') {
    return (
      <Routes>
        <Route path="/" element={<SplashPage />} />
      </Routes>
    );
  }

  // それ以外のページなら、いつものスマホ画面を表示
  return (
    <div className="phone-frame">
      <Navbar /> 
      <main className="main-content">
        <Routes>
          <Route path="/home" element={<Home />} /> {/* Homeのパスを/homeに変更 */}
          <Route path="/alarm" element={<Alarm />} />
          <Route path="/today" element={<Today />} />
          <Route path="/day/:date" element={<DayViewPage />} />
        </Routes>
      </main>
      <AddButton onClick={openModal}/>
      {isModalOpen && <AddScheduleModal onClose={closeModal} />}
    </div>
  );
}

// AppコンポーネントはRouterでAppContentを囲むだけのシンプルな作りにします
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

