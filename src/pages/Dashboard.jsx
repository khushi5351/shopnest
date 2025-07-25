import './Dashboard.css';
import axios from 'axios';
import { ORDER_URL, URL, USER_URL } from '../apis/api';
import { useEffect, useState } from 'react';


function Dashboard() {
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [sales, setSales] = useState([]);
  const fetchUsers = async () => {
    try {
      const res = await axios.get(USER_URL);
      setUsers(res.data);
      const res1 = await axios.get(ORDER_URL);
      setOrders(res1.data);
      const res2 = await axios.get(URL);
      setProducts(res2.data);
      let total = 0;

      for (let i = 0; i < res1.data.length; i++) {
        total += res1.data[i].total
        console.log(total);
      }
      setSales(total)
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };





  useEffect(() => {
    fetchUsers();

  }, []);

  return (
    <div className="dashboard-container">
      <div className="stats-cards">
        <div className="card">
          <h3><i className="fas fa-users"></i> Total Users</h3>
          <p>{users.length}</p>
        </div>
        <div className="card">
          <h3><i className="fas fa-shopping-cart"></i> Total Orders</h3>
          <p>{orders.length}</p>
        </div>
        <div className="card">
          <h3><i className="fas fa-box"></i> Total Products</h3>
          <p>{products.length}</p>
        </div>
        <div className="card">
          <h3><i className="fas fa-rupee-sign"></i> Total Sales</h3>
          <p>₹{sales}</p>
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
