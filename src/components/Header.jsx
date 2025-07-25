import {
  HiBars3,
  HiOutlineUser,
  HiOutlineMagnifyingGlass,
  HiOutlineShoppingBag,
} from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useState } from "react";
import SidebarMenu from "./SidebarMenu";
import "./Header.css";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className="header">
        {/* Sidebar Toggle - only on small screens */}
        <HiBars3
          className="menu-icon"
          onClick={() => setIsSidebarOpen(true)}
        />

        {/* Logo */}
        <Link to="/" className="logo">
          ShopNest
        </Link>

        {/* Nav Links - shown on large screens only */}
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Icons group */}
        <div className="nav-icons">
          <Link to="/search">
            <HiOutlineMagnifyingGlass className="icon" />
          </Link>
          <Link to="/login">
            <HiOutlineUser className="icon" />
          </Link>
          <Link to="/cart">
            <HiOutlineShoppingBag className="icon" />
          </Link>
        </div>
      </header>

      <SidebarMenu
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </>
  );
};

export default Header;
