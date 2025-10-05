import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/logo'; // 👈 パスを修正しました

function SplashPage() {
  const navigate = useNavigate();
  const [fadeout, setFadeout] = useState(false);

  useEffect(() => {
    // 2.5秒後にフェードアウトを開始
    const fadeTimer = setTimeout(() => {
      setFadeout(true);
    }, 2500);

    // 3秒後にホームページへ移動
    const navigateTimer = setTimeout(() => {
      navigate('/home');
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(navigateTimer);
    };
  }, [navigate]);

  return (
    <div className={`splash-container ${fadeout ? 'fade-out' : ''}`}>
      <Logo />
    </div>
  );
}

export default SplashPage;

