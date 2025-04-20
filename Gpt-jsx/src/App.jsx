import React from 'react'
import UserCard from './UserCard'
import ScoreCard from './ScoreCard'
const App = () => {
  return (
    <div style={{ padding: 20 }}>
      <h1>User Profiles</h1>

      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
        <UserCard name="Schiphtan" job="Software Engineer" />
        <UserCard name="Jane" job="Doctor" />
        <UserCard name="Kevin" job="Designer" />
      </div>

      <hr style={{ margin: '40px 0' }} />

      <h1>Game Scoreboard</h1>

      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
        <ScoreCard playerName="Schiphtan" initialScore={50} />
        <ScoreCard playerName="Alice" initialScore={30} />
        <ScoreCard playerName="Bob" initialScore={0} />
      </div>
    </div>
  )
}

export default App