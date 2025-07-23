import { useEffect, useState } from "react";
import { fetchUsers } from "../apis/handle_api";
import "./Users.css";

function Users() {
  const [users, setUsers] = useState([]);

async function getAllUsers() {
  const users = await fetchUsers();
  setUsers(users);
  console.log(users);
  
}


  useEffect(() => {
    getAllUsers();
  }, []);


  return (
    <div className="users-page">
      <h2>Users</h2>
        <table className="users-table">
          <thead>
            <tr>
              <th>Profile</th>
              <th>Name</th>
              <th>Email</th>
              <th>Joined</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.image}</td>
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
  );
}

export default Users;
