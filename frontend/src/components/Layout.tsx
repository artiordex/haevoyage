import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div>
      <header style={{ 
        background: '#282c34', 
        padding: '1rem',
        color: 'white',
        marginBottom: '2rem'
      }}>
        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <h2 style={{ margin: 0 }}>Haevoyage</h2>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
            <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
            <Link to="/dashboard" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</Link>
            <Link to="/challenges" style={{ color: 'white', textDecoration: 'none' }}>Challenges</Link>
          </div>
        </nav>
      </header>
      
      <main>
        <Outlet />
      </main>
      
      <footer style={{ 
        marginTop: '4rem', 
        padding: '1rem', 
        textAlign: 'center',
        borderTop: '1px solid #ccc'
      }}>
        <p>&copy; 2025 Haevoyage. A micro-challenge social recovery platform.</p>
      </footer>
    </div>
  );
};

export default Layout;
