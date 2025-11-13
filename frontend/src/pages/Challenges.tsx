import { Link } from 'react-router-dom';

function Challenges() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Challenges</h1>
      <p>Discover micro-challenges to help you reconnect with life</p>
      <div style={{ marginTop: '2rem' }}>
        <h3>Available Challenges:</h3>
        <ul>
          <li>Take a 10-minute walk outside</li>
          <li>Call a friend or family member</li>
          <li>Try a new recipe</li>
          <li>Practice gratitude - write 3 things you're thankful for</li>
        </ul>
      </div>
      <nav style={{ marginTop: '2rem' }}>
        <Link to="/">← Back to Home</Link>
      </nav>
    </div>
  );
}

export default Challenges;
