import React from "react";

function PrimaryButton({ children, onClick }) {
  return (
    <button 
      onClick={onClick}
      style={{
        backgroundColor: "#64b5f6",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        padding: "8px 16px",
        fontWeight: "bold"
      }}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
