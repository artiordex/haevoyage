import { Link } from 'react-router-dom';

function Profile() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Profile</h1>
      <div style={{ marginTop: '2rem' }}>
        <h3>User Information</h3>
        <p><strong>Name:</strong> Sample User</p>
        <p><strong>Member Since:</strong> 2025</p>
        <p><strong>Challenges Completed:</strong> 0</p>
        <p><strong>Points Earned:</strong> 0</p>
      </div>
      <nav style={{ marginTop: '2rem' }}>
        <Link to="/">← Back to Home</Link>
      </nav>
    </div>
  );
}

export default Profile;
