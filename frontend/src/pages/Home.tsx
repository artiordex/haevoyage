import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Welcome to Haevoyage</h1>
      <p>A micro-challenge based social recovery app</p>
      <p>Reconnect with life and community through small actions</p>
      <nav style={{ marginTop: '2rem' }}>
        <Link to="/challenges" style={{ margin: '0 1rem' }}>View Challenges</Link>
        <Link to="/profile" style={{ margin: '0 1rem' }}>Profile</Link>
        <Link to="/rewards" style={{ margin: '0 1rem' }}>Rewards</Link>
      </nav>
    </div>
  );
}

export default Home;
