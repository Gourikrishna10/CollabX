import React from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';
import './Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();
  const user = authService.getCurrentUser();

  const handleLogout = () => {
    authService.logout();
    navigate('/login');
  };

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Welcome to CollabX</h1>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>

      <div className="dashboard-content">
        <div className="welcome-card">
          <h2>Hello, {user.name}! 👋</h2>
          <p>Email: {user.email}</p>
          <p className="status">✅ Successfully logged in!</p>
        </div>

        <div className="info-card">
          <h3>What's Next?</h3>
          <ul>
            <li>Module 1 (Authentication) - ✅ Complete!</li>
            <li>Module 2 (Profile Management) - Coming next</li>
            <li>Module 3 (Team Creation) - Coming soon</li>
            <li>Module 4 (Browse Teams) - Coming soon</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;