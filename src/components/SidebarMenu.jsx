import './SidebarMenu.css';
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const SidebarMenu = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
      <div className="sidebar-header">
        <h2>Menu</h2>
        <IoClose className="icon" onClick={() => setIsSidebarOpen(false)} />
      </div>
      <nav>
        <Link to="/" onClick={() => setIsSidebarOpen(false)}>Home</Link>
        <Link to="/products" onClick={() => setIsSidebarOpen(false)}>Products</Link>
        <Link to="/about" onClick={() => setIsSidebarOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setIsSidebarOpen(false)}>Contact</Link>
      </nav>
    </div>
  );
};

export default SidebarMenu;
