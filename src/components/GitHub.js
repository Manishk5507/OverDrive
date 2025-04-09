import React, { useState } from 'react';

const GitHub = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);

  const fetchGitHub = async () => {
    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();
    setUser(data);
  };

  return (
    <div className=" card mb-4 p-3">
      <h4>GitHub Profile</h4>
      <input className="form-control mb-2" placeholder="Enter GitHub username" value={username} onChange={e => setUsername(e.target.value)} />
      <button className="btn btn-primary" onClick={fetchGitHub}>Search</button>
      {user && (
        <div className="mt-2">
          <img src={user.avatar_url} width="100" alt="avatar" />
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Repos:</strong> {user.public_repos}</p>
          <p><a href={user.html_url} target="_blank" rel="noreferrer">GitHub Profile</a></p>
        </div>
      )}
    </div>
  );
};

export default GitHub;
