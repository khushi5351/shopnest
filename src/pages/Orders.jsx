import { useEffect, useState } from "react";
import { getOrders } from "../apis/handle_api";
import './Orders.css';

function Orders() {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
const date = new Date();
const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;

  useEffect(() => {
    async function fetchOrders() {
      const res = await getOrders();
      setOrders(res);
    }
    fetchOrders();
  }, []);

  // Pagination logic
  const totalPages = Math.ceil(orders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentOrders = orders.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="orders-page">
      <h2>All Orders</h2>

      <div className="orders-table-container">
        <table border="1px solid gray" className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Products</th>
              <th>Total</th>
              <th>Status</th>
              <th>Date</th>
              {/* <th>Actions</th> */}
            </tr>
          </thead>
          <tbody>
            {/* {currentOrders.map((order, index) => (
              <tr key={index}>
                <td>{order.id}</td>
                <td>{order.customerName}</td>
                <td>{order.name}</td>
                <td>₹{order.total}</td>
                <td>{order.status}</td>
                <td>{order.date}</td> */}
            {/* <td>
                  <button className="view-btn">View</button>
                  <button className="cancel-btn">Cancel</button>
                </td> */}
            {/* </tr>
            ))}
            <tbody> */}
            {currentOrders.map((order, index) => (
              <tr key={index}>
                <td>{order.id}</td>
                <td>{order.customerName || "Guest"}</td>
                <td>
                  <ul>
                    {Array.isArray(order.cart) && order.cart.map((item, idx) => (
                      <li key={idx}>
                        <img src={item.image} alt={item.name} width="40" style={{ marginRight: "5px" }} />
                        {item.name} x {item.quantity}
                      </li>
                    ))}
                  </ul>
                </td>
                <td>
                  ₹
                  {Array.isArray(order.cart)
                    ? order.cart.reduce(
                      (total, item) => total + parseInt(item.price) * item.quantity,
                      0
                    )
                    : 0}
                </td>

                <td>{order.status || "Pending"}</td>
                <td>{order.date || formattedDate}</td>
              </tr>
            ))}
          </tbody>

          {/* </tbody> */}
        </table>
      </div>

      {/* Pagination */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={currentPage === i + 1 ? "active-page" : ""}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Orders;
