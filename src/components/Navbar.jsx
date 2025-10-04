import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-link">
        今月
      </NavLink>
      <NavLink to="/today" className="nav-link">
        今日
      </NavLink>
      {/* 👇 アラームへのリンクを追加 */}
      <NavLink to="/alarm" className="nav-link">
        アラーム
      </NavLink>
    </nav>
  );
}

export default Navbar;
