import React, { useState, useEffect, useRef } from "react";
import './Navbar.css';

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="nav">
      <div className="navbar">
        <div className="navbar-left">Admin / Logged In</div>

        <div className="profile-container" ref={dropdownRef}>
          <i
            className="fas fa-user-circle profile-icon"
            onClick={() => setShowDropdown((prev) => !prev)}
          ></i>
          {showDropdown && (
            <div className="dropdown-menu">
              <div className="dropdown-item">View Profile</div>
              <div className="dropdown-item logout">Logout</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
