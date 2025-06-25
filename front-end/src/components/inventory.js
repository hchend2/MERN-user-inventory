import React from "react";
import "./inventory.css";

const Inventory = ({ users = [], refreshUsers = () => {} }) => {
  return (
    <div className="inventory-container">
      <h2 className="inventory-header">User Inventory</h2>
      <button className="refresh-button" onClick={refreshUsers}>
        Refresh
      </button>
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
              {/* <th>Actions</th> */}
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id || user._id}>
                <td>{user.id || user._id}</td>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
};

export default Inventory;
