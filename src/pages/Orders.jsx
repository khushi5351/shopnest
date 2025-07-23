import { useEffect, useState } from "react";
import { getOrders } from "../apis/handle_api";
import './Orders.css';

function Orders() {
  const [orders, setOrders] = useState([]);

  async function fetchOrders() {
      const res = await getOrders();
      setOrders(res || []);
    }

    useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="orders-page">
      <h2>All Orders</h2>
      <div className="orders-table">
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Products</th>
              <th>Total</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              orders.map((order, index) => (
                <tr key={index}>
                  <td>{order.id}</td>
                  <td>{order.customerName}</td>
                  <td>{order.name}</td>
                  <td>₹{order.total}</td>
                  <td>{order.status}</td>
                  <td>{order.date}</td>
                  <td>
                    <button className="view-btn">View</button>
                    <button className="cancel-btn">Cancel</button>
                  </td>
                </tr>
              )
            
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Orders;
