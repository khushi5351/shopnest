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
// import logo from '../Assets/logo.jpg';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className="header">
        {/* Sidebar Toggle - only on small screens */}
        <HiBars3
          className="menu-icon" style={{height:"30px",width:"30px"}}
          onClick={() => setIsSidebarOpen(true) }
        />

        {/* Logo */}
        {/* <Link to="/" className="logo">
          ShopNest
        </Link> */}
         <img src="https://github.com/khushi5351/shopnest/blob/main/src/Assets/logo.jpg?raw=true"  />

        {/* Nav Links - shown on large screens only */}
        {/* <nav className="nav-links">
          <Link to="/Home">Home</Link>
          <Link to="/Product">Products</Link>
          <Link to="/About">About</Link>
        </nav> */}

        {/* Icons group */}
        <div className="nav-icons">
          <Link to="/search">
            <HiOutlineMagnifyingGlass className="icon" />
          </Link>
          <Link to="/Login">
            <HiOutlineUser className="icon" />
          </Link>
          <Link to="/Cart">
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
