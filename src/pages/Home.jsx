import React from "react";
import CalendarView from "../components/CalendarView";
import AddButton from "../components/AddButton";
import "./Home.css";

const Home = () => {
  return (
    <div className="max-w-sm mx-auto p-4">
      {/* <h2 className="text-lg font-bold mb-4">2025年</h2> */}
      <CalendarView />
      <AddButton />
    </div>
  );
};

export default Home;
