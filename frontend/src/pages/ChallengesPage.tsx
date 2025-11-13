import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Challenge {
  id: number;
  title: string;
  description: string;
}

const ChallengesPage: React.FC = () => {
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch challenges from API
    fetch('http://localhost:8080/api/challenges')
      .then(response => response.json())
      .then(data => {
        setChallenges(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load challenges. Make sure the backend server is running.');
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Challenges</h1>
      
      {loading && <p>Loading challenges...</p>}
      
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      {!loading && !error && challenges.length === 0 && (
        <p>No challenges available yet.</p>
      )}
      
      {!loading && challenges.length > 0 && (
        <div>
          {challenges.map(challenge => (
            <div key={challenge.id} style={{ 
              border: '1px solid #ccc', 
              padding: '1rem', 
              marginBottom: '1rem',
              borderRadius: '4px'
            }}>
              <h3>{challenge.title}</h3>
              <p>{challenge.description}</p>
            </div>
          ))}
        </div>
      )}

      <Link to="/" style={{ display: 'inline-block', marginTop: '2rem' }}>Back to Home</Link>
    </div>
  );
};

export default ChallengesPage;
