import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Admin Panel</h2>

      <Link to="/dashboard">
        <i className="fas fa-tachometer-alt"></i> Dashboard
      </Link>

      <Link to="/products">
        <i className="fas fa-box"></i> Products
      </Link>

      <Link to="/addproduct">
        <i className="fas fa-plus-square"></i> Add Product
      </Link>

      <Link to="/categories">
        <i className="fas fa-th-large"></i> Categories
      </Link>

      <Link to="/orders">
        <i className="fas fa-shopping-cart"></i> Orders
      </Link>

      <Link to="/users">
        <i className="fas fa-users"></i> Users
      </Link>


    </div>
  );
}

export default Sidebar;
