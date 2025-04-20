import React from 'react'
import { useState } from 'react';

const UserCard = ({name, job}) => {

  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  }


  return (
    <div style={{
      border: '1px solid #4caf50',
      borderRadius: 10,
      padding: 20,
      margin: 10,
      maxWidth: 300,
      backgroundColor: '#e8f5e9'
    }}>
      
      <h2>{name}</h2>
      <p>{job}</p>
      <button onClick={handleLike}>👍 Like</button>
      <p>Likes: {likes}</p>
      </div>
  )
}

export default UserCard;

