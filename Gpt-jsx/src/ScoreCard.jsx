// ScoreCard.jsx
import React, { useState } from 'react';

function ScoreCard({ playerName, initialScore }) {
  const [score, setScore] = useState(initialScore);

  const increaseScore = () => {
    setScore(score + 10);
  };

  return (
    <div style={{
      border: '1px solid #4caf50',
      borderRadius: 10,
      padding: 20,
      margin: 10,
      maxWidth: 300,
      backgroundColor: '#e8f5e9'
    }}>
      <h2>{playerName}</h2>
      <p>Score: {score}</p>
      <button onClick={increaseScore}>➕ Add 10 Points</button>
    </div>
  );
}

export default ScoreCard;
