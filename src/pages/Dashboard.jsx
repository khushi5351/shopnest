// import { useState } from 'react';
import './Dashboard.css';
// const [user,setUsers]=useState('')
function Dashboard() {
  return (
 <div className="dashboard-container">
    <div className="stats-cards">
      <div className="card">
        <h3><i className="fas fa-users"></i> Total Users</h3>
        <p>1,250</p>
      </div>
      <div className="card">
        <h3><i className="fas fa-shopping-cart"></i> Total Orders</h3>
        <p>4,380</p>
      </div>
      <div className="card">
        <h3><i className="fas fa-box"></i> Total Products</h3>
        <p>720</p>
      </div>
      <div className="card">
        <h3><i className="fas fa-rupee-sign"></i> Total Sales</h3>
        <p>₹1.2M</p>
      </div>
    </div>

    <div className="section">
      <h2>Monthly Sales Chart</h2>
      <div className="chart-placeholder">[ Sales Chart Placeholder ]</div>
    </div>

    <div className="section">
      <h2>Top Selling Products</h2>
      <div className="bar-chart">
        <div>
          <div className="bar" >580</div>
          <div className="bar-label">👕 Shirt</div>
        </div>
        <div>
          <div className="bar1" >510</div>
          <div className="bar-label">👟 Shoes</div>
        </div>
        <div>
          <div className="bar2" >430</div>
          <div className="bar-label">🎧 Headset</div>
        </div>
      </div>
    </div>

    <div className="section recent-orders">
      <h2>Recent Orders</h2>
      <ul>
        <li>📦 Order #1025 - ₹899 - <strong>Delivered</strong></li>
        <li>📦 Order #1024 - ₹1,250 - <strong>Shipped</strong></li>
        <li>📦 Order #1023 - ₹499 - <strong>Pending</strong></li>
      </ul>
    </div>
  </div>
  );
}

export default Dashboard;
