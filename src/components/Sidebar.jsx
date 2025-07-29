import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Admin Panel</h2>
      <Link to="/dashboard">
        <i className="fas fa-tachometer-alt"></i>
        <span>Dashboard</span>
      </Link>

      <Link to="/addproduct">
        <i className="fas fa-plus-square"></i>
        <span>Add Product</span>
      </Link>
      <Link to="/Products">
        <i className="fas fa-box"></i>
        <span>Products</span>
      </Link>


      <Link to="/Addcategory">
        <i className="fas fa-th-large"></i>
        <span> Add Categories</span>
      </Link>
      <Link to="/categories">
        <i className="fas fa-th-large"></i>
        <span>Categories</span>
      </Link>

      <Link to="/orders">
        <i className="fas fa-shopping-cart"></i>
        <span>Orders</span>
      </Link>

      <Link to="/users">
        <i className="fas fa-users"></i>
        <span>Users</span>
      </Link>
    </div>
  );
}

export default Sidebar;
