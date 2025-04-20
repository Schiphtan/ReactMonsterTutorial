import React from 'react'
import UserCard from './UserCard'

const App = () => {
  return (
    <div style={{ padding: 20}}>
      <h1>User Profiles</h1>
      <UserCard name="John Doe" job="Software Engineer" />
      <UserCard name="Jane Smith" job="Product Manager" />
      <UserCard name="Alice Johnson" job="UX Designer" />
      <UserCard name="Bob Brown" job="Data Scientist" />
      <UserCard name="Charlie Black" job="DevOps Engineer" />
    </div>
  )
}

export default App