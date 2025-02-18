// admin/src/components/AdminHeader.js
import React from 'react';
import { Link } from 'react-router-dom';

function AdminHeader() {
  return (
    <header>
      <div className="header-container">
        <h1>Admin Panel - TECH-LAB97</h1>
        <nav>
          <ul>
            <li><Link to="/admin/dashboard">Dashboard</Link></li>
            <li><Link to="/admin/login">Logout</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default AdminHeader;
