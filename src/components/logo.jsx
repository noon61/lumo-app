import React from 'react';

function Logo() {
  // publicフォルダに置いた画像は、 "/" から始まるパスで直接呼び出せます。
  // import文は不要です。
  // CSSでサイズを調整するため、widthを削除しclassNameを追加
  return (
    <img src="/lumo.png" alt="Lumo App Logo" className="splash-logo" />
  );
}

export default Logo;

