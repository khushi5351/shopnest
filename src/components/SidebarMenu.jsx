import './SidebarMenu.css';
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const SidebarMenu = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <div className={`sidebaru ${isSidebarOpen ? "open" : ""}`}>
      <div className="sidebaru-header">
        <h2>Menu</h2>
        <IoClose className="icon" onClick={() => setIsSidebarOpen(false)} />
      </div>
      <nav>
        <Link to="/Home" onClick={() => setIsSidebarOpen(false)}>Home</Link>
        <Link to="/Product" onClick={() => setIsSidebarOpen(false)}>Products</Link>
        <Link to="/About" onClick={() => setIsSidebarOpen(false)}>About</Link>
        {/* <Link to="/contact" onClick={() => setIsSidebarOpen(false)}>Contact</Link> */}
      </nav>
    </div>
  );
};

export default SidebarMenu;
