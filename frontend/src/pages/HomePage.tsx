import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome to Haevoyage</h1>
      <p>
        Haevoyage is a micro-challenge social recovery platform that helps young adults 
        reconnect with life and community through small actions.
      </p>
      <nav style={{ marginTop: '2rem' }}>
        <Link to="/about" style={{ marginRight: '1rem' }}>About</Link>
        <Link to="/dashboard" style={{ marginRight: '1rem' }}>Dashboard</Link>
        <Link to="/challenges">Challenges</Link>
      </nav>
    </div>
  );
};

export default HomePage;
