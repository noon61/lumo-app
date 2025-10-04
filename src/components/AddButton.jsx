// src/components/ui/AddButton.jsx

import React from 'react';
import { FaPlus } from 'react-icons/fa';

// 👇 propsとして onClick を受け取る
function AddButton({ onClick }) {
  return (
    // 👇 受け取ったonClick関数をボタンのクリックイベントに設定
    <button className="fab-button" onClick={onClick}>
      <FaPlus size="1.5rem" />
    </button>
  );
}

export default AddButton;