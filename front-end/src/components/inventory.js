//
// File: front-end/src/components/inventory.js
//
import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./inventory.css";

const Inventory = () => {
  const [users, setUsers] = useState([]); // Initialize users as an empty array ...
  const [loading, setLoading] = useState(true); // Initialize loading state to true ...

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/auth/inventory", 
        {
          withCredentials: true, // Include credentials for CORS requests (cookies, etc.)
        }
    );
      const myData = response.data; //response.data is already parsed as JSON by axios;
      setUsers(myData);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };
  // Fetch users when the component mounts ...
  // useEffect will run once when the component is first rendered ...
  useEffect(() => {
    fetchUsers();
  }, []);

  // Render the component ...
  return (
    <div className="inventory-container">
      <h2 className="inventory-header">User Inventory</h2>
      <button className="refresh-button" onClick={fetchUsers}>Refresh</button>
      {loading ? (
        <p>Loading users...</p>
      ) : users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => ( // Map through the users array to create table rows ...
              <tr key={user._id || user.id}>
                <td>{user._id || user.id}</td>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Inventory;
