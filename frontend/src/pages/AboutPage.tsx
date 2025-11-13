import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>About Haevoyage</h1>
      <p>
        This platform provides micro-challenges designed to help young adults 
        build confidence and reconnect with their communities through achievable, 
        incremental steps.
      </p>
      <h2>Features</h2>
      <ul>
        <li>Daily micro-challenges</li>
        <li>Progress tracking</li>
        <li>Community support</li>
        <li>Personalized goals</li>
      </ul>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default AboutPage;
