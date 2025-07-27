import { useEffect, useState } from "react";
import { fetchUsers } from "../apis/handle_api";
import "./Users.css";

function Users() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 8;

  async function getAllUsers() {
    const users = await fetchUsers();
    setUsers(users);
  }

  useEffect(() => {
    getAllUsers();
  }, []);

  // Pagination Logic
  const totalPages = Math.ceil(users.length / usersPerPage);
  const startIndex = (currentPage - 1) * usersPerPage;
  const currentUsers = users.slice(startIndex, startIndex + usersPerPage);

  return (
    <div className="users-page">
      <h2 style={{ width: "79%" }}>Users</h2>

      <div className="users-table-container">
        <table className="users-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Joined</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((u) => (
              <tr key={u.id}>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.createdAt}</td>
                <td>
                  <button className="view-btn">View</button>
                  <button className="block-btn">Block</button>
                </td>
              </tr>
            ))}
          </tbody>
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

export default Users;
