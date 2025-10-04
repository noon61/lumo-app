import React from "react";

function SecondaryButton({ children, onClick }) {
  return (
    <button 
      onClick={onClick}
      style={{
        backgroundColor: "#eee",
        color: "#333",
        border: "none",
        borderRadius: "6px",
        padding: "8px 16px"
      }}
    >
      {children}
    </button>
  );
}

export default SecondaryButton;
