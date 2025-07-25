import React from "react";
import './Navbar.css'

export default function Navbar() {
  return (
   < div className="nav">
    <div className="navbar">
      <div className="navbar-left">Admin / Logged In</div>
      <button className="logout-button">
        Logout
      </button>
    </div>
    </div>
  );
}
