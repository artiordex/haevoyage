import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage: React.FC = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Dashboard</h1>
      <p>Your personal progress dashboard will appear here.</p>
      
      <div style={{ marginTop: '2rem' }}>
        <h2>Your Stats</h2>
        <p>Challenges completed: 0</p>
        <p>Current streak: 0 days</p>
      </div>

      <Link to="/" style={{ display: 'inline-block', marginTop: '2rem' }}>Back to Home</Link>
    </div>
  );
};

export default DashboardPage;
