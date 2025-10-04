import React from "react";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

function AddScheduleModal({ onClose, onConfirm }) {
  return (
    <div style={{
      position: "fixed",
      top: "50%", left: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
      width: "300px"
    }}>
      <h3>予定を追加</h3>
      <input placeholder="タイトル" style={{ width: "100%", marginBottom: "10px" }} />
      <input type="date" style={{ width: "100%", marginBottom: "10px" }} />
      <input type="time" style={{ width: "100%", marginBottom: "10px" }} />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <SecondaryButton onClick={onClose}>戻る</SecondaryButton>
        <PrimaryButton onClick={onConfirm}>確定</PrimaryButton>
      </div>
    </div>
  );
}

export default AddScheduleModal;
