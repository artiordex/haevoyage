import { Link } from 'react-router-dom';

function Rewards() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Rewards</h1>
      <p>Earn rewards by completing challenges</p>
      <div style={{ marginTop: '2rem' }}>
        <h3>Available Rewards:</h3>
        <ul>
          <li>🏆 Beginner Badge - Complete 5 challenges</li>
          <li>🌟 Rising Star - Complete 25 challenges</li>
          <li>💎 Champion - Complete 100 challenges</li>
          <li>🎯 Consistency Award - Complete challenges 7 days in a row</li>
        </ul>
      </div>
      <nav style={{ marginTop: '2rem' }}>
        <Link to="/">← Back to Home</Link>
      </nav>
    </div>
  );
}

export default Rewards;
