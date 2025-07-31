import './Dashboard.css';
import axios from 'axios';
import { ORDER_URL, URL, USER_URL } from '../apis/api';
import { useEffect, useState } from 'react';
import {
  Bar,
  Line
} from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [sales, setSales] = useState(0);

  const fetchUsers = async () => {
    try {
      const res = await axios.get(USER_URL);
      setUsers(res.data);

      const res1 = await axios.get(ORDER_URL);
      setOrders(res1.data);

      const res2 = await axios.get(URL);
      setProducts(res2.data);

      const totalSales = res1.data.reduce((acc, order) => acc + order.total, 0);
      setSales(totalSales);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Dummy sales chart data
  const salesChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales in ₹',
        data: [5000, 7000, 6000, 9000, 11000, 9500],
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        tension: 0.4,
        filler: true,
      },
    ],
  };

  // Dummy top products bar chart
  const topProductsData = {
    labels: ['Shirt', 'Shoes', 'Headset'],
    datasets: [
      {
        label: 'Units Sold',
        data: [580, 510, 430],
        backgroundColor: ['#3f51b5', '#009688', '#f44336'],
      },
    ],
  };

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
        <Line data={salesChartData} />
      </div>

      <div className="section">
        <h2>Top Selling Products</h2>
        <Bar data={topProductsData} />
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
